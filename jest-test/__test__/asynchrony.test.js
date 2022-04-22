const {fn} = require('../src/asynchrony');

test('the data is peanut butter', () => {
  return fn().then(data => {
    expect(data).toBe('peanut butter');
  });
});
