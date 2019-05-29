'use strict';
function makeElementVisible(cssClass) {
  document.querySelector(cssClass).classList.remove('hidden');
}
var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyeColors = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_QUANTITY = 4;
var wizards = [];
function randomizer(ar) {
  return ar[Math.floor(Math.random() * ar.length)];
}

for (var j = 0; j < WIZARDS_QUANTITY; j++) {
  wizards[j] =
    {
      name: randomizer(names),
      surname: randomizer(surnames),
      coatColor: randomizer(coatColors),
      eyesColor: randomizer(eyeColors)
    };
}
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
function wizardInsert(arr) {
  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }
}
wizardInsert(wizards);

similarListElement.appendChild(fragment);

makeElementVisible('.setup-similar');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupIcon = document.querySelector('.setup-open-icon');
setupIcon.tabIndex = 0;
var setupClose = document.querySelector('.setup-close');
setupClose.tabIndex = 0;
var setupUserName = document.querySelector('input.setup-user-name');
var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

wizardCoatColor.addEventListener('click', function() {
  var coatColor = 'fill: ' + getRandomArrayValue(coatColors);
  wizardCoatColor.setAttribute('style', coatColor);
});

wizardEyesColor.addEventListener('click', function() {
  var eyesColor = 'fill: ' + getRandomArrayValue(coatColors);
  wizardEyesColor.setAttribute('style', eyesColor);
});

wizardFireballColor.addEventListener('click', function() {
  var fireballColor = 'background: ' + getRandomArrayValue(fireballColors);
  wizardFireballColor.setAttribute('style', fireballColor);
});

var onPopupEscPress = function(evt) {
  if (evt.keyCode === ESC_KEYCODE && evt.target !== setupUserName) {
    closePopup();
  }
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function(evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

/**
 * Функция, возвращающая случайное значение из массива
 * @param {array} arr Массив
 * @return {value} Случайное значение
 */
function getRandomArrayValue(arr) {
  var randomizedValue = Math.floor(Math.random() * arr.length);
  return arr[randomizedValue];
}

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

document.querySelector('.setup-wizard-form').setAttribute('action', 'https://js.dump.academy/code-and-magick');
