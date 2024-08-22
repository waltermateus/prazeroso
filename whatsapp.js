function sendToWhatsapp(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  let number = "244931516341"; // Remove the "+" from the number
  let fullName = document.querySelector('input[name="full_name"]').value;
  let phone = document.querySelector('input[name="email_address"][type="number"]').value;
  let email = document.querySelector('input[name="email_address"][type="email"]').value;
  let address = document.querySelector('input[name="email_address"][type="text"]').value;
  let totalPerson = document.querySelector('select[name="total_person"]').value;
  let bookingDate = document.querySelector('input[name="booking_date"]').value;
  let message = document.querySelector('textarea[name="message"]').value;

  let text = "Nome: " + fullName + "%0a"
    + "Telefone: " + phone + "%0a"
    + "Email: " + email + "%0a"
    + "Morada: " + address + "%0a"
    + "Número de Pessoas: " + totalPerson + "%0a"
    + "Data de Reserva: " + bookingDate + "%0a"
    + "Mensagem: " + message + "%0a%0a";

  let url;
  
  // Check if the device is iOS
  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    // iOS URL Scheme
    url = "whatsapp://send?phone=" + number + "&text=" + encodeURIComponent(text);
  } else if (/Android/i.test(navigator.userAgent)) {
    // Android Intent URL
    url = "intent://send/#Intent;scheme=smsto;package=com.whatsapp;i.action=android.intent.action.SENDTO;i.phone=" + number + ";S.msg=" + encodeURIComponent(text) + ";end";
  } else {
    // Web URL for desktop or unsupported mobile browsers
    url = "https://web.whatsapp.com/send?phone=" + number + "&text=" + encodeURIComponent(text);
  }

  // Try to open the URL
  window.location.href = url;

  // Fallback for desktop if the WhatsApp web doesn't open
  setTimeout(function() {
    if (!/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = "https://web.whatsapp.com/send?phone=" + number + "&text=" + encodeURIComponent(text);
    }
  }, 1000);
}

// Add event listener to the form
document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.footer-form').addEventListener('submit', sendToWhatsapp);
});
