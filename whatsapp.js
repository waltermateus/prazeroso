function sendToWhatsapp(event) {
  event.preventDefault(); // Impede que o formulário seja enviado normalmente

  let number = "+244931516341";
  let fullName = encodeURIComponent(document.querySelector('input[name="full_name"]').value);
  let phone = encodeURIComponent(document.querySelector('input[name="email_address"][type="number"]').value);
  let email = encodeURIComponent(document.querySelector('input[name="email_address"][type="email"]').value);
  let address = encodeURIComponent(document.querySelector('input[name="email_address"][type="text"]').value);
  let totalPerson = encodeURIComponent(document.querySelector('select[name="total_person"]').value);
  let bookingDate = encodeURIComponent(document.querySelector('input[name="booking_date"]').value);
  let message = encodeURIComponent(document.querySelector('textarea[name="message"]').value);

  var url = "https://wa.me/" + number + "?text="
    + "Nome: " + fullName + "%0a"
    + "Telefone: " + phone + "%0a"
    + "Email: " + email + "%0a"
    + "Morada: " + address + "%0a"
    + "Número de Pessoas: " + totalPerson + "%0a"
    + "Data de Reserva: " + bookingDate + "%0a"
    + "Mensagem: " + message + "%0a%0a";

  window.open(url, '_blank').focus();
}

// Adiciona o ouvinte de evento ao formulário
document.querySelector('.footer-form').addEventListener('submit', sendToWhatsapp);
