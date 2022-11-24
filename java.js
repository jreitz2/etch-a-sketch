// initial state
const draw = document.querySelector(".draw");
draw.style.display = "flex";
draw.style.maxWidth = "500px";
draw.style.flexWrap = "wrap";

for (let i = 0; i < 100; i++){
    const square = document.createElement("div");
    square.style.backgroundColor = "rgb(165, 165, 165)";
    square.style.width = "48px";
    square.style.height = "48px";
    square.style.border = "solid gray 1px";
    draw.append(square);
}

// small button
const sml = document.querySelector(".sml");
sml.addEventListener("click", e => {
   draw.innerHTML = ``;
    for (let i = 0; i < 100; i++){
        const square = document.createElement("div");
        square.style.backgroundColor = "rgb(165, 165, 165)";
        square.style.width = "48px";
        square.style.height = "48px";
        square.style.border = "solid gray 1px";
        draw.append(square);
    }
})

//medium button
const med = document.querySelector(".med");
med.addEventListener("click", e => {
   draw.innerHTML = ``;
    for (let i = 0; i < 400; i++){
        const square = document.createElement("div");
        square.style.backgroundColor = "rgb(165, 165, 165)";
        square.style.width = "23px";
        square.style.height = "23px";
        square.style.border = "solid gray 1px";
        draw.append(square);
    }
})

//large button
const lrg = document.querySelector(".lrg");
lrg.addEventListener("click", e => {
   draw.innerHTML = ``;
    for (let i = 0; i < 600; i++){
        const square = document.createElement("div");
        square.style.backgroundColor = "rgb(165, 165, 165)";
        square.style.width = "18px";
        square.style.height = "18.8px";
        square.style.border = "solid gray 1px";
        draw.append(square);
    }
})

//black button
const black = document.querySelector(".black");
black.addEventListener("click", e => {
    draw.addEventListener("mouseover", e => {
        e.target.style.backgroundColor = "black";})
})

//rainbow button
const rainbow = document.querySelector(".rainbow");
function getRandomColor() {
    let colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    return colors[Math.floor(Math.random() * colors.length)];
}
rainbow.addEventListener("click", e => {
    draw.addEventListener("mouseover", e => {
            e.target.style.backgroundColor = getRandomColor();
    }
)})

