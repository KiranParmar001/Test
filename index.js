//bootstrap popover 
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const quizMessageContainer = document.getElementById("quizMessageContainer")
let correctAnswerSelected



let previousPageVisibility = [false, false, false, false]
let currentNavTickVisibility = [false, false, false, false]

const section1 = document.getElementById("section1")
const nav = document.getElementsByTagName("nav")
const nav_ = nav[0]
const navHeight = nav_.offsetHeight

section1.style.marginTop=`${navHeight}px`

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
    while(nextSibling && nextSibling.nodeType != 1) {
        nextSibling = nextSibling.nextSibling
    }
    if(nextSibling.classList.contains("hidden")) {
        nextSibling.classList.toggle("hidden")
    }
}

const introButtons = document.getElementsByClassName("introButton");

for(let i=0; i<introButtons.length; i++) {
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

const submitButton = document.getElementById("submit")
const showAnswerButton = document.getElementById("showAnswerButton")

submitButton.addEventListener("click", () => {
    if(showAnswerButton.classList.contains("hidden")) {
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
    showMessageForQuiz("Wrong Answer")
}
function showCorrectAnswerMessage() {
    quizMessageContainer.style.backgroundColor = "green"
    showMessageForQuiz("Correct Answer")
}

function removeOptionHighlights() {
    const optionText = document.getElementsByClassName("optionText")
    const optionButtons = document.getElementsByClassName("optionButton")
    for(let i = 0; i < optionButtons.length; i++) {
        let currentOptionButton = optionButtons[i]
        currentOptionButton.classList.remove("highlight")
    }

    for(let i = 0; i < optionText.length; i++) {
        let currentOptionText = optionText[i]
        currentOptionText.style.backgroundColor = "cbcbc4"
    }
}

const correctAnswerButton = document.getElementById("correctAnswer")
const wrongAnswerButtons = document.getElementsByClassName("wrongAnswer")

for(let i = 0; i < wrongAnswerButtons.length; i++) {
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

correctAnswerButton.addEventListener("click", (e) => {
    // removeOptionHighlights()
    // console.log("target is ", e.target);
    // e.target.classList.add("highlight")
    correctAnswerSelected = true
})

submitButton.addEventListener("click", () => {
    if(correctAnswerSelected === true) {
        showCorrectAnswerMessage()
    } else if(correctAnswerSelected === false) {
        showWrongAnswerMessage()
    } else {
        showSelectAnswerMessage()
    }
})


MathJax.Hub.Config({tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}});