let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function aumentar() {

 count = count +1
 countEl.innerText = count

}

function diminuir() {

    count = count -1
    countEl.innerText = count
   
   }

function zerar() {

    count = 0
    countEl.innerText = count
   
}
