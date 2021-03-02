const {getItem} = require("../database/entities/items");
const router = require("../utils/router");

router.get('/items', async (req, res) => {
   const items = await getItem();
   if(items){
      return res.json(items);
   }else{
      return res.json({
         "StatusCode": 404
      })
   }


});
router.post('/items', (req, res) => {

});

module.exports = {
   itemController: router
}