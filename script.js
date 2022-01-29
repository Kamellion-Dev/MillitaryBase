
function pwSubmit(){

    if(document.getElementById("pwCP").value != 12345 )
    {
        alert('! رمز دخول خطأ ');

    } else {
       
        document.getElementById("sec_2").style.display = "block";
        document.getElementById("sec_1").style.display = "none";
        //alert('جاري التوصيل');
    }
    
}


