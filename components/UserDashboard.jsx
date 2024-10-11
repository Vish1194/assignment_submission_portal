//Specifed this componenet as client side component.
"use client"
import {useState,useEffect} from "react"

//Define the base URL for API requests, defaulting to http://localhost:3000 if not set in the environment
const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

/*
* UserDashboard component, which expects a userId prop,
* It is used to upload task/assignments by specifying respective admins to handle particular task.
*/
const UserDashboard = ({userId}) => {
    const [allAdmins,setAllAdmins] = useState([]);
    const [uploadData,setUploadData] = useState({userId:'',task:'',admin:''});
    
    useEffect(()=>{
        // fetches a list of admins from the API endpoint /api/user/get-admins. and updates allAdmins useState.
        async function getAdminData() {
            const data = await fetch(baseUrl+'/api/user/get-admins',{next:{revalidate:15}});
            setAllAdmins(await data.json());
        }
        getAdminData();
    },[baseUrl]);

    //Sends a POST request to the /api/user/upload endpoint with the uploadData in JSON format.
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(uploadData.admin==='')
            setUploadData({...uploadData,admin:allAdmins[0]._id});
        const response = await fetch(baseUrl+'/api/user/upload',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({userId:userId,task:uploadData.task,admin:uploadData.admin===''?allAdmins[0]._id:uploadData.admin})
        });
        const resp = await response.json();
        //To show user whether task updated or not.
        alert(resp.acknowledged?'Task Uploaded Successfully.':'Something went wrong. Try again.')
        setUploadData({...uploadData,task:''});
    }

    return (
    <div>
        <h1 className="text-center text-2xl font-bold my-11">Submit Task/Assignment</h1>
        <form onSubmit={handleSubmit} className="mx-11 my-4"> 
            <label htmlFor="countries" className="block mx-2 mt-4 mb-2 text-md font-medium text-gray-900 dark:text-white">Select Admin</label>
            <select onChange={(e)=>{setUploadData({...uploadData,admin:e.target.value})}} value={uploadData.admin} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue>Select Option</option>
                {
                    //displays admin list obtained from API.
                    allAdmins.map((admin,index)=>(
                        <option key={index} value={admin._id}>{admin.name}</option>
                    ))
                }
            </select>
            <label htmlFor="message" className="block mx-2 mt-4 mb-2 text-md font-medium text-gray-900 dark:text-white">Task</label>
            <textarea onChange={(e)=>{
                setUploadData({...uploadData,task:e.target.value});
            }} value={uploadData.task} id="message" rows="7" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your tasks here..." required></textarea>
            <button type="submit" className="bg-green-700 text-xl text-white font-bold py-2 w-full rounded-lg my-4 shadow-md hover:shadow-xl">Post Task</button>
        </form>
    </div>
  )
}

export default UserDashboard