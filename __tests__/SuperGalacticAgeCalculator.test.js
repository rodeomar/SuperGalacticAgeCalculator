const SuperGalacticAgeCalculator = require('../src/SuperGalacticAgeCalculator');



describe('SuperGalacticAgeCalculator', () => {
  describe('calculateAgeOnMercury', () => {
    it('should return the age in Mercury years', () => {
      const age = 30;
      const calculator = new SuperGalacticAgeCalculator(age);
      const mercuryAge = calculator.calculateAgeOnMercury();
      expect(mercuryAge).toEqual(125);
    });
  });

  describe('calculateAgeOnVenus', () => {
    it('should return the age in Venus years', () => {
      const age = 30;
      const calculator = new SuperGalacticAgeCalculator(age);
      const venusAge = calculator.calculateAgeOnVenus();
      expect(venusAge).toEqual(48.39);
    });
  });

  describe('calculateAgeOnMars', () => {
    it('should return the age in Mars years', () => {
      const age = 30;
      const calculator = new SuperGalacticAgeCalculator(age);
      const marsAge = calculator.calculateAgeOnMars();
      expect(marsAge).toEqual(15.96);
    });
  });

  describe('calculateAgeOnJupiter', () => {
    it('should return the age in Jupiter years', () => {
      const age = 30;
      const calculator = new SuperGalacticAgeCalculator(age);
      const jupiterAge = calculator.calculateAgeOnJupiter();
      expect(jupiterAge).toEqual(2.53);
    });
  });

  describe('calculateYearsSincePastBirthday', () => {
    it('should return the years passed on each planet since past birthday', () => {
      const age = 56;
      const birthday = 43;
      const calculator = new SuperGalacticAgeCalculator(age);
      const yearsPassed = calculator.calculateYearsSincePastBirthday(birthday);
      expect(yearsPassed).toEqual({
        Earth: 13,
        Mercury: 54.16,
        Venus: 20.96, 
        Mars: 6.91,
        Jupiter: 1.09
      });
    });
  });                                           

  describe('calculateYearsUntilFutureBirthday', () => {
    it('should return the years remaining on each planet until future birthday', () => {
      const age = 56;
      const futureAge = 61;
      const calculator = new SuperGalacticAgeCalculator(age);
      const yearsRemaining = calculator.calculateYearsUntilFutureBirthday(futureAge);
      expect(yearsRemaining).toEqual({
        Earth: 5,
        Mercury: 20.83,
        Venus: 8.06,
        Mars: 2.65,
        Jupiter: 0.42
      });
    });
  });
});
