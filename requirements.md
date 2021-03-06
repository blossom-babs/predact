# Endpoints

> The development link is hosted on `http://localhost:8070/`
>
> - signifies that this is a private route
>
> * signifies that this is a protected route

## Internal

### GET /api/v1/convert \*

Collects the csv file of the administrators information provided by the school, and converts it to a json file to be processed into the database.

### GET /api/v1/admin-to-db \*

Saves the admin database to the database

### GET /users

Display all users that has been created.

### POST /login

Login to the store with already existing user. The following data is required to authenticate a user:

```
{
  firstName: "",
  password: ""
}
```

### GET /users/:id

Displays the user whose id matches the query. Only an authenticated user can view the details of another user.

---

## Products

### GET /products

Displays all the products available in the store

### POST /products

Create new products in the store. (Only authenticated users can add new products to the store). The following data is required to create a product:

```
{
  name: "",
  price: "",
  category: ""
}
```

### GET /products/:id

Displays the details of a single product in the store

### GET /product/?cat

Displays the products by their category

## Orders

### POST /orders

Place an order on existing products in the store.

Conditions:

1. User account must exist
2. User must be logged in
3. Products must exist in the database

The following data is required to create an order;

```
"userId": "",
"productId": "",
"status": "", // can either be open or closed
"quantity" : // expects a number
```
