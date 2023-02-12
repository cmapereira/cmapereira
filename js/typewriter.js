const texts = ['UI Designer', 'Front End Dev'];
let cont = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){

    if(cont == texts.length){
        cont = 0;
    }

    currentText = texts[cont];
    letter = currentText.slice(0, index++);

    document.querySelector('#js-typing').textContent = letter;
    if(letter.length == currentText.length){
        cont++;
        index = 0
    }

    setTimeout(type, 250);

}());


