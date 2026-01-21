const express = require("express");
const router = express.Router();
const multer = require("multer");

const Listing = require("../models/listing");
const wrapAsync = require("../utils/wrapAsync");
const listingController = require("../controllers/listings");
const { isLoggedIn, isOwner, validateListing } = require("../middleware");
const { storage } = require("../cloudConfig");

// Multer setup for image uploads
const upload = multer({ storage });

/**
 * ==========================
 * Route: /listings
 * Methods: GET, POST
 * Description: List all listings or create a new listing
 * ==========================
 */
router
  .route("/")
  // Show all listings
  .get(wrapAsync(listingController.index))
  // Create a new listing
  .post(
    isLoggedIn,
    upload.single("listing[image]"), // handle image upload
    validateListing,                // validate form data
    wrapAsync(listingController.createListing)
  );

/**
 * ==========================
 * Route: /listings/new
 * Method: GET
 * Description: Render form to create a new listing
 * ==========================
 */
router.get("/new", isLoggedIn, listingController.renderNewForm);

/**
 * ==========================
 * Route: /listings/:id
 * Methods: GET, PUT, DELETE
 * Description: Show, update, or delete a specific listing
 * ==========================
 */
router
  .route("/:id")
  // Show a single listing
  .get(wrapAsync(listingController.showListing))
  // Update a listing
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  // Delete a listing
  .delete(
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );

/**
 * ==========================
 * Route: /listings/:id/edit
 * Method: GET
 * Description: Render form to edit a specific listing
 * ==========================
 */
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
