import googleLogo from '../assets/images/google-logo.jpg'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="w-96 mx-auto mt-12">
      <div className="border w-[450px] h-[550px] rounded-lg px-10 py-6">
        <div className="flex flex-col ">
          <img src={googleLogo} alt="google logo" className="w-36 mx-auto" />
          <span className="text-2xl font-medium mb-2  mx-auto">Sign in</span>
          <span className="text-lg mb-10  mx-auto">to continue to YouTube</span>
          <form className="flex flex-col gap-5 w-full mb-2">
            <input
              type="text"
              placeholder="Email or phone"
              className="border-2 rounded-md p-3 outline-none focus-within:border-blue"
            />
            <input
              type="password"
              placeholder="********"
              className="border-2 rounded-md p-3 outline-none focus-within:border-blue"
            />
          </form>
          <Link to="#" className="text-blue text-base font-semibold mb-10">
            Forgot email or password?
          </Link>
          <div className="flex flex-col text-sm mb-10">
            <span>Not your computer? Use Guest mode to sign in privately.</span>
            <Link to="#" className="text-blue font-semibold">
              Learn more
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <Link to="#" className="text-blue font-semibold hover:text-sky-700">
              Create account
            </Link>
            <button className="bg-blue text-white py-2 px-5 w-max rounded-md hover:bg-sky-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
