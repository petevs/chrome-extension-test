const toBTC = (num) => {
    return Math.round(num * 1000000) / 1000000
  }
  
const convertToBTC = (num) => {
let value = Number(num.replace(/[^0-9.-]+/g,""))
value = toBTC(value) / 64000
return value + ' BTC'
}

export const convert = (event) => {
const curr = event.target
let theText = curr.innerText
curr.innerText = convertToBTC(theText)
}

  