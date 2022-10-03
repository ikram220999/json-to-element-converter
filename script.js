let marginTop = 0;
let marginLeft = 0;

let parentMgTop = 0;
let parentMgLeft = 0;

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
            Object.entries(ele).forEach((element, idx) => {
              console.log("inner 2 object", element);
              addArray(element, mgTop, mgLeft);
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
        Object.entries(ele).forEach((element, idx) => {
          if (Array.isArray(element)) {
            element.map((ele) => {
              console.log("outer 3", ele);
              if (ele === "object") {
                addArray(ele, mgTop, mgLeft);
              } else if (Array.isArray(ele)) {
                addArray(ele, mgTop, mgLeft);
              } else {
                mgLeft = parentMgLeft + 20;
                createEle("orange", ele, mgTop, mgLeft);
                parentMgLeft = mgLeft - 20;

                mgLeft = 0;
              }
            });
          } else {
            console.log("outer object", element);
            console.log("outer object type", typeof element);
            // createEle("green", ele, mgTop, mgLeft);
            addArray(ele, mgTop, mgLeft);
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
      mgLeft = parentMgLeft + 20;
      createEle("red", ele, mgTop, mgLeft);
      parentMgLeft = mgLeft;

      mgLeft = 0;
    }
  }
}

function ifArray(ele) {
  if (Array.isArray(ele)) {
  }
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
  b.style.fontSize = "10px";
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
