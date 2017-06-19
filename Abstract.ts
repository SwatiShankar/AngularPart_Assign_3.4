abstract class Department {

    constructor(public name: string) {
    }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    // must be implemented in derived classes
    abstract printMeeting(): void; 
}

class AccountingDept extends Department {
    
    // constructors in derived classes must call super()
    constructor() {
        super("Accounting and Auditing"); 
    }

    printMeeting(): void {
        console.log("The Accounting Department meets every Saturday morning at 9.00AM.");
    }

}

class ScienceDept extends Department{
    
     // constructors in derived classes must call super()
    constructor() {
        super("Accounting and Auditing"); 
    }

    printMeeting(): void {
        console.log("The Science Department attends the technical fests and wins prizes");
    }
}

//create a reference to an abstract type
let department: Department; 
let dept: Department;

//create and assign a non-abstract subclass
department = new AccountingDept(); 
department.printName();
department.printMeeting();

dept = new ScienceDept();
dept.printName();
dept.printMeeting();