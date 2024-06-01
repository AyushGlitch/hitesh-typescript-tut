class User{
    private email: string
    public name: string
    readonly city: string
    constructor(email: string, name: string, city: string = "India"){
        this.email = email
        this.name = name
        this.city = city
    }

    get printName(): string{
        return `Name is ${this.name}`
    }
    get printEmail(): string{
        return `Email is ${this.email}`
    }
    setEmail(newEmail: string){
        this.email = newEmail
    }
}

// OR 
class User1{
    constructor(
        private email: string,
        public name: string,
        readonly city: string = "India"
    ){}
}

const hitesh = new User("hit@gmail.com", "hitesh")
const ayush = new User("ayush@gmail.com", "Ayush", "Ghaziabad")
console.log(hitesh)
console.log(ayush)

const avi = new User1("avi@gmail.com", "Avi")
const vansh = new User1("vansh@gmail.com", "Vansh", "Ghaziabad")
console.log(avi)
console.log(vansh)

ayush.setEmail("ayush123@gmail.com")
console.log(ayush)

class Admin extends User1 {
    isAdmin: boolean = false;

    constructor(email: string, name: string, city: string = "India", isAdmin: boolean = false){
        super(email, name, city);
        this.isAdmin = isAdmin;
    }
}
const didi = new Admin("didi@gmail.com", "Didi", "NoPur", true)
console.log(didi)