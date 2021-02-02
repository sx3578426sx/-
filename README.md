按F12打開控制台，用九九乘法表來練習迴圈邏輯。
<br>
![image](https://user-images.githubusercontent.com/61260613/106559016-bea95900-655f-11eb-9b9f-c51a7f3a54ff.png)
![image](https://user-images.githubusercontent.com/61260613/106559032-c668fd80-655f-11eb-8b64-4225d1f30211.png)
![image](https://user-images.githubusercontent.com/61260613/106559048-ccf77500-655f-11eb-8ebc-010bc6e1629e.png)
![image](https://user-images.githubusercontent.com/61260613/106559060-d2ed5600-655f-11eb-83c1-51162e9613a8.png)
<BR>

<code>
console.log("乘法表1");
var c = "";
for(var a = 1;a < 10; a++){
    for(var b = 1;b < 10; b++){
    c += "\t" + a + "*" + b + "=" + a*b;
    }
    c += "\n";
}
</code>

<br>

<code>
console.log("乘法表2");
var c = "";
for(var a = 1;a < 10; a++){
    for(var b = 1;b < 10; b++){
    c += "\t" + b + "*" + a + "=" + a*b;
    }
    c += "\n";
}
</code>

<br>

<code>
console.log("乘法表3");
var c = "";
for(var a = 1;a < 10; a++){
    for(var b = 1;b <= a; b++){
    c += "\t" + a + "*" + b + "=" + a*b;
        }
        c += "\n";
    }
</code>

<br>

<code>
console.log("乘法表4");
var c = "";
for(var a = 1;a < 10; a++){
    for(var b = a;b < 10; b++){
    c += "\t" + a + "*" + b + "=" + a*b;
        }
        c += "\n";
    }
</code>
