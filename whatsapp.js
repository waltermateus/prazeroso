document.addEventListener('DOMContentLoaded', function() {
  // Certifique-se de que o seletor corresponda ao formulário correto
  var form = document.querySelector('.footer-form');

  // Verifique se o formulário foi encontrado antes de adicionar o listener
  if (form) {
    form.addEventListener('submit', sendToWhatsapp);
  } else {
    console.error('Formulário não encontrado. Verifique o seletor.');
  }
});

function sendToWhatsapp(event) {
  event.preventDefault(); // Evita que o formulário seja enviado normalmente

  let fullName = document.querySelector('input[name="full_name"]').value;
  let phone = document.querySelector('input[name="phone_number"]').value;
  let email = document.querySelector('input[name="email_address"][type="email"]').value;
  let address = document.querySelector('input[name="address"]').value;
  let totalPerson = document.querySelector('select[name="total_person"]').value;
  let bookingDate = document.querySelector('input[name="booking_date"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  var url = "https://wa.me/244932516341?text="
    + "Nome: " + encodeURIComponent(fullName) + "%0a"
    + "Telefone: " + encodeURIComponent(phone) + "%0a"
    + "Email: " + encodeURIComponent(email) + "%0a"
    + "Morada: " + encodeURIComponent(address) + "%0a"
    + "Número de Pessoas: " + encodeURIComponent(totalPerson) + "%0a"
    + "Data de Reserva: " + encodeURIComponent(bookingDate) + "%0a"
    + "Mensagem: " + encodeURIComponent(message);

  window.open(url, '_blank').focus();
}
