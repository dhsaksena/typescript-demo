function addAndResult(n1:number, n2:number, showResult:boolean, resultPhrase:string)
{

    const result = n1 + n2;
    if(showResult)
    {
        console.log(resultPhrase + result);
    }
    else
    {
        return n1 + n2;
    }
   
}

const number1 = 5;
const number2 = 2.8;
let printResult = true;
const resultPhrase = "Result is ";
addAndResult(number1, number2, printResult, resultPhrase);
//console.log(result); 