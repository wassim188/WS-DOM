let plusBtns = document.getElementsByClassName("bxs-plus-circle");
let minusBtns = document.getElementsByClassName("bxs-minus-circle");
let trashBtns = document.getElementsByClassName("bxs-trash");
let heartBtns = document.getElementsByClassName("bxs-heart");

//btn plus quantity
for (let btn of plusBtns) {
  btn.addEventListener("click", function () {
    btn.nextElementSibling.innerHTML++;
    total();
  });
}

//btn minus quanity
for (let btn of minusBtns) {
  btn.addEventListener("click", function () {
    if (btn.previousElementSibling.innerHTML > 0) {
      btn.previousElementSibling.innerHTML--;
      total();
    }
  });
}

// heart color
for (let i = 0; i < heartBtns.length; i++) {
  heartBtns[i].addEventListener("click", function () {
    heartBtns[i].classList.toggle("toggleHeart");
  });
}

//remove 
for (let btn of trashBtns) {
  btn.addEventListener("click", function () {
    btn.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
  });
}
// total price
function total() {
  let prices = document.getElementsByClassName("unit-price");
  let qtity = document.getElementsByClassName("qte");
  let total = document.querySelector(".total-price");
  let sum = 0;
  for (let i = 0; i < qtity.length; i++) {
    sum = sum + qtity[i].innerHTML * prices[i].innerHTML;
  }
  return (total.innerHTML = sum);
}
