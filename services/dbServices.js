/**
 * This file consists of various functions used to perform database operation.
 */

import { MongoClient , ObjectId } from "mongodb";


const CONN_STRING = process.env.MONGODB_CONN_STRING;
const DB_NAME = process.env.DB_NAME;
const USER_COLL_NAME="users"
const ADMIN_COLL_NAME="admins"
const TASK_COLL_NAME="tasks"


//Establsih connection using the mongo db connection string.
const client = new MongoClient(CONN_STRING);


//Below function registers the admin to the database.
//'dataToRegister' is admin data to be registered.
export async function registerAdmin(dataToRegister) {
    let result;
    try {
        const db = client.db(DB_NAME).collection(ADMIN_COLL_NAME);
        //Registers admin
        result = await db.insertOne(dataToRegister);
        //Creates a test/dummy task for admin.
        await client.db(DB_NAME).collection(TASK_COLL_NAME).insertOne({userId:'test@user.com',task:'Some Test Data/ Dummy Data.Lorem ipsum dolor sit amet consectetur adipisicing elit.',admin:dataToRegister._id,status:"pending"})
    } catch (error) {
        result = {acknowledged:false};
    }
    return result;
}

//Below function returns all the admins present in database.
export async function getAllAdmins() {
    let result=[];
    try {
        const db = client.db(DB_NAME).collection(ADMIN_COLL_NAME);
        result = await db.find({}).toArray();
    } catch (error) {
        console.log(error);
    }
    return result;
}

//Below function uploads the task to task collection in mongodb.
export async function uploadTask(uploadData) {
    //By default uploaded task will be in pending status and admin will accept/reject the task.
    uploadData.status="pending"
    let result;
    try {
        const db = client.db(DB_NAME).collection(TASK_COLL_NAME);
        result = await db.insertOne(uploadData)
    } catch (error) {
        console.log(error);
        result = {acknowledged:false};
    }
    return result;
}

//Below function returns the assignments/tasks for particular admin.
//Takes adminId to retrieve tasks.
export async function getAssignments(adminId) {
    let result=[];
    try {
        const db = client.db(DB_NAME).collection(TASK_COLL_NAME);
        result = await db.find({admin:adminId}).toArray();
    } catch (error) {
        console.log(error);
    }
    return result;
}

//Below function is used to ACCEPT/REJECT task by updating the status.
//'accept' can be true/false -> determines whether taks to be accepted or rejected.
//'id' is id vlaue of specific task.
export async function acceptRejectAssignment(accept,id) {
    let result=[];
    const oid = new ObjectId(id);
    try {
        const db = client.db(DB_NAME).collection(TASK_COLL_NAME);
        result = await db.updateOne({_id:oid},{$set:{status:accept?'accept':'reject'}})
    } catch (error) {
        console.log(error);
    }
    return result;
}