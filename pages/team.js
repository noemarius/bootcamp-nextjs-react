import { EmployeeCard } from "../components/EmployeeCard";

class Employee {
    constructor(name, title, imgURL, socialMedia) {
        this.name = name;
        this.title = title;
        this.imgURL = imgURL;
        this.socialMedia = socialMedia;
    }
}

let empOne = new Employee("0001 Adam", "CEO", "https://bit.ly/3yEeVq2", true);
let empTwo = new Employee("0002 Eve", "CTO", "https://bit.ly/3yEeVq2", false);
let empThree = new Employee(
    "0003 Snake",
    "CFO",
    "https://bit.ly/3yEeVq2",
    false
);
let empFour = new Employee(
    "9001 Goku",
    "Intern",
    "https://bit.ly/3yEeVq2",
    true
);

let employeeDB = [empOne, empTwo, empThree, empFour];
