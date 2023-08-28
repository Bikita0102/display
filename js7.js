function onsubmit(event){
    //console.log('submit button pressed');
    event.preventDefault();//prevent refreshing in submit
    var name= document.getElementById('name').value;
    var email= document.getElementById('email').value;
    var gender= document.querySelector('input[name="gender"]:checked').value;
    
//checkbox ma euta matraa select garnu paryo bhane
    var acceptLicenseYes =document.getElementById('acceptLicenseYes');
    var acceptLicenseNo =document.getElementById('acceptLicenseNo');
    var acceptLicense;
    if(acceptLicenseYes.checked==true && acceptLicenseNo.checked==true){
        acceptLicense="cannot select both";
    }
    else if(acceptLicenseYes.checked==true){
        acceptLicense=document.getElementById('acceptLicenseYes').value;
    }
    else if(acceptLicenseNo.checked==true){
        acceptLicense=document.getElementById('acceptLicenseNo').value;
    }
    document.getElementById('formData').innerHTML="Name: "+ name+"<br> Email: " +email+"<br> gender: " + gender+"<br> Accept license: " + acceptLicense;
}

window.onload =function(){
    //window.alert('hello');window refresh garda aaunxa
    document.getElementById('contactForm').addEventListener('submit', onsubmit);
}