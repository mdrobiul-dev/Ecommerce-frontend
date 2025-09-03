import { Eye } from 'lucide-react';
export default function Home() {
  return (
   <nav className="w-full">
    <div className="container flex">
      <div className="w-1/2 inset-0 h-screen bg-[url('/Left.png')] bg-cover bg-center">
       <h2 className="font-medium text-2xl text-[#000000] pt-8 text-center">3legant.</h2>
      </div>
      <div className="w-1/2 h-screen overflow-hidden">
      <form className="pt-56 pl-[88px] pb-[484px]">
      <h1 className="font-medium text-[40px] text-[#000000] pb-6">Sign In</h1>
      <p className="text-[#6C7275] font-normal text-[16px] pb-8">Don’t have an accout yet? <a className="text-[#38CB89] font-normal text-[16px] cursor-pointer">Sign Up</a></p>
      <div className="mb-8">
        <label htmlFor="username"></label>
        <input 
        id="username"
        type="text"
        placeholder="Your username or email address"
        className="text-[#6C7275] border-b-[1px] border-b-[#E8ECEF] h-10 focus:outline-none w-full tex-[16px] font-normal cursor-pointer"
        required
        />
      </div>
       <div className="mb-8 relative">
        <label htmlFor="pass"></label>
        <input 
        id="pass"
        type="password"
        placeholder="Password"
        className=" text-[#6C7275] border-b-[1px] border-b-[#E8ECEF] h-10 focus:outline-none w-full tex-[16px] font-normal cursor-pointer"
        required
        />
        <button type='button'
         className="absolute right-2 top-3 text-[#6C7275] cursor-pointer">
          <Eye size={22}/>
        </button>
      </div>
      <div className='mb-8 flex items-center justify-between'>
      <div className='flex gap-3'>
        <input type='checkbox'></input>
        <p className='text-[#6C7275] tex-[16px] font-normal'>Remember me</p>
      </div>
      <a className='font-semibold text-[16px] text-[#141718] cursor-pointer'>Forgot password?</a>
      </div>
      </form>
      </div>
    </div>
   </nav>
  );
}
