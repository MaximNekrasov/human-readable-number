module.exports = function toReadable (number) {
  const numbers = [
   'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
  ];
  const shares = [
   'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
  ];

  if (number < 20) {
   return numbers[number];
  }

   let numb = number % 10;

   if (number < 100) {
      return shares[Math.floor(number / 10) - 2] + (numb ? ' ' + numbers[numb] : '')
   } else if (number < 1000)
      return numbers[Math.floor(number / 100)] + ' hundred' + (number % 100 == 0 ? '' : ' ' + toReadable(number % 100));
}
