import { redirect } from "next/navigation";
import { auth } from "@/auth"
import AdminTaskCard from "./AdminTaskCard"

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'


const AdminDashboard = async () => {
  const session = await auth();
  //Check whether admin logged in , if not redirect to login page.
  if(!session){
    redirect('/')
  }

  //fetch assignmnet for particular admin with GET request.
  const data = await fetch(baseUrl+"/api/admin/assignments?admin="+session.user.email,
    {cache:"no-store"}
  );
  const assignments = await data.json();

  //Creates sperate arrays based on status -> task pending or faccept/reject.
  //This arrays used only for purpose of differentiating while displaying.
  const pendingAssignments = assignments.filter(x=>x.status==='pending');
  const finalizedAssignments = assignments.filter(x=>x.status!=='pending');
  
  return (
    <div>
        <div className="flex items-center flex-col md:mx-11 my-4">
            <h1 className="text-2xl font-bold my-7">Pending Tasks</h1>
            {
              pendingAssignments.length===0 && <h2 className="italic font-semibold">No Pending Task</h2>
            }
            {
              pendingAssignments.map((assignment,index)=>(
                //Used to display tasks details including user who posted the task.
                <AdminTaskCard key={index} data={assignment} />
              ))
            }
            <h1 className="text-2xl font-bold my-7">Finalized Tasks</h1>
            {
              finalizedAssignments.length===0 && <h2 className="italic font-semibold">No Task Finalized yet</h2>
            }
            {
              finalizedAssignments.map((assignment,index)=>(
                //Used to display tasks details including user who posted the task.
                <AdminTaskCard key={index} data={assignment} />
              ))
            }
        </div>
    </div>
  )
}

export default AdminDashboard