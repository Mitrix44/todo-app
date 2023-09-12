var button = document.getElementById('add');
var form = document.getElementById('form');

let i=0;

button.addEventListener('click', () => {
  const newCheckbox = document.createElement('div');
  newCheckbox.innerHTML = `
    <input type='checkbox' class='check' value='false'/>
    <label>Choix ${i}</label>
  `;
  form.appendChild(newCheckbox);
  console.log(`Choix ${i} ajouté.`);
  i++;
});

function checkSwitcher(checkbox) {
  // Utilisation de la propriété checked pour vérifier l'état du checkbox
  if (checkbox.value == 'false') {
    checkbox.value = 'true';
    console.log(checkbox.checked);
  } else if (checkbox.value == 'true') {
    checkbox.value = 'false';
    console.log(checkbox.value);
  }
}

check1.addEventListener('click', () => {checkSwitcher(check1)});
check2.addEventListener('click', () => {checkSwitcher(check2)});
check3.addEventListener('click', () => {checkSwitcher(check3)});
check4.addEventListener('click', () => {checkSwitcher(check4)});


