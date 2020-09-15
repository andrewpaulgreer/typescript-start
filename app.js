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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "andrew",
    age: 20,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN
};
// person.role.push('admin')
// person.role[1] = 10
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
