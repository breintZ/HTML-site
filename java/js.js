'use strict';
function f1(){
    var a = Math.cos(3);
    var b = Math.tan(5);
    var c = a*a + b;
    alert("C = " + c)
}

function f2(){
    var x = Math.atan(5);
    if (x <= 0){
        var y = Math.exp(x) * Math.cos(x);
    }
    else{
        var y = Math.log(x);
    }
    alert("Y = " + y);
}

function f3(){
    var s = 0;
    for (var k = 1; k <= 20; k++) {
        s += Math.sin(k)/(1 + k*k);
    }
    alert("S = " + s)
}

function f4(){
    var t = ["Первый", "Второй", "Третий"];
    var a = document.getElementById('ul');
    for(var k = 0; k < t.length; k++){
        var l1 = document.createElement('li');
        l1.innerHTML = t[k];
        a.appendChild(l1);
    }
}

function f5(){
    var t1 = document.getElementById('tab');
    for(var i = 1; i < 5; i++){
        var r = document.createElement('tr');
        for(var j = 1; j < 6; j++){
            var d = document.createElement('th');
            d.innerHTML = i+j;
            r.appendChild(d)
        }
        t1.appendChild(r)
    }
}