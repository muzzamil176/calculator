import sumoftwo from "./sum.js";
import productoftwo from "./product.js";
import divideoftwo from "./divide.js";
import differenceoftwo from "./subtraction.js";
import prompt from "prompt-sync";
import inquirer from "inquirer";
// const input=prompt();
// let a:any=input(`enter 1st number?`);
// a=parseInt(a);
// console.log(a);
import showBanner from "node-banner";
 async function ab(){
await showBanner('Calculator');
 }
 await ab();
 
 
 
 const d=await inquirer.prompt([{
     name:"q",
    message:`enter 1st number`,
    type:`number`
}])
 const a= await inquirer.prompt([{
    name:"r",
    message:`enter 2nd number`,
    type:`number`
}])
console.log(a.r);
const opt=await inquirer.prompt([{
    name:"t",
    message:`enter a calculating operator`,
    type:`list`,
    choices:[`+`,`-`,`*`,`/`]

}])
switch(opt.t){
    case `+`:console.log(sumoftwo(a.r,d.q));break;
    case`-`:console.log(productoftwo(a.r,d.q));break;
    case`*`:console.log(differenceoftwo(a.r,d.q));break;
    case`/`:console.log(divideoftwo(a.r,d.q));

}