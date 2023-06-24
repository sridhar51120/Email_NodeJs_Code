const keys = require("./config/keys");
const passport = require("passport");
const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github"),
  function (req, res) {
    res.redirect("/");
  }
);

passport.use(
  new GitHubStrategy(
    {
      clientID: keys.GITHUB_CLIENT_ID,
      clientSecret: keys.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      console.log("Access Token:", accessToken);
      console.log("Profile:", profile);
    }
  )
);
