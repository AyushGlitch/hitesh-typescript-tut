var score = 33;
console.log(score);
console.log(typeof (score));
score = "55";
console.log(score);
console.log(typeof (score));
var hitesh = {
    name: "ayush",
    id: 26
};
console.log(hitesh);
hitesh = {
    username: "glich",
    id: 266
};
console.log(hitesh);
function getId(id) {
    if (typeof (id) === "string") {
        return id.toLowerCase();
    }
    else {
        return id + 10;
    }
}
console.log(getId("ABcdEf235"));
console.log(getId(1234567));
var data1 = [1, 2, 3, 4]; // eithere all number or all string
console.log(data1);
data1 = ["1", "2", "3", "4"];
console.log(data1);
var data2 = [1, 2, "3", 4, "5", true, false];
console.log(data2);
