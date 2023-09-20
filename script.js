function changeButton(element) {
    let texto = document.querySelector('.btn');
    if (texto.innerText == 'Login') {
      texto.innerText = 'Logout';  
    }else{
        texto.innerText = 'Login';
    }
    
}
function removeButton(element) {
    element.remove();
}