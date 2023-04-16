# **`Super Galactic Age Calculator`**

A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. This application determines a user's age based on a planet's solar years.


-------------------
## **Table of Contents**
 - Installation
 - Usage
 - Contributing
 - License

--------------------

## **Installation**
To run this application, you need to have Node.js installed on your computer. Once you have Node.js installed, follow these steps:

 1. Clone this repository to your local machine
 2. Navigate to the project directory in your terminal/command prompt
 3. Run `npm install` to install the necessary dependencies
 4. Run `npm run build` to build the project using webpack
 5. Run `npm tes`t to run the tests and verify that everything is working correctly

------------------
## **Usage**

To use this application, you can import the GalacticAgeCalculator class from the src/galactic-age-calculator.js file. Then, you can create a new instance of the class with a person's age in Earth years:

```js
const GalacticAgeCalculator  = require("./src/SuperGalacticAgeCalculator")

const ageCalculator = new GalacticAgeCalculator(30); // create a new instance with age = 30

console.log(ageCalculator.calculateAgeOnMercury())
```

Once you have an instance of the class, you can call various methods to get the person's age on other planets. For example:


```js
// get age on Mercury
const mercuryAge = ageCalculator.calculateAgeOnMercury(); 

// get age on Venus
const venusAge = ageCalculator.calculateAgeOnVenus(); 

// get age on Mars
const marsAge = ageCalculator.calculateAgeOnMars(); 

// get age on Jupiter
const jupiterAge = ageCalculator.calculateAgeOnJupiter(); 

```

You can also calculate how many years have passed on each planet since a past birthday, or how many years have yet to pass until a future birthday:

```js
// calculate years passed since 25th birthday
const yearsPassed = ageCalculator.calculateYearsSincePastBirthday(25); 

// calculate years left until 35th birthday
const yearsLeft = ageCalculator.calculateYearsUntilFutureBirthday(35); 

```


-------------
## **License**
