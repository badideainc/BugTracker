let table = document.querySelector("table");

function AddRow() {
    let title = document.getElementById("fname").value;
    let description = document.getElementById("fdescription").value;
    let priority = document.getElementById("fpriority").value;

    CreateRow(title, description, priority);
}

function CreateRow(title, description, priority) {
    let newRow = `<tr>
        <td>${title}</td>
        <td>${description}</td>
        <td>${priority}</td>
        <td><input type="checkbox"></td>
        <td><button id="editButton">Edit</button></td>
        <td><button id="deleteButton">Delete</button></td>
    </tr>`;
    table.innerHTML += newRow;
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", AddRow);