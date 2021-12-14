import { printLine } from './modules/print';
import { convert} from './modules/convertPage'

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect. now');

printLine("Using the 'printLine' function from the Print Module");


let keyHeld = ''


document.addEventListener('keydown', event => { 
  if(event.key !== keyHeld){
    keyHeld = event.key
  }
})

document.addEventListener('keyup', event => {
  if(keyHeld !== '') {
    keyHeld = ''
  }
})

document.querySelector('body').addEventListener('click', (event) => {
  if(keyHeld === 'b'){
    convert(event)
  }
})