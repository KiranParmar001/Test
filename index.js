let previousPageVisibility = [false, false, false, false]
let currentNavTickVisibility = [false, false, false, false]

const section1 = document.getElementById("section1")
const nav = document.getElementsByTagName("nav")
const nav_ = nav[0]
const navHeight = nav_.offsetHeight

section1.style.marginTop=`${navHeight}px`

const navListItems = document.getElementsByClassName("navListItem")
const sections = document.getElementsByClassName("pageSection")

// function displayTick(())

// for(let i=0; i<navListItems.length; i++) {
//     const currentSection = sections[i]
//     let observer = new IntersectionObserver()
// }



const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

var firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]')
firstScrollSpyEl.addEventListener('activate.bs.scrollspy', function (e) {
  console.log("scroll event triggered - ", e);
})