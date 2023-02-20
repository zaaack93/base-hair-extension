// Product Page - Show option name
const sizeOptBtns = document.querySelectorAll('.rdc-details span.rdc-option')
const optionLabels = document.querySelectorAll('.rdc-details .bh-option-name')

optionLabels.forEach(optionLabel => {
let firstVarTexts = Array.from(optionLabel.parentElement.parentElement.nextElementSibling.children[0].children)

firstVarTexts.forEach(firstVarText => {
if(firstVarText.children[0].checked) {optionLabel.innerText = firstVarText.innerText}
})
})

const showOptionName = function () {
let optionName = this.closest('.selector-wrapper')
    optionName = optionName.previousSibling.children[0].children[1]
    optionName.innerText = `${this.getAttribute('data-value')}`
}

sizeOptBtns.forEach(sizeOptBtn => {sizeOptBtn.addEventListener('click', showOptionName)})

// Product Page - Guide Box
const guideBtns = document.querySelectorAll('.bh-option-guide')
let guideBoxImgs = document.querySelectorAll('.bh-og-img')
const guideBoxes = document.querySelectorAll('.bh-option-guide-box')
let guideCloseBtns = document.querySelectorAll('span.bh-og-close')
let guideBgs = document.querySelectorAll('.bh-option-guide-box-bg')

const showGuideBox = function () {
guideBoxes.forEach(guideBox => {
    if((this.getAttribute('data-id') == guideBox.getAttribute('data-id'))) {
    if(guideBox.classList.contains('rdc-d-none')) {
      guideBox.classList.remove('rdc-d-none')
    } else {
     guideBox.classList.add('rdc-d-none')
    }
    } else { 
      guideBox.classList.add('rdc-d-none')
    }
})
}

guideBtns.forEach(guideBtn => {guideBtn.addEventListener('click', showGuideBox)})
guideCloseBtns.forEach(guideCloseBtn => {guideCloseBtn.addEventListener('click', showGuideBox)})
guideBgs.forEach(guideBg => {guideBg.addEventListener('click', showGuideBox)})


// Home Page - IG Section
const cardSlider = document.querySelector('.IG-cards-slider')


if(cardSlider) {
const arrowNavs = document.querySelectorAll('.ig-nav')
const igCards = document.querySelectorAll('.IG-cards-card-outer')
const cardSize = 22.5;
let slideSize = 0;
let clickCount = 0;
  
arrowNavs[0].style.display = 'none'

const slideIGCards = function () {
  let isPrev = this.classList.contains('prev')

  if(isPrev) {
    if(clickCount>0) {
    slideSize += cardSize 
    clickCount--

    if(clickCount == 0) {arrowNavs[0].style.display = 'none'} 
    if (clickCount == igCards.length-5) {arrowNavs[1].style.display = 'flex'}
    } 
   
  } else {
    if(clickCount<igCards.length-4) {
      slideSize -= cardSize 
      clickCount++

     if(clickCount == igCards.length-4) {arrowNavs[1].style.display = 'none'} 
     if (clickCount == 1) {arrowNavs[0].style.display = 'flex'}
    } 
    }     
  cardSlider.style.transform = `translateX(${slideSize}vw)`
}
arrowNavs.forEach(arrowNav => {arrowNav.addEventListener('click', slideIGCards)})

}



