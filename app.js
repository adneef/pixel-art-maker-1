document.addEventListener('DOMContentLoaded', function(){

//target the easel and add a click event listener to the easel,
//also the event listener will target the grid and the palette
//allowing color picking and background changing on the grid
let easel = document.querySelector('.easel')
let gridContainer = document.querySelector('.gridContainer')
let colorSelected
let backgroundImageColor

easel.addEventListener('click', function(){
  if(event.target && event.target.matches('.paletteColor')){
    colorSelected = event.target.style.backgroundColor
    backgroundImageColor = event.target.style.backgroundImage
    currentColor.style.cssText = `background: ${colorSelected}; background-image: ${backgroundImageColor}`
  } if(event.target && event.target.matches('.gridSquare')){
    event.target.style.cssText = `background-color: ${currentColor.style.backgroundColor}`
  }
})

//hidden functionality - pull color from the webpage body
let body = document.querySelector('body')
body.addEventListener('click', function(){
  if(event.target && event.target.matches('body')){
    colorSelected = event.target.style.backgroundColor
    currentColor.style.cssText = `background: ${colorSelected}; background-image: radial-gradient(circle farthest-corner at 8px 8px, ghostWhite 10%, ${colorSelected} 50%) `
  }
})


//attempting to drag-paint

let isMouseDown = false

function mouseDown() {
  isMouseDown = true
}

function mouseUp() {
  isMouseDown = false
}

function mouseOver() {
  if (isMouseDown) {

  }
}
easel.addEventListener('mousedown', function(){
  if(event.target && event.target.matches('.gridSquare')){

    }

})


//make the grid and append each grid square to the gridContainer
 function makeGrid(){
   for (var i = 0; i < 980; i++) {
     let gridSquare = document.createElement('div')
     gridSquare.classList.add('gridSquare')
     gridContainer.appendChild(gridSquare)
   }
 }

//make a color palette and dynamically create css classes for each color, including a current color selector
let paletteContainer = document.querySelector('.paletteContainer')
paletteContainer.innerText = 'Choose a color: '

let paletteColor
let myColors =['red','orange', 'yellow', 'green', 'teal', 'cyan', 'blue','purple', 'black', 'grey', 'white']

let currentColor = document.createElement('div')
currentColor.classList.add('currentColor')
let currentColorContainer = document.createElement('div')
currentColorContainer.classList.add('paletteContainer', 'currentColorContainer')
currentColorContainer.innerText = 'Current color: '

function makePalette(){
  for (var i = 0; i < myColors.length; i++) {
    paletteColor = document.createElement('div')
    paletteColor.classList.add('paletteColor')
    paletteColor.style.cssText = `background-color: ${myColors[i]}; background-image: radial-gradient(circle farthest-corner at 8px 8px, ghostWhite 10%, ${myColors[i]} 50%) `
    paletteContainer.appendChild(paletteColor)
  }
  paletteContainer.appendChild(currentColorContainer)
  currentColorContainer.appendChild(currentColor)
}




makeGrid()
makePalette()
})
