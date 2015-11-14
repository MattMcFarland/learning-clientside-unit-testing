describe('My cool test suite', function() {

  it("expects true to always be true", function() {
    expect(true).toBe(true);
  });
});

describe('some variable named a', function () {

  var a = 5;
  it('expects a to be defined', function () {
    expect(a).toBeDefined()
  });

  it('expects a to be greater than 1', function () {
    expect(a).toBeGreaterThan(1)
  });

  it('expects a to be less than 10', function () {
    expect(a).toBeLessThan(10);
  });

  it('expects a to be 5', function () {
    expect(a).toBe(5)
  });

});
