// prices=[120,60,899];
// console.log(prices.reduce((a,prices)=>a+prices,0))

// students=["John Doe","hari","kevin","Kiran","jaahid"]
// console.log(students.find((name)=>name==="Kiran"))

// student=[
//     {name:"John Doe",
//     age:20,
//     markes:90,
//     city:"New York"},

//    { name:"hari",
//     age:22,
//     marks:60,
//     city:"Los Angeles"},

//     {name:"kevin",
//     age:21,
//    marks:70,
//     city:"Chicago"},
    
//     {name:"Kiran",
//     age:23,
//    marks:80,
//     city:"Houston"},

//     {name:"jaahid",
//     age:24,
//     marks:85,
//     city:"Phoenix"}];
//     const kiran=student.find((student)=>student.name==="Kiran");
//     console.log(kiran?kiran.marks:" not found");

// const makeGreeter=(greeting)=>(name)=>
// {
//     return greeting + name
// }
// let res1=makeGreeter("Hello")("Asha")
// console.log(res1);

async function loaduser()
{
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const users=await res.json()
        console.log(users)
        const result=users.map((x)=>x.name)
        console.log(result)
    }
    catch(error){
        console.log(error);
    }
    
}
loaduser();