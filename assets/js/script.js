function sendMail(params){

    emailjs.send('service_astxx1r','template_a2n0k8m', {
        from_name: document.getElementById("fromName").value,
        subject: document.getElementById("subject").value,
        reply_to: document.getElementById("fromEmail").value,
        message: document.getElementById("msg").value,
    });
    .then(function(res){
        console.log("success", res.status);
    })

    document.getElementById("fromName").value = ""
    document.getElementById("subject").value = ""
    document.getElementById("fromEmail").value = ""
    document.getElementById("msg").value = ""
}