const mongoose = require("mongoose")

mongoose.connect('mongodb://analytic:readonly%23soco%40mongo@thesocialcomment.com/?authMechanism=DEFAULT&authSource=thesocialcomment').then(()=>{
    console.log("Connection Successful ✅");
}).catch((e)=>{
    console.log(e);
})
