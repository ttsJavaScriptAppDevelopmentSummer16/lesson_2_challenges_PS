shopping_list= ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

//Add fruit loops to the shopping_list
shopping_list.push('fruit loops');

//update coffe to fair trade coffee
shopping_list[shopping_list.indexOf('coffee')] = 'fair trade coffee';

//Replace chips and salsa with rice and beans
shopping_list[shopping_list.indexOf('chips')] = 'rice';
shopping_list[shopping_list.indexOf('salsa')] = 'beans';

//shopping cart
cart= [];

//Remove the last item from your shopping list and add it to your cart
cart.unshift(shopping_list.pop());

//Remove the first item from your shopping list and add it to the cart
cart.push(shopping_list.shift());

//Write a while loop
while (shopping_list.length > 0){
  cart.push(shopping_list.shift())
}

//Sort the items in cart alphabetically backwards
cart.sort();
cart.reverse();

//Print the list of items in shopping cart as a comma separated list
console.log(cart.toString());
