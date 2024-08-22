function sendToWhatsapp(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  let number = "+244931516341";
  let fullName = document.querySelector('input[name="full_name"]').value;
  let phone = document.querySelector('input[name="email_address"][type="number"]').value;
  let email = document.querySelector('input[name="email_address"][type="email"]').value;
  let address = document.querySelector('input[name="email_address"][type="text"]').value;
  let totalPerson = document.querySelector('select[name="total_person"]').value;
  let bookingDate = document.querySelector('input[name="booking_date"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  var url = "whatsapp://send?phone=" + number + "&text="
    + "Nome: " + fullName + "%0a"
    + "Telefone: " + phone + "%0a"
    + "Email: " + email + "%0a"
    + "Morada: " + address + "%0a"
    + "Número de Pessoas: " + totalPerson + "%0a"
    + "Data de Reserva: " + bookingDate + "%0a"
    + "Mensagem: " + message + "%0a%0a";

  window.open(url, '_blank').focus();
}

// Add event listener to the form
document.querySelector('.footer-form').addEventListener('submit', sendToWhatsapp);
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.footer-form').addEventListener('submit', sendToWhatsapp);
});
