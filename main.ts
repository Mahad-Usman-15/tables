import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.cyan`MATH IS FUN!`)
let input=await inquirer.prompt([
    {
        name:"usernumber",
        type:"number",
        message:chalk.green("Enter the number"),
        validate:(input)=>{
            if(input===""){
                return chalk.red`Please enter the number`
            }else if(isNaN(input)){
                return chalk.red`Please enter the number`
            }
            return true
        }
    }
])
let number=parseInt(input.usernumber)
for(let i=1;i<11;i++){
  console.log(number ,"*", i ,"=", (number*i))
}