function ValidateForm(){
    var ReturnValue=true;
    var FName=document.getElementById("fname").value;
    var UName=document.getElementById("uname").value;
    var Password=document.getElementById("pass").value;
    var ConfirmPassword=document.getElementById("Cp").value;
   
    var NamePattern= /^[A-Za-z]+$/;
    var PassPattern= /(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.\W)/; 
   
    
    if(!(FName.match(NamePattern))){
       document.getElementById('m1').innerHTML="Only letter is allowed";
       document.getElementById('fname').style.borderColor='red';
       ReturnValue=false;
    }
    else{
       document.getElementById('m1').innerHTML=" ";
       document.getElementById('fname').style.borderColor='black';
   }
   
   
   if(UName==""){
       document.getElementById('m2').innerHTML="Username must be filled out"; 
       document.getElementById('uname').style.borderColor='red';
       ReturnValue=false;
   }
   else{
       document.getElementById('m2').innerHTML=" "; 
       document.getElementById('uname').style.borderColor='black';
   }
   
   
   
   if(Password== ""){
       document.getElementById('m3').innerHTML="Password must be filled out";
       document.getElementById('pass').style.borderColor='red';
       ReturnValue=false;
   }
   else if(UserName==Password)
       {
       document.getElementById('m3').innerHTML="your password must not be the same of your username";
       document.getElementById('pass').style.borderColor='red';
       ReturnValue=false;
   }
    
   else if(!((Password.length>=6) && (Password.length<=10))){
       document.getElementById('m3').innerHTML="Password Should be 6- 10 length.";
       document.getElementById('pass').style.borderColor='red';
       ReturnValue=false;
   }
   
   else if(!(Password.match(PassPattern))) 
   {
       document.getElementById('m3').innerHTML="your password At least one small letter and one capital letter and one digits";
       document.getElementById('pass').style.borderColor='red';
       ReturnValue=false;
   }
   
   else{
       document.getElementById('m3').innerHTML=" ";
    document.getElementById('pass').style.borderColor='Black';
   }
   
   
   if(ConfirmPassword!=Password){
       document.getElementById('m4').innerHTML="your password does not match";
       document.getElementById('Cp').style.borderColor='red';
       ReturnValue=false;
   }
   
   else{
       document.getElementById('m4').innerHTML=" " ;   
       document.getElementById('Cp').style.borderColor='black';
   }
   return ReturnValue;
   
   }