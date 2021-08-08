const signupSchema = require("../Model/userSignup");
const mongoose = require("mongoose");

exports.addUser = async (req, res) => {
  try {
    var password = req.body.password;
    var cpassword = req.body.confirmpassword;

    if (password !== cpassword) {
      return res.send("password not match");
    } else {
      const { username, email, phone, password, confirmpassword } = req.body;

      const User = new signupSchema({
        username,
        email,
        phone,
        password,
        confirmpassword
      });

      await User.save()
        .then(() => {
          return res.status(201).json({
            message: "created...."
          });
        })
        .catch(e => {
          return res.status(400).json({
            mesaage: e
          });
        });
    }
  } catch (error) {
    alert: error;
  }
};
exports.deleteUser = (req, res) => {
  const userid = mongoose.Types.ObjectId(req.params.id);
  signupSchema
    .findByIdAndDelete({ _id: userid })
    .then(() => {
      return res.status(200).json({
        message: "deleted!!"
      });
    })
    .catch(e => {
      return res.status(400).json({
        error: e
      });
    });
};
exports.findUser = (req, res) => {
  signupSchema
    .find({})
    .then(data => {
      return res.status(200).json({ data });
    })
    .catch(e => {
      return res.status(400).json({
        message: e
      });
    });
};
exports.updateUser = (req, res) => {
  const Userid = new mongoose.Types.ObjectId(req.params.id);
  const { username, email, phone, password, confirmpassword } = req.body;
  signupSchema
    .findByIdAndUpdate(
      { _id: Userid },
      { username, email, phone, password, confirmpassword }
    )
    .then(() => {
      return res.status(200).json({
        message: "updated user"
      });
    });
};
//login Api

exports.loginUser = async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    const user = await signupSchema.find({ username: username });
    if (user.length > 0) {
      const isMatch = (password, user[0].password);
      // console.log(isMatch);

      if (isMatch === password) {
        return res.status(200).send(" welcome to the secret page");
      } else {
        return res.status(400).send("paswword not matched");
      }
    } else {
      return res.status(404).send("user does not exists");
    }
  } catch (error) {
    return res.status(500).send("something went wrong");
  }
};
