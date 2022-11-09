const ACIT1620 = {
    code: "ACIT 1620",
    name: "Web Technologies",
};

const ACIT1630 = {
    code: "ACIT 1630",
    name: "Database",
};

const ACIT1420 = {
    code: "ACIT 1420",
    name: "System Admin",
};

const ACIT1515 = {
    code: "ACIT 1515",
    name: "Scripting",
};

const courselist = [ACIT1620, ACIT1630, ACIT1420, ACIT1515];

let input;
do {
    input = prompt ('Enter a 4-digit number');
    
}   while (isNaN(Number(input)) || input.length !== 4 )

// below are just notes for myself 
// let a = 'Jim'
// console.log('My name is' + a)
// console.log(`My name is ${a}`)

for (let course of courseList) {
	if (course.code.includes('1620')) {
        
        console.log('ACIT 1620 - Web Fundamental Technologies')
        
    }

};