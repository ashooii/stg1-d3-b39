function submitData(){
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let massage = document.getElementById("input-massage").value

    if(name == ""){
        return alert ("name wajib diisi")
    } else if(email == ""){
        return alert ("email wajib diisi")
    } else if(phone == ""){
        return alert ( "phone wajib diisi")
    } else if(subject == ""){
        return alert ( "subject wajib diisi")
    } else if(massage == ""){
        return alert ( "massage wajib diisi")
    } 

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(massage);
    
    let emailReceiver = "udin@gmail.com"

    let a = document.createElement('a')
    a.href=`mailto:${emailReceiver}
    ?subject=${subject}
    &body= Hello my name ${name},
    ${massage}, silahkan kontak saya dengan email ${email}
    , telepon ${phone}`

    a.click()


    let siswa ={
        name,
        email,
        phone,
        subject,
        massage
    }
    console.log(siswa)
}