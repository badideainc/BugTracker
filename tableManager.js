let table = document.querySelector("table");

function AddRow() {
    table.innerHTML += `<tr>
        <td>1</td>
        <td>High</td>
        <td>Example bug description</td>
        <td>Open</td>
    </tr>`;
}

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", AddRow);