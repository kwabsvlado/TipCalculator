//Variables

const billInput = document.getElementById("bill");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const peopleInput = document.getElementById("people");
const customInput = document.querySelector(".custom-input");

const err1 = document.getElementById("err1");
const err2 = document.getElementById("err2");

const tipTotal = document.getElementById("tip-total");
const totalValue = document.getElementById("total-value");
const resetBtn = document.getElementById("submit-btn");

//BTN EVENT LISTENERS
btn1.addEventListener("click", function () {
  const tipAmoun = (billInput.value * 5) / 100 / peopleInput.value;
  const tipAmount = Math.round(tipAmoun * 100) / 100;
  tipTotal.innerText = tipAmount + "$";

  totalAmoun = billInput.value / peopleInput.value + tipAmount;
  const totalAmount = Math.round(totalAmoun * 100) / 100;
  totalValue.innerText = totalAmount + "$";

  if (peopleInput.value === "") {
    err2.innerText = "Can't be zero";
    peopleInput.style.borderColor = "red";
    setTimeout(function () {
      err2.innerText = "";
      peopleInput.style.borderColor = "";
    }, 2000);
    tipTotal.innerText = "$0.00";
    totalValue.innerText = "$0.00";
  } else {
    err2.innerText = "";
  }
});
//
btn2.addEventListener("click", function () {
  const tipAmoun = (billInput.value * 10) / 100 / peopleInput.value;
  const tipAmount = Math.round(tipAmoun * 100) / 100;
  tipTotal.innerText = tipAmount + "$";

  totalAmoun = billInput.value / peopleInput.value + tipAmount;
  const totalAmount = Math.round(totalAmoun * 100) / 100;
  totalValue.innerText = totalAmount + "$";

  if (peopleInput.value === "") {
    err2.innerText = "Can't be zero";
    peopleInput.style.borderColor = "red";
    setTimeout(function () {
      err2.innerText = "";
      peopleInput.style.borderColor = "";
    }, 2000);
    tipTotal.innerText = "$0.00";
    totalValue.innerText = "$0.00";
  } else {
    err2.innerText = "";
  }
});
//
btn3.addEventListener("click", function () {
  const tipAmoun = (billInput.value * 15) / 100 / peopleInput.value;
  const tipAmount = Math.round(tipAmoun * 100) / 100;
  tipTotal.innerText = tipAmount + "$";

  totalAmoun = billInput.value / peopleInput.value + tipAmount;
  const totalAmount = Math.round(totalAmoun * 100) / 100;
  totalValue.innerText = totalAmount + "$";

  if (peopleInput.value === "") {
    err2.innerText = "Can't be zero";
    peopleInput.style.borderColor = "red";
    setTimeout(function () {
      err2.innerText = "";
      peopleInput.style.borderColor = "";
    }, 2000);
    tipTotal.innerText = "$0.00";
    totalValue.innerText = "$0.00";
  } else {
    err2.innerText = "";
  }
});
//
btn4.addEventListener("click", function () {
  const tipAmoun = (billInput.value * 25) / 100 / peopleInput.value;
  const tipAmount = Math.round(tipAmoun * 100) / 100;
  tipTotal.innerText = tipAmount + "$";

  totalAmoun = billInput.value / peopleInput.value + tipAmount;
  const totalAmount = Math.round(totalAmoun * 100) / 100;
  totalValue.innerText = totalAmount + "$";

  if (peopleInput.value === "") {
    err2.innerText = "Can't be zero";
    peopleInput.style.borderColor = "red";
    setTimeout(function () {
      err2.innerText = "";
      peopleInput.style.borderColor = "";
    }, 2000);
    tipTotal.innerText = "$0.00";
    totalValue.innerText = "$0.00";
  } else {
    err2.innerText = "";
  }
});
//
btn5.addEventListener("click", function () {
  const tipAmoun = (billInput.value * 50) / 100 / peopleInput.value;
  const tipAmount = Math.round(tipAmoun * 100) / 100;
  tipTotal.innerText = tipAmount + "$";

  totalAmoun = billInput.value / peopleInput.value + tipAmount;
  const totalAmount = Math.round(totalAmoun * 100) / 100;
  totalValue.innerText = totalAmount + "$";

  if (peopleInput.value === "") {
    err2.innerText = "Can't be zero";
    peopleInput.style.borderColor = "red";
    setTimeout(function () {
      err2.innerText = "";
      peopleInput.style.borderColor = "";
    }, 2000);
    tipTotal.innerText = "$0.00";
    totalValue.innerText = "$0.00";
  } else {
    err2.innerText = "";
  }
});

btn6.addEventListener("click", function () {
  if (peopleInput.value === "") {
    err2.innerText = "Can't be zero";
    peopleInput.style.borderColor = "red";
    setTimeout(function () {
      err2.innerText = "";
      peopleInput.style.borderColor = "";
    }, 2000);
    tipTotal.innerText = "$0.00";
    totalValue.innerText = "$0.00";
  }else{
    btn6.classList.add("hidden");
    customInput.classList.add("active");
    customInput.addEventListener("input", function () {
      const tipAmoun =
        (billInput.value * customInput.value) / 100 / peopleInput.value;
      const tipAmount = Math.round(tipAmoun * 100) / 100;
      tipTotal.innerText = tipAmount + "$";

      totalAmoun = billInput.value / peopleInput.value + tipAmount;
      const totalAmount = Math.round(totalAmoun * 100) / 100;
      totalValue.innerText = totalAmount + "$";
    });
  }
});
/////////
resetBtn.addEventListener("click", function () {
  billInput.value = "";
  peopleInput.value = "";

  tipTotal.innerText = "$0.00";
  totalValue.innerText = "$0.00";

  customInput.classList.remove("active");;
  btn6.classList.remove('hidden');

  err2.innerText = "";
  peopleInput.style.borderColor = "";
});
