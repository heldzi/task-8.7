let minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0; // функция ИЛИ. Если Nan, то 0
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 0 || 100; // функция ИЛИ. Если NaN, то 100
(maxValue > 999) ? // Тернарный оператор. Проверяет величину
     maxValue = 999 : 
     maxValue;
(minValue < -999) ? // Тернарный оператор. Проверяет величину
     minValue = -999 : 
     minValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

const edin = [" ", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"]; // Массив для единиц
const nomer = ["одиннадцать","двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"]; // массив для 10-19
const desyat = [" ", " ", "двадцать","тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"]; // массив для десятков
const hundred = [" ", "сто","двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", ,"восемьсот", "девятьсот"]; // массив для сотен
let minus = "минус ";

function calc() {// функция для замены на текст; 
    if (answerNumber===0){  
        return "ноль";
    } if (answerNumber >= 1 && answerNumber <= 9){
        return edin[answerNumber];
    } if (answerNumber >= 10 && answerNumber <= 19){
        return nomer[answerNumber-11];
    } if (answerNumber >= 20 && answerNumber <= 99){
        return (desyat[Math.floor(answerNumber/10)]+ " " + edin[answerNumber%10]);
    } if (answerNumber >= 100 && answerNumber <= 999){
            if (answerNumber >= 111 && answerNumber <= 119) {
                return (hundred[Math.floor(answerNumber/100)] + " " + nomer[answerNumber%100-11]);
            } else{ return (hundred[Math.floor(answerNumber/100)]+ " " + desyat[Math.floor(answerNumber%100/10)]+ " " + edin[Math.floor(answerNumber%10)]); }
    } if (answerNumber <= -1 && answerNumber >= -9){
        return minus + edin[(Math.abs(answerNumber))];
    } if (answerNumber <= -10 && answerNumber >= -19){
        return minus + nomer[Math.abs(answerNumber)-11];
    } if (answerNumber <= -20 && answerNumber >= -99){
        return minus + desyat[(Math.floor(Math.abs(answerNumber/10)))]+ " " + edin[(Math.abs(answerNumber%10))];
    } if (answerNumber <= -100 && answerNumber >= -999){
        if (answerNumber <= -111 && answerNumber >= -119) {
            return minus + (hundred[(Math.floor(Math.abs(answerNumber)/100))] + " " + nomer[(Math.abs(answerNumber)%100-11)]);
        }else { return minus + (hundred[(Math.floor(Math.abs(answerNumber)/100))]+ " " + desyat[(Math.floor(Math.abs(answerNumber)%100/10))]+ " " + edin[(Math.floor(Math.abs(answerNumber)%10))]); }
    }
    
}
function answ1() { // первый вариант ответа
    (calc().length > 20) ? answerField.innerText = `Вы загадали число ${answerNumber }?` : answerField.innerText = `Вы загадали число ${calc() }?`;  
}
function answ2() { // второй вариант ответа 
    (calc().length > 20) ? answerField.innerText = `Это число ${answerNumber }?` : answerField.innerText = `Это число ${calc() }?`;
}
function answ3() { // третий вариант ответа
    (calc().length > 20) ? answerField.innerText = `Легко! Вы загадали ${answerNumber }?` : answerField.innerText = `Легко! Вы загадали ${calc() }?`;
}   

orderNumberField.innerText = orderNumber;
answ1();

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0')) || 0;
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100')) || 100;
    (maxValue > 999) ? // Тернарный оператор. Проверяет величину
     maxValue = 999 : 
     maxValue;
(minValue < -999) ? // Тернарный оператор. Проверяет величину
     minValue = -999 : 
     minValue;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
    gameRun = true;
    answ1();
}) // кнопка ретрай запускает игру заново

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const txt2 = Math.round( Math.random() * 2); // условия, чтобы рандомно была фраза(0-2)
            if (txt2 === 1){ 
                answ1();
            } else { 
                if (txt2 === 0){
                    answ2();
                } else {
                    answ3();
                }
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.ceil((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const txt = Math.round( Math.random() * 2); // условия, чтобы рандомно была фраза(0-2)
            if (txt === 1){
                answ1();
            } else { 
                if (txt === 0){
                    answ2();
                } else {
                    answ3();
                }
            }
        }
    }
})



document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const n = Math.round( Math.random() * 2); // условия, чтобы рандомно была фраза(0-2)
        if (n === 1){
            answerField.innerText = "Я справился!";
            document.getElementById('answerField').style.color = ("red") // пользовательские стили
            gameRun = false;
        } else { 
            if (n === 0){
            answerField.innerText = "Я отгадал!";
            document.getElementById('answerField').style.color = ("red") // пользовательские стили
            gameRun = false;
            } else {
                answerField.innerText = "Легко!";
                document.getElementById('answerField').style.color = ("red") // пользовательские стили
                gameRun = false;
            }
        }
    
    }
})

