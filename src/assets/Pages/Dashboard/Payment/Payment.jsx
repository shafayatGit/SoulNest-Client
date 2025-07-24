import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe("pk_test_51Rkn2dJYTEsk1evvFw0OvgQj6Gbp4kY2Pe69Cu3AfD6Z67K82vI1vj0g4KsTXxtWO4ZgsmuhnoS2ounO3x2RhApk006k7OvBSX");
const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm></PaymentForm>
    </Elements>
  );
};

export default Payment;
