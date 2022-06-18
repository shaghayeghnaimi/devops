var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const mysqlQuery = req.app.get("mysqlQuery");
    const getPackage = await mysqlQuery("select * from packages");
    const getAllPackages = getPackage[0];
    const trackingNumberResult = await mysqlQuery(
      "SELECT * FROM packages WHERE trackingNumber = '123456789856';"
    );
    const trackingNumberResults = trackingNumberResult[0];
    const addressResult = await mysqlQuery(
      "SELECT * FROM adresses WHERE city = 'Tehran' AND street = 'Kamali';"
    );
    const addressResults = addressResult[0];
    const deleteRes = await mysqlQuery(
      "delete from packages where price='65000'"
    );
    const insertPackage = await mysqlQuery(
      "insert into packages (reciever_id, sender_id, trackingNumber, weight, price) values ('2', '4', '45367465748373', '850', '65000')"
    );
    const updatePackage = await mysqlQuery(
      "update packages set reciever_id=5, sender_id=7, weight='300', price='24100' where trackingNumber='123456119856'"
    );

    res.json({
      Q3: getAllPackages,
      Q4: trackingNumberResults,
      Q5: addressResults,
    });
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
