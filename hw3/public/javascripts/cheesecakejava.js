/* @author Isabella Horstmanshof */

/* the javvscript portion of the cheesecake app */


  /* this function is for the month dropdown to change the buttons current month */
  function monthSelect(monthNum) {
    document.getElementById("monthButton").innerHTML = monthNum;
    
    //send and handle a post request (for cakeData, in orders.js)
    $.post('/orders', function(response) {

      console.log(response);

      //counter vars
      let plainAmount= 0;
      let cherryAmount = 0;
      let chocAmount = 0;
     
      console.log("after var definition");

      //loop through the response
      for(var i = 0; i < response.data.length; i++){

        console.log("made it into for loop");
        
        //var for the topping string from response
        let stringData = response.data[i].topping;
        console.log(stringData);

        //check what type the topping is and increment the proper counter
        if(stringData === "plain"){
          console.log("plain = " + response.data[i].quantity);
          plainAmount = plainAmount + response.data[i].quantity;
        }
        else if(stringData === "cherry"){
          console.log("cherry = " + response.data[i].quantity);
          cherryAmount = cherryAmount + response.data[i].quantity;
        }
        else if (stringData === "chocolate"){
          console.log("choc = " + response.data[i].quantity);
          chocAmount = chocAmount + response.data[i].quantity;
        }
        else {
          console.log("error in if statement");
        }
      }

      console.log("after for loop");

      //replace the list elements (in index.html) with the new values
      document.getElementById("listOne").innerHTML = cherryAmount + " cherry";
      document.getElementById("listTwo").innerHTML = chocAmount + " chocolate";
      document.getElementById("listThree").innerHTML = plainAmount + " plain";
    
    });
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

