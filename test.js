const myCheckBox = document.getElementById("myCheckBox");
const Visa = document.getElementById("Visa");
const MasterCard = document.getElementById("MasterCard");
const PayPal = document.getElementById("PayPal");
const mySubmit = document.getElementById("mySubmit");
const myP1 = document.getElementById("myP1");
const myP2 = document.getElementById("myP2");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    myP1.textContent = "You have Subscribed to our channel";
  } else {
    myP1.textContent = "You have NOT Subscribed to our Channel";
  }

  if (Visa.checked) {
    myP2.textContent = "You are paying with Visa.";
  } else if (MasterCard.checked) {
    myP2.textContent = "You are paying with Master Card.";
  } else if (PayPal.checked) {
    myP2.textContent = "You are paying with PayPal.";
  } else {
    myP2.textContent = "You Must Select a Payment Method";
  }
};
