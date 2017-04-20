var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: 'root',

	password: '',
	database: 'Bamazon'
});

var query = "SELECT * FROM products";

//var query1 = "UPDATE products SET stock_quantity = ? WHERE item_id = ?'," [stock_quantity, item_id];

var x;

connection.query(query, function(err, results){
	if (err) {
		console.log(err);
	}
	else{
	for (var i = 0; i < results.length; i++) {
    	console.log("ID#: " + results[i].item_id);
    	console.log("Product Name: " + results[i].product_name);
    	console.log("Department: " + results[i].department_name);
    	console.log("Price to Consumer: $" + results[i].PTC);
    	console.log("Amount In Stock: " + results[i].stock_quantity);
    	console.log("------------------------------------")
    }

	inquirer.prompt([
		{
    		type: "input",
    		message: "What is the ID# of the product you would like to purchase?",
    		name: "id"
  		},

  		{
    		type: "input",
    		message: "How many unit(s) would you like to purchase?",
    		name: "stock"
  		}

	]).then(function(choice) {
		x = choice.id - 1;
		xID = choice.id;
		console.log(results[x].product_name);
		if (results[x].stock_quantity >= choice.stock){
			var newStock = results[x].stock_quantity - choice.stock;
			connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: newStock }, {item_id: xID }], function(error, res){
				if (error){
					console.log(error);
				}
			});
			console.log("You bought " + choice.stock + " " + results[x].product_name + "(s) for a total cost of $" + choice.stock * results[x].PTC + ".");
			console.log("There are " + newStock + " " + results[x].product_name + "(s) still available for purchase.");
		}
		else {
			console.log("Insufficient quantity");
		}
	});
}
});