Rentify is a real estate rental and tenant management system. It is a web application that allows two types of users to use the application. The two types of users are the owner and the tenant. The owner can post a property for rent, manage tenants, register rent payment, and create a property contract. The tenant can search and filter properties, view property details, send an email to the owner of the property, and use the built-in chat application for communication between the owner and the tenant.

Features:-

1. Property Listings: View a wide range of property listings with detailed information, including descriptions, prices, addresses, and more.

2. Advanced Search: Customize your property search by type (rent/sale), amenities, sorting options, and more.

3. User Profiles: Registered users can create and manage their profiles with profile pictures and listings also.

4. Authentication: Secure user registration and login functionality with jwt.

5. Book your Visit: you can also select the date at which you want to visit the site.

6. Maps and Location Information: Integrating maps and providing location information is crucial for real estate and hospitality websites. Interactive maps can show the location of properties, nearby amenities (e.g., schools, restaurants, hospitals), transportation options, and other points of interest. This helps users understand the neighborhood and make informed decisions.

7. Mark as Favourites: you can also mark as favourite the property which you like.

8. Property Details and Descriptions: Each property listing should have comprehensive details and descriptions, including property features, room dimensions, amenities, nearby attractions, and any unique selling points. High-quality images and virtual tours can provide a more immersive experience for users.

TechStack:-
	FRONTEND: HTML, SCSS, JavaScript, ReactJS
	BACKEND: NodeJS, ExpressJS
	DataBase: MongoDB

 HOW TO RUN CODE ON YOUR SYSTEM

	1. Clone the repository:
	
		bash git clone https://github.com/creativeVaibhav/Real-Estate.git
	
	2. Change into the project directory: cd Real-Estate/api
	
	3. Install server dependencies:
	
		npm install
	
	4. Install client dependencies:
	
		cd client npm install
	
	Change .env file in the api directory with your configuration settings.
	
		MONGO = "MONGODB URI" 
  		JWT_SECRET_KEY = your key
	
	Start the development server:

  		cd Real-Estate/api
		node app.js

  		cd Real-Estate/client
    		npm run dev

GITHUB Link: https://github.com/creativeVaibhav/Real-Estate
