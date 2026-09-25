function calculateResult(){

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let oops = Number(document.getElementById("oops").value);
    let frontend = Number(document.getElementById("frontend").value);
    let fullstack = Number(document.getElementById("fullstack").value);
    let soa = Number(document.getElementById("soa").value);
    let datascience = Number(document.getElementById("datascience").value);

    // Check empty fields

    if(
        name === "" ||
        roll === "" ||
        document.getElementById("oops").value === "" ||
        document.getElementById("frontend").value === "" ||
        document.getElementById("fullstack").value === "" ||
        document.getElementById("soa").value === "" ||
        document.getElementById("datascience").value === ""
    ){

        alert("Please fill all fields");

        return;
    }

    // Check marks

    if(
        oops < 0 || oops > 100 ||
        frontend < 0 || frontend > 100 ||
        fullstack < 0 || fullstack > 100 ||
        soa < 0 || soa > 100 ||
        datascience < 0 || datascience > 100
    ){

        alert("Marks should be between 0 and 100");

        return;
    }

    // Calculate Total

    let total =
        oops +
        frontend +
        fullstack +
        soa +
        datascience;

    // Calculate Percentage

    let percentage = total / 5;

    // Calculate Grade

    let grade;

    if(percentage >= 90){

        grade = "A+";

    }

    else if(percentage >= 80){

        grade = "A";

    }

    else if(percentage >= 70){

        grade = "B";

    }

    else if(percentage >= 60){

        grade = "C";

    }

    else if(percentage >= 50){

        grade = "D";

    }

    else{

        grade = "F";

    }

    // Calculate Pass / Fail

    let status;

    if(
        oops >= 35 &&
        frontend >= 35 &&
        fullstack >= 35 &&
        soa >= 35 &&
        datascience >= 35
    ){

        status = "Pass";

    }

    else{

        status = "Fail";

    }

    // Get Table Body

    let tableBody =
        document.getElementById("tableBody");

    // Create Row

    let row =
    `
    <tr>

        <td>${name}</td>

        <td>${roll}</td>

        <td>${total} / 500</td>

        <td>${percentage.toFixed(2)}%</td>

        <td>${grade}</td>

        <td class="${status === 'Pass' ? 'pass' : 'fail'}">
            ${status}
        </td>

    </tr>
    `;

    // Add row to table

    tableBody.innerHTML += row;

    // Clear form after adding result

    document.getElementById("resultForm").reset();

}