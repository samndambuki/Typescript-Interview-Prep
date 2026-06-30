// how to define an array in ts. show all ways
// how to define an array of strings and numbers

//using generic type array to define our type of array
let fruits1: string[] = ["mango", "orange", "banana"];
//generic type
let fruits2: Array<string> = ["mango", "orange", "banana"];

let user: string[] = ["John", "Sam", "Doe", "Alex"];
let numbers: number[] = [1, 2, 3, 4, 5, 6];

//define an array of numbers and strings
// const age: string | number = 25;
let age: (string | number)[] = ["25", 25];
