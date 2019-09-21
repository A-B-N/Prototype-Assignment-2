# Prototype-Assignment-2


Automated Loan approval system

The application is to automate the loan approval process for a customer, where in the loan application decision is taken by analysing the customer details.

Contents of the directory: 

Client-side web pages:
form.html - the form where the bank employee will enter the customer details.
login.jade - the jade file that handles the user authentication part.
register.jade - the jade file that handles the user registration part.
style.css- custom css file, that renders the layout for the registration and login page.
bootstrap.css- bootstrap css file, that renders the layout for the form page.

Server-side codes:
main.js - handles the controller part of the application.
index.js - handles the routing part of the application.
app.js - Initializes the application. 

Dynamic pages:
loanApproved.html - gets rendered when the criteria for loan approval gets fulfilled.
loandeclined.html - gets rendered when the criteria for loan approval is not fulfilled.


Functionality:
The application allows new users to register to use the application.
Registration process checks the entered user details against several other user details available to find a match. If a match is found, the user will be notified that they have been registered into the system already. Else, they will be redirected to the login page.
The login page uses user authentication validation, checks the user details to find a match. Upon successful match, the user will be redirected to the customer details form. Else, they’ll be notified to enter correct credentials.
The customer details form has all the necessary details about a customer that should be filled in by the user. Upon successful submission of the form, the entered data will be processed and the result page will be displayed based on the credit score that was entered by the user in the form through the server side logic. If the credit score is above 500, the loanApproved.html page will be rendered to indicate that the loan can be approved for a particular customer. If it falls below that threshold, then loandeclined.html will be rendered, indicating that the customer does not meet the criteria for loan approval. 

Execution Flow:
Unzip the file. 
Open cmd or Node.js command prompt and switch to the working directory.
Entering npm run start or node app.js will start the application.
Go to the browser and type http://localhost:3000  and the application will be opened in the browser.  



