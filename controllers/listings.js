const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

/* =========================
   INDEX – SHOW ALL LISTINGS
========================= */
module.exports.index = async (req, res) => {
  try {
    const { category, search } = req.query;
    const query = {};

    if (category && category !== "all") query.category = category;

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
      ];
    }

    const allListings = await Listing.find(query).lean();

    res.render("listings/index", {
      allListings,
      selectedCategory: category || "all",
      searchQuery: search || "",
    });
  } catch (err) {
    console.error(err);
    req.flash("error", "Unable to fetch listings");
    res.redirect("/");
  }
};

/* =========================
   NEW LISTING FORM
========================= */
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new");
};

/* =========================
   SHOW SINGLE LISTING
========================= */
module.exports.showListing = async (req, res) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findById(id)
      .populate({ path: "reviews", populate: { path: "author" } })
      .populate("owner")
      .lean(); // 🔥 VERY IMPORTANT

    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    // Safety: ensure geometry exists
    if (!listing.geometry) {
      listing.geometry = null;
    }

    res.render("listings/show", {
      listing,
      mapToken, // ✅ pass token from backend
    });
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("/listings");
  }
};

/* =========================
   CREATE LISTING
========================= */
module.exports.createListing = async (req, res) => {
  try {
    if (!req.body.listing.category) {
      req.flash("error", "Please select a category.");
      return res.redirect("/listings/new");
    }

    const geoResponse = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();

    if (!geoResponse.body.features.length) {
      req.flash("error", "Invalid location");
      return res.redirect("/listings/new");
    }

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    if (req.file) {
      newListing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
    }

    newListing.geometry = geoResponse.body.features[0].geometry;

    await newListing.save();

    req.flash("success", "Listing created successfully!");
    res.redirect(`/listings/${newListing._id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to create listing");
    res.redirect("/listings/new");
  }
};

/* =========================
   EDIT FORM
========================= */
module.exports.renderEditForm = async (req, res) => {
  try {
    const { id } = req.params;
    const listing = await Listing.findById(id).lean();

    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    const originalImageUrl = listing.image?.url.replace(
      "/upload",
      "/upload/w_250"
    );

    res.render("listings/edit", {
      listing,
      originalImageUrl,
    });
  } catch (err) {
    console.error(err);
    req.flash("error", "Unable to load edit form");
    res.redirect("/listings");
  }
};

/* =========================
   UPDATE LISTING
========================= */
module.exports.updateListing = async (req, res) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findByIdAndUpdate(
      id,
      { ...req.body.listing },
      { new: true }
    );

    if (req.file) {
      listing.image = {
        url: req.file.path,
        filename: req.file.filename,
      };
      await listing.save();
    }

    req.flash("success", "Listing updated!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to update listing");
    res.redirect("/listings");
  }
};

/* =========================
   DELETE LISTING
========================= */
module.exports.destroyListing = async (req, res) => {
  try {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing deleted!");
    res.redirect("/listings");
  } catch (err) {
    console.error(err);
    req.flash("error", "Failed to delete listing");
    res.redirect("/listings");
  }
};
