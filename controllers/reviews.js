const Listing = require("../models/listing");
const Review = require("../models/review");

/**
 * ==========================
 * Create a new review for a listing
 * POST /listings/:id/reviews
 * ==========================
 */
module.exports.createReview = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find the listing by ID
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", "Listing not found!");
      return res.redirect("/listings");
    }

    // Create a new review from form data
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id; // Set the current user as author

    // Add review reference to the listing
    listing.reviews.push(newReview);

    // Save both review and listing
    await newReview.save();
    await listing.save();

    req.flash("success", "New review created!");
    res.redirect(`/listings/${listing._id}`);
  } catch (err) {
    next(err); // Pass error to Express error handler
  }
};

/**
 * ==========================
 * Delete a review
 * DELETE /listings/:id/reviews/:reviewId
 * ==========================
 */
module.exports.destroyReview = async (req, res, next) => {
  try {
    const { id, reviewId } = req.params;

    // Remove the review reference from the listing
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });

    // Delete the review document
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted successfully!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    next(err);
  }
};
