function calculateTotal() {
    const itemSelect = document.getElementById('inputItem');
    const quantityInput = document.getElementById('inputQuantity4');
    const totalInput = document.getElementById('totalAmount');
  
  
    const selectedItem = String(itemSelect.value);
    const quantity = quantityInput.value;
  
    const itemPrices = {
    "Hot Cappuccino": 250,
    "Hot Americano": 250,
    "Hot Latte": 200,
   "Hot Espress": 300,
    "Exotic Jasmine Tea": 250,
    "Refreshing Green Tea" : 300,
    "Spicy Chai Latte" :175,  
    "Masala Chai" : 100,
    "Chocolate Shake" : 300,
    "Strawberry Shake" : 275,
    "Oreo Shake" : 250,
    "Mango Shake" : 275,
    "Classic Lemonade" : 100,
    "Sweetened Iced Tea" : 275,
    "Cold Brew with Caramel" : 250,
    "Pineapple Smoothie" : 275,
    "Special Pastry" : 300,
    "Muffin" : 275,
    "Classic Club Sandwich" : 250,
    "Avocado Toast" : 275,
    };
  
    // console.log(selectedItem.slice(0,selectedItem.indexOf("-")) ); // Add this line for debugging   
  
    const itemPrice = itemPrices[selectedItem.slice(0,selectedItem.indexOf("-"))];
    // console.log(itemPrice);
    if (itemPrice) {
      const totalAmount = itemPrice * quantity;
      totalInput.value = totalAmount;
    } else {
      // Handle invalid item case
      console.error("Invalid item selected:", selectedItem);
      totalInput.value = "Invalid Item";
    }
  }