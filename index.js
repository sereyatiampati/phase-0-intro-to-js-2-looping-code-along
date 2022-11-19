//Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    event= "surprise";
    const newArray = [];
    for(let i = 0; i < names.length; i++)
    {
    newArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return newArray;
}
// function countDown (num) {
//     //num=4;
//     const num2=num;
//     let num3=num;
//     let num4=num;
//     while (num >= 0)
//     {
//         console.log( ` "Expected countDown(${num2}) to log ${num--}` + 
//         (num3 >= num2 ?  ` first"` : ` after ${num4--}" `));
//         num3--;

//     }
//     countDown(4)
// }
function countDown (num) {
    //const num1=num;
    while (num>=0)
    {
        console.log(num--)
    }
}
//countDown(4)
