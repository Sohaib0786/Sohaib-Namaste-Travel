const mongoose = require("mongoose");
const initData = require("./data.js"); // your sampleListings.js
const Listing = require("../models/listing.js");

const MONGO_URL =
    "mongodb+srv://shoaibqu7714_db_user:G77qdO2xAHKkMGU6@cluster0.mvwlv4t.mongodb.net/Namaste-db";

// Connect to MongoDB
mongoose
    .connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.log("❌ MongoDB connection error:", err));

// Seed function
const initDB = async () => {
    try {
        // 1. Clear existing listings
        await Listing.deleteMany({});
        console.log("🗑️ Old listings removed!");

        // 2. Add owner and default geometry to each listing
        const listingsToInsert = initData.data.map((obj) => ({
            ...obj,
            owner: "6663e437e7dd4ebbc43a02d5",
            geometry: {
                type: "Point",
                coordinates: [0, 0], // Default coordinates; you can replace with actual lon/lat
            },
        }));

        // 3. Insert all listings
        await Listing.insertMany(listingsToInsert);
        console.log("✅ Sample listings added!");
    } catch (err) {
        console.error("❌ Error seeding database:", err);
    } finally {
        // 4. Close DB connection
        mongoose.connection.close();
        console.log("🔒 MongoDB connection closed");
    }
};

initDB();
