const User = require("../models/user");

/**
 * ==========================
 * Render Signup Form
 * GET /signup
 * ==========================
 */
module.exports.renderSignupForm = (req, res) => {
  res.render("users/signup.ejs");
};

/**
 * ==========================
 * Handle User Signup
 * POST /signup
 * ==========================
 */
module.exports.signup = async (req, res, next) => {
  try {
    // Extract username, email, and password from the request body
    const { username, email, password } = req.body;

    // Create a new user instance (without password)
    const newUser = new User({ username, email });

    // Register the user using passport-local-mongoose
    const registeredUser = await User.register(newUser, password);

    // Automatically log in the newly registered user
    req.login(registeredUser, (err) => {
      if (err) return next(err); // Pass error to next middleware

      // Success flash message
      req.flash("success", "Welcome to Namaste travel!");

      // Redirect to listings page
      res.redirect("/listings");
    });
  } catch (e) {
    // If registration fails, show flash message and redirect back to signup form
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

/**
 * ==========================
 * Render Login Form
 * GET /login
 * ==========================
 */
module.exports.renderLoginForm = (req, res) => {
  res.render("users/login.ejs");
};

/**
 * ==========================
 * Handle User Login
 * POST /login
 * ==========================
 */
module.exports.login = async (req, res, next) => {
  try {
    // Success flash message
    req.flash("success", "Welcome back to Namaste Travel!");

    // Redirect to previous page if available, otherwise to listings
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
  } catch (e) {
    next(e);
  }
};

/**
 * ==========================
 * Handle User Logout
 * GET /logout
 * ==========================
 */
module.exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);

    // Success flash message
    req.flash("success", "You have successfully logged out!");

    // Redirect to listings page
    res.redirect("/listings");
  });
};
