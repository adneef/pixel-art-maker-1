document.addEventListener('DOMContentLoaded', function(){

//target the easel and add a click event listener to the easel,
//also the event listener will target the grid, and the palette
//allowing color picking and background changing on the grid
let easel = document.querySelector('.easel')
let gridContainer = document.querySelector('.gridContainer')

easel.addEventListener('click', function(){
  if(event.target && event.target.matches('.paletteColor')){
    let colorSelected = event.target.style.backgroundColor
    currentColor.style.cssText = `background: ${colorSelected}`
  } if(event.target && event.target.matches('.gridSquare')){
    event.target.style.cssText = `background-color: ${currentColor.style.backgroundColor}`
  }
})

// //hidden functionality
// let body = document.querySelector('body')
// body.addEventListener('click', function(){
//
// })

//attempting to drag paint

//make the grid and append each grid square to the gridContainer
 function makeGrid(){
   for (var i = 0; i < 1000; i++) {
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
currentColor.classList.add('paletteColor', 'currentColor')
let currentColorContainer = document.createElement('div')
currentColorContainer.classList.add('paletteContainer', 'currentColorContainer')
currentColorContainer.innerText = 'Current color: '

function makePalette(){
  for (var i = 0; i < myColors.length; i++) {
    paletteColor = document.createElement('div')
    paletteColor.classList.add('paletteColor')
    paletteColor.style.cssText = `background-color: ${myColors[i]}`
    paletteContainer.appendChild(paletteColor)
  }
  paletteContainer.appendChild(currentColorContainer)
  currentColorContainer.appendChild(currentColor)
}




makeGrid()
makePalette()
})
