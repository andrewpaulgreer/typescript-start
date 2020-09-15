// const person: {
//     name: string,
//     age: number

import { string, number } from "prop-types"

// } = {
    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role: [number, string];
    } = {
    name: "andrew",
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author']
};

// person.role.push('admin')
// person.role[1] = 10

let favoriteActivities: string[];
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}