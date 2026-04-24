let table = document.querySelector("table");

const emptyRow = `<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>`;

function AddRow() {
    table.innerHTML += emptyRow;
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", AddRow);