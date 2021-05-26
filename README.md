# Smartie Automotive App
This app aims to provide an easy way for users to decode VIN numbers for details on a specific vehicle. There are future plans, as well, to incorporate recall data searchable by VIN or my Year/Make/Model. The data is fetched via API calls to the NHTSA server where the public data is stored. The returned data is parsed and formatted for tabular display.

Accessibility is enhance throughout by following best practices for screen readers and tablet/mobile platforms are accommodated by dynamic styling which rearranges screen items appropriately for ease of navigation and readability. React hooks are employed to update the UI with useful information, for example to dynamically show a user how many of the 17 VIN characters have been entered as they type.

## Technologies used
- Node
- React
- JSX
- Javascript
- API

## User Stories
- As a user I would like to be able to search for data on my vehicle by VIN number.
- As a user I would like to be able to easily navigate the app.
- As a user I would like it to work equally well on my phone or tablet.

## ScreenShots
Large Desktop Moniotor
![Screen Shot 2021-05-26 at 9 46 48 AM](https://user-images.githubusercontent.com/81941464/119670929-5086eb80-be07-11eb-8d99-5870eca64666.png)
 
Tablets & Mobile  
![Screen Shot 2021-05-26 at 8 05 45 AM](https://user-images.githubusercontent.com/81941464/119670154-a7d88c00-be06-11eb-8b87-cd5d12a5b120.png)
![Screen Shot 2021-05-26 at 9 55 21 AM](https://user-images.githubusercontent.com/81941464/119672443-9abc9c80-be08-11eb-8e9a-87f98a9c683f.png)
![Screen Shot 2021-05-26 at 8 07 42 AM](https://user-images.githubusercontent.com/81941464/119670282-c2ab0080-be06-11eb-8ff1-56f5554e2688.png)

## Challenges
Errors. The biggest headache when developing apps using APIs and asynchronous fetches must be the disparate and unpredictable nature of APIs. Developers are at the mercy of (seemingly) sadistic API owners, with no access server-side. Joking aside, non key APIs like those at the NHTSA can sometimes be problematic when developing an app. I specifically wrestled with CORS errors which would not allow the browser to retrieve the json data at the fetch request. Even when disabled, fetching from localhost seemed to work... and then break.

## Additional Features/ wish list
The completed app will have an ability to retrieve and display any recall data, manufaturer data by Year/Make/Model and VIN decoding. Some nifty work with the data to allow users to make comparisons between data sets is an interesting and challenging possibility.
