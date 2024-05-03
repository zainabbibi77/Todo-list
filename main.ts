#! /usr/bin/env node

import inquirer from "inquirer";


let todos:string[]=[];
let condition=true;

while(condition){
    let ans=await inquirer.prompt([
        {
            name:"select",
            type:"list",
            message:"Select an option you want to do:",
            choices:["Add Task","Update Task","View","Delete Task","Exit"],
        }
    ]);
    console.log(ans)
//agar user add task select kare

    if(ans.select==="Add Task"){ 
        let addTodo=await inquirer.prompt([
            {
             name:"todo",
             type:"input",
             message:"Enter your task:",
             validate:function(input){
                if(input.trim ()== ""){
                    return "Please enter a value in empty item."
                }
                return true;
             }
            }
        ]);
        if(addTodo.todo.trim()!== ""){
        todos.push(addTodo.todo);
        todos.forEach(todo =>console.log(todo));
    }
    };
    //agar user select update task kare
    if(ans.select==="Update Task"){
        let UpdateTodo=await inquirer.prompt([
            {
                name:"todo",
                type:"list",
                message:"Update your task",
                choices:todos.map(item=>item)
            } 
        ]);
        let addTodo=await inquirer.prompt([
            {
                 name:"todo",
                 type:"input",
                 message:"Enter your task:",
            }
        ]);
        let newTodo=todos.filter(val=>val !==UpdateTodo.todo);
        todos=[...newTodo,addTodo.todo];
        todos.forEach(todo =>console.log(todo));
    }
// jb wo view select kare
    if(ans.select ==="View"){
     console.log("****TO-DO LIST****");
     todos.forEach(todo =>console.log(todo));
    };
// jb wo del select kare
    if(ans.select ==="Delete Task"){
        let deleteTask=await inquirer.prompt([
            {
                name:"todo",
                type:"list",
                message:"Select item to delete",
                choices:todos.map(item=>item)
            }
        ])
        let newtodo:any =todos.filter(val =>val !== deleteTask.todo);
        todos=[...newtodo];
        todos.forEach(todo =>console.log(todo));
    };
    //agar user exit kare
    if(ans.select ==="Exit"){
        console.log("Exiting program...");
        condition=false;
    };
    };
