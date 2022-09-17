const wordTest = document.querySelector(".words"),
 hintTest = document.querySelector(".hint span"),
 timeText = document.querySelector(".time b")
 answerText = document.querySelector(".answer")
 inputField = document.querySelector("input"),
 refreshBtn = document.querySelector(".refresh_btn"),
 confirmBtn = document.querySelector(".confirm_btn");


 let correctWord, timer, count;
count = () => {
    if(maxTime > 10){
        return timer + 10;
    }
    else if (maxTime > 20){
        return timer + 20;
    }
    else if (maxTime < 10){
        return timer;
    }
}
 const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
           return timeText.innerHTML = maxTime;

        }
        clearInterval(timer);
        answerText.innerHTML =`Time up! ${correctWord} is a correct word, Please try again!!`;
        clearInterval(timer); 
    }, 1000);
    
 }
const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordTest.innerHTML = wordArray.join("");
    hintTest.innerHTML = randomObj.hint;
    answerText.innerHTML = null;
    inputField.value = "";
    correctWord = randomObj.word.toLocaleLowerCase();
    
}
initGame();

const checkWord = () => {
   
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) 
    return answerText.innerHTML = "Please enter words in the box!";
    else if (userWord !== correctWord)
        return answerText.innerHTML = `Oops!! ${userWord} is not a correct word`;
        
       
        
    else if (userWord == correctWord)
        return answerText.innerHTML = `Yayy!! ${userWord} is a correct word!`,
        
        clearTimeout(timer);
       
        
        
       
        
       
}

refreshBtn.addEventListener("click", initGame);
confirmBtn.addEventListener("click", checkWord);