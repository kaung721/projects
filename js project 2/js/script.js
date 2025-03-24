const smoothie = {
    ingredients: [], 
    iceAmount: "Normal",
    price: 5.00,

    //Function to check selected ingredients and update price
    checkIngredient: function () {
        document.querySelectorAll("input[type=checkbox]:checked").forEach((input) => {
            this.ingredients.push(input.value);
            this.price += 1.50;
        });
    },

    //Function to check selected ice amount
    checkIce: function () {
        const selectedIce = document.querySelector("input[name='ice']:checked");
        if (selectedIce) {
            this.iceAmount = selectedIce.value;
        }
    },
    //Function to display the smoothie order details
    display: function() {
        document.getElementById("ingredients").textContent = this.ingredients.join(", ");
        document.getElementById("ice").textContent = this.iceAmount;
        document.getElementById("price").textContent = this.price.toFixed(2);
    }
};
//Event listener for the order button
document.getElementById("order").addEventListener("click", () => {
    event.preventDefault(); //Prevent form submission
    smoothie.checkIngredient(); //Check selected ingredients

    //Alert if no ingredient is selected
    if(smoothie.ingredients.length == 0) {
        alert("Please select at least one ingredient.");
        return;
    }
    
    smoothie.checkIce(); //Check selected ice amount
    smoothie.display(); //Display order summary
});