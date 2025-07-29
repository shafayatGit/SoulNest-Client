SoulNest - Matrimony Platform (MERN Stack)

Welcome to SoulNest, your ultimate destination to find a perfect life partner. SoulNest is a full-featured MERN Stack (MongoDB, Express.js, React, Node.js) application designed to connect people looking for meaningful relationships in a secure and beautiful digital environment.

🌐 Live Website

Live Site URL: https://soulnest.example.comAdmin Email: admin@soulnest.comAdmin Password: 123456

🚀 Key Features

🔐 Private Routes – Protected pages using JWT. Pages stay accessible on reload without redirecting to login.

📱 Fully Responsive – Works beautifully on desktop, tablet, and mobile.

👤 Biodata Profiles – Users can create/edit biodata with personal and partner preferences.

🎉 Premium Membership – Users can request premium membership and view hidden contact info after approval.

💳 Stripe Checkout Integration – Pay $5 to request contact details of a biodata.

📊 Admin Dashboard with Pie Chart – View biodata stats and revenue in a clear, visual format.

📁 Filter & Pagination – Filter biodatas by age, division, type and paginate results.

✨ Success Stories – Got married? Submit your story and get featured on the homepage.

📥 Contact Request Workflow – Normal users request contact info, admin approves, and then they gain access.

📬 SweetAlerts & Toast Notifications – User feedback for all actions (CRUD, login, signup, payments).

📁 Project Structure

client/
  - React App
  - Routes
  - Pages: Home, Biodatas, Dashboard, Auth
  - Components: Filters, Cards, Profile, Tables
  - Context: Auth, Axios Secure, TanStack Query

server/
  - Express Server
  - Routes: Auth, Biodatas, Users, Admin
  - Middleware: JWT Auth, Error Handler
  - DB: MongoDB connection, Schemas

🏗️ Major Functionalities

🏠 Homepage

Logo + Nav Links (Home, Biodatas, About Us, Contact Us, Login/Dashboard)

Banner/Slider

Premium Member Cards (Sortable by Age)

How It Works Section

Success Counter (Total biodatas, Male, Female, Married)

Success Story Section

Footer

📄 Biodatas Page

Filters: Age range, Gender, Division

List: 20 Biodatas with profile data

View Profile button redirects to protected details page

Pagination (Client-side or Server-side)

🔍 Biodata Details Page (Private Route)

Full profile info

Premium users see contact info

"Add to Favourite" & "Request Contact Info" button

Similar biodatas shown at bottom

💳 Checkout Page (Private Route)

BiodataId (readonly)

Self Email (readonly)

Stripe payment field

On success: sends request to Admin for approval

🧑‍💼 Normal User Dashboard

Edit Biodata

View Biodata

My Contact Requests

Favourite Biodatas

Logout

👮 Admin Dashboard

Pie Chart: Biodata + Revenue stats

Manage Users: Make Admin, Make Premium

Approved Premium: Approve biodata to premium

Approved Contact Requests: Approve contact requests

View All Success Stories with modal view

🥂 Got Married Page (Challenge Task)

Submit couple biodata ids

Upload images and review text

Added to homepage success stories

📦 Tech Stack

Frontend: React, React Router, TanStack Query, Stripe.js

Backend: Express.js, Node.js

Database: MongoDB

Auth: Firebase + JWT

Styling: Tailwind CSS (❌ No DaisyUI used)

Alerts: SweetAlert, Toast

Charts: Recharts (Pie Chart for Admin)

🔐 Environment Variables

Firebase Config (hidden in .env)

MongoDB URI (hidden in .env)

Stripe Secret Key


📏 Important Rules Followed

✅ No Lorem Ipsum text used

✅ Data persistence on reload

✅ Mobile/tablet/desktop responsiveness

✅ Firebase/MongoDB keys securely hidden

✅ SweetAlerts used (not browser alerts)

✅ TanStack Query used for all GET requests

✅ No use of Daisy UI

🤝 Credits

Developed by [Md.Shafayat Hossain] as part of a MERN stack challenge. Built with ❤️ to help people find their soulmates.


🧪 Future Improvements

Admin analytics (marriage trends)

Email verification and reset password

AI-based partner suggestions

React Native mobile app version

Thank you for visiting SoulNest!