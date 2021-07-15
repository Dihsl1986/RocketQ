
import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescrition = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //Adicionar a escuta
    button.addEventListener("click", handleClick)
    //Abrir a modal
})
// Pegar quando o marcar como lido for clicado
//Abrir modal

//Quando o botão delete/excluir for clicado ele ira abrir a modal 
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
        
    })


function handleClick(event, check = true){
    event.preventDefault() // Esses links não se comportão mais como links 
    const text = check ? "Marcar como lida" : "Excluir"

    modalTitle.innerHTML= `${text} esta pergunta`
    modalDescrition.innerHTML= `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.innerHTML=`Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
     
    //Abrir modal
    modal.open()
}