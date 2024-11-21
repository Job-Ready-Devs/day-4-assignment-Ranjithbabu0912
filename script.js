const form = document.querySelector("#add-student form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const studentList = document.querySelector("#student-list ul");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    // GETTING INPUTS
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // VALIDATE INPUT
    if (!name || !email) {
        alert("Both fields are required!");
        return;
    }

    // CREATE NEW LIST ITEM
    const listItem = document.createElement("li");
    listItem.textContent = `${name} - ${email}`;

    // ADDIN INTO STUDENT
    studentList.appendChild(listItem);

    // CLEAR INPUT FIELDS
    nameInput.value = "";
    emailInput.value = "";
});
