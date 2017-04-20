var mysql = require('mysql');
var inquirer = require("inquirer");

// Sets localhost to 3000
//var PORT = process.env.PORT || 3000;

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	user: 'root',

	password: '',
	database: 'Bamazon'
});

var query = "SELECT * FROM products";

var x;

connection.query(query, function(err, results){
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
		console.log(results[x].product_name);
		if (results[x].stock_quantity >= choice.stock){
			console.log("you bought dat ish successfullly");
		}

		else {
			console.log("not enought qunatity");
		}

		/*if (choice.id == 5){
			console.log("hitthere");
		}
		else{
			console.log("poops");
		}*/

	});
});