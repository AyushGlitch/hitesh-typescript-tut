let score: number | string = 33
console.log(score)
console.log(typeof(score))

score = "55"
console.log(score)
console.log(typeof(score))

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let hitesh: User | Admin = {
    name: "ayush",
    id: 26
}
console.log(hitesh)

hitesh = {
    username: "glich",
    id: 266
}
console.log(hitesh)



function getId(id: number | string){
    if(typeof(id) === "string"){
        return id.toLowerCase()
    }
    else{
        return id + 10;
    }
}
console.log(getId("ABcdEf235"))
console.log(getId(1234567))



let data1 : string[] | number[] = [1, 2, 3, 4]  // eithere all number or all string
console.log(data1)
data1 = ["1", "2", "3", "4"]
console.log(data1)

const data2 : (string | number | boolean)[] = [1, 2, "3", 4, "5", true, false]
console.log(data2)