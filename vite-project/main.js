import './style.css'

//make app call to 
//https://dummy.restapiexample.com/api/v1/employees

//Use map
//Use the destructing syntax 
const APIurl = "https://dummy.restapiexample.com/api/v1/employees";
function fetchApi (){
  fetch(APIurl)
    .then(data => {
    return data.json();
  })
  .then(({data:employeesData}) => {
    console.log("employeesData: ", employeesData);
    const newEmployeesData = employeesData.map(({employee_name, employee_age})=> {
       return [employee_name, employee_age]
    })
    console.log(newEmployeesData);
  })
};
fetchApi();

