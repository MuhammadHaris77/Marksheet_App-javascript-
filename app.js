
let getName = prompt("Enter Student Name?", "Ali").toUpperCase();
let getRollno = +prompt("Enter Student Roll NO?", "123");
let getStudentClass = +prompt("Enter Student Roll NO?", "10");
let getUrduMarks = +prompt("Enter Student Urdu Marks?", "50");
let getEnglishMarks = +prompt("Enter Student English Marks?", "50");
let getMathMarks = +prompt("Enter Student Math Marks?", "50");
let getPakMarks = +prompt("Enter Student Pak Marks?", "50");
let getComputerMarks = +prompt("Enter Student Computer Marks?", "50");


let stName = document.querySelector("#name");
let stRollNo = document.querySelector("#rollno");
let stClass = document.querySelector("#class");
let stUrdumarks = document.querySelector("#urdumarks");
let stEnglishmarks = document.querySelector("#englishmarks");
let stMathmarks = document.querySelector("#mathmarks");
let stPakmarks = document.querySelector("#pakmarks");
let stComputermarks = document.querySelector("#computermarks");
let stObtainmarks = document.querySelector("#obtainedmarks");


stName.innerHTML = getName;
stRollNo.innerHTML = getRollno;
stClass.innerHTML = getStudentClass;

stUrdumarks.innerHTML = getUrduMarks;
stEnglishmarks.innerHTML = getEnglishMarks;
stMathmarks.innerHTML = getMathMarks;
stComputermarks.innerHTML = getComputerMarks
stPakmarks.innerHTML = getPakMarks


let totalObtainedMarks = getComputerMarks + getEnglishMarks + getMathMarks + getUrduMarks + getPakMarks
stObtainmarks.innerHTML = totalObtainedMarks
let avarageMarks = (totalObtainedMarks / 500 * 100)

let roundofPercentage = Math.round(avarageMarks)
let grade;
if (roundofPercentage > 90) {
    swal("CONGRATULATION!", "A+ GRADE", "success")
    grade = "A+ GRADE"
} else if (roundofPercentage > 80) {
    swal("CONGRATULATION!", "A GRADE", "success")
    grade = "A GRADE"
} else if (roundofPercentage > 70) {
    swal("CONGRATULATION!", "B GRADE", "success")
    grade = "A+ GRADE"
} else if (roundofPercentage < 70) {
    swal("YOU ARE FAIL! BETTER LUCK FOR NEXT TIME!")
    grade = "FAIL"
}

let stpercentage = document.querySelector("#percentage");
let stgrade = document.querySelector("#grade");

stpercentage.innerHTML = `${roundofPercentage} %`
stgrade.innerHTML = grade 
