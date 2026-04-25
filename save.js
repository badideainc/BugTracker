import { GetRows, AddRowFromFile } from "./main.js";

function SaveDataToFile() {
    const rows = GetRows();

    if (!rows || rows.length === 0) {
        alert("No data to save");
        return;
    }

    const data = { rows: Array.from(rows).map(r => FormatData(r.cells)) };

    const jsonString = JSON.stringify(data, null, 2);

    const blob = new Blob([jsonString], { type: 'application/json;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'bugdata.json';
    document.body.appendChild(a);

    a.click();
    a.remove();
    URL.revokeObjectURL(url);
}

function FormatData(cells) {
    const title = cells[0]?.innerText?.trim() ?? "";
    const description = cells[1]?.innerText?.trim() ?? "";
    const priority = cells[2]?.innerText?.trim() ?? "";
    const status = cells[3]?.innerText?.trim() ?? "";
    return new BugData(title, description, priority, status);
}
async function LoadDataFromFile() {
    const file = document.getElementById("importFile").files[0];

    let text = await file.text();

    const data = JSON.parse(text)

    data.rows.forEach(row => {
        AddRowFromFile(row.title, row.description, row.priority)
    });
}

class BugTableData {
    constructor() {
        this.rows = [];
    }
}

class BugData {
    constructor (title, description, priority, status) {
        this.title = title
        this.description = description
        this.priority = priority
        this.status = status
    }
}

let saveButton = document.getElementById("exportFile");
saveButton.addEventListener("click", SaveDataToFile);

let loadButton = document.getElementById("importFile");
loadButton.addEventListener("change", LoadDataFromFile);