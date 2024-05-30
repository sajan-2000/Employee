let employeeList = [{
    name: "Sajan",
    id: 1,
    attendance: "",
    details: []
},
{
    name: "Salman",
    id: 2,
    attendance: "",
    details: []

},
{
    name: "Shahruk",
    id: 3,
    attendance: "",
    details: []

},
{
    name: "Katrina",
    id: 4,
    attendance: "",
    details: []

},
{
    name: "Kiara",
    id: 5,
    attendance: "",
    details: []

}
]

function createRandomNumber() {
    return Math.floor(Math.random() * 2)
}

let monthlyWage = 0;
let isPresent;
employeeList.map((employee) => {
    let dailyWage = 0;
    let partTimeWage = 0;
    let totalwage = 0;
    let count = 0;

    for (let i = 1; i <= 20; i++) {
        let partTimeWork = createRandomNumber();
        isPresent = createRandomNumber();

        if (isPresent === 0) {
            employee.attendance = "Absent"
            dailyWage = 0;
        } else {
            count++;
            employee.attendance = "Present"
            if (partTimeWork === 1) {
                partTimeWage = 20 * 8;
            } else {
                partTimeWage = 0;
            }
            dailyWage = 20 * 8;
            totalwage = dailyWage + partTimeWage;
            employee.details[employee.details.length] = {
                "DailyWage": dailyWage,
                "PartTimeWage": partTimeWage,
                "TotalWage": totalwage
            }
        }

    }

    employee.details.map((detail) => {
        monthlyWage += detail.TotalWage;
    })
    employee.MonthlyWage = monthlyWage
    monthlyWage = 0;
    console.log(employee);
    console.log(count);

})

