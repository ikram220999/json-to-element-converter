// DELCARE GLOBAL VARIABLE
let marginTop = 0;
let marginLeft = 0;

let parentMgTop = 0;
let parentMgLeft = 0;

function jsonsubmit() {
  let a = document.getElementById("input").value;
  let json = JSON.parse(a);
  let length = Object.keys(json);

  Object.entries(json).forEach((element, idx) => {
    let firstIdx = element.shift();

    if (firstIdx) {
      marginTop = 10;
      parentMgTop = 10;

      marginLeft = 10;
      parentMgLeft = 10;

      parentBox(firstIdx, marginTop, marginLeft);

      marginTop = 0;
      marginLeft = 0;
    }
    if (Array.isArray(element)) {
      element.map((ele) => {
        mgTop = parentMgTop + 20;
        mgLeft = parentMgLeft + 20;

        addArray(ele, mgTop, mgLeft);

        marginTop = 0;
        marginLeft = 0;
      });
    }
  });
}

// ---------- DETERMINE ELEMENT -------------
function parentBox(val, mgTop, mgLeft) {
  createEle("grey", val, mgTop, mgLeft);
}

function addArray(ele, mgTop, mgLeft) {
  console.log("ele", ele);
  console.log("ele", typeof ele);
  console.log("------------------------");
  if (typeof ele === "object") {
    if (Array.isArray(ele)) {
      ele.map((ele) => {
        createEle("green", ele, mgTop, mgLeft);
      });
    }
  }
}

function addObject(ele, mgTop, mgLeft) {
  createEle("orange", ele, mgTop, mgLeft);
}

// ---------- CREATE NEW HTML ELEMENT -------------
function createEle(bgColor, data, mgTop, mgLeft) {
  let a = document.getElementById("as");
  a.style.border = "1px solid black";
  a.style.marginTop = "10px";
  a.style.padding = "10px";

  var b = document.createElement("p");
  b.style.backgroundColor = bgColor;
  b.style.marginTop = "" + mgTop + "px";
  b.style.marginLeft = "" + mgLeft + "px";
  b.style.padding = "10px";
  b.style.width = "max-content";
  b.style.color = "white";

  var btext = document.createTextNode(data);
  b.appendChild(btext);

  a.appendChild(b);
}
