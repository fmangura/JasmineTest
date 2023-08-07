
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 2,
    rate: 2,
  };
  expect(calculateMonthlyPayment(values)).toEqual('42.54');
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1000,
    years: 2,
    rate: 2,
  };
  expect(calculateMonthlyPayment(values)).toBeCloseTo('42.54', 2);

});

it('should calculate into a string', function () {
  const values = {
    amount: 1000,
    years: 2,
    rate: 2,
  };
  expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
});