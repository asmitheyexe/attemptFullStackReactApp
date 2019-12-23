const passport = require("passport");

// export all routes as 1 function
module.exports = app => {
  // authentication routes
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
