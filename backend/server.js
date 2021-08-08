const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");

require("dotenv").config();
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("asdas", req.body);
  res.send("get the api");
});
app.use(require("./Route/signupRoute"));
mongoose
  .connect(process.env.mngl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `app is listening port: http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch(e => console.log("Error in db connect", e));
