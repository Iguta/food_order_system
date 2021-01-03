let checkOutBttn = document.getElementById('checkoutBttn');
let orderBttn = document.getElementById('orderBttn');
let orderForm = document.getElementById('order-form');
let dataform = document.getElementById('data');
let orderSummary = document.getElementById('order-summary');



function appendContent(dishName, price, quantity){
    let tableRow = `<tr>
                    <td>${dishName}</td>
                    <td>${quantity}</td>
                    <td>Ksh. ${quantity*price}</td>
                    </tr>`;
    $('tbody').append(tableRow);
};

const breakfastObjs = [
    {
        name: "Tea Black/White @Ksh. 30",
        price:30
    },
    {
        name: "Coffee Black/White @Ksh. 30",
        price:30
    },
    {
        name: "Toast Bread @Ksh. 30",
        price:30
    },
    {
        name:"Hot Chocolate @Ksh. 30",
        price:30
    },
    {
        name: "Chapati White @Ksh. 20",
        price:20
    },
    {
        name:"Chapati Brown @Ksh. 30",
        price:30
    },
    {
        name: "Sweet Potatoes @Ksh. 30",
        price:30
    },
    {
        name:"Yams/Cassava @Ksh. 30",
        price:30
    },
    {
        name:"2 Eggs Fried @Ksh. 30",
        price:30
    },
    {
        name:"Sausage @Ksh. 50",
        price:50
    },
    {
        name:"Samosa @Ksh. 40",
        price:40
    },
    {
        name:"Smokie @Ksh. 30",
        price:30
    },
    {
        name:"Mandazi @Ksh. 10",
        price:10
    }
];

const mainMealObjs = [
    {
        name:"Ugali @Ksh. 50",
        price:50
    },
    {
        name:"Ugali with Beef Stew @Ksh. 150",
        price:150
    },
    {
        name:"Ugali with Dry Fry Beef @Ksh. 150",
        price:150
    },
    {
        name:"Ugali with Matumbo @Ksh. 100",
        price:100
    },
    {
        name:"Ugali with Roasted Chicken @Ksh. 200",
        price:200
    },
    {
        name:"Rice with Beef Stew @Ksh. 150",
        price:150
    },
    {
        name:"Rice with Coconut Beans @Ksh. 100",
        price:100
    }
];

const chickenDishObjs = [
    {
        name:"Rice with Chicken Tikka @Ksh. 200",
        price:200
    },
    {
        name:"Fries with Chicken Wings @Ksh. 200",
        price:200
    },
    {
        name:"Fries with Chicken Stew @Ksh. 200",
        price:200
    },
    {
        name:"Pilau with Chicken Stew @Ksh. 350",
        price:350
    },
    {
        name:"Ugali with Roasted Chicken @Ksh. 200",
        price:200
    },
];

const fishDishesObjs = [
    {
        name:"Ugali with Fish Stew @Ksh. 200",
        price:250
    },
    {
        name:"Fries with Fish Stew @Ksh. 250",
        price:250
    },
    {
        name:"Ugali with Fish Fry @Ksh. 200",
        price:200
    },
    {
        name:"Fries with Fillet @Ksh. 250",
        price:250
    }
];

const beveragesObjs = [
    {
        name:"Cocktail Smoothie @Ksh. 150",
        price:150
    },
    {
        name:"Passion Juice @Ksh. 100",
        price:100
    },
    {
        name:"Mango Juice @Ksh. 100",
        price:100
    },
    {
        name:"Orange @Ksh. 100",
        price:100
    },
    {
        name:"Mala @Ksh. 80",
        price:80
    },
];

const combosObjs = [
    {
        name:"Fries/Burger/250ML soda @Ksh. 550",
        price:550
    },
    {
        name:"Fries/Burger/Chicken Wings/Soda @Ksh. 650",
        price:650
    },
    {
        name:"Kenyan Taco (Smocha/Fries/Soda) @Ksh. 350",
        price:350
    },
    {
        name:"Rice/Beef Stew/ Boiled Eggs/ Banana @Ksh. 450",
        price:450
    },

]

