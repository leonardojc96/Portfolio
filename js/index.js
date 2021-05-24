gify = document.querySelector('#gify');
consultorio = document.querySelector('#consultorio');
gara = document.querySelector('#gara');
weather = document.querySelector('#weather');
navbar = document.querySelector('#navbar');
body = document.querySelector('body');

window.onload = () => {
  navbar.style.display = 'none';
}

window.addEventListener('scroll', () => {


  var posiciones = {
    gify : gify.getBoundingClientRect().top,
    consultorio : consultorio.getBoundingClientRect().top,
    gara : gara.getBoundingClientRect().top,
    weather : weather.getBoundingClientRect().top
  };

  last_known_scroll_position = window.scrollY;

  botonTop = document.getElementById('boton-top');
  
  if (last_known_scroll_position == 0) {
    botonTop.style.display = "none";
    navbar.style.display = 'none';
  }
  else{
    botonTop.style.display = "";
    navbar.style.display = '';
  }
  
  let windowHeight = window.innerHeight;

  if(posiciones['gify'] < windowHeight){
    gify.style.animation = 'mover 1s ease-out';
  }
  else 
  {
    gify.style.animation = 'none';
  }

  if(posiciones['consultorio'] < windowHeight)
    consultorio.style.animation = 'mover1 1s ease-out';
  else 
    consultorio.style.animation = 'none';

  if(posiciones['gara'] < windowHeight){
    gara.style.animation = 'mover 1s ease-out';
  }
  else gara.style.animation = 'none';

  if(posiciones['weather'] < windowHeight){
    weather.style.animation = 'mover1 1s ease-out';
  }
  else weather.style.animation = 'none';

});