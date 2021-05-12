const search = document.querySelector(".search");
const boxWrapper = document.querySelector(".box-wrapper");
const boxNames = document.querySelectorAll(".box-title");

search.addEventListener("keyup", (e) => {
  const searchVal = search.value;
  const pattern = new RegExp(searchVal, "i");
  for (i = 0; i < boxNames.length; i++) {
    const box = boxNames[i];
    if (pattern.test(box.innerText)) {
      box.parentElement.classList.remove("hidden");
    } else {
      box.parentElement.classList.add("hidden");
    }
  }
});
