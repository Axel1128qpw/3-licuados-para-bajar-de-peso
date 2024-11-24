let isSending = false; // Bandera para verificar si ya se está enviando el correo

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
    event.preventDefault();

    if (isSending) return;  // Si ya se está enviando, no hacer nada

    isSending = true; // Marca que el envío está en progreso

    const emailInput = document.getElementById("email").value;

    const userID = "lt9zfNIowyqJ3kwmA";
    const serviceID = "service_y0z1936";
    const templateID = "template_0vt4zwi";

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_id: userID,
            service_id: serviceID,
            template_id: templateID,
            template_params: {
                email: emailInput
            }
        })
    })
    .then(response => {
        if (response.ok) {
            alert("¡Correo enviado correctamente!");
        } else {
            throw new Error("Error en el envío");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un problema al enviar el correo.");
    })
    .finally(() => {
        isSending = false; // Reinicia la bandera una vez se haya completado el proceso
    });
});
