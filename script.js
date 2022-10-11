let marginTop = 0;
let marginLeft = 0;

let parentMgTop = 0;
let parentMgLeft = 0;

let colorArr = ["maroon", "pink", "cyan"];

let color1 = "#808080"; // gray
let color2 = "#008000"; // green
let color3 = "#FF0000"; // red
let color4 = "#800000"; // maroon
let color5 = "#0000FF"; // blue
let color6 = "#800080"; // purple
let color7 = "#DC143C"; // pink
let color8 = "#FF7F50"; // peach
let color9 = "#FFA500"; // orange
let curLayer = 0;
let count = 0;

let font_size = 10;
function jsonsubmit() {
  let o = document.getElementById("input");
  let a = document.getElementById("input").value;

  let f = isJson(a);

  console.log("f", f);
  if (f == true) {
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
          mgLeft = parentMgLeft + 40;
          parentMgLeft = mgLeft;

          addArray(ele, mgTop, mgLeft);

          marginTop = 0;
          marginLeft = 0;
        });
      }
    });
  } else {
    // o.style.border = "1px solid red"
    alert("Only JSON can be converted");
    console.log("only json can be converted");
  }
}

function isJson(item) {
  item = typeof item !== "string" ? JSON.stringify(item) : item;

  try {
    item = JSON.parse(item);
  } catch (e) {
    return false;
  }

  if (typeof item === "object" && item !== null) {
    return true;
  }

  return false;
}

// ---------- DETERMINE ELEMENT -------------
function parentBox(val, mgTop, mgLeft) {
  createEle(color1, val, mgTop, mgLeft);
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
              createEle(color2, key, mgTop, mgLeft);

              if (typeof ele[key] == "object") {
              } else {
                createChildEle(color9, ele[key], mgTop, mgLeft + 40);
              }
            });
          } else {
            mgLeft = parentMgLeft + 40;
            createEle(color2, ele, mgTop, mgLeft);

            addArray(ele, mgTop, mgLeft);
            parentMgLeft = mgLeft - 40;

            mgLeft = 0;
          }
        }
      });
    } else {
      if (typeof ele === "object") {
        console.log("first ele", ele);
        Object.keys(ele).forEach((key, idx) => {
          createEle(color2, key, mgTop, mgLeft);

          if (typeof key == "object") {
            if (Array.isArray(ele[key])) {
              ele[key].map((ele) => {
                console.log("array baru", ele);
              });
            } else {
              createChildEle(color5, ele, mgTop, mgLeft + 40);
            }
          }

          if (Array.isArray(ele[key])) {
            ele[key].map((ele) => {
              console.log("array baru", ele);

              if (typeof ele == "object") {
                addArray(ele, mgTop, mgLeft + 40);
              } else {
                createChildEle(color5, ele, mgTop, mgLeft + 40);
              }
            });
          } else {
            if (typeof ele[key] == "object") {
              // Object.keys(

              console.log("ele[key]", ele[key]);

              let ele2 = ele[key];
              Object.keys(ele2).forEach((key, idx) => {
                console.log("ele[key] inside foreach", ele2[key]);

                createEle(color3, key, mgTop, mgLeft + 40);

                parentMgLeft = mgLeft + 40;

                if (typeof ele2[key] == "object") {
                  if (Array.isArray(ele2[key])) {
                    ele2[key].map((ele) => {
                      console.log("array baru", ele);
                      createChildEle(color5, ele, mgTop, mgLeft + 40);
                    });
                  } else {
                    addArray(ele2[key], mgTop, parentMgLeft + 40);
                    // createChildEle(color6, ele2[key], mgTop, parentMgLeft + 40);
                  }
                } else {
                  createChildEle(color5, ele2[key], mgTop, parentMgLeft + 40);
                }
              });
              // );
            } else {
              createChildEle(color3, ele[key], mgTop, mgLeft + 40);
            }
          }
        });
      } else {
        // mgLeft = parentMgLeft + 40;
        // createEle(color2, ele, mgTop, mgLeft);

        // parentMgLeft = mgLeft - 40;

        // mgLeft = 0;

        console.log("laravel", ele);
      }
    }
  } else {
    if (Array.isArray(ele)) {
      ele.map((ele) => {
        // addArray(ele, mgTop, mgLeft);
        // console.log(, ele);
        createEle(color6, ele, mgTop, mgLeft);
      });
    } else {
      mgLeft = parentMgLeft;
      console.log("cyclop", ele);
      if (typeof ele == "boolean") {
        createBooleanEle(color8, ele, mgTop, mgLeft);
      } else {
        if (ele) {
          createEle(color4, ele, mgTop, mgLeft);
        } else {
          createNullEle(color7, "NULL", mgTop, mgLeft);
        }
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

function createNullEle(color, data, mgTop, mgLeft) {
  let a = document.getElementById("as");

  var b = document.createElement("p");
  b.style.backgroundColor = color;
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

function createBooleanEle(color, data, mgTop, mgLeft) {
  let a = document.getElementById("as");

  var b = document.createElement("p");
  b.style.backgroundColor = color;
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

// ----------- USER PREFERENCES ---------------

function change_color(val) {
  switch (val) {
    case 1:
      color1 = document.getElementById("c1").value;
      console.log("warna 1", color1);
      break;
    case 2:
      color2 = document.getElementById("c2").value;
      break;
    case 3:
      color3 = document.getElementById("c3").value;
      break;
    case 4:
      color4 = document.getElementById("c4").value;
      break;
    case 5:
      color5 = document.getElementById("c5").value;
      break;
    case 6:
      color6 = document.getElementById("c6").value;
      break;
    case 7:
      color7 = document.getElementById("c7").value;
      break;
    case 8:
      color8 = document.getElementById("c8").value;
      break;
    case 9:
      color9 = document.getElementById("c9").value;
      break;
  }

  document.getElementById("as").replaceChildren();
  jsonsubmit();
}

function change_fontsize() {
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
// last phase dev
