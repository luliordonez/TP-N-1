document.getElementById("reservationForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const people = document.getElementById("people").value;

    const confirmationMessage = `Gracias, ${name}. Tu reserva para ${people} personas el día ${date} a las ${time} ha sido confirmada.`;
    document.getElementById("confirmationMessage").innerText = confirmationMessage;
    
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("reservationForm").style.display = "none";
});