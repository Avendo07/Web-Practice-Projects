function generateTable(){
    columns = parseInt(document.getElementById("columns").value);
    rows = parseInt(document.getElementById("rows").value);
    table = document.getElementById("tables");
    for(i=0; i<(rows); i++){
        var row = table.insertRow(i);
        for(j=0; j<(columns); j++){
            var cell1 = row.insertCell(j);    
            cell1.innerHTML = (i+1)*(j+1);
        }
    }
}

function clearTable(){
    rows = parseInt(document.getElementById("rows").value);
    table = document.getElementById("tables");
    for(i=0; i<(rows); i++){
        table.deleteRow(0);
    }
    
}