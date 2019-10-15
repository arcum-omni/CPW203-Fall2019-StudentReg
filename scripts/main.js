/**
 * Represents a institution's student
 */
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
// Constants
var programAttr = "data-program";
// window.onload = function(){
//     let regBtn = document.querySelector("button");
//     regBtn.onclick = processForm; // () to call function, not needed to establish one
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
/**
 * Clears textboxes on form upon submission
 */
function clearForm() {
    var allTextBoxes = document.querySelectorAll("input[type=text]");
    for (var i = 0; i < allTextBoxes.length; i++) {
        var currBox = allTextBoxes[i];
        currBox.value = "";
    }
}
// let allTextBoxes:NodeListOf<HTMLInputElement> = document.querySelectorAll("form input[type=text]");
// for (let currBox of allTextBoxes) {
//         currBox.value = "";
// }
function displayStudent(stu) {
    // create LI element
    var newItem = document.createElement("li");
    newItem.innerText = stu.firstName + " " + stu.lastName;
    var displaySection = document.querySelector("#student-list");
    var list = displaySection.querySelector("ul");
    // embed student data in <li>, hide info with custom attributes, * attribute
    newItem.setAttribute(programAttr, stu.program);
    newItem.setAttribute("data-address", stu.address);
    newItem.setAttribute("data-birthdate", stu.dateOfBirth.toString());
    console.log(newItem);
    // Need to create showStudentData method
    // Call when <li> is clicked
    newItem.onclick = showStudentData;
    // Add <li> as a child to <ul>
    list.appendChild(newItem);
}
/**
 * Shows individual student data when a student <li> is clicked
 */
function showStudentData() {
    //alert("You clicked an <li> block element");
    //console.log(this);
    var currListItem = this; // cast this to appropriate type HTMLLIElement
    var name = currListItem.innerText;
    var program = currListItem.getAttribute(programAttr);
    // alert(name + " is studying " + program);
    // how to grab h2 and display student name
    document.querySelector("#display > h2").innerHTML = name;
    // let h2 = document.querySelector("#display > h2");
    // h2.innerHTML = name;
    document.querySelector("#display > p").innerHTML = name + " is studying " + program;
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
