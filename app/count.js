exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count : function (start, end) {
    
    var timeout;
    
    function counter(){
      console.log(start++);
      if(start <= end){
        timeout = setTimeout(counter, 100);
      }
    }
    counter();

    return {
      cancel: function(){
        clearTimeout(timeout);
      }
    }
  }
};
