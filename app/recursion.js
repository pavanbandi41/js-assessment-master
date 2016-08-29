exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
  	var files = [];
  	
  	//Get all files helper function.
  	function getAllFiles(directory) {
		if (directory.files) {
			for (var item in directory.files) {
				if (typeof directory.files[item] == "string" && files.indexOf(directory.files[item]) === -1) {
					files.push(directory.files[item]);
				}
				else {
					getAllFiles(directory.files[item]);
				}
			}
		}
  	}

  	function getFiles(directory, name) {
  		if (name == undefined) {
  			getAllFiles(directory)
  		}
  		else {
  			if (typeof directory == "object") {
				for (var item in directory) {
					if (directory.dir == name) {
						getAllFiles(directory);
					}
					else {
						getFiles(directory[item], name);
					}
				}
			}
			
  		}
  	}

  	getFiles(data, dirName);
  	return files;
  },

  permute: function(arr) {
	  var permArr = [],
		  usedChars = [];
	  function permuteInner(arr) {
		  var i, ch;

		  for (i = 0; i < arr.length; i++) {
			  ch = arr.splice(i, 1);
			  usedChars.push(ch);
			  if (arr.length == 0) {
				  permArr.push(usedChars.slice());
			  }
			  permuteInner(arr);
			  arr.splice(i, 0, ch);
			  usedChars.pop();

		  }
		  return permArr;
	  }
	  return permuteInner(arr);
  },

  fibonacci: function(n) {
	var num1 = 0, num2 = 1;
	  var result = [0];
	  function makeFib(num1, num2, n) {
		  for (i = 1; i <= n; i++) {
			  result[i] = num2;
			  num2 = num1 + num2;
			  num1 = result[i];
		  }
		  return result[n];
	  }
	  return makeFib(num1, num2, n);

  },

  validParentheses: function(n) {
    var par = function(n) {
      var result = [], i = 0;

      for (i; i < n; i++) {
        var left = par(i), right = par(n - i - 1);

        for (var l = 0; l < left.length; l++){
          for (var r = 0; r < right.length; r++){
            result.push("(" + left[l] + ")" + right[r]);
          }
        }
      }
      if (n === 0) return [""];

      return result;
    }
    return par(n);
  }
};
