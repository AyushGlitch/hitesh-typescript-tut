// Basic Fxn
function add2(num) {
    return num + 2;
}
console.log(add2(8));
// Basic Fxn
function getUpper(str) {
    return str.toUpperCase();
}
console.log(getUpper("abcde"));
// Arrow Fxn
var user = function (name, password, isPaid) {
    console.log({
        UserName: name,
        Password: password,
        IsPaid: isPaid
    });
};
user("Ayush", "Ayush@gmail.com", false);
// Fxn with default parameter
var user2 = function (name, password, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    console.log({
        UserName: name,
        Password: password,
        IsPaid: isPaid
    });
};
user2("Ayush", "Ayush@gmail.com");
// Basic Fxn with output type
function add4(num) {
    return num + 4;
}
console.log(add4(8));
// Arrow Fxn with output type
var user3 = function (name, password, isPaid) {
    console.log({
        UserName: name,
        Password: password,
        IsPaid: isPaid
    });
};
user3("Ayush", "Ayush@gmail.com", false);
// Fxn with default parameter & output type
var user4 = function (name, password, isPaid) {
    if (isPaid === void 0) { isPaid = true; }
    return ({
        UserName: name,
        Password: password,
        IsPaid: isPaid
    });
};
console.log(user4("Ayush", "Ayush@gmail.com"));
// Never type is for values which are never observed, i.e. exception/ termination of program
function consoleErr(errMsg) {
    console.log(errMsg);
}
function handleErr(errMsg) {
    throw new Error(errMsg);
}
consoleErr("Display Err on Console");
handleErr("Throw Errr for exception");
