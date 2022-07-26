# Alphanumeric Phone Number Generator App

Simple angular application that generates alphanumeric phone-number based in input provided.

## Run the application

Run `ng serve` for a local dev server. The default port is 4200. Navigate to `http://localhost:4200/` to run the app.

## User Interface Guide

1. Please enter a valid phone number with 7 or 10 digit.
2. Validation will be triggered if these conditions are not met:
   1. The input value is empty.
   2. The input value contains chars that are not 0-9. 
   3. The input length is not 7 or 10.
3. Submit button is enabled only if all the validation conditions are met.
4. On hitting submit button, spinner (Material Progress Spinner) gets activated for certain load time. 
5. When the user input phone number and hit the submit button then alphanumeric combinations are generated and displayed on material table below.
6. The Material Table contains pagination functionality.
   1. Pagination has the total count
   2. Pagination has the number of pages
   3. The user has the ability to change the number of records to view per page.

## User Interface Images

## Validations
![Validation](/images/required_validation.png?raw=true "Required Validation")

![Validation](/images/validation_error.png?raw=true "Incorrect Data Validation")

## Valid Input
![Valid Input](/images/valid_phonenumber.png?raw=true "Valid Phone Number")

## Loading Result
![Loading Result](/images/loading_screen.png?raw=true "Loading Screen")

## Success Result
![Success Result](/images/success_result.png?raw=true "Loading Screen")

## Running unit tests

Run `ng test` to execute the unit tests.

![Unit Test](/images/unit_tests.png?raw=true "Loading Screen")

## Code Coverage
Run `ng test --code-coverage` to execute the unit tests.

![Code Coverage](/images/code_coverage.png?raw=true "Loading Screen")

## Overall Application
1. The UI is built using Angular 12, Angular Material 12
2. Navbar, generate combination and table components are created handle the request.
3. Efficient algorithm using BFS has been written to generate the phone combination based on number map.
4. Angular material grid component has been added to handle data load asynchronously; page by page with total records displayed at the top.
6. **_JSON Mock Server did not have be used as the material table handled all the data efficiently and quickly, but it could be used to process and store large amount of data**_

## Phone Number Converter Algorithm
The algorithm uses breadth first search(BFS) approach, where it uses the queue to add the possible combination one at a time using the touchpad mapper below. The algorithm starts with one digit at a time, find all the possible combination and adds to the queue. It then moves on to another digit and continues until the length of the combination matches the actual number. After that it will add the combinations to the result set.
### Touchpad Mapping
![Touch Pad](/images/touchpad.png?raw=true "Touch Pad")
### Time Complexity
The time complexity of the algorithm is O(N.3^N), where N is the length of digits.
### Space Complexity
The space complexity of the algorithm is O(3^N), where N is the length of digits.

