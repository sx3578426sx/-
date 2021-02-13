window.onload = function(){
    
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    var photo = document.getElementById("contentPhoto");

    a1.addEventListener("click", showPhoto);
    a2.addEventListener("click", showPhoto);
    a3.addEventListener("click", showPhoto);
    a4.addEventListener("click", showPhoto);
    a5.addEventListener("click", showPhoto);

    function showPhoto(){
        if(this.id == "a1"){
            photo.style.backgroundImage = 'url("../images/05/big/a1.jpg")';
        }else if(this.id == "a2"){
            photo.style.backgroundImage = 'url("../images/05/big/a2.jpg")';
        }else if(this.id == "a3"){
            photo.style.backgroundImage = 'url("../images/05/big/a3.jpg")';
        }else if(this.id == "a4"){
            photo.style.backgroundImage = 'url("../images/05/big/a4.jpg")';
        }else if(this.id == "a5"){
            photo.style.backgroundImage = 'url("../images/05/big/a5.jpg")';
        }
    }

}