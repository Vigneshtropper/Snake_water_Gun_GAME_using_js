/*
//console.log(document.body.firstChild)
//console.log(document.body.lastChild)
let arr = document.body.childNodes
//console.log(arr)
//console.log(document.body.p)
//console.log(document.body.childNodes[1])

// element only navigatio
let t = document.body.lastElementChild
// console.log(t.firstElementChild)
// console.log(t.nextElementSibling)
// console.log(t.lastElementChild)
let a  =document.getElementsByClassName("dropdown1")
console.log(a)
console.log(document.getElementsByClassName(""))
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
}
let para = document.getElementById("para1")
para.style.background = "green"
document.querySelectorAll("#courselExample")
console.log(Document.querryselector(".carousel_slide"))
*/


document.getElementsByTagName("nav").firstelement.style.color = "red"

document.getElementsByTagName("nav").lastElement.style.clor = "green"