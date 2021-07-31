var express = require('express');
var router = express.Router();


const message_model = require("../models/message.model")


/* GET users listing. */
router.post('/', async function(req, res, next) {
  try {
    let page_no = req.body.page;
    let limit = req.body.limit;

    let ln = parseInt(limit);
    const messages_details = await message_model.find().sort({ _id: -1 }).limit(10);
    res.send(messages_details)
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
});


router.post('/delete', async function(req, res, next) {
  try {
    let id = req.body.id;
    await message_model.deleteOne({_id : id})
    res.send({'res' : 'Message Deleted '})
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
});

module.exports = router;