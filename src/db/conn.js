const mongoose = require("mongoose");


mongoose.connect(process.env.DB_KEY, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(() => {
    console.log(`connection sucessful`);
}).catch((e) => {
    console.log(`no connection ${e}`);
})