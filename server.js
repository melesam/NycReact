const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const port = process.env.PORT || 4000;

mongoose.Promise = require("bluebird");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/NycReact",
    (err) => err ?
        console.log("could not connect to database") :
        console.log("connected to database")
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("client/build"));

app.get("/", (req, res) => {
    res.sendFile(path.join(_dirname, "build", "index.html"));
})

require("./routes/api")(app);


app.listen(port, ()=> {
    console.log("Server listening on port:", port);
});

