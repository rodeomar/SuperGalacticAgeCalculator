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



  roundDown(value) { // For rounding down the float value
    return Math.floor(value * 100) / 100;
  }

  calculateAgeOnMercury() {
    return +(this.age / .24).toFixed(2);
  }

  calculateAgeOnVenus() {
    return +(this.age / .62).toFixed(2);

  }

  calculateAgeOnMars() {
    return +(this.age / 1.88).toFixed(2);

  }

  calculateAgeOnJupiter() {
    return +(this.age / 11.86).toFixed(2);

  }

  calculateYearsSincePastBirthday(birthAge) {

    const earthYearsPassed = this.age - birthAge;
    const passedOnPlanets = {};

    for (const planet in this.planets) {
      passedOnPlanets[planet] = parseFloat(
        this.roundDown(earthYearsPassed / this.planets[planet])
      );
    }

    return passedOnPlanets;
  }

  calculateYearsUntilFutureBirthday(futureAge) {
    const earthYearsLeft = futureAge - this.age;
    const leftOnPlanets = {};

    for (const planet in this.planets) {
      leftOnPlanets[planet] = parseFloat(
        this.roundDown(earthYearsLeft / this.planets[planet])
      );
    }

    return leftOnPlanets;

  }
}

module.exports = SuperGalacticAgeCalculator;
