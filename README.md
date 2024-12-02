# InclassDatabaseActivity006
This is an in class activity for CSC 350, which covers inserting/updating and deleting content from a NoSQL database.

# Setup:
1. Open Terminal
2. Cd art-api and run node server.js
3. Open new terminal
4. cd nosql-app and run npm start


# Project description
This project focuses on integrating database on the server side into a HTML application. The design of the HTML is open-ended with some bare requirements to be met, as mentioned below. Demonstrate your ability to both select and modify data into the database using Node and NoSQL. 

1. Implement a server/client architecture similar to activity 005.
2. You are given a wireframe sketch of the supposed HTML page as seen in the picture below. You are free to implement whatever design you want as the focus here is on functionality. Your page must display a list of
   paintings; when the user selects a painting, it will display a form that allows the
   user to edit the data.
![img.png](img.png)
2. If using Node and NoSQL (MongoDB), then create a API that returns an array of all the paintings whenever needed by making a call to the database using the SELECT query.
   Add JavaScript to the HTML file that fetches the results from API and then populates the
   left-side list with an image and a link styled as a button for each painting.
   Add click event handler for each link button, that displays the form on the
   right side each field in the form should be populated with the appropriate
   record data.
3. This table/data has many fields; you should break up the data-entry form into different
   sections to make it easier for the user. The form should have a button
   for saving the current form values and a button for resetting the form. Be sure
   to set the action attribute of the `<form>`. This script will use form data passed to it, and construct
   and execute an UPDATE query (if using SQL) or use the findOneAndUpdate()
   method of the Mongoose model object.
4. Both SQL Tabular format and the NoSQL Json format are provided, it's your preference as to which one you want to go with on the database side.
5. Look up online resources to install SQL or MongoDB onto your machine. JSON file can be made to look prettier - https://jsonformatter.org/json-pretty-print

## Tips and Suggestions
* Start small: Break this problem down into smaller steps. First verify the fetch works,
  perhaps with a simple `console.log` statement. Then populate the `<select>`
  lists based on the fetched data.
* You may decide to move your code into classes within your module after you
  finished your code, or you may decide to work with classes and modules right
  from the start.
* **DON’T USE ABSOLUTE PATHS**. Use only relative paths in your project files. This practice is particularly important when multiple people are working on the same project, as it ensures that links and references work correctly across different environments and systems.
* Iterate and Test: Continuously test your website after making necessary changes.
* Issues: Use the GitHub to create Issues and track the status of the issues using Milestones.
* Focus on Details: Pay attention to small details like spacing, hover effects, to create a polished final product.


