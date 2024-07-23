const buttonHeader = document.querySelector(".header__button");
const pageModal = document.querySelector(".dialog__container");

buttonHeader.addEventListener("click", () => {
    pageModal.showModal();

    closeModal();
});

function closeModal(){
    const buttonCloseModal = document.querySelector(".dialog__form__div__button");
    const pageModal = document.querySelector(".dialog__container");

    buttonCloseModal.addEventListener("click", () =>{
        pageModal.close();
    });
}

const buttonSection3 = document.querySelector(".section3__div1__button");

buttonSection3.addEventListener("click", () => {
    pageModal.showModal();

    closeModal();
});

const formModal = document.querySelector(".dialog__form");
formModal.addEventListener("submit",() =>{
    alert("Cadastro Realizado com Sucesso")
});