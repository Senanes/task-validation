document.getElementById('name1').addEventListener("click", function(event){
  event.preventDefault()
});


document.getElementById('submit').onclick = function() {
  if (Validate()) {
    console.log('validasiya ugurlu oldu')
  }else{
    console.log('validasiya ugursuz oldu');
    
  }
}


function Validate(){  
  let name= document.form1.name.value;  
  let password=document.form1.password.value;  

  if (name[0] != name[0].toUpperCase()) {
    alert("Username boyuk herfle baslamalidir")
    return false;
  }
  else if(name[0] === name[0].toUpperCase()){
    console.log("true");
  }

  
    
  if (name==null || name==""  ){  
    alert("Username Boş ola bilməz.");
      
    return false;  
  }
  else if(name.length<6){
    alert(" Username Minimum 6 simvol olmalıdır")
  }
  
  
  else if(password.length<6 || password.length>10){  
    alert("Şifrə Minimum 6, Maksimum 10 simvol olmalıdır");  
    return false;  
    }  

    let email = document.form1.email.value;
    atmail = email.indexOf("@");
    dotmail = email.lastIndexOf(".");
    
    if (atmail < 1 || ( dotmail - atmail < 2 )) {
       alert("Duzgun Email unvani daxil edin")
       document.form1.email.focus() ;
       return false;
    }

    return true;
    
  }  

 








