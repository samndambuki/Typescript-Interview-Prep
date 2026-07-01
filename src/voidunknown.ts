//what is void type
//write an example

const doSomething = (): void => {
  console.log("do something");
  //   return false;
};

//what is unknown?
//write an example

//any - can be any datatype object string array. disables typescript
//unknown - we dont know the data type yet
//you have to provide a data type later.

let vAny: any = 10;
let vUnknown: unknown = 10;

let s1: string = vAny;
let s2: string = vUnknown as string;

console.log(vAny.foo());
// console.log(vUnknown.foo());
