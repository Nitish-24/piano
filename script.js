console.log("script loaded");            // confirm script actually runs

// let par = document.querySelector('#space');
// if (!par) {
//   console.warn("No element found with id='#space' — check your HTML");
// } else {
//   par.textContent = "***";
// }

// global keydown listener
document.addEventListener("keydown", function (event) {
    // console.log("keydown:", event.key, event.code);  // debug every keypress

    let keyPressed = event.key.toLowerCase();  // normalize


    switch (keyPressed) {

        case "a":
    console.log("A pressed");
    var a = document.querySelector(".a");
    let soundA = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundA.play();
    a.style.backgroundColor = "#074af1ff";
    setTimeout(() => { a.style.backgroundColor = ""; }, 200);
    break;

case "b":
    console.log("B pressed");
    var b = document.querySelector(".b");
    let soundB = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundB.play();
    b.style.backgroundColor = "#074af1ff";
    setTimeout(() => { b.style.backgroundColor = ""; }, 200);
    break;

case "c":
    console.log("C pressed");
    var c = document.querySelector(".c");
    let soundC = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundC.play();
    c.style.backgroundColor = "#074af1ff";
    setTimeout(() => { c.style.backgroundColor = ""; }, 200);
    break;

case "d":
    console.log("D pressed");
    var d = document.querySelector(".d");
    let soundD = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundD.play();
    d.style.backgroundColor = "#074af1ff";
    setTimeout(() => { d.style.backgroundColor = ""; }, 200);
    break;

case "e":
    console.log("E pressed");
    var e = document.querySelector(".e");
    let soundE = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundE.play();
    e.style.backgroundColor = "#074af1ff";
    setTimeout(() => { e.style.backgroundColor = ""; }, 200);
    break;

case "f":
    console.log("F pressed");
    var f = document.querySelector(".f");
    let soundF = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundF.play();
    f.style.backgroundColor = "#074af1ff";
    setTimeout(() => { f.style.backgroundColor = ""; }, 200);
    break;

case "g":
    console.log("G pressed");
    var g = document.querySelector(".g");
    let soundG = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundG.play();
    g.style.backgroundColor = "#074af1ff";
    setTimeout(() => { g.style.backgroundColor = ""; }, 200);
    break;

case "h":
    console.log("H pressed");
    var h = document.querySelector(".h");
    let soundH = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundH.play();
    h.style.backgroundColor = "#074af1ff";
    setTimeout(() => { h.style.backgroundColor = ""; }, 200);
    break;

case "i":
    console.log("I pressed");
    var i = document.querySelector(".i");
    let soundI = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundI.play();
    i.style.backgroundColor = "#074af1ff";
    setTimeout(() => { i.style.backgroundColor = ""; }, 200);
    break;

case "j":
    console.log("J pressed");
    var j = document.querySelector(".j");
    let soundJ = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundJ.play();
    j.style.backgroundColor = "#074af1ff";
    setTimeout(() => { j.style.backgroundColor = ""; }, 200);
    break;

case "k":
    console.log("K pressed");
    var k = document.querySelector(".k");
    let soundK = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundK.play();
    k.style.backgroundColor = "#074af1ff";
    setTimeout(() => { k.style.backgroundColor = ""; }, 200);
    break;

case "l":
    console.log("L pressed");
    var l = document.querySelector(".l");
    let soundL = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundL.play();
    l.style.backgroundColor = "#074af1ff";
    setTimeout(() => { l.style.backgroundColor = ""; }, 200);
    break;

case "m":
    console.log("M pressed");
    var m = document.querySelector(".m");
    let soundM = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundM.play();
    m.style.backgroundColor = "#074af1ff";
    setTimeout(() => { m.style.backgroundColor = ""; }, 200);
    break;

case "n":
    console.log("N pressed");
    var n = document.querySelector(".n");
    let soundN = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundN.play();
    n.style.backgroundColor = "#074af1ff";
    setTimeout(() => { n.style.backgroundColor = ""; }, 200);
    break;

case "o":
    console.log("O pressed");
    var o = document.querySelector(".o");
    let soundO = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundO.play();
    o.style.backgroundColor = "#074af1ff";
    setTimeout(() => { o.style.backgroundColor = ""; }, 200);
    break;

case "p":
    console.log("P pressed");
    var p = document.querySelector(".p");
    let soundP = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundP.play();
    p.style.backgroundColor = "#074af1ff";
    setTimeout(() => { p.style.backgroundColor = ""; }, 200);
    break;

case "q":
    console.log("Q pressed");
    var q = document.querySelector(".q");
    let soundQ = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundQ.play();
    q.style.backgroundColor = "#074af1ff";
    setTimeout(() => { q.style.backgroundColor = ""; }, 200);
    break;

case "r":
    console.log("R pressed");
    var r = document.querySelector(".r");
    let soundR = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundR.play();
    r.style.backgroundColor = "#074af1ff";
    setTimeout(() => { r.style.backgroundColor = ""; }, 200);
    break;

case "s":
    console.log("S pressed");
    var s = document.querySelector(".s");
    let soundS = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundS.play();
    s.style.backgroundColor = "#074af1ff";
    setTimeout(() => { s.style.backgroundColor = ""; }, 200);
    break;

case "t":
    console.log("T pressed");
    var t = document.querySelector(".t");
    let soundT = new Audio(`${Math.floor(Math.random() * 10)}.mp3`);
    soundT.play();
    t.style.backgroundColor = "#074af1ff";
    setTimeout(() => { t.style.backgroundColor = ""; }, 200);
    break;

case "u":
    console.log("U pressed");
    var u = document.querySelector(".u");
    }
});
