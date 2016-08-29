exports = typeof window === 'undefined' ? global : window;

exports.modulesAnswers = {
  createModule: function(str1, str2) {
    // the test uses "sayIt", "name" and "greeting" vars
    return {
      // method returns sentence using provided str
      sayIt : function() {
        return this.greeting + ', ' + this.name;
      },
      // assigns vars values to the object's property names
      name : str2,
      greeting : str1
    }

  }
};
