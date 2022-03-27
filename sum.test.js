/**
 * @jest-environment jsdom
 */

const sum = require('./sum');
var $ = require( "jquery" );

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

async function wait(millis) {
  console.log(`sleeping for ${millis} milliseconds`);
  await new Promise(r => setTimeout(r, millis));
  console.log("woke up");
}

test('test jsonp', async () => {
  $.ajax({
    type: 'GET',
    url: 'https://httpbin.org/get',
    dataType: 'jsonp',
    complete: (req) => {
      console.log('req str:', JSON.stringify(req));
    },
    timeout: 2000,
  });
  await wait(3000);
});