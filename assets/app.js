
//event listener
document.getElementById("btn-register")
    .addEventListener("click", saveStudent)

function saveStudent() {

    let requestBody = mapRequest();

    if(requestBody.address !== undefined &&
        requestBody.studentAge !== undefined &&
        requestBody.gender !== undefined &&
        requestBody.address !== undefined &&
        requestBody.contactNumber !== undefined
    ){
    fetch("http://localhost:8080/register-student", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });

        clear();
    }else{
        alert("all data are mandatory");
    }

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
    document.getElementById("student-name").value = undefined; 
    document.getElementById("student-age").value = undefined;
    document.getElementById("gender-select").value = undefined; 
    document.getElementById("address").value = undefined;
    document.getElementById("contact-number").value = undefined;

}
