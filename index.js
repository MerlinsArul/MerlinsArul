const select = document.getElementById('Grades');
select.addEventListener('change', selectGrade);
function selectGrade() {
    const grade = select.value;
    if (grade == 'O') {
        console.log("You are Excellent");
    }
    else if (grade == 'A') {
        console.log("You are Very Good");
    }
    else if (grade == 'B') {
        console.log("You are Good");
    }
    else if (grade == 'C') {
        console.log("You are Just Pass");
    }
    else {
        console.log("You are Fail");
    }
}