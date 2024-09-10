# Shopping List App with Redux

## Overview

The Shopping List App is a web-based application that allows users to manage multiple shopping lists efficiently. This app is built using Redux for state management, ensuring scalable and maintainable code. Users can create, view, update, and delete shopping list items, categorise them, and share lists with others. The app provides offline support and integrates a JSON Server for data storage. User authentication is also implemented to securely manage and protect shopping lists.

## Features

* User Authentication:

** Users must register or log in to access their shopping lists.
** Authentication ensures that shopping lists are securely stored and only accessible by their owners.

## Shopping List Management:

* Users can create, read, update, and delete items in their shopping lists.
* Each list item can include:
** Name
** Quantity
* Optional Notes (for additional details)
* Categories and Tags can be assigned to each item to better organise the shopping list.

## Multiple Lists:

* Users can create multiple shopping lists for different purposes (e.g., groceries, household items, etc.).
* Each list can be managed independently, with options to share them with other users.

## Search Functionality:

* A search feature is implemented to help users find items quickly by keyword.

## Sorting and Filtering:

* Users can sort and filter shopping items by different criteria such as:
** Name (Alphabetical order)
** Category (E.g., Groceries, Household)
** Date Added or Last Updated


## Offline Support:

* The app is designed to work offline. Users can manage their lists while offline, and any changes made will sync with the server once the app is back online.

## Sharing Lists:

* Users can share shopping lists with other users by generating a shareable link or via email.
 
## CRUD Functionality:

* Create: Add new shopping items to the list.
* Read: View all existing shopping items and details.
* Update: Modify the name, quantity, or notes of existing items.
* Delete: Remove items from the list.

## Redux Setup

* Redux Store: The app uses Redux to manage the global state, making it easier to handle the app's data across multiple components.
* Actions: Actions are dispatched to add, update, and delete items, and to handle authentication and list sharing.
* Reducers: Reducers update the state based on the actions dispatched.
* Middleware: Redux middleware such as Redux Thunk is used to handle asynchronous actions, like making API requests to the JSON server.


## Pages

1. Login Page:

* Users can log in with their credentials to access their personal shopping lists.
* Proper validation ensures users provide the correct credentials.

3. Registration Page:

* New users can create an account with a username and password.
Validation is in place to ensure secure registration.

5. Home Page:

* Displays the list of all shopping lists created by the user.
* Users can search for items, filter by categories, and sort their shopping lists.
* Users can also create new shopping lists or edit existing ones.

7. Shopping List Page:

* Displays the items within a selected shopping list.
* Users can add, edit, or delete items from the list.
* Options to assign categories, tags, and notes to items.
* Share list functionality is available from this page.


## Item Features

1. Add Item:

* Users can add new items to a shopping list, providing the following details:
** Name
** Quantity
** Optional Notes (Additional information or specifications)

3. Edit Item:

*Users can update an item’s name, quantity, and notes at any time.

5. Delete Item:

*Users can delete items from the list.

6. Categorise Items:

*Items can be categorised under different types such as:
** Groceries
** Household
** Electronics, 
* Tags can also be added for further classification.

9. Search, Sort, and Filter Items:

* Search: Users can search for items by keyword.
* Sort: Sort items alphabetically or by date added.
* Filter: Filter items by category or tag.
* API Endpoints (Using JSON Server)


## The app uses JSON Server for storing and retrieving data.

1. Get all lists:

* URL: /lists
* Method: GET
* Purpose: Retrieve all shopping lists for the logged-in user.

## Get a specific list:

* URL: /lists/:id
* Method: GET
* Purpose: Retrieve a specific shopping list by its ID.

## Create a new list:

* URL: /lists
* Method: POST
* Purpose: Add a new shopping list.

## Body:

Copy code
{
  "name": "Groceries",
  "items": []
}

## Update a list:

* URL: /lists/:id
* Method: PUT/PATCH
* Purpose: Update the shopping list's name, items, or any details.
* Body: (For example, updating the list name)


Copy code
{
  "name": "Updated List Name"
}

## Delete a list:

* URL: /lists/:id
* Method: DELETE
* Purpose: Delete a specific shopping list.

## Get all items in a list:

* URL: /lists/:id/items
* Method: GET
* Purpose: Retrieve all items in a specific list.

## Create a new item:

* URL: /lists/:id/items
* Method: POST
* Purpose: Add a new item to a shopping list.

Body:

Copy code
{
  "name": "Milk",
  "quantity": "2",
  "notes": "Low fat"
}

## Update an item:

* URL: /lists/:id/items/:itemId
* Method: PUT/PATCH
* Purpose: Update an item's details.

## Delete an item:

* URL: /lists/:id/items/:itemId
* Method: DELETE
* Purpose: Delete an item from the list.


## Installation and Setup

Clone the Repository:


Copy code
git clone https://github.com/Asiphile1/Shopping-App-CodeTribe.git
cd shopping-list-app-redux

## Install Dependencies:

bash
Copy code
npm install
Start JSON Server: Set up the backend for data storage.

bash
Copy code
npx json-server --watch db.json --port 5000
Run the App: Start the React app.

bash
Copy code
npm start


Access the Application: Visit http://localhost:3000 in your browser to access the shopping list app.

## Validation

* Form Validation: Input validation ensures that users provide valid data for item names, quantities, and notes. Each form field is properly checked for required fields, lengths, and special characters.
* Error Handling: The app provides clear error messages if a user tries to submit incomplete or invalid forms.

## Privacy & Security
* User Authentication: Authentication is required to access shopping lists. Each user has their own account, and lists are only accessible by the list owner.
* Data Security: User data is protected in compliance with privacy regulations, and best practices are followed to ensure secure authentication and data storage.

## User Interface
* User-friendly Design: The interface is simple and intuitive, making it easy for users to add, edit, or remove items.
* Responsive Design: The app is fully responsive and works well across devices (desktops, tablets, and mobile phones).
### `npm run build` fails to minify


