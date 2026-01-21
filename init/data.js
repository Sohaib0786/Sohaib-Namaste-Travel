const mongoose = require("mongoose");

const sampleListings = [
  {
    title: "The Taj Hotel",
    description: "Very good experience and have good hospitality",
    image: {
      url: "https://res.cloudinary.com/deldbdbfd/image/upload/v1768974789/wanderlust_DEV/txxmiznsp1dvyfyeea6f.avif",
      filename: "wanderlust_DEV/txxmiznsp1dvyfyeea6f"
    },
    price: 13500,
    location: "Goa",
    country: "India",
    reviews: [],
    geometry: { type: "Point", coordinates: [74.054111, 15.325556] },
    category: "Rooms",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
      filename: "listingimage"
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-118.7798, 34.0259] },
    category: "Trending",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "listingimage"
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-74.006, 40.7128] },
    category: "Iconic Cities",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin.",
    image: {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
      filename: "listingimage"
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-106.8175, 39.1911] },
    category: "Mountains",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa.",
    image: {
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      filename: "listingimage"
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    reviews: [],
    geometry: { type: "Point", coordinates: [11.2558, 43.7696] },
    category: "Castles",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views.",
    image: {
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
      filename: "listingimage"
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    reviews: [],
    geometry: { type: "Point", coordinates: [-118.2437, 34.0522] },
    category: "Castles",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Experience the thrill of the wild in a comfortable safari lodge.",
    image: {
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      filename: "listingimage"
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    reviews: [],
    geometry: { type: "Point", coordinates: [34.6857, -2.3333] },
    category: "Camping",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Private Island Retreat",
    description: "Have an entire island to yourself for an unforgettable experience.",
    image: {
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
      filename: "listingimage"
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    reviews: [],
    geometry: { type: "Point", coordinates: [178.0650, -17.7134] },
    category: "Amazing Pools",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Desert Oasis in Dubai",
    description: "Luxury in the middle of the desert with a private pool.",
    image: {
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
      filename: "listingimage"
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    reviews: [],
    geometry: { type: "Point", coordinates: [55.2708, 25.2048] },
    category: "Trending",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description: "Hit the slopes right from your doorstep.",
    image: {
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
      filename: "listingimage"
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    reviews: [],
    geometry: { type: "Point", coordinates: [7.2273, 46.0966] },
    category: "Dome",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description: "Stay among the treetops in an eco-friendly treehouse.",
    image: {
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
      filename: "listingimage"
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    reviews: [],
    geometry: { type: "Point", coordinates: [-84.0907, 9.9281] },
    category: "Camping",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Luxury Yacht Stay",
    description: "Sail and relax on a luxury yacht.",
    image: {
      url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
      filename: "listingimage"
    },
    price: 8000,
    location: "Monaco",
    country: "Monaco",
    reviews: [],
    geometry: { type: "Point", coordinates: [7.4246, 43.7384] },
    category: "Amazing Pools",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Countryside Farmhouse",
    description: "Enjoy tranquility in this rustic farmhouse.",
    image: {
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
      filename: "listingimage"
    },
    price: 1800,
    location: "Provence",
    country: "France",
    reviews: [],
    geometry: { type: "Point", coordinates: [5.0415, 43.9493] },
    category: "Trending",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  },
  {
    title: "Urban Studio Apartment",
    description: "Perfect for a short city stay.",
    image: {
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      filename: "listingimage"
    },
    price: 900,
    location: "Berlin",
    country: "Germany",
    reviews: [],
    geometry: { type: "Point", coordinates: [13.405, 52.52] },
    category: "Iconic Cities",
    owner: new mongoose.Types.ObjectId("697057ae9de814f931e9ae39"),
    __v: 1
  }
];

module.exports = { data: sampleListings };
