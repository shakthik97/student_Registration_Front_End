
//event listener
document.getElementById("btn-register")
    .addEventListener("click", saveStudent)

function saveStudent() {
    let requestBody = mapRequest()

    const myHeaders = new Headers();
    myHeaders.append("Content-type","application/json");

    const row = JSON.stringify(requestBody);

    const requestOption = {
        method: "POST",
        body: row, 
        headers: myHeaders
    }

    fetch("http://localhost:8080/register-student",requestOption)
        .then((response) => response.json())
        .then((data) => console.log(data))

        clear();

}

function mapRequest() {
    let requestBody = {

        studentName: undefined,
        studentAge: undefined,
        gender: undefined,
        address: undefined,
        contactNumber: undefined

    }

    //  let genderSelect = document.getElementById("gender-select");
    // let selectedGender = genderSelect.value;

    requestBody.studentName = document.getElementById("student-name").value;
    requestBody.studentAge = document.getElementById("student-age").value;

    // requestBody.gender = selectedGender;
    requestBody.gender = document.getElementById("gender-select").value;
    requestBody.address = document.getElementById("address").value;
    requestBody.contactNumber = document.getElementById("contact-number").value;

    return requestBody;
}

function clear(){
    document.getElementById("student-name").value = ""; 
    document.getElementById("student-age").value = "";
    document.getElementById("gender-select").value = ""; 
    document.getElementById("address").value = "";
    document.getElementById("contact-number").value = "";

}
