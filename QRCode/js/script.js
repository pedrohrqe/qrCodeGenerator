const form = document.getElementById("form-qr")
const formButton = document.getElementById("form-button")
const formText = document.getElementById("form-text")
const qrCodeImage = document.getElementById("qr-code-img")
const sucess = document.getElementById("sucess")

let lastText = ""

formButton.addEventListener("click", (e) => {
    e.preventDefault()
    if (e.key === 'Enter') {
        console.log('Enter pressionado, mas o formulário não foi enviado.');
    }
    const text = formText.value

    if (!text || text == "") {
        sucess.textContent = "Informação inválida, insira novamente!"
        sucess.style.backgroundColor = "#aa3838"
    }
    else if (lastText === text) {
        sucess.textContent = "Já gerado!"
    }
    else {
        qrCodeImage.setAttribute("src", `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
        sucess.textContent = "Sucesso!"
        formButton.textContent = "Gerando..."
        formButton.disabled = true;
        lastText = text
        qrCodeImage.addEventListener("load", () => {
            qrCodeImage.classList.add("active")
        })
    }
    sucess.classList.add("active")
    setTimeout(() => {
        sucess.classList.remove("active")
        formButton.textContent = "Enviar"
        formButton.disabled = false;
    }, 800)
})

form.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        formButton.click()
    }
})

window.addEventListener("load", () => {
    formText.focus()
})