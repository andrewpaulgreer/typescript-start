// tuple

// import { string, number } from "prop-types"

//     const person: {
//         name: string;
//         age: number;
//         hobbies: string[];
//         role: [number, string];
//     } = {
//     name: "andrew",
//     age: 20,
//     hobbies: ['sports', 'cooking'],
//     role: [2, 'author']
// };

//without enum =======================
// const ADMIN = 0;
// const READ_ONLY = 1
// const AUTHOR = 2


// with enum
enum Role { ADMIN=5, READ_ONLY, AUTHOR};


const person = {
    name: "andrew",
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
// person.role.push('admin')
// person.role[1] = 10

let favoriteActivities: string[];
favoriteActivities = ['sports']

console.log(person.name)

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
}

if (person.role === Role.AUTHOR){
    console.log('is author')
}