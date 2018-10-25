var db = require ('./db.js');


module.exports.handleSignup = (email, password) => {
    //check if the email already exists

    // Save the user to the database
    db.saveUser({
        //email: email,
        //password: password
        // or in ES6 if the value is equal to the argument--
        email, password
    })
    // Send the welcome email
};
