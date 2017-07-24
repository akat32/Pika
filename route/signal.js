var express = require('express');
var router = express.Router();
var ss = 0;
var chk = 0;
router.post('/iot', (req,res)=>{
  ss = 1;
  res.send('Sucs!');
});
router.post('/check', (req,res)=>{
  if(chk == 1)
  {
     ss = 0;
     chk = 0;
  }
  console.log(ss + 'Signal GO!');
  if(ss == 1)
  {
    chk = 1;
  }
  res.send(ss + 'ss');

});
module.exports = router;
