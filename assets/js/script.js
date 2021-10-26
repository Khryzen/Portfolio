function sendMail(params){
    var tempParams ={
        from_name: document.getElementById("fromName").value,
        subject: document.getElementById("subject").value,
        reply_to: document.getElementById("fromEmail").value,
        message: document.getElementById("msg").value,
    };
    emailjs.send('gmail','template_a2n0k8m', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })

    document.getElementById("fromName").value = ""
    document.getElementById("subject").value = ""
    document.getElementById("fromEmail").value = ""
    document.getElementById("msg").value = ""
}