var express = require('express');
var router = express.Router();



const message_model = require("../models/message.model")


/* GET users listing. */
router.post('/', async function(req, res, next) {
  try {
    let page_no = req.body.page;
    let limit = req.body.limit;

    let ln = parseInt(limit);
    const messages_details = await message_model.find().limit(ln).skip((page_no-1) * limit);
    res.send(messages_details)
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
});

module.exports = router;