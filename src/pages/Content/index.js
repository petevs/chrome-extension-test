import { printLine } from './modules/print';
import { convert} from './modules/convertPage'

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect. now');

printLine("Using the 'printLine' function from the Print Module");

document.querySelector('body').addEventListener('click', (event) => {
  console.log(event)
  if(event.shiftKey){
    convert(event)
  }
})