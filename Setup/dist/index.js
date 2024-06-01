"use strict";
class User {
    constructor(email, name, city = "India") {
        this.email = email;
        this.name = name;
        this.city = city;
    }
    get printName() {
        return `Name is ${this.name}`;
    }
    get printEmail() {
        return `Email is ${this.email}`;
    }
    setEmail(newEmail) {
        this.email = newEmail;
    }
}
// OR 
class User1 {
    constructor(email, name, city = "India") {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}
const hitesh = new User("hit@gmail.com", "hitesh");
const ayush = new User("ayush@gmail.com", "Ayush", "Ghaziabad");
console.log(hitesh);
console.log(ayush);
const avi = new User1("avi@gmail.com", "Avi");
const vansh = new User1("vansh@gmail.com", "Vansh", "Ghaziabad");
console.log(avi);
console.log(vansh);
ayush.setEmail("ayush123@gmail.com");
console.log(ayush);
class Admin extends User1 {
    constructor(email, name, city = "India", isAdmin = false) {
        super(email, name, city);
        this.isAdmin = false;
        this.isAdmin = isAdmin;
    }
}
const didi = new Admin("didi@gmail.com", "Didi", "NoPur", true);
console.log(didi);
