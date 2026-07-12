$(document).ready(function() {
  // ===== FUNCIONS PANTALLA =====
  $('#pantalla').prop('disabled', true);
  $('#pantalla').val(''); // Limpar a pantalla 

  // ===== FUNCIONS TECLADO =====
  // = Efectos visuais das teclas =
  $(document).on('mousedown', '.boton', function(){
    $(this).css('background-color', 'teal');
    $(this).css('color', '#111');
  });

  $(document).on('mouseup', '.boton', function(){
    $(this).css('background-color', 'transparent');
    $(this).css('color', 'teal');
  });

  // = Recoller o número e engadilo na pantalla =
  $(document).on('click', '.numero', function(){
    let numero = $(this).text();
    let textoActual = $('#pantalla').val(); // Seleccionamos o contido actual para non sobreescribilo co novo
    
    // = Engadir o novo número = 
    $('#pantalla').val(textoActual + numero);
    console.log(numero);
  });

  // = Limpar - All Clear =
  $(document).on('click', '#borrarTodo', function(){
    $('#pantalla').val('');
  });

  // = Borrar =
  $(document).on('click', '#borrar', function(){
    let texto = $('#pantalla').val();
    let borrarUltimo = texto.substring(0, texto.length-1);
    
    $('#pantalla').val(borrarUltimo);
  });
});