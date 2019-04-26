'use strict';
function makeElementVisible(cssClass) {
  document.querySelector(cssClass).classList.remove('hidden');
}
makeElementVisible('.setup');
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
