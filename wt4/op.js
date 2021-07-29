function avg() {
    var name = document.getElementById('name');
    var reg = document.getElementById('reg');
    var dept = document.getElementById('dept');
    var sem1 = document.getElementById('sem1');
    var sem2 = document.getElementById('sem2');
    var sem3 = document.getElementById('sem3');
    var sem4 = document.getElementById('sem4');
    var sem5 = document.getElementById('sem5');
    var sem6 = document.getElementById('sem6');
    var sem7 = document.getElementById('sem7');
    var sem8 = document.getElementById('sem8');
    var cgpa = document.getElementById('cgpa');
    var dis = document.getElementById('dis');

    if (name.value == "") {
        alert("Please enter name");
        return false;
    }
    else if (reg.value == "") {
        alert("Please enter registration number");
        return false;
    }
    else if (dept.value == "") {
        alert("Please enter department");
        return false;
    }
    else if (sem1.value == "") {
        alert("Please enter sem1 gpa");
        return false;
    }
    else if (sem1.value > 10) {
        alert("Please enter sem1 gpa between 1-10");
        return false;
    }
    else if (sem2.value == "") {
        alert("Please enter sem2 gpa");
        return false;
    }
    else if (sem2.value > 10) {
        alert("Please enter sem2 gpa between 1-10");
        return false;
    }
    else if (sem3.value == "") {
        alert("Please enter sem3 gpa");
        return false;
    }
    else if (sem3.value > 10) {
        alert("Please enter sem3 gpa between 1-10");
        return false;
    }
    else if (sem4.value == "") {
        alert("Please enter sem4 gpa");
        return false;
    }
    else if (sem4.value > 10) {
        alert("Please enter sem4 gpa between 1-10");
        return false;
    }
    else if (sem5.value == "") {
        alert("Please enter sem5 gpa");
        return false;
    }
    else if (sem5.value > 10) {
        alert("Please enter sem5 gpa between 1-10");
        return false;
    }
    else if (sem6.value == "") {
        alert("Please enter sem6 gpa");
        return false;
    }
    else if (sem6.value > 10) {
        alert("Please enter sem6 gpa between 1-10");
        return false;
    }
    else if (sem7.value == "") {
        alert("Please enter sem7 gpa");
        return false;
    }
    else if (sem7.value > 10) {
        alert("Please enter sem7 gpa between 1-10");
        return false;
    }
    else if (sem8.value == "") {
        alert("Please enter sem8 gpa");
        return false;
    }
    else if (sem8.value > 10) {
        alert("Please enter sem8 gpa between 1-10");
        return false;
    }
    var value = parseInt(sem1.value) + parseInt(sem2.value) + parseInt(sem3.value) + parseInt(sem4.value) + parseInt(sem5.value) + parseInt(sem6.value) + parseInt(sem7.value) + parseInt(sem8.value);
    var result = value / 8;
    cgpa.value = result;

    if (result >= 7.5) {
        dis.value = "FIRST CLASS";
    }
    else if (result > 5) {
        dis.value = "SECOND CLASS";
    }
    else if (result < 5) {
        dis.value = "THIRD CLASS";
    }
}
