const students=["Priya","Arjun","Divya","Ragul","Sneha"];
console.log(students[0]);
console.log(students[4]);
students.push("deepika");
console.log(students);
students.pop(students[0,4]);
console.log(students);

const numbers =students.slice(1,4);

console.log(numbers);
students.splice(2,1);
console.log(students);

console.log(students.includes("Priya"));


const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 800 },
  { name: "Headphones", price: 1200 },
  { name: "Smartwatch", price: 13000 }
];

console.log(products.filter(product => product.price > 1000));
console.log( products.map(product => product.name));
console.log(products.reduce((sum, product) => sum + product.price, 0));

let strong=[40,10,5,20,30];
let result=strong.sort((a,b)=>a-b);
console.log(result);

let result1=strong.sort((a,b)=>b-a);
console.log(result1);

let numbers1=[10,20,30,40];
let result2=numbers1.reduce((total,num)=>total+num,0);
console.log(result2);

let numbers2=[10,20,30,40,50];
let a=numbers2.slice(1,3);
let b=numbers2.splice(2,1,35);
console.log(a);
console.log(b); 
console.log(numbers2);

let numbers3=[10,20,15,5];
let result3=numbers3.some((n)=>{
  return n>20;
});
console.log(result3);

result3=numbers3.every((n)=>{
  return n<30;
});
console.log(result3);

const employee = {
  name: "Arun",
  salary: 30000,
}

console.log(employee.name)
console.log(employee["salary"])

employee.salary = 35000
console.log(employee.salary)

employee.city = "Chennai"
delete employee.city
console.log(employee)

const student = {
    name: "Priya",
    age: 20,
    address: {
        City: "Chennai",
        State: "Tamil Nadu"
    }
}
console.log(student.name)
console.log(student["age"])
console.log(student.address.City) 