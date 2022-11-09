let courseList = {
    code: "ACIT 1620",
    name: "Web Technologies",
    user: "Saad Al-Mridha",
};
console.log(courseList);

let input;
do {
    input = prompt ('Enter a 4-digit number');
    // prompt always return string
    // convert input to number
   // console.log(Number(input));
}   while (isNaN(Number(input)) || input.length !== 4 )



  