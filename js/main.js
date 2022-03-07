const myBtn = document.getElementById("gen-button");
let lengthPass = document.getElementById("pass-length");


  function passGen() {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passLen = lengthPass.value;
    let password = "";
    for(let i = 0; i<passLen; i++){
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
    }
    

  
  document.getElementById("gen-pass-res").innerHTML = password;
    
  }

  
