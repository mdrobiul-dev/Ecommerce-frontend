import { Eye } from "lucide-react";

export default function SignUpPage() {
  return (
    <main className="flex flex-col justify-center  md:flex-row min-h-screen">
      <div
        className="
          hidden md:block 
          w-1/2 h-screen 
          bg-[url('/Left.png')] 
          bg-cover bg-center
        "
      >
        <h2 className="font-medium text-2xl pt-8 pl-8 text-center">3legant.</h2>
      </div>

      <div
        className="
          w-full md:w-1/2 
          flex items-center justify-center px-6 md:px-8 py-12
        "
      >
        <form className="w-full max-w-sm space-y-8">
          <div>
            <h1 className="font-medium text-3xl md:text-4xl text-[#000]">Sign Up</h1>
            <p className="text-[#6C7275] text-sm md:text-base">
              Already have an account?
              <a href="/signin" className="text-[#38CB89] cursor-pointer">
                Sign In
              </a>
            </p>
          </div>

          <div>
            <label htmlFor="fullname" className="sr-only">
              Your name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="Your name"
              className="w-full border-b border-[#E8ECEF] h-10 focus:outline-none text-[#6C7275] text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="w-full border-b border-[#E8ECEF] h-10 focus:outline-none text-[#6C7275] text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email address"
              className="w-full border-b border-[#E8ECEF] h-10 focus:outline-none text-[#6C7275] text-base"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="pass" className="sr-only">
              Password
            </label>
            <input
              id="pass"
              type="password"
              placeholder="Password"
              className="w-full border-b border-[#E8ECEF] h-10 focus:outline-none text-[#6C7275] text-base pr-10"
              required
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-[#6C7275]"
            >
              <Eye size={20} />
            </button>
          </div>

          <div className="flex items-start gap-2">
            <input type="checkbox" id="policy" className="mt-1" required />
            <label htmlFor="policy" className="text-[#6C7275] text-sm">
              I agree with
              <a href="#" className="text-[#141718] font-medium underline">
                Privacy Policy
              </a>
              and
              <a href="#" className="text-[#141718] font-medium underline">
                Terms of Use
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#141718] text-white py-3 rounded-lg font-medium hover:bg-black"
          >
            Create Account
          </button>
        </form>
      </div>
    </main>
  );
}

