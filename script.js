const start_btn = document.getElementById("btn")
const container = document.querySelector('.container')
const start_evt = document.getElementById('startEvent');
let endEvt;
let score = {
    red: 0,
    blue: 0,
    green: 0,
    yellow: 0
}
function start() {
    start_evt.remove();
    const endEvt = document.createElement('div')
    endEvt.classList.add('event-end')
    endEvt.innerHTML = `<h2>Waiting to start event ...</h2>`
    endEvt.classList.add('animate')
    container.appendChild(endEvt)
    setTimeout(OpeningCeremony, 1000)
}


function OpeningCeremony() {
    console.log("Let the games start")
    const endEvent = document.querySelector('.event-end');
    endEvt = endEvent;
    endEvt.innerHTML = `<h2>Let the games start ... </h2>`
    container.appendChild(endEvt)

    console.log("Score at starting ", score)
    // Race100M(score);
    setTimeout(Race100M, 3000)
}
function Race100M() {
    let runningTime = [];
    runningTime.push((Math.random() * 5) + 10)
    runningTime.push((Math.random() * 5) + 10);
    runningTime.push((Math.random() * 5) + 10);
    runningTime.push((Math.random() * 5) + 10);

    // console.log(runningTime, runningTime[0], runningTime.at(1), runningTime.at(2), runningTime.at(3))
    // console.log(Math.min(runningTime.at(0), runningTime.at(1), runningTime.at(2), runningTime.at(3)))
    let minTime = Math.min(runningTime.at(0), runningTime.at(1), runningTime.at(2), runningTime.at(3));
    let minTime_Index = runningTime.indexOf(minTime);
    let minTimeTeam;
    if (minTime_Index == 0) {
        minTimeTeam = "red"
        score.red += 100
    }
    else if (minTime_Index == 1) {
        minTimeTeam = "blue"
        score.blue += 100
    }
    else if (minTime_Index == 2) {
        minTimeTeam = "green"
        score.green += 100
    }
    else if (minTime_Index == 3) {
        minTimeTeam = "yellow"
        score.yellow += 100
    }
    let secondMinTime = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < runningTime.length; i++) {
        if (runningTime[i] != minTime && runningTime[i] < secondMinTime) {
            secondMinTime = runningTime[i]
        }
    }
    let secondMinTime_Index = runningTime.indexOf(secondMinTime);
    let secondMinTeam;
    // console.log(secondMinTime, secondMinTime_Index);
    if (secondMinTime_Index == 0) {
        secondMinTeam = "red"
        score.red += 50
    }
    else if (secondMinTime_Index == 1) {
        secondMinTeam = "blue"
        score.blue += 50
    }
    else if (secondMinTime_Index == 2) {
        secondMinTeam = "green"
        score.green += 50
    }
    else if (secondMinTime_Index == 3) {
        secondMinTeam = "yellow"
        score.yellow += 50
    }
    console.log("1st in 100m race", minTimeTeam);
    console.log("2nd in 100m race ", secondMinTeam)

    console.log("Score after 100m race ", score)
    endEvt.innerHTML = `<h2>Results After 100 Race ...</h2>
                            <span class="red-result">Red : ${score.red}</span>
                            <span class="blue-result">Blue : ${score.blue}</span>
                            <span class="green-result">Green : ${score.green}</span>
                            <span class="yellow-result">Yellow : ${score.yellow}</span>`
    setTimeout(LongJump, 2000)

}

function LongJump() {
    let teams = ['red', 'blue', 'green', 'yellow'];
    let randomNum = Math.floor(Math.random() * teams.length)
    let winnerInLongJump = teams[randomNum];
    if (winnerInLongJump == "red") {
        score.red += 150
    }
    else if (winnerInLongJump == "blue") {
        score.blue += 150
    }
    else if (winnerInLongJump == "green") {
        score.green += 150
    }
    else if (winnerInLongJump == "yellow") {
        score.yellow += 150
    }
    console.log("Winner of long jump ", winnerInLongJump)
    console.log("Score after long jump ", score)
    endEvt.innerHTML = `<h2>Results After Long Jump ...</h2>
                            <span class="red-result">Red : ${score.red}</span>
                            <span class="blue-result">Blue : ${score.blue}</span>
                            <span class="green-result">Green : ${score.green}</span>
                            <span class="yellow-result">Yellow : ${score.yellow}</span>`

    setTimeout(HighJump, 1000)
}

function HighJump() {
    let winerInHighJump = prompt("Which Team won high jump ");
    let isHighJumpCancelled = false;
    if (winerInHighJump == "red") {
        score.red += 100
    }
    else if (winerInHighJump == "blue") {
        score.blue += 100
    }
    else if (winerInHighJump == "green") {
        score.green += 100
    }
    else if (winerInHighJump == "yellow") {
        score.yellow += 100
    }
    else {
        isHighJumpCancelled = true;
    }

    if (isHighJumpCancelled) {
        endEvt.innerHTML = `<h2 style="color:red;">High Jump cancelled ...</h2>
                            <h2>Showing old result ...</h2>
                            <span class="red-result">Red : ${score.red}</span>
                            <span class="blue-result">Blue : ${score.blue}</span>
                            <span class="green-result">Green : ${score.green}</span>
                            <span class="yellow-result">Yellow : ${score.yellow}</span>`
        console.log("Event was cancelled... old scores", score)
    }
    else {
        endEvt.innerHTML = `<h2>Results After High Jump ...</h2>
        <span class="red-result">Red : ${score.red}</span>
        <span class="blue-result">Blue : ${score.blue}</span>
        <span class="green-result">Green : ${score.green}</span>
        <span class="yellow-result">Yellow : ${score.yellow}</span>`
        console.log("Scores after High Jump ", score)
    }

    setTimeout(AwardCeremony, 1000)

}

function AwardCeremony() {
    let teamScores = [score.red, score.blue, score.green, score.yellow]
    let teamScoresSorted = [...teamScores]
    teamScores.sort((a, b) => {
        return b - a;
    })
    // console.log(teamScores)
    let teamsInWinningOrder = [];
    teamScores.forEach((element) => {
        // console.log(element)
        if (score.red == element && !teamsInWinningOrder.includes('red')) {
            teamsInWinningOrder.push('red')

        }
        else if (score.blue == element && !teamsInWinningOrder.includes('blue')) {
            teamsInWinningOrder.push('blue')
        }
        else if (score.green == element && !teamsInWinningOrder.includes('green')) {
            teamsInWinningOrder.push('green')
        }
        else if (score.yellow == element && !teamsInWinningOrder.includes('yellow')) {
            teamsInWinningOrder.push('yellow')
        }
    })
    // console.log(teamsInWinningOrder)
    let resultHtml = `<h2 style="color:green;">Results of Sport day event ...</h2>`

    teamsInWinningOrder.forEach((element, index) => {
        if (index == 0) {
            resultHtml += `<span class="result">${element} came First with ${score[element]} points</span>`
            console.log(`${element} came First with ${score.red} points`)
        }
        else if (index == 1) {
            resultHtml += `<span class="result">${element} came Second with ${score[element]} points</span>`
            console.log(`${element} came Second with ${score.blue} points`)
        }
        else if (index == 2) {
            resultHtml += `<span class="result">${element} came Third with ${score[element]} points</span>`
            console.log(`${element} came Third with ${score.green} points`)
        }
        else if (index == 3) {
            resultHtml += `<span class="result">${element} came Fourth with ${score[element]} points</span>`
            console.log(`${element} came Fourth with ${score.yellow} points`)
        }
    })
    endEvt.innerHTML = resultHtml;
}

start_btn.addEventListener('click', start)
