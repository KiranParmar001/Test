//bootstrap popover 
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const quizMessageContainer = document.getElementById("quizMessageContainer")




let previousPageVisibility = [false, false, false, false]
let currentNavTickVisibility = [false, false, false, false]

const section1 = document.getElementById("section1")
const nav = document.getElementsByTagName("nav")
const nav_ = nav[0]
const navHeight = nav_.offsetHeight

section1.style.marginTop = `${navHeight}px`

const navListItems = document.getElementsByClassName("navListItem")
const sections = document.getElementsByClassName("pageSection")

function displayTick() {
    console.log("inside display tick");
}

// const observer = new IntersectionObserver((entries) => {
//     console.log("inside the observer callback");
//     if(entries[0].isIntersecting) {
//         displayTick()
//     }
// })

// console.log("sections are ", sections);

// for(let i=0; i<navListItems.length; i++) {
//     const currentSection = sections[i]
//     const currentNavItem = navListItems[i]
//     const currentNavAnchor = currentNavItem.childNodes[0]
//     console.log("current nav anchor is ", currentNavAnchor);
//     observer.observe(currentNavAnchor, {
//         attributes: true,
//         attributeFilter: ["class"],
//         childList: false,
//         characterData: false
//     })
// }

function introductionButtonClickHandler(e) {
    const buttonOfInterest = e.target
    let nextSibling = buttonOfInterest.nextSibling
    while (nextSibling && nextSibling.nodeType != 1) {
        nextSibling = nextSibling.nextSibling
    }
    if (nextSibling.classList.contains("hidden")) {
        nextSibling.classList.toggle("hidden")
    }
}

const introButtons = document.getElementsByClassName("introButton");

for (let i = 0; i < introButtons.length; i++) {
    const currentIntroButton = introButtons[i]
    currentIntroButton.addEventListener("click", introductionButtonClickHandler)
}

var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function (e) {
    let imageOfInterest = e.relatedTarget.childNodes[3]
    let classListOfImage = imageOfInterest.classList
    if (classListOfImage.contains("hidden")) {
        imageOfInterest.classList.toggle("hidden")
    }
})

let correctAnswerSelected;
let selectWrongOption2
let selectWrongOption3
let selectWrongOption4
const submitButton = document.getElementById("submit")
const showAnswerButton = document.getElementById("showAnswerButton")

submitButton.addEventListener("click", () => {
    if (showAnswerButton.classList.contains("hidden")) {
        showAnswerButton.classList.toggle("hidden")
    }
})

function showMessageForQuiz(msg) {
    quizMessageContainer.textContent = msg
}

function showSelectAnswerMessage() {
    quizMessageContainer.style.backgroundColor = "yellow"
    showMessageForQuiz("First Select an Answer")
}
function showWrongAnswerMessage() {
   quizMessageContainer.style.backgroundColor = "red"
    if (selectWrongOption2 == false) {
        showMessageForQuiz("Incorrect This is the function’s value at x=-8, that is f(-8)=-3")
    }
    else if (selectWrongOption3 === false) {
        showMessageForQuiz("Incorrect, This is the value where you need to evaluate the limit. ")
    }
    else if (selectWrongOption4 === false) {
        showMessageForQuiz("Incorrect, It is possible for the limit of a function to exist at a point, though the limit of the function and the value of the function at the point is different.")
    }
}
function showCorrectAnswerMessage() {
    quizMessageContainer.style.backgroundColor = "green"
    showMessageForQuiz("Correct, Despite the fact that f(-8)=-3, as the x-values approach -8 from either side, the f(x) values approach -6")
}

function removeOptionHighlights() {
    const optionText = document.getElementsByClassName("optionText")
    const optionButtons = document.getElementsByClassName("optionButton")
    for (let i = 0; i < optionButtons.length; i++) {
        let currentOptionButton = optionButtons[i]
        currentOptionButton.classList.remove("highlight")
    }

    for (let i = 0; i < optionText.length; i++) {
        let currentOptionText = optionText[i]
        currentOptionText.style.backgroundColor = "cbcbc4"
    }
}

const correctAnswerButton = document.getElementById("correctAnswer")
const wrongAnswerButtons = document.getElementsByClassName("wrongAnswer")
const selectOption2 = document.getElementsByClassName("btnradio2");
const selectOption3 = document.getElementsByClassName("btnradio3");
const selectOption4 = document.getElementsByClassName("btnradio4");

for (let i = 0; i < wrongAnswerButtons.length; i++) {
    let currentWrongAnswerButton = wrongAnswerButtons[i]
    currentWrongAnswerButton.addEventListener("click", (e) => {
        // removeOptionHighlights()
        // console.log("target is ", e.target);
        // if(e.target && e.target.classList) {
        //     e.target.classList.add("highlight")
        // }
        correctAnswerSelected = false
    })
}
for (let i = 0; i < selectOption2.length; i++) {
    let currentWrongAnswerButton = selectOption2[i]
    currentWrongAnswerButton.addEventListener("click", (e) => {
        selectWrongOption2 = false
    })
}
for (let i = 0; i < selectOption3.length; i++) {
    let currentWrongAnswerButton = selectOption3[i]
    currentWrongAnswerButton.addEventListener("click", (e) => {
        selectWrongOption3 = false
    })
}
for (let i = 0; i < selectOption4.length; i++) {
    let currentWrongAnswerButton = selectOption4[i]
    currentWrongAnswerButton.addEventListener("click", (e) => {
        selectWrongOption4 = false
    })
}
correctAnswerButton.addEventListener("click", (e) => {
    // removeOptionHighlights()
    // console.log("target is ", e.target);
    // e.target.classList.add("highlight")
    correctAnswerSelected = true
})

submitButton.addEventListener("click", () => {
    if (correctAnswerSelected === true) {
        showCorrectAnswerMessage()
    } else if (correctAnswerSelected === false) {
        showWrongAnswerMessage()
    } else {
        showSelectAnswerMessage()
    }
})


MathJax.Hub.Config({ tex2jax: { inlineMath: [['$', '$'], ['\\(', '\\)']] } });
