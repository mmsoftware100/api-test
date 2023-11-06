const chai = require('chai');
const expect = chai.expect;  // Use your preferred assertion library

describe('Math Operations', () => {
  it('should add two numbers', () => {
    const result = 2 + 3;
    expect(result).to.equal(5);
  });

  it('should multiply two numbers', () => {
    const result = 4 * 5;
    expect(result).to.equal(20);
  });
});
