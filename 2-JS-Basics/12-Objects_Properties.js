////////////////////////////////
//Objects
/*
Objects has key value pair.
Objects has no particular order.
*/

//Declaration of Objects
var EmpDetails = {
    Name: 'Rakesh',
    EmpNo: 179094,
    Company: 'Wipro',
    Location: 'USA',
    isActive: true
};
console.log(EmpDetails);
console.log(EmpDetails.Name);
console.log(EmpDetails['Name']);

var keyValue = 'Company';
console.log(EmpDetails[keyValue]);

//Mutation
console.log(EmpDetails);
EmpDetails.Name = 'Suma';
console.log(EmpDetails.Name);
console.log(EmpDetails);
EmpDetails['Name'] = 'Rakesh'
console.log(EmpDetails['Name']);
console.log(EmpDetails);

//Declaration of Objects
var Emp = new Object();
Emp.Name = 'Suma';
Emp.EmpNo = 99999;
Emp['Company'] = 'NA';
Emp['Location'] = 'USA';
Emp.isActive = false;

console.log(Emp);