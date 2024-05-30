let employeeList = [{
    name: "Sajan",
    id: 1,
    attendance: ""
},
{
    name: "Salman",
    id: 2,
    attendance: ""

},
{
    name: "Shahruk",
    id: 3,
    attendance: ""

},
{
    name: "Katrina",
    id: 4,
    attendance: ""

},
{
    name: "Kiara",
    id: 5,
    attendance: ""

}
]

function createRandomNumber() {
    return Math.floor(Math.random() * 2)
}


let isPresent;
employeeList.map((employee) => {
    isPresent = createRandomNumber();

    if (isPresent === 0) {
        employee.attendance = "Absent"
    } else {
        employee.attendance = "Present"
    }

})

console.log(employeeList);