const sidesObjs = [
    {
        name:"Colelaw Served with a meal FREE",
        price:0
    },
    {
        name:"Salsa/Kachumbari Served with a Meal FREE",
        price:0
    },
    {
        name:"Guacamole served with a meal FREE",
        price:0
    }
]
checkOutBttn.addEventListener('click', () => {
    orderSummary.style.visibility = 'visible';
    if(orderForm){
        console.log('Ok');
    };

    // for (let i =0; i < orderForm.length; i++){
    //     console.log(orderForm.elements[i].value);
    // };


    let breakfastSelected = orderForm.elements['breakfast'].value;
    let breakfastQuantity = orderForm.elements['breakfastQuantity'].value;
    if(breakfastSelected){
        const breakfast = breakfastObjs.find(element => element.name === breakfastSelected);
        appendContent(breakfast.name, breakfast.price, breakfastQuantity);
        console.log(breakfast.name, breakfast.price, breakfastQuantity);
    }

    let main_mealSelected = orderForm.elements['main_meal'].value;
    let mainMealQuantity = orderForm.elements['mainMealQuantity'].value;
    if(main_mealSelected){
        const main_meal = mainMealObjs.find(element => element.name === main_mealSelected);
        appendContent(main_meal.name, main_meal.price, mainMealQuantity);
        console.log(main_meal.name, main_meal.price, mainMealQuantity);
    }

    let chickenDishSelected = orderForm.elements['chicken'].value;
    let chickenQuantity = orderForm.elements['chickenQuantity'].value;
    if(chickenDishSelected){
        const chicken = chickenDishObjs.find(element => element.name === chickenDishSelected);
        appendContent(chicken.name, chicken.price, chickenQuantity);
        console.log(chicken.name, chicken.price, chickenQuantity);
    };

    let fishDishSelected = orderForm.elements['fish'].value;
    let fishQuantity = orderForm.elements['fishQuantity'].value;
    if(fishDishSelected){
        const fish = fishDishesObjs.find(element => element.name === fishDishSelected);
        appendContent(fish.name, fish.price, fishQuantity);
        console.log(fish.name, fish.price, fishQuantity);
    };


    let beveragesSelected = orderForm.elements['beverages'].value;
    let beveragesQuantity = orderForm.elements['beveragesQuantity'].value;
    if(beveragesSelected){
        const beverage = beveragesObjs.find(element => element.name === beveragesSelected);
        appendContent(beverage.name, beverage.price, beveragesQuantity);
        console.log(beverage.name, beverage.price, beveragesQuantity);
    };

    let comboSelected = orderForm.elements['combos'].value;
    let combosQuantity = orderForm.elements['combosQuantity'].value;
    if(comboSelected){
        const combos = combosObjs.find(element => element.name === comboSelected);
        appendContent(combos.name, combos.price, combosQuantity);
        console.log(combos.name, combos.price, combosQuantity);
    };


    let sidesSelected = orderForm.elements['sides'].value;
    let sidesQuantity = orderForm.elements['sidesQuantity'].value;
    if(sidesSelected){
        const sides = sidesObjs.find(element => element.name === sidesSelected);
        appendContent(sides.name, sides.price, sidesQuantity);
        console.log(sides.name, sides.price, sidesQuantity);
    };
    if(document.getElementById('tbody').hasChildNodes()){
        orderBttn.style.visibility = 'visible';
        orderBttn.addEventListener('click', ()=> {
            let customerData = document.getElementById('customer-data');
            console.log(customerData);
            customerData.style.display = 'block';
        });
    };
    let goBttn = document.getElementById('go');
    goBttn.addEventListener('click', () => {
        const customerName = dataform.elements['name'].value;
        const location = dataform.elements['location'].value;
        alert(`Thank you ${customerName} for shopping with us... 
        Your order will be Delivered at ${location}
        `)
    })
});
