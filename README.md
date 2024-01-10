# AssessmentBuddy 
This is a platform where you can create your assessments for the candidates that you want to hire.

## Features
- Assessment creation
- Assigning Assessment
- Automated mail sending
- Dynamic links for better security
- automation for the analytics

## Routes
- `/user` : This route handles the user actions like login, signup and authentication token generation
-  `/organization` : This route is used to create and manage the oraganizations where all users are associated with them.
-  `/question` : This route is used to manage the questions in the assignments. All CRUD opearations on these questions are also available.
-  `/Assignment` : This route allows us to manage the assessments and send the tests to the candidates.
-  `/template`" This route allows users to manage the templates.

## running the application
1. clone the repository
2. install the dependencies using `npm install`
3. run the app using `npm start`
