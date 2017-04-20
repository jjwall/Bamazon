# Bamazon

In this ReadMe I will walk you through the customer view portion of the homework because you will not have access to my MySQL DB.

To start, lets take a look at the products table for my Bamazon MySQL DataBase:

![Shot 1](/images/shot1.png)
Format: ![MySQL Workbench]

Here you can see, among other things, the stock_quantity values of the 10 products. Keep an eye on Daily Stoic's stock value.

Next we will run bamazonCustomer.js in the terminal using NodeJS and it will first display all products available for purchase:

![Shot 2](/images/shot2.png)
Format: ![Terminal]

We are going to buy Daily Stoic so we will input 10 for the the ID number

![Shot 3](/images/shot3.png)
Format: ![Terminal]

We end up buying 4 copies of the book, so our total is $60 and the terminal lets us know that now there are 70 Daily Stoic books still available for purchase.

To verify we will look back at the MySQL workbench and see that:

![Shot 4](/images/shot4.png)
Format: ![MySQL Workbench]

Yep! Our DataBase has successfully been updated and there are now 70 copies of Daily Stoic left in stock.