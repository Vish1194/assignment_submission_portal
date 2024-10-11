"use client"
import { useRouter } from "next/navigation"
import { useState } from "react";

//Takes 'data' prop from AdminDashboard to display data.
const AdminTaskCard = ({data}) => {
  const router = useRouter();
  //Used for showing loading state.
  const [isLoading,setIsLoading] = useState(false);

  //Task is Accepted or Rejected based on -> 'accept' argument.
  //'accept' can be true/false.
  async function handleStatus(accept) {
    //sets loading state to true.
    setIsLoading(true);
    //Performs POST request to either accept or reject the task.
    const response = await fetch('/api/admin/'+data._id+'/'+(accept?'accept':'reject'),
      {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({})
      }
    )
    //Stops displaying loading state.
    setIsLoading(false);
    router.refresh();
  }
  
  return (
    <div className="shadow-md rounded-md w-full px-5 py-2 hover:shadow-lg">
        <h1 className="text-xl font-semibold my-2">User: {data.userId}</h1>
        <p>Task: {data.task}</p>
        {
          //if isloading = true, display loading state.
          isLoading ? 
          <div className="flex items-center justify-end gap-4 my-2">
            <div className="w-7 h-7 border-4 border-dashed border-black rounded-full animate-spin"></div>
          </div>
          :
          data.status==='pending' ? 
          <div className="flex items-center justify-end gap-4 my-2">
            <button onClick={()=>handleStatus(true)} className="text-lg text-white font-bold px-4 py-1 bg-green-500 rounded-xl shadow-md hover:shadow-lg">Accept</button>
            <button onClick={()=>handleStatus(false)} className="text-lg text-white font-bold px-4 py-1 bg-red-500 rounded-xl shadow-md hover:shadow-lg">Reject</button>
          </div>
          : data.status==='accept' ? 
            <h1 className="font-semibold text-green-500 text-right">Accepted</h1> 
            : <h1 className="font-semibold text-red-500 text-right">Rejected</h1>
        }
        
    </div>
  )
}

export default AdminTaskCard