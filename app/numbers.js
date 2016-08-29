exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	return 1 & (num >> (bit - 1)); 
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {
  	num = num.toString(2);
  	if (num.length < 8) {
  		num = '0' + num;
  	}
  	return num;
  },

  multiply: function(a, b) {
  	var result  = a * b;
  	return parseFloat(result.toPrecision(4));
  }
};
