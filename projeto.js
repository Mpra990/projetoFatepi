document.getElementById('processForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado!');
});

$(".drop")
  .mouseover(function() {
  $(".dropdown").show(300);
});
$(".drop")
  .mouseleave(function() {
  $(".dropdown").hide(300);     
});
