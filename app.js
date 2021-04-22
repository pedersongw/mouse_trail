let displayed = undefined;
document.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.clientX - 4) + "px";
    dot.style.top = (event.clientY - 4) + "px";
    document.body.appendChild(dot);
    displayed = event.clientX.toString() + " , " + event.clientY.toString();
    document.getElementById("test").innerHTML = displayed;
  });
for (let i = 1; i < 20; i++) {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.id = "dot-" + i.toString();
    dot.style.display = "none";
    document.getElementById("test2").appendChild(dot);
}
let counter = 1;
window.onload = function() {
    setInterval(function() {
        if (counter < 20) {
        document.getElementById("test3").innerHTML = counter.toString();
        counter++;
        } else {
            counter = 1;
            document.getElementById("test3").innerHTML = counter.toString();
        }
    }, 100);
};

let thing = document.createElement("div");
        thing.id = "thing";
        thing.textContent = 2;
        thing.style.display = "none";
        thing.style.fontSize = "100px";
        document.getElementById("test2").appendChild(thing);
   
function newDot() {
    setTimeout(function() {
        thing.style.display = "block";
        thing.style.textContent = counter;
    }, 500);
    setTimeout(function() {

        thing.style.display = "none";
    }, 1000);
}
document.addEventListener("mousemove", newDot());