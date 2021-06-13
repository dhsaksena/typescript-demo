


function greet(name: string): string
{
    return "Hello " + name;
}


let greetFunction: (name: string) => string;
greetFunction = greet;
console.log(greetFunction("Dhruv"));

function addAndHandle(num1: number, num2: number, cb: (num: number)=>void)
{
    cb(num1 + num2);
}

addAndHandle(10, 30, (result: number) =>{
    console.log("Result is:: "+ result);
});