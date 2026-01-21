# 🌏 Namaste Travel

Namaste Travel is a full‑stack travel experience sharing platform where users can post and explore real experiences from recently visited places. The goal is to help travelers make better vacation decisions based on authentic reviews, photos, and locations shared by other users.

---

## 🚀 Features

* 🧳 **Share Travel Experiences** – Users can add places they’ve visited with descriptions, images, and pricing details
* 🖼️ **Image Uploads with Cloudinary** – Secure and optimized image hosting
* 🗺️ **Interactive Maps (Mapbox)** – Visualize locations on a live map
* 📝 **Reviews & Ratings** – Users can review and rate places
* 🔐 **Authentication & Authorization** – Secure login/signup system
* 🗑️ **CRUD Operations** – Create, read, update, and delete listings & reviews
* 📱 **Responsive UI** – Built with Bootstrap for all screen sizes

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose ODM)

### Third‑Party Services

* **Cloudinary** – Image storage & optimization
* **Mapbox** – Interactive maps & geolocation

---

## 📂 Project Structure

```
Namaste-Travel/
│
├── public/              # CSS, JS, assets
├── views/               # EJS templates
├── routes/              # Express routes
├── controllers/         # Route logic
├── models/              # Mongoose schemas
├── utils/               # Helper functions
├── middleware/          # Auth & validation middleware
├── app.js               # Express app setup
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/namaste-travel.git
cd namaste-travel
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
SESSION_SECRET=your_session_secret
```

### 4️⃣ Run the Application

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 📸 Screenshots

*Add screenshots of the home page, listing page, map view, and review section here.*

---

## 🧠 Use Case

Namaste Travel helps users:

* Discover new travel destinations
* Trust real user experiences instead of ads
* Plan vacations efficiently
* Share memories with the community

---

## 🔮 Future Enhancements

* User profiles & bookmarks
* Search & filter by location, price, rating
* Like & comment system
* Admin dashboard
* AI‑based travel recommendations

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/new-feature`)
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 👨‍💻 Author

**Mohd Sohaib**
MERN Stack Developer

* GitHub: [https://github.com/your-username](https://github.com/Sohaib0786)


---

## 📜 License

This project is licensed under the MIT License.

---

⭐ If you like this project, don’t forget to give it a star on GitHub!
