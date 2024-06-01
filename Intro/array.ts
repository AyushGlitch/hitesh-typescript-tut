const superHeroes: string[] = []
const powerLevel: number[] = []
const defenseLevel: Array<number> = []

superHeroes.push("Spiderman")
powerLevel.push(70)
defenseLevel.push(40)

console.log(superHeroes)
console.log(powerLevel)
console.log(defenseLevel)



type User = {
    name: string,
    isActive: boolean
}

const allUsers: User[] = []
allUsers.push({
    name: "Ayush",
    isActive: true
})

console.log(allUsers)