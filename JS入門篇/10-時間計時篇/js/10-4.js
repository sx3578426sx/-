window.onload = function(){
    var Phone = document.getElementById("contentPhone");
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    var pageIdx = 1;
    var time =null;

    a1.addEventListener("click",showPhoto);
    a2.addEventListener("click",showPhoto);
    a3.addEventListener("click",showPhoto);
    a4.addEventListener("click",showPhoto);
    a5.addEventListener("click",showPhoto);

    function reset(){
        for(var i = 1;i < 6;i++){
            document.getElementById("a"+i).add
            this.style.opacity
        }
            this.style.opacity
    }

    function timeGo(){
        time = setInterval(function(){
            
        },3000)
    }

    function showPhoto(){
        pageIdx = Numeber(this.id.substr(1))
        photo.style.backgroundImage = "url('../images/05/big/'+"this.id"+'.jpg')"
    }
}

// YJ筆記
//     照片牆會自動轉換，除了被選到的圖片透明度為1，其他透明度都是0.5。
// window onload
// 變數
//     1.頁數 = 1;
//     2.時間 = null;
//     3.a1~a5的id
//     4.照片牆的id
// a1~a5的點擊事件，function都是showPhoto

// reset函數{
//     寫for迴圈，調整照片透明度
// }

// timeGo函數{
//     setInterval(3秒切換一次圖)
//     reset函數，調整照片透明度
// }

// showPhoto函數{
//     1.抓取id數字 
//     2.照片牆的路徑 
//     3.reset函數，調整照片透明度
//     4.清空時間
//     5.timeGo函數，每3秒切換一次圖片}

// window.onload = function(){
    
//     var pageidx = 1;
//     var time = null;
//     var a1 = document.getElementById("a1");
//     var a2 = document.getElementById("a2");
//     var a3 = document.getElementById("a3");
//     var a4 = document.getElementById("a4");
//     var a5 = document.getElementById("a5");
//     var phone = document.getElementById("contentPhone");

//     a1.addEventListener("click", showPhoto);
//     a2.addEventListener("click", showPhoto);
//     a3.addEventListener("click", showPhoto);
//     a4.addEventListener("click", showPhoto);
//     a5.addEventListener("click", showPhoto);

//     function showPhoto(){
//         pageidx = Number(this.id.substr(1));
//         phone.style.backgroundImage = 'url("../images/05/big/' + this.id +'.jpg")';
//         reset();
//         clearInterval(time);
//         timeGo();
//     }
    
//     function timeGo(){
//         time = setInterval(function(){
//             pageidx++;
//             if(pageidx > 5){
//                 pageidx = 1;
//             }
//             phone.style.backgroundImage = 'url("../images/05/big/a' + pageidx +'.jpg")';
//             reset();
//         }, 3000);
//     }

//     function reset(){
//         for(var i = 1; i < 6; i++){
//             document.getElementById('a'+ i).style.opacity = 0.5;
//         }
//         document.getElementById('a'+ pageidx).style.opacity = 1;
//     }

//     timeGo();
//     document.getElementById('a'+pageidx).style.opacity = 1;
    

// }