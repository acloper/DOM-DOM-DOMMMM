let div = document.createElement("div");
div.className = "flexWrap";
let button = document.createElement("button");
let btnText = document.createTextNode("Add Square");
button.appendChild(btnText);
document.body.appendChild(button);
document.body.appendChild(div);
let count = 0;
let squares = document.querySelectorAll("div.square");

button.addEventListener("click", addSquare);

function addSquare() {
  let addDiv = document.createElement("div");
  addDiv.className = "square";
  addDiv.id = ++count;
  div.appendChild(addDiv);
  squares = document.querySelectorAll("div.square");
  squares.forEach(function (square) {
    square.addEventListener("mouseenter", showId);
    square.addEventListener("mouseleave", removeId);
    square.addEventListener("click", switchColor);
    square.addEventListener("dblclick", removeSq);
  });
}
function showId(e) {
  console.log(e.target.id);
  let squareId = document.createElement("div");
  e.target.appendChild(squareId);
  squareId.className = "square-id";
  squareId.textContent = e.target.id;
}

function removeId(e) {
  e.target.firstElementChild.remove();
}

function switchColor(e) {
  let colors = ["#F33B14", "#14F340", "#1439F3", "#F314D8", "#14F3F3", "#E9F314", "#F36814", "#F3146F", "#F3143D", "#1428F3"];
  let colorChange = colors[Math.floor(Math.random() * colors.length)];
  if (e.target.className === "square-id") {
    e.target.parentNode.style.backgroundColor = colorChange;
  } else {
    e.target.style.backgroundColor = colorChange;
  }
}

function removeSq(e) {
  let sq;
  if (e.target.className === "square-id") {
    sq = e.target.parentNode;
  } else {
    sq = e.target;
  }
  if (sq.id % 2 === 0) {
    if (sq.nextSibling === null) {
      alert("Square after cannot be removed!");
    } else {
      sq.nextSibling.remove();
    }
  } else {
    if (sq.previousSibling === null) {
      alert("Square before cannot be removed!");
    } else {
      sq.previousSibling.remove();
    }
  }
}
