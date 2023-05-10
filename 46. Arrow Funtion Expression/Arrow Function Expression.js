// arrow function expression = compact alternative to a traditional function expression
// =>

//--------------- Example 1 ---------- 
/*
const greeting = userName => console.log(`Hello ${userName}`);
greeting("Stro");
*/

//--------------Example 2 ----------------
/*
const percent = (x, y) => x/y * 100;

console.log(`${percent(20,100)}%`);
*/

//--------------Example 3 ----------------
const grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y-x);

grades.forEach((element)=>console.log(element));



