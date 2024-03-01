import mongoose from "mongoose";

async function dbConfig()
{
    await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_Name}`)
    .then(()=>{console.log("DB conneced successfully")})
    .catch((err)=>console.log("DB connected error : ",err))
}

export default dbConfig;