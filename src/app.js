document.addEventListener("DOMContentLoaded", function(){
	iniciarApp();
});

function iniciarApp(){
	si();
	no();
	
}


function si(){
	const btnSi=document.getElementById("si");
	btnSi.addEventListener("click", ()=>{
		document.body.classList.add("mostrar");
		Swal.fire({
			title:"Gracias princesa &#x1F618;",
			text:"Sabia que dirias que si",
			 // html:"<h2 class='color'></h2>",
			icon:'success', //question, error, warning, info
			confirmButtonText:"Aceptar",
			// footer:'Esta es informacion Importante' puedes poner html y clases
			width:'80%',
			padding:".5rem",
			imageUrl:'./src/besos.gif',
			imageHeight:130,
			imageWidth:200,
			// grow:"row", //column o fullscreen o row
			// backdrop:"true" //se vea un sombreado fiera del mensaje y false no lo tendra es como un bacgdground .5
			// timer: 5000, //a ver cuanto dura el mensaaje
			// timerProgressBar:"true", //y sale una barra de cuado se quita o cuanto falta  
			// toast:'true', //hace que se pueda comprimir y se ve muy pequeño
			// position:'top' //top-end, bottom-start

			// input:'text',
			// inputPlaceholder:"Nombre",
			
			customClass: {
			content:'contenido-alert'
			}

		});
	let conteo=20;
	let body=document.querySelector(".swal2-shown");
	let i=0;
	while(i < conteo){
		let elemento=document.createElement("I");
		let posX=Math.floor(Math.random() * window.innerWidth);
		// let posY=Math.floor(Math.random() * window.innerHeigth);
		let delay=Math.random()*-20;
		let duracion=Math.random()*10;
		let size=Math.random()*200;
		elemento.style.width=10 + size +"px";
		elemento.style.height=10 + size +"px";
		elemento.style.left=posX + "px";
		elemento.style.animationDelay=delay +"s";
		elemento.style.animationDuration=5 + duracion + "s";

		elemento.style.webkitBoxShadow="0 30px 50px #0002";
		body.appendChild(elemento);
		i++;
		if (document.body.classList.contains("swal2-shown")) {
				}else{
			elemento.remove();
		}

	}

	});
	
	
}

function no(){
	const btnNo=document.getElementById("no");

	btnNo.addEventListener("mouseover", ()=>{
		btnNo.style.position='absolute';
		btnNo.style.top=Math.floor(Math.random()* 90)+"%";
		btnNo.style.left=Math.floor(Math.random()* 90)+"%";
		// const randomX=parseInt(Math.random() * 100);
		// const randomY=parseInt(Math.random()*100);
		// btnNo.style.setProperty("top", randomY + %);
		// btnNo.style.setProperty("left", randomX+ %);
	});
}
	

