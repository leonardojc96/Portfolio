navbar = document.querySelector('#navbar');
copied = document.querySelector('#copied');
body = document.querySelector('body');
botonTop = document.getElementById('boton-top');
mail = 'leonardojc96@gmail.com';

window.onload = () => {
  navbar.style.display = 'none';
  botonTop.style.display = 'none';
  copy.style.display = 'none'
}

window.addEventListener('scroll', () => {
  last_known_scroll_position = window.scrollY;
  
  if (last_known_scroll_position == 0) {
    botonTop.style.display = "none";
    navbar.style.display = 'none';
  }
  else{
    botonTop.style.display = "";
    navbar.style.display = '';
  }

});

function copy(){
  copyToClipboar(mail);
}

function copyToClipboar(text){
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!', text);
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

