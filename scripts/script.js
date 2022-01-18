let headerOpenPopupButton = document.querySelector('.profile__info-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');

let popupButtonSave = document.querySelector('.popup__button-save');

// открытие, закрытие попаба.
function openPopup() {
    popup.classList.add('popup__opened')
}

function closePopup() {
    popup.classList.remove('popup__opened')
}

headerOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);


// форма
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-name');
let jobInput = document.querySelector('.popup__form-job');

function formSubmitHandler (evt) {
    evt.preventDefault();
   let userName = nameInput.value;
   let userJob = jobInput.value;
   let profileName = document.querySelector('.profile__title');
   let profileText = document.querySelector('.profile__text');
   profileName.textContent = userName;
   profileText.textContent = userJob;
   closePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 