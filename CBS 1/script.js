window.onload = function display(){
    var table = document.getElementById("table");
    var row = table.insertRow(0);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // Add some text to the new cells:
        cell1.innerHTML = "Number";
        cell2.innerHTML = "Square";
        cell3.innerHTML = "Cube"; 

    for(i=0; i<11; i++){
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(i+1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // Add some text to the new cells:
        cell1.innerHTML = i;
        cell2.innerHTML = calculateSquare(i);
        cell3.innerHTML = calculateCube(cell2.innerHTML, i); 
    }
}

function calculateSquare(no){
    return no*no;
}

function calculateCube(square, no){
    return square*no;
}