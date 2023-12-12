// for (let i = 0; i < array.length; i++) {
//     const element = array [i];
    
// }
const item = [1, 2, 3, 4, 5];


let res = item.map((num) =>
    Math.pow(num, 2)
)

console.log(res);

let res1 = item.filter((num) => num > 0).reduce((acc, curr) => acc + curr, 0);
console.log(res1);

const inp = "Rishabh Arora Yes Sir";

let a = inp.split(" ").map((word) => word[0]).join("");

console.log(a);

const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const ages = input.map((p) => p.age);

[Math.min(...ages), Math.max(...ages), Math.max(...ages)-Math.min(...ages)];

const str = "Every developer likes to mix kubernetes and javascript";

const numeron = (d) =>
    d[0] + (d.length-2) + d[d.length-1];


const res2 = str.split(" ").map((data)=> (data.length >= 4 ? numeron(data) : data)).join(" ");
console.log(res2);




const inpu= [
  ["a", "b", "c"],
  ["c", "d", "f"],
  ["d", "f", "g"],
];


let x = inpu.flat().reduce((acc, curr)=>{
    if(acc[curr]){
        acc[curr] += 1;
    }else{
        acc[curr] = 1;
    }
    return acc;
},{});



console.log(x);


const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
];

const l = students.map((student)=>{
    const sum = student.scores.reduce((acc, curr) => acc + curr);
    return {name: student.name, average:sum/student.scores.length};
});

console.log(l.filter((student)=>student.average > 90));


let customers = [
   {
      'id': 1,
      'f_name': 'Abby',
      'l_name': 'Thomas',
      'gender': 'M',
      'married': true,
      'age': 32,
      'expense': 500,
      'purchased': ['Shampoo', 'Toys', 'Book']
   },
   {
      'id': 2,
      'f_name': 'Jerry',
      'l_name': 'Tom',
      'gender': 'M',
      'married': true,
      'age': 64,
      'expense': 100,
      'purchased': ['Stick', 'Blade']
   },
   {
      'id': 3,
      'f_name': 'Dianna',
      'l_name': 'Cherry',
      'gender': 'F',
      'married': true,
      'age': 22,
      'expense': 1500,
      'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
   }
];

let result = customers.filter(c => c.age > 60);
console.log(result);





