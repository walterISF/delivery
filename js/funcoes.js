$(document).ready(function() {
$(".button-collapse").sideNav();
$('select').material_select();
$('.modal-trigger').leanModal();
$('#push,secton').pushpin({ top:$('#push').height() });



/*Obtendo dados do formulario com a funcao submit do proprio*/
$('#formulario').submit(function(){
	var dados = $('#formulario').serialize();
	alert(dados);
	/*$.ajax({  
	          type: "POST",  
	          url: ".php",  
	          data: dados,  
	          success: function( data )  
	          { 
				     
	          }  
     	  });*/  

});

$('#rbTelefone').click(function(){
	$('#icnEscolha').html('phone');
	$('#lblEscolha').html('Telefone');
	$('#ipEscolha').attr("type", "tel");
});

$('#rbEmail').click(function(){
	$('#icnEscolha').html('mail_outline');
	$('#lblEscolha').html('Email');
	$('#ipEscolha').attr("type", "email");
});

 });