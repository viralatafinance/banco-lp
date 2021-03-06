
const loading = document.querySelector('#loading')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        loading.style.opacity = 0;
        loading.style.visibility = 'hidden';

    }
}



let telefones = document.querySelectorAll('form button')

for(i=0;i<telefones.length;i++) {
    telefones[i].addEventListener('click', function() {
        dataLayer.push({event:'Enviado'});
    })
}




const floatForm = document.querySelector('#parallax01')
const bullets = document.querySelector('.bullets')

const rain01 = document.querySelector('#rain_ctnr img:nth-child(1)')
const rain02 = document.querySelector('#rain_ctnr img:nth-child(2)')
const rain03 = document.querySelector('#rain_ctnr img:nth-child(3)')
const rain04 = document.querySelector('#rain_ctnr img:nth-child(4)')
const rain05 = document.querySelector('#rain_ctnr img:nth-child(5)')

let windowPosition;
let videoPosition = document.querySelector('.video01').getBoundingClientRect().top;

let videoPlaying = false;

document.body.onscroll = function() {
    
    let windowPosition = window.pageYOffset;

    rain01.style.transform = "translateY(" + (windowPosition / 6) + "px)";
    
    rain02.style.transform = "translateY(" + (windowPosition / 3.8) + "px)";
    
    rain03.style.transform = "translateY(" + (windowPosition / 4) + "px)";
    
    rain04.style.transform = "translateY(" + (windowPosition / 16) + "px)";
    
    rain05.style.transform = "translateY(" + (windowPosition / 8) + "px)";


    if(videoPlaying == false) {
        if(window.matchMedia("(min-width: 800px)").matches) {
    
            if(window.pageYOffset > (videoPosition / 2)) {
                
                setTimeout(() => {
                    document.querySelector('.video01').play()
                    videoPlaying = true;
                }, 3000);
            }
        } else {
            
            if(window.pageYOffset > 1) {

                setTimeout(() => {
                    document.querySelector('.video01').play()
                    videoPlaying = true;
                }, 3000);
            }
        }
    }


    
}



function success() {
    const buttons = document.querySelectorAll('form button');
    const inputs = document.querySelectorAll('form input');

    for(i = 0; i < buttons.length; i++) {
            buttons[i].innerText = "ENVIADO!"
    }

    for(i = 0; i < inputs.length; i++) {
            inputs[i].value = ""
    }

}

const handleSubmit01 = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('top_form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => success()).catch((error) =>
    alert(error))
}

const handleSubmit02 = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('bottom_form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => success()).catch((error) =>
    alert(error))
}

document.getElementById('top_form').addEventListener("submit", handleSubmit01);

document.getElementById('bottom_form').addEventListener("submit", handleSubmit02);