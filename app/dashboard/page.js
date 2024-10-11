import { auth } from "@/auth"
import UserDashboard from "@/components/UserDashboard";
import { redirect } from "next/navigation";

//User Dashboard Page.
const Page = async () => {

  //If user not logged in then, redirected to login page.
  const sesssion = await auth();
  if(!sesssion){
    redirect('/')
  }

  return (
    <div>
        <UserDashboard userId={sesssion ? sesssion.user.email : ''}/>
    </div>
  )
}

export default Page