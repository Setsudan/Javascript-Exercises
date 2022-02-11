const body = document.getElementById("body");
let color = ["red", "blue", "white", "black"];
var title = document.getElementById("title");
var i = 0;
const BgChanger = () => {
  if (i < 4) {
    let bgColor = color[i];
    document.body.style.backgroundColor = bgColor;
    i = i + 1;
    console.log(i);
    let content = `Bg color is: ${bgColor}`;
    title.innerText = content;
    console.warn(bgColor);
  } else {
    console.log("this bitch to big");
    i = 0;
    let bgColor = color[i];
    document.body.style.backgroundColor = bgColor;
    i = i + 1;
    console.log(i);
    let content = `Bg color is: ${bgColor}`;
    title.innerText = content;
    console.warn(bgColor);
  }
};
