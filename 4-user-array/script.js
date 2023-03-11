const users = [
     {firstName: 'Kambiz' ,id: 1},
     {firstName: 'Reza' ,id: 2},
     {firstName: 'Pooya' ,id: 3}
]

//? part 1
// function showAllUsers() {
//     console.log(users[1].firstName);
// }
// showAllUsers();


// ? part 2
// function getUserById(id) {
//    const findUserById = users.find((user) => user.id === id) 
//      if(findUserById) {
//           return findUserById.id
//      } else {
//           return "user not found"
//      }
// }
// const result = getUserById(3) 
// console.log(result);

//? part 2 with for loop
//  const result = getUserById(3)
//  console.log(result);

// function getUserById(id) {
//     for(let i = 0; i < users.length; i++) {
//         if(users[i].id === id) {
//             return users[i].id
//         }
//     }
//     return 'user not found'
// }

//? part 3
// function createUser(id, firstName, usersArray) {
//      if(usersArray.some(user => user.id === id)) {
//           console.log(`user with id ${id} is already exist`);
//           return;
//      }
//     usersArray.push({id: id, firstName: firstName})
// }

// createUser(4, 'ali', users)
// console.log(users);

//? part 4
// function editUser(id, newFirstName) {
//      const updateName = users.find(user => user.id === id)

//      if(updateName) {
//           updateName.firstName = newFirstName
//           return "first name edited"
//      } else {
//           return "user not found"
//      }
// }
// const result = editUser(2, "mary")
// console.log(result);
// console.log(users);