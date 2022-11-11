const ACIT1620 = {
    code: "ACIT 1620",
    name: "Web Fundamental Technologies",
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

const courseList = [ACIT1620, ACIT1630, ACIT1420, ACIT1515];

let input;
do {
    input = prompt ('Enter a 4-digit number');
    
}   while (isNaN(Number(input)) || input.length !== 4 )

for (let i = 0; i < courseList.length; i++) {
	if (courseList[i].code.includes(input)) {
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
        break;
    } else if (i === courseList.length-1){
        let st = "ACIT";
        st = st + input;
        courseList.push(st);
        courseList[courseList.length-1] ={
            code:input,
            name:null,
        };
            console.log('Added');
            break;
    }
};