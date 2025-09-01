🏨 Hotel Booking Website

A full-stack Hotel Booking Web Application built with Express.js, MongoDB, and EJS.
Users can browse hotels, view details, and book rooms easily.

🚀 Features

User-friendly hotel listings with images and details

Create, Read, Update, Delete (CRUD) hotels

Booking functionality (reserve rooms)

MongoDB integration for storing hotel data

EJS templates for dynamic rendering

Static files (CSS/JS/images) served from public/

Schema validation using Mongoose

🛠️ Tech Stack

Backend: Express.js, Node.js

Database: MongoDB + Mongoose

Frontend: EJS, HTML, CSS

Other Tools: Nodemon (development), Path module

Installation
1️⃣ Clone this repo
git clone (https://github.com/iamaniket-python/Hotel-Booking-Express.js-.git)
cd hotel-booking

2️⃣ Install dependencies
npm install

3️⃣ Start MongoDB

Make sure MongoDB is running locally or connect to MongoDB Atlas.

4️⃣ Configure Database

Inside index.js (or app.js), update your MongoDB connection string:

mongoose.connect("mongodb://127.0.0.1:27017/hotelBooking")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

5️⃣ Run the app
nodemon index.js


Now open 👉 http://localhost:8080

📂 Project Structure
hotel-booking/
│── models/           # Mongoose Schemas (Hotel, Booking, User)
│── public/           # Static assets (CSS, JS, Images)
│── views/            # EJS templates
│── routes/           # Express routes
│── index.js          # Main server file
│── package.json
│── README.md

## 📜 License
This project is licensed under the MIT License.  

---

👨‍💻 This project is made by **Aniket Shrivastava**


