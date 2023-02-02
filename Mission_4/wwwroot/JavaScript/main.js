

function calGrade() {
    let assignScore = $('#assign').val() * .5;
    let groupScore = $('#group').val() * .1;
    let quizScore = $('#quiz').val() * .1;
    let midScore = $('#mid').val() * .1;
    let finalScore = $('#final').val() * .1;
    let intexScore = $('#intex').val() * .1;
    let letterGrade;

    let total = assignScore + groupScore + quizScore + midScore + finalScore + intexScore;
    total = Math.round(total); 

    if (total == 0) { //if total is 0: re-prompt to enter numbers with value
        alert('Please enter valid numbers!');
    }

    else {

        if (total >= 94)
            letterGrade = 'A';
        else if (total < 94 && total >= 90)
            letterGrade = 'A-';
        else if (total < 89 && total >= 87)
            letterGrade = 'B+';
        else if (total < 87 && total >= 84)
            letterGrade = 'B';
        else if (total < 84 && total >= 80)
            letterGrade = 'B-';
        else if (total < 80 && total >= 77)
            letterGrade = 'C+';
        else if (total < 77 && total >= 74)
            letterGrade = 'C';
        else if (total < 74 && total >= 70)
            letterGrade = 'C-';
        else if (total < 70 && total >= 67)
            letterGrade = 'D+';
        else if (total < 67 && total >= 64)
            letterGrade = 'D';
        else if (total < 64 && total >= 60)
            letterGrade = 'D-';
        else
            letterGrade = 'E';

        alert('Final Grade: ' + letterGrade);
    }
    
}

