
function myFunction(){
    var user = document.forms["login"]["user"].value;
    var pass =  document.forms["login"]["pass"].value;

    if(user=="username" && pass=="1234"){
        window.location.href="welcome.html"
    }
    else{
        alert("Incorrect Username and Password")
    }
}