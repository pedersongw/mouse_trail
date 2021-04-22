let displayed = undefined;
document.addEventListener("click", event => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.clientX - 6) + "px";
    dot.style.top = (event.clientY - 6) + "px";
    document.body.appendChild(dot);
    displayed = event.clientX.toString() + " , " + event.clientY.toString();
    document.getElementById("test").innerHTML = displayed;
  });

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


let scheduled = null;
let dotCounter = 1;
window.addEventListener("mousemove", event => {
  if (!scheduled) {
    setTimeout(() => {
        let dot = document.getElementById(dotCounter.toString());
    dot.style.display = "block";
    setTimeout(function() {
        dot.style.display = "none";
    }, 900)
    dot.style.left = (event.clientX - 6) + "px";
    dot.style.top = (event.clientY - 6) + "px";
      scheduled = null;
      if (dotCounter == 19) {
          dotCounter = 1;
      } else {
          dotCounter++;
      }
    }, 50);
  }
  scheduled = event;
});