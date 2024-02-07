/* @author Isabella Horstmanshof */

/* the javvscript portion of the cheesecake app */


  /* this function is for the month dropdown to change the buttons current month */
  function monthSelect(monthNum) {
    document.getElementById("monthButton").innerHTML = monthNum;
  }


  /* this function is for the toppings radial buttons */
  function toppingType(flavorIn) {
    flavor = flavorIn.value;
  }


  /* this function gets the clicked value from the 1/2/3 dropdown next to toppings */
  function toppingAmount() {
    numToppings = document.getElementById("numCake").value;
  }


  /* this function is what dispays the thank you message when you press the order button */
  function thankYouMessage() {

    var boxInput = document.getElementById("notesBox").value;

    if (boxInput.includes('vegan')) {
      alert("We noticed you included the word vegan, before ordering please note that these cheesecakes contain dairy");
    }
    else {
      if((flavor == 0) || (flavor == 'Plain')){
        document.getElementById("qtTitle").innerHTML = "You ordered a cheesecake with no toppings";
      }
      else{
        if(numToppings == 0){numToppings = 3;}
        document.getElementById("qtTitle").innerHTML = `You ordered a cheesecake with ${numToppings} ${flavor} toppings`;
      }
      document.getElementById("qtTable").innerHTML = boxInput;
      document.getElementById("boxOrderForm").innerHTML = "     Thank you! your order has been placed";
    }
  }

