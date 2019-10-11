/**
 * Represents a institution's student
 */
class Student{
    // create a property for all fields
    firstName:string;
    lastName:string;
    dateOfBirth:Date; // dob
    
    /**
     * Student's Full Home Address
     * Street Number & Name
     * City, ST, zpcde
     */
    address:string;
    
    /**
     * The program of study.
     */
    program:string;

    /*constructor(fName, lName){
        this.firstName = fName;
        this.lastName = lName;
    }*/
}

// window.onload = function(){
//     let regBtn = document.querySelector("button");
//     regBtn.onclick = processForm; // () to call function, not needed to establish one
// }

window.onload = main;
function main(){
    let regBtn = document.querySelector("button");
    regBtn.onclick = processForm; // () to call function, not needed to establish one
}

function processForm(){
    // assume data is valid for now
    let nextStu:Student = getStudentFromForm();
    displayStudent(nextStu);
    clearForm(); // in preperation to enter next student
}

function displayStudent(s:Student):void{ // void, no return type
    // create LI element
    let newItem = document.createElement("li");
    newItem.innerText = s.firstName + " " + s.lastName;
    let displaySection = document.querySelector("#student-list");
    let list = displaySection.querySelector("ul");
    
    // Add <li> as a child to <ul>
    list.appendChild(newItem);
}

function getStudentFromForm():Student{ // :Student is a return type
    let tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob")); // dateOfBirth is a date format, not string
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}

function clearForm(){
    window.location.reload(true);
}

function getInputValue(id:string):string{
    let elem = <HTMLInputElement>document.getElementById(id);
    return elem.value;

    // equiv code to above
    //return (<HTMLInputElement>document.getElementById(id)).value;

}

// // // // // // THIS IS TEST CODE // // // // // //

//let stu:Student = new Student(); // variable:class is redudant and not required
let stu = new Student();
stu.firstName = "Travis"; // SET / setter
let fName = stu.firstName; // GET / getter
stu.address = "123 fake street"