const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

/*
Listing Schema
Model: Listing
Fields:
- title: String (required)
- description: String
- image: { url: String, filename: String }
- price: Number
- location: String
- country: String
- reviews: Array of Review references
- owner: User reference
- geometry: GeoJSON Point (for maps)
- category: String (for filtering listings)
*/

const listingSchema = new Schema({
  title: {
    type: String,
    required: true, // Fixed typo: "require" -> "required"
  },

  description: String,

  image: {
    url: String,
    filename: String,
  },

  price: Number,

  location: String,

  country: String,

  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],

  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },

  category: {
    type: String,
    enum: [
      "Trending",
      "Rooms",
      "Iconic Cities",
      "Mountains",
      "Castles",
      "Amazing Pools",
      "Camping",
      "Farms",
      "Arctic",
      "Dome",
      "Boat",

    ],
    required: true,
  },
});

// Middleware: delete associated reviews when a listing is deleted
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
