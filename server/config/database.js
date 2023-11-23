const mongoose = require('mongoose');
const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.DB_HOST,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`mongoDB connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1)
    }
}
connectDB();