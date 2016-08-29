exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var result = "";
    var counter = 1;
    result += str[0];
    for(var i=1; i<str.length; i++){
      if(str[i-1] == str[i]){
        if(counter < amount){
          result += str[i];
          counter++;
        }
      }else{
        counter = 1;
        result += str[i];
      }
    } 
    return result;
  },
  wordWrap: function(str, cols) {
    var strArr = str.split(' ');
    var temp = [];
    var result = [];

    function wordWrapRecursive(arr){
      temp.push(arr.shift());
      var count = 0;
      for(var i=0; i<temp.length; i++){
        count += temp[i].length;
      }
      if(count > cols){
        if(temp.length == 1){
          temp.push("\n");
          result.push(temp.slice().join(''));
          temp.length=0;
        }else if(temp.length > 1){
          arr.unshift(temp.pop());
          temp = temp.join(' ').split('');
          temp.push("\n");
          result.push(temp.slice().join(''));
          temp.length=0;
        }
      }else if(arr.length == 0 && temp.length == 1){
        result.push(temp[0]);
        return;
      }
      if(arr.length){
        wordWrapRecursive(arr);
      }
      return result;
    }

    var qwerty = wordWrapRecursive(strArr);
    return qwerty.join('');

  },
  reverseString: function(str) {
    var arr = str.split('');
    var result = [];
    while(arr.length){
      result.push(arr.pop());
    }
    return result.join('');
  }
};
