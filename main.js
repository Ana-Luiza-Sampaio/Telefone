const listaDeTeclas = document.querySelectorAll('.tecla');
var inputTel = document.querySelector('input[type=tel]');

function discaNumero(idElementoAudio){

	document.querySelector(idElementoAudio).play();
}

for(let i = 0; i < listaDeTeclas.length; i++){
	
	const tecla = listaDeTeclas[i];
	const dial = tecla.classList[1];
	const idAudio = `#som_${dial}`;

	tecla.onclick = function(){ 
		discaNumero(idAudio);
		inputTel.value = inputTel.value + tecla.value;
	}

	tecla.onkeydown = function (evento){
		if (evento.code === "Enter" || evento.code === "Space"){
			tecla.classList.add('ativa');
		}
	}

	tecla.onkeyup = function (){
		tecla.classList.remove('ativa');
	};

}

