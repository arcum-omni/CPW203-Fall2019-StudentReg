"use strict";
/**
 * Represents a institution's student
 */
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// window.onload = function(){
//
// }
window.onload = main;
function main() {
    var regBtn = document.querySelector("button");
    regBtn.onclick = processForm; // () to call function, not needed to establish one
}
function processForm() {
    // assume data is valid for now
    var nextStu = getStudentFromForm();
    displayStudent(nextStu);
    clearForm(); // in preperation to enter next student
}
function getStudentFromForm() {
    var tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob")); // dateOfBirth is a date format, not string
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}
function getInputValue(id) {
    var elem = document.getElementById(id);
    return elem.value;
    // equiv code to above
    //return (<HTMLInputElement>document.getElementById(id)).value;
}
// // // // // // THIS IS TEST CODE // // // // // //
//let stu:Student = new Student(); // variable:class is redudant and not required
var stu = new Student();
stu.firstName = "Travis"; // SET / setter
var fName = stu.firstName; // GET / getter
stu.address = "123 fake street";
