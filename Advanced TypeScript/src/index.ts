// // Define a User structure
// interface User {
//     id: string; // Unique user ID
//     name: string; // User name
//     password: string; // User password (store securely in real apps)
//     age: number; // User age
//     email: string; // User email
// }

// // Subset of User fields for specific use cases
// type updatedUser = Pick<User, 'age' | 'email' | 'id' | 'name'>;

// // Make all User fields optional
// type PartialUpdatedUser = Partial<User>;

// // Read-only User object
// const ReadOnlyUser: Readonly<User> = {
//     age: 12,
//     email: 'sree@gmail.com',
//     id: "id_4h43i55j3oi32",
//     name: "Sree",
//     password: '$928p3943upfhvipeg89er'
// };

// // Map string keys to User objects
// type userType = { [key: string]: User };

// // Simplified key-value mapping using Record
// type UsersType = Record<number, User>;

// // Example user object using Record
// const user: UsersType = {
//     "1": {
//         name: "syugfuid",
//         age: 23,
//         email: "gsdbds",
//         id: "id_93rndsv",
//         password: "hsifl"
//     }
// };


// //Map

// const User = new Map<string,number>();

// User.set("One",1)


// console.log(User.get('One'))



// //Exclude


// // -> Oppsite to the Pick

// type ButtonStyle = 'dark' | 'grey' | 'yellow' | 'danger'

// type DarkButtonStyle = Exclude<ButtonStyle,'yellow'>


// const Button:DarkButtonStyle = "grey"

// const NormalButton:ButtonStyle = "yellow"
 
//Type Inference 

// const particularType = z.string()
//type Particular = z.infer<typeof particularType>



// Notes:
// - `Record<number, User>` is concise and readable.
// - Utility types like `Pick`, `Partial`, and `Readonly` enhance flexibility.
// - Securely handle sensitive data like passwords in real-world apps.
