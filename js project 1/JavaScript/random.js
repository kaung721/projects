let arrayBtn = [
    document.querySelector("#btn1"),
    document.querySelector("#btn2"),
    document.querySelector("#btn3"),
    document.querySelector("#btn4"),
    document.querySelector("#btn5"),
]
let array = [
    ["The Turkey", "Mom", "Dad", "The Dog", "My teacher", "The elephant", "The cat"],
    ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"],
    ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"],
    ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"],
    ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]
];
let arrayResult = [ "", "", "", "", ""];
let arrayChoose = [ 0, 0, 0, 0, 0];

let result = document.querySelector("#result");
let btnResult = document.querySelector("#btnResult");
let btnReset = document.querySelector("#btnReset");
let btnRandom = document.querySelector("#btnRandom");

let allowZero = false;

arrayBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        if (arrayChoose[index] == array[index].length) { 
            arrayChoose[index] = 0;
        }
        arrayResult[index] = array[index][arrayChoose[index]];

        document.querySelectorAll(`body > section:first-child > div:nth-child(${index + 1}) > div`).forEach((el) => {
            el.classList.remove("active");
        })
        document.querySelector(`body > section:first-child > div:nth-child(${index + 1}) > div:nth-child(${arrayChoose[index] + 2})`).classList.add("active");

        arrayChoose[index]++;
    })
});

function showResult() {
    if(!arrayChoose.includes(0) || allowZero == true) {
        result.textContent = arrayResult.join(" ");    
    }
    else {
        alert("Please choose all the words!");
    }
}

btnResult.addEventListener("click", showResult);
btnReset.addEventListener("click", () => {
    arrayChoose = [ 0, 0, 0, 0, 0];
    arrayResult = [ "", "", "", "", ""];
    result.textContent = "";
    document.querySelectorAll(`body > section:first-child > div > div`).forEach((el) => {
        el.classList.remove("active");
    })
    allowZero = false;
})
btnRandom.addEventListener("click", () => {
    arrayChoose = [ 
        Math.floor(Math.random() * array[0].length), 
        Math.floor(Math.random() * array[1].length), 
        Math.floor(Math.random() * array[2].length), 
        Math.floor(Math.random() * array[3].length), 
        Math.floor(Math.random() * array[4].length)
    ];
    arrayChoose.forEach((num, index) => {
        arrayResult[index] = array[index][num];
        document.querySelectorAll(`body > section:first-child > div:nth-child(${index + 1}) > div`).forEach((el) => {
            el.classList.remove("active");
        })
        document.querySelector(`body > section:first-child > div:nth-child(${index + 1}) > div:nth-child(${num + 2})`).classList.add("active");
    })
    allowZero = true;
    showResult();
})