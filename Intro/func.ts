// Basic Fxn
function add2(num: number){
    return num + 2
}
console.log(add2(8))


// Basic Fxn
function getUpper(str: string){
    return str.toUpperCase()
}
console.log(getUpper("abcde"))


// Arrow Fxn
let user = (name: string, password: string, isPaid: boolean) => {
    console.log({
        UserName: name,
        Password: password,
        IsPaid: isPaid
    })
}
user("Ayush", "Ayush@gmail.com", false)


// Fxn with default parameter
let user2 = (name: string, password: string, isPaid: boolean = true) => {
    console.log({
        UserName: name,
        Password: password,
        IsPaid: isPaid
    })
}
user2("Ayush", "Ayush@gmail.com")


// Basic Fxn with output type
function add4(num: number): number{
    return num + 4
}
console.log(add4(8))


// Arrow Fxn with output type
let user3 = (name: string, password: string, isPaid: boolean): void => {
    console.log({
        UserName: name,
        Password: password,
        IsPaid: isPaid
    })
}
user3("Ayush", "Ayush@gmail.com", false)


// Fxn with default parameter & output type
let user4 = (name: string, password: string, isPaid: boolean = true): object => {
    return ({
        UserName: name,
        Password: password,
        IsPaid: isPaid
    })
}
console.log(user4("Ayush", "Ayush@gmail.com"))


// Never type is for values which are never observed, i.e. exception/ termination of program
function consoleErr(errMsg: string): void{
    console.log(errMsg)
}

function handleErr(errMsg: string): never{
    throw new Error(errMsg)
}

consoleErr("Display Err on Console")
handleErr("Throw Errr for exception")