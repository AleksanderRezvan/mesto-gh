// переменные для открытие, закрытие попаба.
let headerOpenPopupButton = document.querySelector('.profile__info-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
// переменные для формы
let formElement = document.querySelector('.popup__form');
let nameInput = document.getElementById('popup-input-name');
let jobInput = document.getElementById('popup-input-job');
let profileName = document.querySelector('.profile__title');
let profileText = document.querySelector('.profile__text');


// открытие, закрытие попаба.
function openPopup() {
    popup.classList.add('popup_opened');
    
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

// форма
function formSubmitHandler (evt) {
    evt.preventDefault();
   profileName.textContent = nameInput.value;
   profileText.textContent = jobInput.value;
   closePopup();
}

headerOpenPopupButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler); 

