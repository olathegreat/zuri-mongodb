const express = require ('express');
const app = express();






app.get("/", (req,res)=>{
    res.send("zuri training on mongodb");
})


const PORT = process.env.PORT || 3000 ;

app.listen(3000, ()=>console.log(`serving on port ${PORT}`));