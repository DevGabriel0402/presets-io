// Imagens do Preset
const preset01 =
  document.getElementById("preset01");
const preset02 =
  document.getElementById("preset02");
const preset03 =
  document.getElementById("preset03");

const shape = document.getElementById("shape");

// Link texto de cada preset

const preset01Text = document.getElementById(
  "preset01click"
);
const preset02Text = document.getElementById(
  "preset02click"
);
const preset03Text = document.getElementById(
  "preset03click"
);

preset01Text.addEventListener(
  "click",
  function () {
    preset01Text.classList.add("active");
    preset02Text.classList.remove("active");
    preset03Text.classList.remove("active");

    shape.style.backgroundColor = "#346261";
    document.getElementById(
      "title1"
    ).style.color = "#fff";

    preset01.classList.remove("hidden");
    preset02.classList.add("hidden");
    preset03.classList.add("hidden");
  }
);

preset02Text.addEventListener(
  "click",
  function () {
    preset01Text.classList.remove("active");
    preset02Text.classList.add("active");
    preset03Text.classList.remove("active");

    shape.style.backgroundColor = "#9EB1A1";
    document.getElementById(
      "title2"
    ).style.color = "#fff";

    preset01.classList.add("hidden");
    preset02.classList.remove("hidden");
    preset03.classList.add("hidden");
  }
);

preset03Text.addEventListener(
  "click",
  function () {
    preset01Text.classList.remove("active");
    preset02Text.classList.remove("active");
    preset03Text.classList.add("active");

    shape.style.backgroundColor = "#A2A7AD";
    document.getElementById(
      "title3"
    ).style.color = "#fff";

    preset01.classList.add("hidden");
    preset02.classList.add("hidden");
    preset03.classList.remove("hidden");
  }
);

// Botões de download

const btn01 = document.getElementById("btn1");
const btn02 = document.getElementById("btn2");
const btn03 = document.getElementById("btn3");

btn01.addEventListener("click", function () {
  btn01.href = "./src/moody.zip";
});

btn02.addEventListener("click", function () {
  btn02.href = "./src/chic.zip";
});

btn03.addEventListener("click", function () {
  btn03.href = "./src/urbanite.zip";
});
