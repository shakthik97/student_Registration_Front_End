
//event listener
document.getElementById("find-by-id")
    .addEventListener("click", getStudentById)

  let studentTable1 = document.getElementById("find-a-student");

function getStudentById(){
    let searchedStudentId = document.getElementById("input-find-by-id").value;

    const requestOption = {
        method: "GET"
    };

    let body = `<tr>
                    <th>student ID</th>
                    <th>student name</th>
                    <th>student age</th>
                    <th>gender</th>
                    <th>contact number</th>
                    <th>Address</th>
                </tr>`;

    fetch(`http://localhost:8080/get-Student-by-id/${searchedStudentId}`,requestOption)
    .then((response) => {
        if(!response.ok){
            throw new Error('Student not found');
            alert("student not found");
        }
       return response.json();
    })
    .then((data) =>{
        console.log(data)
        body = `<tr>
                    <th>student ID</th>
                    <th>student name</th>
                    <th>student age</th>
                    <th>gender</th>
                    <th>contact number</th>
                    <th>Address</th>
                    </tr>

        <td>${data.studentId}</td>
        <td>${data.studentName}</td>
        <td>${data.studentAge}</td>
        <td>${data.gender}</td>
        <td>${data.address}</td>
        <td>${data.contactNumber}</td>
     </tr>`;

       studentTable1.innerHTML = body;
    })
}

document.getElementById("delete-student")
    .addEventListener("click", deleteStudentById)

function deleteStudentById(){
    let studentById = document.getElementById("input-find-by-id").value;

    const requestOption = {
        method: "DELETE"
    };

    fetch(`http://localhost:8080/delete-student/${studentById}`,requestOption)
    .then((response) => {
        console.log(response);
    })

   // document.getElementById("delete-student").disabled = true;
}
