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

var query1 = "SELECT * FROM products";

connection.query(query1, function(err, results){
	for (var i = 0; i < results.length; i++) {
    	console.log("ID#: " + results[i].item_id);
    	console.log("Product Name: " + results[i].product_name);
    	console.log("Department: " + results[i].department_name);
    	console.log("Price to Consumer: $" + results[i].PTC);
    	console.log("Amount In Stock: " + results[i].stock_quantity);
    	console.log("------------------------------------")
    }
});