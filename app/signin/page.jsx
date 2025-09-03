import { Eye } from "lucide-react";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen">
      {/* Left Side (hidden on small screens) */}
      <div className="hidden md:block w-1/2 bg-[url('/Left.png')] bg-cover bg-center">
        <h2 className="font-medium text-2xl pt-8 text-center">3legant.</h2>
      </div>

      {/* Right Side */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-8">
        <form className="w-full max-w-sm space-y-8">
          <div>
            <h1 className="font-medium text-4xl text-[#000]">Sign In</h1>
            <p className="text-[#6C7275] text-base">
              Don’t have an account yet?{" "}
              <a href="/signup" className="text-[#38CB89] cursor-pointer">
                Sign Up
              </a>
            </p>
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className="sr-only">
              Username or Email
            </label>
            <input
              id="username"
              type="text"
              placeholder="Your username or email address"
              className="w-full border-b border-[#E8ECEF] h-10 focus:outline-none text-[#6C7275] text-base"
              required
            />
          </div>

          {/* Password */}
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

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-[#6C7275] text-sm">
              <input type="checkbox" id="check" />
              Remember me
            </label>
            <a href="#" className="font-semibold text-sm text-[#141718]">
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#141718] text-white py-3 rounded-lg font-medium hover:bg-black"
          >
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}