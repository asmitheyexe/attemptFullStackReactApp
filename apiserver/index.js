const express = require("express"); // Server
const mongoose = require("mongoose"); // ORM
const keys = require("./config/keys");
require("./Models/User");
require("./service/passport"); // nothin is exported in passport we can just require it to run it
mongoose.connect(keys.mongoURI); // connect ORM to MongoDB server
// init server
const app = express();

require("./routes/authRoutes")(app); // end points in the authRoutes file
// grab dynamic port first
const PORT = process.env.PORT;
app.listen(PORT || 5000);
//http://localhost:5000/auth/google/callback
