// let newNum = 34.731;
// let fixNum = newNum.toFixed(2);
// console.log(fixNum);

// let myNum = 54.4634;
// let numToSring = myNum.toPrecision(3);
// console.log(numToSring);

//object literal
// let student = {
//   name: "Fahmi",
//   age: 24,
// };
// console.log(student.age);

//object constructor
function People(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}
let People1 = new People("Fahmi Azzuhri Efki", 24, "Web Designer");
console.log(People1.name);
console.log(People1["age"]);
