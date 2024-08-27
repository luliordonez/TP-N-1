document.getElementById("reservationForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let people = document.getElementById("people").value;

    let confirmationMessage = `Gracias, ${name}. Tu reserva para ${people} personas el día ${date} a las ${time} ha sido confirmada.`;
    document.getElementById("confirmationMessage").innerText = confirmationMessage;
    
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("reservationForm").style.display = "none";
});