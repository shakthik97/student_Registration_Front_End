
//event listener
document.getElementById("btn-load")
    .addEventListener("click", getAllStudents)

  let studentTable = document.getElementById("student-data-table");

function getAllStudents(){

    const requestOption = {
        method: "GET"
    }

    let body = `<tr>
                    <th>student ID</th>
                    <th>student name</th>
                    <th>student age</th>
                    <th>gender</th>
                    <th>contact number</th>
                    <th>Address</th>
                </tr>`;

    fetch("http://localhost:8080/get-all-students")
    .then((Response) => Response.json())
    .then((data) =>{
       // console.log(data)
       data.forEach(element => {
       // console.log(element);
        
        body += `<tr>
                    <td>${element.studentId}</td>
                    <td>${element.studentName}</td>
                    <td>${element.studentAge}</td>
                    <td>${element.gender}</td>
                    <td>${element.address}</td>
                    <td>${element.contactNumber}</td>
                 </tr>`;
       });

       studentTable.innerHTML = body;
    })
}