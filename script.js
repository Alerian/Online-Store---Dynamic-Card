const console = window.console;
const products= document.querySelector('.dynamicProducts');
const finalCard=document.querySelector('.FinalCard');

//Base form 
const nameA= document.querySelector('#typeName');
const priceA= document.querySelector('#typePrice');
// 
const xboxRadio = document.querySelector("#Xbox")
const psRadio = document.querySelector("#PS")
const nintendoRadio = document.querySelector("#Nintendo")

//dynamic card
const nameB = document.querySelector('#name');
const consoleB = document.querySelector('#conso');
const priceB = document.querySelector('#price');

//Input to Preview
const upload= document.querySelector("#upload");

products.addEventListener("input", () =>{
nameB.textContent = nameA.value;
priceB.textContent = "£"+ priceA.value;
});

products.addEventListener("change",() => {
  if (xboxRadio.checked)
  consoleB.textContent = xboxRadio.value;
  else if(psRadio.checked)
  consoleB.textContent = psRadio.value;
  else if(nintendoRadio.checked)
  consoleB.textContent = nintendoRadio.value;
});

//image preview

function previewFile() {
  const preview = document.querySelector('#image');
  const file = document.querySelector('#typeImage').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}