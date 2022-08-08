const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({
    mail: {
        type: String,
        required: true
    },
   
    password: {
        type: String,
        required: true,
        minLength: 6
    }
});
const signupModal = mongoose.model("usersignup", signupSchema);
module.exports = signupModal;