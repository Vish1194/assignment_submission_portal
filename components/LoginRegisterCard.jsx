
import SignInGoogle from './SignInGoogle'

//Uses 'heading' Prop to Display either, 'USER' or 'ADMIN'.
//This 'heading' prop is also sent to SignInGoogle Component to determine redirection path upon succeful login.
const LoginRegisterCard = ({heading}) => {
    
  return (
    <div className="flex justify-center items-center flex-col min-h-[70vh]">
        <div className="bg-white border-2 border-black rounded-lg p-5 w-96 shadow-xl hover:shadow-md">
            <h1 className="text-center text-2xl font-bold mb-4">{heading}</h1>
            <div className="flex justify-center items-center flex-col gap-1 mb-4 *:text-xl *:font-semibold *:underline-offset-8">
                <img src="signin.svg" alt="signin" className='w-9 h-9'/>
                <h1>Sign In</h1>
            </div>
            <hr className="my-2"/>
            <SignInGoogle redirectPath={heading.toLowerCase()==='admin' ? 'admin/dashboard' : 'dashboard'}/>
        </div>
    </div>
  )
}

export default LoginRegisterCard