// CRUD Create, Read, Update, Delete 

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017'; //Local host 127.0.0.1 due to syntax performance issues
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id.id.length);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client)=>{ //Async
    //Execute 

    if(error){
        return  console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('users').deleteMany({
        age: 28
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })

    db.collection('tasks').deleteOne({
        description: 'dishes'
    }).then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.log(error);
    })

});


//Archive of tutorial


//Insert 
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'John', 
    //     age: 33
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);

    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Billy', 
    //         age: 28
    //     }, {
    //         name: 'Bob', 
    //         age: 44
    //     } 
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert users!');
    //     }

    //     console.log(result.ops);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'dishes', 
    //         completed: true
    //     },{
    //         description: 'laundry', 
    //         completed: false
    //     },{
    //         description: 'floors', 
    //         completed: true
    //     }
    // ], 
    //     (error, result)=>{
    //         if(error){
    //             return console.log('Unable to insert users!');
    //         }

    //         console.log(result.ops);
    // });

//Query 

    //db.collection('users').findOne({_id: new ObjectID('5d1287eaa1b8f14b105bb6a5')}, (error, user) => {
        //     if(error){
        //         return console.log('Error'+ error);
        //     }
    
        //     console.log(user);
    
        // });
    
        // db.collection('users').find({age: 26}).toArray((error, users)=>{ //Return is a cursor with methods to work with
        //     console.log(users);
        // });
    
        // db.collection('users').find({age: 26}).count((error, count)=>{
        //     console.log(count);
        // });

         //Update is going to be depreciated therefore, use update one or update many

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5d1287eaa1b8f14b105bb6a5')
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // });

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {completed: true}
    // }).then((result)=>{
    //     console.log('Success: '+ result);
    // }).catch((error)=>{
    //     console.log('Error: '+ error);
    // }); 
