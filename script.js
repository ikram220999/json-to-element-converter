let marginTop = 0;
let marginLeft = 0;

let parentMgTop = 0;
let parentMgLeft = 0;

let colorArr = ["maroon", "pink", "cyan"];
let curLayer = 0;
let count = 0;

let font_size = 10;
function jsonsubmit() {
  let a = document.getElementById("input").value;
  let json = JSON.parse(a);

  console.log("KETUA JSON", json);
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
      // confirm array
      element.map((ele) => {
        mgTop = parentMgTop;
        mgLeft = parentMgLeft + 20;
        parentMgLeft = mgLeft;

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

// ---------------- ALGORITHM ----------------
function addArray(ele, mgTop, mgLeft) {
  console.log("ele", ele);
  console.log("ele", typeof ele);
  console.log("------------------------");
  if (typeof ele === "object") {
    if (Array.isArray(ele)) {
      console.log("inner 1", ele);
      ele.map((ele) => {
        if (Array.isArray(ele)) {
          console.log("inner 2", ele);
          addArray(ele, mgTop, mgLeft);
        } else {
          if (typeof ele === "object") {
            Object.keys(ele).forEach((key, idx) => {
              createEle("green", key, mgTop, mgLeft);

              if (typeof ele[key] == "object") {
              } else {
                createChildEle("orange", ele[key], mgTop, mgLeft + 20);
              }
            });
          } else {
            mgLeft = parentMgLeft + 20;
            createEle("green", ele, mgTop, mgLeft);
            parentMgLeft = mgLeft - 20;

            mgLeft = 0;
          }
        }
      });
    } else {
      if (typeof ele === "object") {
        console.log("first ele", ele);
        Object.keys(ele).forEach((key, idx) => {
          createEle("green", key, mgTop, mgLeft);

          if (typeof key == "object") {
            if (Array.isArray(ele[key])) {
              ele[key].map((ele) => {
                console.log("array baru", ele);
              });
            } else {
              createChildEle("blue", ele, mgTop, mgLeft + 20);
            }
          }

          if (Array.isArray(ele[key])) {
            ele[key].map((ele) => {
              console.log("array baru", ele);

              if (typeof ele == "object") {
                addArray(ele, mgTop, mgLeft+20);
              } else {
                createChildEle("blue", ele, mgTop, mgLeft + 20);
              }
            });
          } else {
            createChildEle("red", ele[key], mgTop, mgLeft + 20);
          }
        });
      } else {
      }
    }
  } else {
    if (Array.isArray(ele)) {
      ele.map((ele) => {
        // addArray(ele, mgTop, mgLeft);
        createEle("purple", ele, mgTop, mgLeft);
      });
    } else {
      mgLeft = parentMgLeft;
      console.log("cyclop", ele);
      if (ele) {
        createEle("maroon", ele, mgTop, mgLeft);
      } else {
        createNullEle();
      }

      parentMgLeft = mgLeft;

      mgLeft = 0;
    }
  }

  count++;
  // if(count == )
}

function ifArray(ele) {
  if (Array.isArray(ele)) {
  }
}

function createNullEle() {
  let a = document.getElementById("as");

  var b = document.createElement("p");
  b.style.backgroundColor = "purple";
  b.style.marginTop = "" + mgTop + "px";
  b.style.marginLeft = "" + mgLeft + "px";
  b.style.padding = "5px";
  b.style.fontSize = "" + font_size + "px";
  b.style.width = "max-content";
  b.style.color = "white";

  var btext = document.createTextNode("NULL");
  b.appendChild(btext);

  a.appendChild(b);
}

function addObject(ele, mgTop, mgLeft) {
  createEle("orange", ele, mgTop, mgLeft);
}

// ---------- CREATE NEW HTML ELEMENT -------------
function createEle(bgColor, data, mgTop, mgLeft) {
  let a = document.getElementById("as");

  var b = document.createElement("p");
  b.style.backgroundColor = bgColor;
  b.style.marginTop = "" + mgTop + "px";
  b.style.marginLeft = "" + mgLeft + "px";
  b.style.padding = "5px";
  b.style.fontSize = "" + font_size + "px";
  b.style.width = "max-content";
  b.style.color = "white";

  var btext = document.createTextNode(data);
  b.appendChild(btext);

  a.appendChild(b);
}

function createChildEle(bgColor, data, mgTop, mgLeft) {
  let a = document.getElementById("as");

  var b = document.createElement("p");
  b.style.backgroundColor = bgColor;
  b.style.marginTop = "" + mgTop + "px";
  b.style.marginLeft = "" + mgLeft + "px";
  b.style.padding = "5px";
  b.style.fontSize = "" + font_size + "px";
  b.style.width = "max-content";
  b.style.color = "white";

  var btext = document.createTextNode(data);
  b.appendChild(btext);

  a.appendChild(b);
}

//
function createCanvas() {
  let a = document.getElementById("as");

  a.style.border = "1px solid black";
  a.style.marginTop = "10px";
  a.style.padding = "10px";
}

function reset() {
  let a = document.getElementById("input");
  document.getElementById("as").replaceChildren();
  a.value = "";
}

function change_fontsize () {
  let a = document.getElementById("fontsize").value;
  console.log("font size", a);
  font_size = a;

  document.getElementById("as").replaceChildren();
  jsonsubmit();
}
// -------------- TESTING ----------------------

let limit = false;
let j = 0;
function testloop() {
  while (j != 10) {
    j++;
    if (j == 10) {
      limit = true;
    }
    console.log("loop val", j);
    console.log("---------------");
    testloop(j);
  }
  return;
}

//-----------------------------------------------
