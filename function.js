function ff() {
  var x = document.getElementById("tb");
  if (x.value == 123) {
    var t = "Вход";
    var a = "index.html";
    var s = document.getElementById("a");
    s.innerText = t;
    s.setAttribute("href", a);
  } else {
    x.value = "";
    alert("Заново");
  }
}
function f4() {
  var t = ["Perviy", "Vtoroy", "Tretiy"];
  var a = document.getElementById("ul");
  for (var k = 0; k < t.length; k++) {
    var l1 = document.createElement("li");
    l1.innerHTML = t[k];
    a.appendChild(l1);
  }
}
function f5() {
  var t1 = document.getElementById("tab");
  for (var i = 1; i < 6; i++) {
    var r = document.createElement("tr");
    for (var j = 1; j < 6; j++) {
      var d = document.createElement("th");
      d.innerHTML = i + j;
      r.appendChild(d);
    }
    t1.appendChild(r);
  }
}
