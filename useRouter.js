const express = require('express');
 const data=require("../data")
const router = express.Router();
const midh=(req,res,next)=>{
    const mid=true;
    (mid)?next():res.send('you are not')
  }
  router.use(midh)

router.get('/index', (req, res) => {

    res.status(200).sendFile(__dirname + '/view/home.html');
});
  
router.get('/index', (req, res) => {
   
    res.status(200).sendFile(__dirname + '/view/style.css');
});

router.post('/', (req, res) => {
    
    if (req.body) {
      res.status(200).json([...data, req.body]);
    } else {
      res.status(400).json({ error: 'Invalid request body' });
    }
  });

  router.delete('/delate/:id', (req, res) => {
 
    if (req.body) {
      res.status(200).json(data.filter((el)=>req.params.id != el.id));
    } else {
      res.status(400).json({ error: 'Invalid request body' });
    }
  });
  
  router.put('/put/:id', (req, res) => {

    if (req.body) {
      res.status(200).json(data.map((el)=>(req.params.id == el.id)?{...el,name:"basma"}:el));
    } else {
      res.status(400).json({ error: 'Invalid request body' });
    }
  });


module.exports = router;