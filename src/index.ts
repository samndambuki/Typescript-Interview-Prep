//1. define user interface
//example usage of the interface

export interface UserInterface {
  id: number;
  name: string;
  age: number;
  getMethod(): string;
}

const user: UserInterface = {
  id: 1,
  name: "Sam",
  age: 25,
  getMethod() {
    return `${this.name} is ${this.age} years old`;
  },
};
