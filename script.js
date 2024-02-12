// 랜덤번호 지정
// 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면 "맞췄습니다"
// 랜덤번호 < 유저번호 : Down
// 랜덤번호 > 유저번호 : Up
// 리셋버튼을 누르면 게임이 리셋된다.
// 5번의 기회를 다 쓰면 게임이 끝난다. 더이상 추측 불가, 버튼이 disabled
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려 준다. 기회를 깍지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면 알려 준다. 기회를 깍지 않는다.

let computerNum = 0;
let userInput = document.getElementById("user-input")
let userAction = document.getElementById("user-action")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chances = 10
let chancesArea = document.getElementById("chances-area")
let enteredValues = []

function pickComputerNum(){
    computerNum = Math.floor(Math.random()*100)+1
    console.log(computerNum)
}

userAction.addEventListener("click",play);
resetButton.addEventListener("click",reset);
userInput.addEventListener("focus",function(){userInput.value=null})

function play(){
    let userValue = userInput.value;
    if (userValue<1 || userValue>100){
        resultArea.textContent = "1~100 사이의 값을 입력해 주세요.";
        return;
    }
    if (enteredValues.includes(userValue)){
        resultArea.textContent = "이미 입력한 값입니다.다시 입력해 주세요.";
        return;
    }
    chances--;
    chancesArea.textContent = `남은 기회: ${chances}번`
    if(userValue ==computerNum){
        resultArea.textContent = "정답입니다.";
        userAction.disabled=true;
    } else if (userValue < computerNum) {
        resultArea.textContent = "Up!!!"
    } else {
        resultArea.textContent = "Down!!!"
    }
    if (chances==0){
        userAction.disabled=true;
    }
    enteredValues.push(userValue);
}

function reset(){
    userInput.value = null
    resultArea.textContent = "정답을 맞춰 보세요.";
    userAction.disabled=false;
    chances = 5;
    chancesArea.textContent = `남은 기회: ${chances}번`
    pickComputerNum();
    
}

pickComputerNum()
