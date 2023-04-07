import mongoose from 'mongoose'


const DbConnections = async()=>{
    const DB_URL= `mongodb://soumikDatabase:Soumik*123@ac-k4so3hr-shard-00-00.wv8u1t9.mongodb.net:27017,ac-k4so3hr-shard-00-01.wv8u1t9.mongodb.net:27017,ac-k4so3hr-shard-00-02.wv8u1t9.mongodb.net:27017/?ssl=true&replicaSet=atlas-5w7k9m-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(DB_URL, {useNewUrlParser: true});
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting the database',error.message);
    }
}

export default DbConnections;