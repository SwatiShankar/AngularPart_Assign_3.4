var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDept = (function (_super) {
    __extends(AccountingDept, _super);
    // constructors in derived classes must call super()
    function AccountingDept() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDept.prototype.printMeeting = function () {
        console.log("The Accounting Department meets every Saturday morning at 9.00AM.");
    };
    return AccountingDept;
}(Department));
var ScienceDept = (function (_super) {
    __extends(ScienceDept, _super);
    // constructors in derived classes must call super()
    function ScienceDept() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    ScienceDept.prototype.printMeeting = function () {
        console.log("The Science Department attends the technical fests and wins prizes");
    };
    return ScienceDept;
}(Department));
//create a reference to an abstract type
var department;
var dept;
//create and assign a non-abstract subclass
department = new AccountingDept();
department.printName();
department.printMeeting();
dept = new ScienceDept();
dept.printName();
dept.printMeeting();
