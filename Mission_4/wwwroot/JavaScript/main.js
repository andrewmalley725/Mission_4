

function calGrade() {
    let assignScore = $('#assign').val() * .5;
    let groupScore = $('#group').val() * .1;
    let quizScore = $('#quiz').val() * .1;
    let midScore = $('#mid').val() * .1;
    let finalScore = $('#final').val() * .1;
    let intexScore = $('#intex').val() * .1;

    let total = assignScore + groupScore + quizScore + midScore + finalScore + intexScore;
    total = Math.round(total);

    if (total == 0) {
        alert('Please enter valid numbers!');
    }

    else {
        document.getElementById('total').innerHTML += (total + '%');
        document.getElementById('total').style.display = 'block';
    }
    
}

function hideScore() {
    document.getElementById("total").style.display = 'none';
    document.getElementById("total").innerHTML = 'Final score: ';
}