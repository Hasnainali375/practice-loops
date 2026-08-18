let students=["ali","sara","zain"];
let addstudents=(newname)=>{
    students.push(newname);
    console.log(students);    
}
addstudents("hassan")
let lastcomer=(latecomername)=>{
    students.unshift(latecomername);
    console.log(students)
}
lastcomer("abdullah")

let removelast=()=>{
    students.pop()
    console.log(students);
}
removelast();
//shift remove first
let removefirst=()=>
{
    students.shift()
    console.log(students)

}
removefirst();
console.log(students);
