//accordeon menu

let button = document.getElementsByClassName("menu_button");
for (let i = 0; i < button.length; i++){
    button[i].onclick = function(){
        this.classList.toggle('isopen');
        let content = this.parentElement.nextElementSibling;
        if (!content.classList.contains('base-js-hide')){
            content.classList.add('base-js-hide');
        }else{
            for (let i = 0; i < button.length; i++){
                button[i].parentElement.nextElementSibling.classList.add("base-js-hide");
                button[i].classList.remove("isopen");
            }
            content.classList.remove('base-js-hide');
            content.previousElementSibling.lastElementChild.classList.add("isopen");
        }  
    }
}