// const person: {
//     name: string,
//     age: number
// } = {
    const person = {
    name: "andrew",
    age: 20,
    hobbies: ['sports', 'cooking']
}

let favoriteActivities: string[];
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}