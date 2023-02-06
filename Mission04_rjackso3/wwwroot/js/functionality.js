$("#calcGrade").click(function () {

    let finalGrade = 0;

    let assignments = $("#assignments").val();
    let groupProj = $("#groupProj").val();
    let quizzes = $("#quizzes").val();
    let midterm = $("#midterm").val();
    let finalExam = $("#finalExam").val();
    let intex = $("#intex").val();

    //Calculates weighted final grade
    finalGrade = ((assignments * .5) + (groupProj * .1) + (quizzes * .1) + (midterm * .1) + (finalExam * .1) + (intex * .1));

    //Assigns letter grade based on final grade
    let letterGrade = "";
    if (finalGrade >= 94) {
        letterGrade = "A";
    } else if (finalGrade >= 90) {
        letterGrade = "A-";
    } else if (finalGrade >= 87) {
        letterGrade = "B+";
    } else if (finalGrade >= 84) {
        letterGrade = "B";
    } else if (finalGrade >= 80) {
        letterGrade = "B-";
    } else if (finalGrade >= 77) {
        letterGrade = "C+";
    } else if (finalGrade >= 74) {
        letterGrade = "C";
    } else if (finalGrade >= 70) {
        letterGrade = "C-";
    } else if (finalGrade >= 67) {
        letterGrade = "D+";
    } else if (finalGrade >= 64) {
        letterGrade = "D";
    } else if (finalGrade >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }

    $("#finalGrade").html(letterGrade);
    // Alerts the Letter grade
    alert(letterGrade);
})