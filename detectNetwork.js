// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

/*
STEP ONE:
Note: `cardNumber` will always be a string
The Diner's Club network always starts with a 38 or 39 and is 14 digits long
The American Express network always starts with a 34 or 37 and is 15 digits long

Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: 

38345678901234 (Diner's Club)
39345678901234 (Diner's Club)
343456789012345 (American Express)
373456789012345 (American Express)

Once you've read this, go ahead and try to implement this function, then return to the console.


STEP TWO:
Nice work! Extend your function to support two popular networks, Visa and Mastercard:

Visa always has a prefix of 4 and a length of 13, 16, or 19.
MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

Make sure that you continue to support Diner's Club and American Express cards. Keep testing your implementation here in the console.

Here's a list of card numbers you can try to ensure that your function works for every combination of prefix and length: 

38345678901234 (Diner's Club)
39345678901234 (Diner's Club)
343456789012345 (American Express)
373456789012345 (American Express)
4123456789012 (Visa)
4123456789012345 (Visa)
4123456789012345678 (Visa)
5112345678901234 (MasterCard)
5212345678901234 (MasterCard)
5312345678901234 (MasterCard)
5412345678901234 (MasterCard)
5512345678901234 (MasterCard)


STEP THREE:
Here it is! Each heading (like Diner's Club) is a different set of tests, and underneath each heading is a list of tests, with a x if it fails and a check if it passes.

Examine the tests in detectNetwork.test.js until you are confident about the behavior they are testing, then make them pass (you might have to modify a few tests to do so!). 
Then, implement the following networks:

Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

When detectNetwork returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, MasterCard, Discover, and Maestro, you can invoke nextStep: 


STEP FOUR:
Excellent work! Write your own tests and make them pass for the last two networks:

China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

When detectNetwork returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, MasterCard, Discover, Maestro, China UnionPay, and Switch you can invoke nextStep: 
*/

function range(start, end) {
  var arr = [];
  for (var i = start; i <= end; i++)
    arr.push(i);
  return arr;
}

var detectNetwork = function(cardNumber) { 
  var cardLen = cardNumber.length;

  function startsWithPrefix(prefix, index, array) {
    return cardNumber.startsWith(prefix.toString());
  }   

  var dinerPrefixes = ['38', '39'];
  var amexPrefixes = ['34', '37'];
  var visaPrefixes = ['4'];
  var masterPrefixes = ['51', '52', '53', '54', '55'];
  var discoverPrefixes = ['6011', '644', '645', '646', '647', '648', '649', '65'];
  var maestroPrefixes = ['5018', '5020', '5038', '6304'];
  var unionpayPrefixes = range(622126, 622925).concat(range(624, 626), range(6282, 6288));
  var switchPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];

  if (cardLen === 14) {
    if (dinerPrefixes.some(startsWithPrefix)) return 'Diner\'s Club';
  }

  if (cardLen === 15) {
    if (amexPrefixes.some(startsWithPrefix)) return 'American Express';
  }

  if (cardLen === 16) {
    if (masterPrefixes.some(startsWithPrefix)) return 'MasterCard';
  }

  if (cardLen === 16 || cardLen === 19) {
    if (discoverPrefixes.some(startsWithPrefix)) return 'Discover';
  }

  if (cardLen >= 12 && cardLen <= 19) {
    if (maestroPrefixes.some(startsWithPrefix)) return 'Maestro';
  }

  if (cardLen === 16 || cardLen === 18 || cardLen === 19) {
    if (switchPrefixes.some(startsWithPrefix)) return 'Switch';
  }

  if (cardLen === 13 || cardLen === 16 || cardLen === 19) {
    if (visaPrefixes.some(startsWithPrefix)) return 'Visa';
  }

  if (cardLen >= 16 && cardLen <= 19) {
    if (unionpayPrefixes.some(startsWithPrefix)) return 'China UnionPay';
  }

};


