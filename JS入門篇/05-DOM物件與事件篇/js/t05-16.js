window.onload = function(){
    var a1 = document.getElementById("a1");
    var a2 = document.getElementById("a2");
    var a3 = document.getElementById("a3");
    var a4 = document.getElementById("a4");
    var a5 = document.getElementById("a5");
    var photo = document.getElementById("contentPhoto");
    var angleleft = document.getElementById("angleleft");
    var angleright = document.getElementById("angleright");
    var page = 1;
    
    a1.addEventListener("click",showPhoto);
    a2.addEventListener("click",showPhoto);
    a3.addEventListener("click",showPhoto);
    a4.addEventListener("click",showPhoto);
    a5.addEventListener("click",showPhoto);
    angleleft.addEventListener("click",angleleftFn);
    angleright.addEventListener("click",anglerightFn);

    function showPhoto(){
        page = Number(this.id.substr(1))
        photo.style.backgroundImage = "url('../images/05/big/"+ this.id +".jpg')"
    }
    function angleleftFn(){
        page -= 1;
        if(page < 1){
            page = 5;
        }
        photo.style.backgroundImage = "url('../images/05/big/a"+ page +".jpg')"
    }
    function anglerightFn(){
        page += 1;
        if(page > 5){
            page = 1;
        }
        photo.style.backgroundImage = "url('../images/05/big/a"+ page +".jpg')"
    }
}

// YJ筆記
    // 透過按左右箭頭切換上一張或下一張圖片
// 待所有程式跑完後執行用：window.onload = function(){}
// var 所有圖片id
// var 左箭頭
// var 右箭頭
// var 頁數從1開始
// 照片跟箭頭的addEventListener觸發事件
// 觸發事件後的function(有三個)
// 1.showPhoto照片背景牆：頁數 = 取id值a後面的數字，用substr；設定背景照片路徑：url(路徑+this.id+副檔名)
// 2.angleleftFn按左箭頭，頁數 -= 1，如果頁數小於1，頁數=5；設定背景照片路徑：url(路徑/a+頁數+副檔名)
// 3.anglerightFn按右箭頭，頁數 += 1，如果頁數大於5，頁數=1；設定背景照片路徑：url(路徑/a+頁數+副檔名)
