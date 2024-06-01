type Point = {
    x: number,
    y: number
}

function printCoor(pt: Point): void{
    console.log(`X-Coordinates: ${pt.x}`)
    console.log(`Y-Coordinates: ${pt.y}`)
}

printCoor({
    x: 10,
    y: 5
})



type User = {
    readonly _id: string,   // readonly disables editing
    name: string,
    email: string,
    isActive?: boolean // ? means optional
}

let myUser: User = {
    _id: "12345",
    name: "ayush",
    email: "ayush@gmail.com",
}
console.log(myUser)
myUser.email = "ayush1234@gmail.com"
myUser.isActive = true
console.log(myUser)



// New type using other custom types
type CardNumber = {
    cardnumber: string
}
type CardDate = {
    carddate: string
}
type CardDetails = CardNumber & CardDate & {
    cvv: number
}