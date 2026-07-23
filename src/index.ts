//1. define user interface with id,name,age and getMessage() function which returns a string
//example usage of the interface

//2. Create Profile Interface with name, profileUrl, isActive

//3. Create a function which transforms UserInterface to ProfileInterface

//4. The ProfileUrl is `/profiles/${name}`

//5. Add an optional parameter isActive. Profile must be active if paramater is not provided

export interface UserInterface {
  id: number;
  name: string;
  age: number;
  getMessage(): string;
}

const user: UserInterface = {
  id: 1,
  name: "Sam",
  age: 25,
  getMessage() {
    return `${this.name} is ${this.age} years old`;
  },
};

export interface ProfileInterface {
  name: string;
  profileUrl: string;
  isActive?: boolean;
}

const transformUserToProfile = (
  user: UserInterface,
  isActive: boolean = true,
): ProfileInterface => {
  return {
    name: user.name,
    profileUrl: `/profiles/${user.name}`,
    isActive,
  };
};

transformUserToProfile(
  {
    id: 1,
    name: "sam",
    age: 25,
    getMessage: () => "foo",
  },
  false,
);
