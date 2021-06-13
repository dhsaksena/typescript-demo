enum Role {ADMIN,READ_ONLY,AUTHOR};

const person: {
    name: string;
    age: number;
    dept: string;
    hobbies: string[];
    role: Role;

} = {
    name: "Dhruv",
    age: 36,
    dept: "Tech",
    hobbies: ["Coding","Designing"],
    role: Role.ADMIN
};

console.log(person);

for(const hobby of person.hobbies)
{
    console.log(hobby.toUpperCase());
}

if(person.role === Role.ADMIN)
{
    console.log("Person "+ person.name + " is an admin");
}