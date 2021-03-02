
const {userController} = require("../controller/userController");
const {itemController} = require("../controller/itemController");
exports.setRoutes =(app) => {

  // add route here
  app.use("/api", userController, itemController);
      
};