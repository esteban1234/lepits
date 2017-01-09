$(document).ready(function(){


var contador = 1;

// function main(){
	$('#opcion-menu').click(function(){
		if(contador == 1){
			$('#contenedor').animate({
				top: '0'
			},500);
			contador = 0;
		} else {
			$('#contenedor').animate({
				top: '-1000'
			},500);
			contador = 1;
		}

	});

	$('#cerrar').click(function(){
		$('#contenedor').animate({
			top: '-1000'
		},500);
		});
});
// $(document).ready(function(){
//   $("#opcion-menu").click(function(){
//     $("#contenedor").show(100);
//   });
//
//   $("#cerrar").click(function(){
//     $("#contenedor").hide();
//   });
// });
