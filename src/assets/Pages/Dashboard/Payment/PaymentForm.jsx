import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthContext/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const axios = useAxios()
  const { user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const { isPending, data: biodataInfo = {} } = useQuery({
    queryKey: ["biodatas", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/biodatas/${id}`);
      return res.data;
    },
  });

  if (isPending) {
    return (
      <div className="w-full min-h-dvh flex justify-center items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);

      const amountInCents = 500;
      const res = await axiosSecure.post("/create-payment-intent", {
        amountInCents,
        id,
      });
      const clientSecret = res.data.clientSecret;

      // step-3: confirm payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: user.displayName,
            email: user.email,
          },
        },
      });
      if (result.error) {
        setError(result.error.message);
      } else {
        setError("");
        if (result.paymentIntent.status === "succeeded") {
          console.log("Payment succeeded!",result.paymentIntent.id);
          const transactionId = result.paymentIntent.id;
                    // step-4 mark parcel paid also create payment history
                    const paymentData = {
                        id,
                        email: user.email,
                        amountInCents,
                        transactionId: transactionId,
                        paymentMethod: result.paymentIntent.payment_method_types
                    }
                    const paymentRes = await axiosSecure.post('/payments', paymentData);
                    if (paymentRes.data.insertedId) {

                        // ✅ Show SweetAlert with transaction ID
                        await Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful!',
                            html: `<strong>Transaction ID:</strong> <code>${transactionId}</code>`,
                            confirmButtonText: 'Go to My Biodata',
                        });}
                        navigate("/allBiodata")
        }
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center">
        Request Contact Information
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">Biodata ID</label>
          <input
            type="text"
            readOnly
            value={id}
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="font-medium">Your Email</label>
          <input
            type="email"
            readOnly
            value={user?.email}
            className="w-full border px-3 py-2 rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="font-medium">Card Info</label>
          <CardElement className="border p-3 rounded" />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="bg-blue-600 hover:bg-blue-700 text-black font-semibold w-full py-2 rounded"
        >
          {/* {loading ? "Processing..." : "Pay & Request"} */}
          Pay 5$
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
