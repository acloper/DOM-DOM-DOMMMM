document.addEventListener("DOMContentLoaded", function () {
  let button = document.createElement("button");
  let btnText = document.createTextNode("Add Square");
  let div = document.createElement("div");
  document.body.appendChild(div);
  button.appendChild(btnText);
  div.appendChild(button);
  let count = 0;

  button.addEventListener("click", function () {
    let addDiv = document.createElement("div");
    addDiv.className = "square";
    count++;
    addDiv.id = count;
    div.appendChild(addDiv);
    document.body.appendChild(addDiv);
    addDiv.addEventListener("mouseover", showId);
  });
  let squares = document.querySelectorAll("square");
  function showId(e) {
    console.log(e.target.id);
    e.target.style.color = "white";
    if (e.target.id) {
      e.target.textContent = count++;
    }
  }
});

//
//     e.target.textContent = count;
// for (let i = 0; 1 < squares.length; i++) {
//       squares[i].target.id;
// }
