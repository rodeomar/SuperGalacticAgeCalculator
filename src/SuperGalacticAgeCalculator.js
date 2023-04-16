class SuperGalacticAgeCalculator {
  constructor(age) {
    this.age = age
    this.planets = {
      Mercury: 0.24,
      Venus: 0.62,
      Earth: 1,
      Mars: 1.88,
      Jupiter: 11.86
    };
  }


  // Helper functions 1
  calculateAccurateAge(planet) {
    return this.age / this.planets[planet];
  }

  // Helper Function 2
  roundDown(value) { // For rounding down the float value
    return Math.floor(value * 100) / 100;
  }

  calculateAgeOnMercury() {
    return +this.calculateAccurateAge("Mercury").toFixed(2);
  }

  calculateAgeOnVenus() {
    return +this.calculateAccurateAge("Venus").toFixed(2);

  }

  calculateAgeOnMars() {
    return +this.calculateAccurateAge("Mars").toFixed(2);

  }

  calculateAgeOnJupiter() {
    return +this.calculateAccurateAge("Jupiter").toFixed(2);

  }

  calculateYearsSincePastBirthday(birthAge) {

    const earthYearsPassedAges = new SuperGalacticAgeCalculator(this.age - birthAge);
    const passedOnPlanets = {};


    for (const planet in this.planets) {
      passedOnPlanets[planet] = this.roundDown(earthYearsPassedAges.calculateAccurateAge(planet));
    }

    return passedOnPlanets;
  }

  calculateYearsUntilFutureBirthday(futureAge) {
    const earthYearsLeftAges = new SuperGalacticAgeCalculator(futureAge - this.age);
    const leftOnPlanets = {};

    for (const planet in this.planets) {
      leftOnPlanets[planet] = this.roundDown(earthYearsLeftAges.calculateAccurateAge(planet));

    }

    return leftOnPlanets;

  }
}

module.exports = SuperGalacticAgeCalculator;
