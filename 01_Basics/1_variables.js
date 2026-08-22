const accountID = 144553
let accountEmail = "SamDas@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed
accountEmail = "abh@google.com"
accountPassword = "122412585"
accountCity = "Kolkata"

// Simple life
console.log(accountID);

// Menthosk life
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);

/*
Prefer not to use var because of issue in block scope and functional scope
*/ 