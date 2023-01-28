

function calGrade() {
    let assignScore = $('#assign').val() * .5;
    let groupScore = $('#group').val() * .1;
    let quizScore = $('#quiz').val() * .1;
    let midScore = $('#mid').val() * .1;
    let finalScore = $('#final').val() * .1;
    let intexScore = $('#intex').val() * .1;

    let total = assignScore + groupScore + quizScore + midScore + finalScore + intexScore;
    total = Math.round(total); 

    if (total == 0) { //if total is 0: re-prompt to enter numbers with value
        alert('Please enter valid numbers!');
    }

    else {
        document.getElementById('total').innerHTML += (total + '%'); //adds toatal to innerHTML of current total tag
        document.getElementById('total').style.display = 'block'; //unhides p-tag with total percentage
    }
    
}

function hideScore() { //hides total score when clear button is clicked
    document.getElementById("total").style.display = 'none';
    document.getElementById("total").innerHTML = 'Final score: ';
}