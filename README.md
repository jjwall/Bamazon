# Bamazon

In this ReadMe I will walk you through the customer view portion of the homework because you will not have access to my MySQL DB.

To start, lets take a look at the products table for my Bamazon MySQL DataBase:

(/images/shot1.png)

Here you can see, among other things, the stock_quantity values of the 10 products. Keep an eye on Daily Stoic's stock value.

Next we will run bamazonCustomer.js in the terminal using NodeJS and it will first display all products available for purchase:

(/images/shot2.png)

We are going to buy Daily Stoic so we will input 10 for the the ID number

(/images/shot3.png)

We end up buying 4 copies of the book, so our total is $60 and the terminal lets us know that now there are 70 Daily Stoic books still available for purchase.

To verify we will look back at the MySQL workbench and see that:

(/images/shot4.png)

Yep! Our DataBase has successfully been updated and there are now 70 copies of Daily Stoic left in stock.