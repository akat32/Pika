var express = require('express');
var router = express.Router();
var ss = 0;
router.post('/iot', (req,res)=>{
  ss = 1;
  res.send('Sucs!');
});
router.post('/check', (req,res)=>{
  console.log(ss + 'Signal GO!');
  res.send(ss + 'ss');
});
module.exports = router;
