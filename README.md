
# GROUPIE-TRACKER-search-bar
* `ayessenb` 
* `roshakba` 



#### Groupie-tracker-filter consists on making your site :

    

    Groupie Tracker Filters consists on letting the user filter the artists/bands that will be shown.

    Your project must incorporate at least these four filters:
        filter by creation date
        filter by first album date
        filter by number of members
        filter by locations of concerts

    Your filters must be of at least these two types:
        a range filter (filters the results between two values)
        a check box filter (filters the results by one or multiple selection)


#### Description:

* We used text/template pakage to recieve and send GET requests.
* GET /: Sends HTML response, the main page.
* and using the JSON file which contains the data that need to be displayed to pages
* Linked external css file to make good design 
* For realising the dynamnic changes of the bands and list of suggestions,
 JS was used for the implementation on the front ent.



## Usage/Examples
Cloning storage to your host
```CMD/Terminal 
git clone git@github.com:compygirl/groupie-tracker-filters.git
```
Go to the downloaded repository:

```CMD/Terminal 
cd groupie-tracker-filters
```
Run a Server:
```CMD/Terminal 
go run main.go
```

Follow the link on the terminal:
```CMD/Terminal 
Starting server got testing... http://127.0.0.1:8080 
```

you can play with the page by choosing the music band's image and so on.
As well as searching the strings with filters 



## HTTP status codes
* OK (200), if everything went without errors.
* Not Found, if the wrong URL was provided.
* Bad Request, for incorrect requests. for exaple, the id is out of range.
* Internal Server Error, for unhandled errors.
* If string is not a substring of any items which were mentioned in the first paragraph, 
then the page will be displaying "NOT FOUND"



## Feedback

If you liked our project, we would be grateful if you could add `Star` to the repository.

Alem Students @ayyssenb @roshakba