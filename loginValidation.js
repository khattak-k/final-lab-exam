function Validate(){
    var username = document.getElementById("username").nodeValue;
    var password = document.getElementById("password").nodeValue;

    if(username=="admin" && password=="1234")
    {
            alert("logged in");
            return false;
        }
        else{
            alert("failed");
        }
}