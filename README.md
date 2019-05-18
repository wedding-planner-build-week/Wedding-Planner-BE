### A wedding planners post will have this this basic format: 
>     {
>         "id": 3,
>         "couple_name": "Erica & Andrew's Wedding",
>         "wedding_theme": "Rustic",
>         "item_photo": "https://images.unsplash.com/photo-1510076857177-7470076d4098?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80",
>         "vendor_list": "vendor list goes here",
>         "wedding_date": "2019-03-30",
>         "wedding_location": "Boston, Massachusetts" 
>         "wedding_photographer": "Daniel Westbrook"
>         "user_id": 2
>     }


### xxxxxxxxxxxxxxxxxxxx
* a POST request will register a new user. Will also provide a JSON Web Token. 
* **Required:** username field and password field.

### xxxxxxxxxxxxxxxxxxxxxx
* a POST request will login an already registered user. Will also provide a JSON Web Token. 
* **Required:** username field and password field.


### xxxxxxxxxxxxxxxxxxxxxxxx
* a GET request to this route will return a list of all of the wedding planner posts. 

### xxxxxxxxxxxxxxxxxxxxxxxxxxxx
* a GET request to this route will return the post with the specified ID. Will only return specified ID if associated with user. 

### xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
* a POST request to this route will return the post object that is created for the logged in user.
* **Required**: `couple_name`
* **Optional but recommended**: `wedding_theme, item_photo, vendor_list, wedding_date`

### xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
* a PUT request to this route (with "id" replaced by the meal ID) will return the number of meals updated for the logged in user. 
* **Required**: `couple_name`
* **Optional but recommended**: `wedding_theme, item_photo, vendor_list, wedding_date`


### xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
* a DELETE request to this route will return the number of wedding posts deleted for the logged in user. 
