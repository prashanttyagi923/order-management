const {getUser} = require("../database/entities/users");
const router = require("../utils/router");

router.get('/users', async (req, res) => {
   const users = await getUser();
   if(users){
      return res.json(users);
   }else{
      return res.json({
         "StatusCode": 404
      })
   }


});
router.post('/users', (req, res) => {

});

module.exports = {
   userController: router
}