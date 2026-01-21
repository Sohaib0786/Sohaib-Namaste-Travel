const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

/**
 * Middleware: check if user is logged in
 */
module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl; // save url to redirect after login
        req.flash("error", "You must be logged in to perform this action!");
        return res.redirect("/login");
    }
    next();
};

/**
 * Middleware: save redirect URL from session to locals
 */
module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

/**
 * Middleware: check if the current user is the owner of the listing
 */
module.exports.isOwner = async (req, res, next) => {
    try {
        const { id } = req.params;
        const listing = await Listing.findById(id);

        if (!listing) {
            req.flash("error", "Listing not found!");
            return res.redirect("/listings");
        }

        // Use req.user (from Passport) instead of res.locals.currUser
        if (!listing.owner.equals(req.user._id)) {
            req.flash("error", "You are not the owner of this listing!");
            return res.redirect(`/listings/${id}`);
        }

        next();
    } catch (err) {
        next(err);
    }
};

/**
 * Middleware: validate listing input using Joi
 */
module.exports.validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    next();
};

/**
 * Middleware: validate review input using Joi
 */
module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    next();
};

/**
 * Middleware: check if the current user is the author of the review
 */
module.exports.isReviewAuthor = async (req, res, next) => {
    try {
        const { id, reviewId } = req.params;
        const review = await Review.findById(reviewId);

        if (!review) {
            req.flash("error", "Review not found!");
            return res.redirect(`/listings/${id}`);
        }

        // Use req.user._id
        if (!review.author.equals(req.user._id)) {
            req.flash("error", "You are not the author of this review!");
            return res.redirect(`/listings/${id}`);
        }

        next();
    } catch (err) {
        next(err);
    }
};
