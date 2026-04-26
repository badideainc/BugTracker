let table = document.querySelector("table");

export function GetRows() {
    return document.getElementsByClassName("bugRow");
}

function AddRow() {
    let title = document.getElementById("fname").value;
    let description = document.getElementById("fdescription").value;
    let priority = document.getElementById("fpriority").value;

    CreateRow(title, description, priority, false);
}

export function AddRowFromFile(title, description, priority, status) {
    CreateRow(title, description, priority, status);
}

function DeleteRow(index) {
    let rows = GetRows();

    rows[index].remove();
}

function EditRow(index) {
    let row = GetRows()[index];

    let title = prompt("Enter new title", row.cells[0].innerText);
    let description = prompt("Enter new description", row.cells[1].innerText);
    let priority = prompt("Enter new priority (LOW, MEDIUM, HIGH)", row.cells[2].innerText);

    row.cells[0].innerText = title;
    row.cells[1].innerText = description;
    row.cells[2].innerText = priority;
    row.cells[2].className = priorityColor(priority);
}

function CreateRow(title, description, priority, status) {
    const checked = status ? 'checked' : '';
    const newRow = `<tr class="bugRow">
        <td>${title}</td>
        <td>${description}</td>
        <td class="${priorityColor(priority)}">${priority}</td>
        <td><input type="checkbox" ${checked}></td>
        <td><button class="editButton">Edit</button></td>
        <td><button class="deleteButton">Delete</button></td>
    </tr>`;
    table.insertAdjacentHTML('beforeend', newRow);
}

function priorityColor(priority) {
    switch (priority) {
        case "LOW":
            return "tdGreen";
        case "MEDIUM":
            return "tdYellow";
        case "HIGH":
            return "tdRed";
        default:
            return "white";
    }
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", AddRow);

table.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteButton")) {
        let index = Array.from(document.getElementsByClassName("deleteButton")).indexOf(event.target);
        DeleteRow(index);
    }
    if (event.target.classList.contains("editButton")) {
        let index = Array.from(document.getElementsByClassName("editButton")).indexOf(event.target);
        EditRow(index);
    }
});