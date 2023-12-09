# WeatherSprint
# Caleb Sylvia
# 11/28/23
# Weather Sprint 1
# Made a weather app that pulls the data from the openweatherAPI to show the weather for current or requested location
# Peer reviewer: Leo Garcia
# Review Notes:
## Pros: Map works as intended; Temperature, highs, lows, wind speed, humidity, precipitation, forecast icons, lat, long, sunrise and sunset work; Layout looks good; Good choice of favicon; Performance runs well; Precipitation changes to snow when necessary
## Cons: Favorites bar is broken; Cannot favorite current location; Small navbar gap when scrolling right is visible; Location resets when changing tabs; Background not tinted blue like Figma; Font weight is inconsistent with Figma; Forecast layout does not match Figma; Favorite buttons inconsistent with figma; Takes a few seconds for page to properly load
## Overall: A pretty good build based on the given prototype, albeit with some elements leaving much to be desired, particularly with favorites and layout elements. Would focus some time on fixing favorites if possible









Progress Reports-
First commit (11/28/23):
    -Set up pages for website using Bootstrap boilerplate and created folders for corresponding files: styles, scripts, assets
    -Made .gitignore as well as a key.js file to keep keys confidential
    -ReadME.md was also created with basic set up to match Guidelines

Second commit (12/1/23):
    -Set up parts of HTML and styled using CSS as well as importing our background image 
    -Imported the "Kdam Thmor" font from local machine 
    -Set up doc.txt to keep track of documentation for project 
    -Imported FontAwesome js script to access icons for weather 

    TO-DO for next session:     
    -Finish setting up whole page
    -Style to match Figma prototype
    -Start working into API data and display on live server webpage
    -Find images to use for current weather box because FontAwesome does not allow bigger than 2xl normal size

Third Commit(12/2/23):
    -Got majority of the layout done just needs some fixes to some sections
    -Imported some images for sunset and sunrise 
    -Current Weather and Info boxes set up just need contents to be fixed
    -Looked into API for map going to use the Google Map API paired with Open Weather API to display the location on page
    -Created the rest of the columns and rows needed to set up page just need to implement the corresponding contents
    -Set up one variable for the favBtn...
    
    TO-DO for next session:
    -Finish set up fully then dive into the API and Javascript of the project 
    -Set up JSON to hold images for the different types of weather displayed on Current Weather box
    -Align everything properly 
    -Resize some of the fonts and scale everything up by some to make it fit screen size and be proportional
    -Stop being lazy, stay off phone, and get to work
    -Look into local storage for favorites for the user to keep their favorites locations
    -Figure out how to add citys to favorite and create a template for a favorite card to be help within the favorites tab
    -Figure out how to create the favorites tab and design to match the Figma prototype

Fourth Commit(12/3/23):
    -Got all IDs set up for HTML elements and got them linked into the JS files
    -Added a seperate file for the 5 day forecast since it uses a seperate API call from a different URL within openweather API
    -Set up a JSON file to hold the images that will display the current state of weather on main box
    -Imported all types of images for the different states of weather
    -More styling done to the page still need to perfect it but everything is on the page and ready to go
    -Set up geolocation built in API to test if it works properly now displays current users longitude and latitude
    -Longitude and Latitude is now rounded so it doesn't hold 7 decimal places and now only holds 3 to be more appealing
    -Got border for the map set up now just needs map to be inserted
    -Tied the forecast.js file to HTML
    -Found out that Kdam Thmor is not a font that is in english and figma sets default to inter so to maintain in coordination with the Figma I changed the font for the whole page to be inter

    TO-DO for next session:
    -Do everything you have been saying you have been needing to do
    -Get rest of Weather data implemented and displayed on webpage
    -Try and get to the map API and setting up the 5 day forecase
    -Finish styling the page
    -Take a couple more breaks so your eyes don't strain
    -Figure out how to implement the search bar to autocomplete with cities and call the API to pull the data for corresponding city
    -Find out how to add the favorites tab you keep putting it off
    -Line up pin next to search bar
    -Fix logo the colors are off

Fifth Commit(12/4/23):
    -Pulled all data from APIs and got them running in console
    -Removed some unecessary files and moved this doc into the README.md
    -Set up async function in the forecast.js and it is now displaying data until I implement the data into the actual page
    -Finished my evaluations
    -Looked into Google Map API and it's asking me to put in card info so now looking into free version without card info in the mean time
    -Went back over figma to make sure I am pulling correct data and looked into openweather API to figure out what data I need
    -Hosted webpage on Vercel

    TO-DO for next session:
    -Finish implementing all data from the APIs 
    -Find way to implement map into the webpage
    -Get lowest and highest temps from the 5 day forecast API since they only display for each time frame
    -Find out how to convert into standard time from the UNIX that the API displays in the console

Sixth commit(12/5/23):
    -Got most of the API data on the screen besides the 5 day forecast data and the precipitation
    -Created data folder and moved the weatherCon.json file into it
    -Set up main icon to change with weather description
    -Set up wind to tell what direction the wind will be in and the speed
    -Fixed alignment issues and now everything is aligned might need to resize some things
    -Formatted the HTML code to make it easier for some of the content to work with

    TO-DO for next session:
    -Figure out how to test for precipitation within the API data
    -Search bar needs to be figured out ASAP
    -Resize some of the fonts and box sizes
    -Unix to Date for day of week for the 5 day forecast
    -Find solution to getting max and min for the whole day 5 day forecast

Seventh commit(12/6/23):
    -Got the days of the week to be displayed 
    -Finished a function to get proper rain displayed with default of zero if no rain data is shown
    -Started highs and lows of 5 day forecast going to work on the rest of day
    -Adjusted size of current weather icon and spacing to help it fit better in container
    -Reverse geocoded for current position to display correct city name and state on screen

    TO-DO for next session:
    -Get highs and lows fully functioning as well as the icons for each day by gathering most common weather type for that day
    -Pull map data from Google Map API with the coords from current position and the coords from any searched for
    -Get search bar functioning and pull data when needed
    -Favorite tab is going to be hard but the idea for it (this is a note for Caleb to remember) make a bar that is hidden and toggled on with button click and the button will Y-translate down to be at bottom of bar and cards will appear when a city is added to favorite array 
    -Look into an autocomplete for search bar to help user narrow down options for what they are looking for
    
    Finish date goal: 12/7/23

Eighth commit(12/7/12):
    -Finished search bar and made sure name displayed country in case where state is not available
    -Made snow avaiable instead of precipitation in said case
    -Got favorite tab pull down to open and close
    -Adjusted some files and compressed into one JS file

    TO-DO for next session:
    -Finish by tonight
    -Get local storage up and running
    -Display favorites and add function to favorite button
    -Finish styling

Ninth commit(12/8/23):
    -Did not finish could not figure out how to get favorites bar functioning with real time data updates

    TO-DO for life:
    -Don't add things to figma you aren't sure youre going to figure out
    -Clean up code
    -Fix this project and make it better
    