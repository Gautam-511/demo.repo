const express = require("express")
const router = express.Router()


router.use((req, res, next) => {
    console.log(`Request received at ${new Date()}`);
    next(); // Call the next middleware in the chain
  });
router.get('/', (req, res, next) => {
    console.log('Middleware specific to the / route');
    next();
  }
,function(req,res){
    res.send("User's list")
})

router.get('/new',function(req,res){
    
    res.send("User's new")
})

router
    .route('/:id')
    .get((req,res)=>{
        const id = req.params.id
        res.send('Get user with ID: '+ id)
    })
    .put((req,res)=>{
        const id = req.params.id
        res.send('Get user with ID: '+ id)
    })
    .delete((req,res)=>{
        const id = req.params.id
        res.send('Get user with ID: '+ id)
    })
module.exports = router