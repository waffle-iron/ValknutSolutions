var assert = require('assert');

var analystController = require('../../controllers/db/AnalystController');

describe('Facebook Controller', function(){
  describe('extractUserTest', function(){
      var user = analystController.validateAnalyst('a', 'lelelel');
      if(user)
      {
        //do nothing
        console.log(user);
      }
      else
        console.log("Error");

  });
});
