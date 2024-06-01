function printCoor(pt) {
    console.log("X-Coordinates: ".concat(pt.x));
    console.log("Y-Coordinates: ".concat(pt.y));
}
printCoor({
    x: 10,
    y: 5
});
var myUser = {
    _id: "12345",
    name: "ayush",
    email: "ayush@gmail.com",
};
console.log(myUser);
myUser.email = "ayush1234@gmail.com";
myUser.isActive = true;
console.log(myUser);
