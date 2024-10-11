import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation"

const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

//This displays a button to sign in to google (OAuth)
//Takes redirection path to perform redirection upon succeful login.
const SignInGoogle = async ({redirectPath}) => {
  const session = await auth();

  if(session){
    //If logged in person is 'admin', then register the 'ADMIN' to database.
    if(redirectPath==='admin/dashboard'){
      await fetch(baseUrl+'/api/admin/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify({_id:session.user.email,name:session.user.name})
      });
    }
    //Redirect to specified path.
    redirect('/'+redirectPath);
  }

  return (
    /*
    * This form is used to sign in ti google.
    * Used OAuth for login, without credentials.
    */
    <form
      action={async () => {
        "use server"
        await signIn("google")//,{redirectTo:'/'+redirectPath})
      }}
    >
      <div className="my-5">
        <button type="submit" className="flex items-center justify-center w-full border-2 border-black rounded-lg p-2 hover:shadow-lg shadow-md">
            <object data="google.svg" className="w-7 h-7">
            </object>
            <span className="text-lg font-semibold">Sign In with Google</span>
        </button>
      </div>
    </form>
    
  )
}

export default SignInGoogle