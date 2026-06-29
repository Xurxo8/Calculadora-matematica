$(document).ready(function() {
  // ===== FUNCIONS PANTALLA =====
  $('#pantalla').prop('disabled', true);

  // ===== FUNCIONS TECLADO =====
  // = Efecto das teclas =
  $(document).on('mousedown', '.boton', function(){
    $(this).css('background-color', 'teal');
    $(this).css('color', '#111');
  });

  $(document).on('mouseup', '.boton', function(){
    $(this).css('background-color', 'transparent');
    $(this).css('color', 'teal');
  });

  // = Engadir valores na pantalla =
  $(document).on('click', '')
});