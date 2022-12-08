let userName = prompt("Write your name", "User");
if (userName === "") {
  userName = "User";
}
const user__name = document.querySelector(".user__name");
user__name.textContent = userName;
const btn = document.querySelector(".generate");
const userScore = document.querySelector(".user__score");
const robotScore = document.querySelector(".robot__score");
const userGenerate = document.querySelector(".user__generate");
const robotGenerate = document.querySelector(".robot__generate");
let userScoreNum = 0;
let robotScoreNum = 0;

let Rectangle = class {
  constructor(img, score) {
    this.img = img;
    this.score = score;
  }
};
const imgArray = [];
imgArray[0] = new Rectangle("img/6.jpeg", 6);
imgArray[1] = new Rectangle("img/7.jpeg", 7);
imgArray[2] = new Rectangle("img/8.png", 8);
imgArray[3] = new Rectangle("img/9.jpeg", 9);
imgArray[4] = new Rectangle("img/10.png", 10);
imgArray[5] = new Rectangle("img/валет.jpeg", 2);
imgArray[6] = new Rectangle("img/дама.jpeg", 3);
imgArray[7] = new Rectangle("img/король.jpeg", 4);
imgArray[8] = new Rectangle("img/туз.png", 11);

const animation = (c) => {
  c.classList.add("rotate-scale-up");
  setTimeout(function () {
    c.classList.remove("rotate-scale-up");
  }, 750);
};

btn.addEventListener("click", () => {
  console.log(imgArray);
  userGenerate.innerHTML = "";
  robotGenerate.innerHTML = "";
  animation(robotGenerate);
  animation(userGenerate);
  let a = imgArray[Math.floor(Math.random() * imgArray.length)];
  let b = imgArray[Math.floor(Math.random() * imgArray.length)];
  console.log(a.img);
  console.log(b.img);

  userGenerate.src = a.img;
  robotGenerate.src = b.img;
  if (a.score > b.score) {
    userScoreNum++;
    userScore.textContent = userScoreNum;
  } else if (b.score > a.score) {
    robotScoreNum++;
    robotScore.textContent = robotScoreNum;
  }
  if (userScoreNum === 3) {
    userScoreNum = 0;
    robotScoreNum = 0;
    alert(`${userName} - Win`);
  } else if (robotScoreNum === 3) {
    alert("Robot - Win");
    userScoreNum = 0;
    robotScoreNum = 0;
  }
});
