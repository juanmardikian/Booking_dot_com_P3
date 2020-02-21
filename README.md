# Project Overview
## Team Undeployables
### Team Members
- Michael Ip
- Brandon Gottshall
- Juan Mardikian
​
​
​

## Project Description
Implementation of Booking.com given UXDI's specifications.
​
## Wireframes
​
![1](https://gottshall.dev/1.png)
![2](https://gottshall.dev/2.png)
![3](https://gottshall.dev/3.png)
![4](https://gottshall.dev/4.png)
![5](https://gottshall.dev/5.png)
![6](https://gottshall.dev/6.png)
![7](https://gottshall.dev/7.png)
![8](https://gottshall.dev/8.png)
​
## MVP
​
- Add contact us functionality so that the user can reach it easily and quickly
- Add and implement a feature which gives the user the ability to volunteer in their visited city
- Homepage, aditional views (as per UXDI wireframes)
- Backend full crud
- Hamburger menu
- Nav bar, footer (shared)
- "Help Center" view
- Full CSS
​
## Post-MVP
​
- Search functionality
- Full crud front end
- Authentication/Authorization with JWT
- Auth with Facebook/Google
- Recently Viewed
​
​
## ERD Diagram
​
![ERD](https://gottshall.dev/erd.jpg)
​
## Endpoints
* getLocations - returns five random locations
	* GET /api/locations
* getLocation - gets information on current location
	* GET /api/location/:id
* getFlights, getCars, getVolunteers, getHotels - gets booking information based on current location
	* GET /api/location/:id/flights
	* GET /api/location/:id/volunteers
	* GET /api/locatoin/:id/hotels
	* GET /api/locatoin/:id/cars

* getUser - after user signs in, will display their information in dashboard
	* GET /api/user/:id
* createUser, updateUser, deleteUser - create, update or delete user information
	* POST /api/user
	* PUT /api/user/:id
	* DELETE /api/user/:id
* getTrip, createTrip, updateTrip, deleteTrip - manage trip details
	* GET /api/trip/:id
	* POST /api/trip
	* PUT /api/trip/:id
	* DELETE /api/trip/:id
​
Sample JSON from GET `/api/user`
​


			[
			    {
			        “username” : “mikeeip”,
			        “passwordHash” : “o87hoH*Oho8hof7fguagf4”,
			        “email” : “mike@mikeip.com”,
			        “homeCountry” : “USA”,
			        “recentViewew” : “Barcelona”,
			        “upcomingTrips : [
			            {   
			                “tripId” : “398234”
			            },
			            {
			                “tripId” : “478924”
			            }
			        ]
			    }
			]



## React Component Hierarchy
​
​
​![Component Hierachy](https://gottshall.dev/ch.jpg)
​

​
## Components
​
Breakdown the initial logic defined in the previous sections into stateful and stateless components
​
## ​Routes

| Components | Description                                                                                                              | Type       | State                      |
|------------|--------------------------------------------------------------------------------------------------------------------------|------------|----------------------------|
| App        | This component will render the Header, Footer and Routes.                                                                | Functional | User Session, Trip Details |
| Login      | This component allows a user to authenticate themselves, to allow them to keep recent trips and planned trips in the db. | Functional | Username, Password         |
| Nav        | Container for Nav icons and Nav links.                                                                                   | Functional | Not Applicable             |
| Nav Icons  | Sticky icon navigation bar                                                                                               | Functional | Not Applicable             |
| Nav Links  | List of links. Hides when the user scrolls down.                                                                         | Functional | Not Applicable             |
| Hambuger   | as the Nav Icons it will be a nav by its own                                                                             | Functional | Not Applicable             |
| Footer     | This component contains links including contact us.                                                                      | Functional | Not Applicable             |
| Header     | This component contains two seperate Nav sections for the icons and link portions.                                       | Functional | Not Applicable             |
| Search     | This component show the search fields and queryies the API                                                               | Functional | Search Query               |
| Form       | Shows fields                                                                                                             | Functional | Query                      |

## Shared
| Components  | Description                                                                            | Type       | State                    |
|-------------|----------------------------------------------------------------------------------------|------------|--------------------------|
| Help Center | Where the customer can find links and phone number for more information                | Functional | Not Applicable           |
| Contact     | Where the user actually can call or contact the company                                | Functional | Current countries number |
| Volunteer   | Section where people can get info about volunteering                                   | Functional | Volunteer Data           |
| User Info   | A display of the user data                                                             | Functional | User Data                |
| Recent      | A display of the recents user searches or selected                                     | Functional | User's recents etc.      |
| Car Rental  | Display and search car rental information for specified location. Functional component | Functional | Rental Data              |
| Flight      | Information about the flight the user could look at                                    | Functional | Flight Data              |
| Hotel       | Information about the hotel the user could stay at                                     | Functional | Hotel Data               |
​
## Priority Matrix
​
​![Component Hierachy](https://gottshall.dev/pm.jpg)
​
## Timeframes
​
| Component                | Estimated Time | Actual Time |
|--------------------------|----------------|-------------|
| Contact Us Functionality | 10 hrs         | 8           |
| Homepage Views           | 12 hrs         | 12          |
| Help Center View         | 12 hrs         | 16          |
| Hamburger Menu           | 18 hrs         | 12          |
| Nav Footer               | 8 hrs          | 6           |
| Full CSS                 | 24 hrs         | 36          |
| Full Backend CRUD        | 30 hrs         | 40          |
| Volunteer View           | 12 hrs         | 0           |
| Front End CRUD           | 6 hrs          | 6           |
|                          | 132 Hours      | 136         |

## Additional Libraries
| Back-End         |Front-End  		|
|------------------|----------------|
| bcrypt		   |react      	    |
| body-parser	   |react-router-dom|
| cors		   	   |axios			|
| express		   |formik			|
| faker		   	   |				|
| jsonwebtoken     |				|
| morgan		   |				|
| nodemon		   |				|
| passport	   	   |				|
| passport-jwt     |				|
| passport-local   |				|
| pg			   |				|
| sequelize	   	   |				|

## Expected Issues

#### Back-End

There might be issues with getting google and facebook authentication working - although those are in post-MVP, However, basic authentication should not present any problems


#### Front-End
​
​There may be some challenge with the way some components will conditionally render. However the shared components could change based on passed props.
​​
## Issues and Resolutions

## Code Snippet
					const trips = [...Array(40)].map((trip)=>(
					{
					    userId: faker.random.number(20),
					    dateStart: faker.date.past(),
					    dateComplete: faker.date.future(),
					    destination: faker.random.number(1000),
					    hotel: faker.lorem.words(3),
					    flight: faker.lorem.words(2),
					    carRental: faker.lorem.words(2),
					    volunteerOp: faker.lorem.words(5),
					    createdAt: new Date(),
					    updatedAt: new Date()
					}
## Change Log

	Feb 17
	* Opted to use Formik to manage forms. Added to the Additional Libraries section.
​
