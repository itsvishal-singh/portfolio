const Mail=()=>{
  return <div className="flex md-mx:hidden text-textColor items-center gap-10 fixed bottom-32 -right-48 rotate-90">
      <div className="flex aos-init aos animate" data-aos-duration="800" >
      <a  href="mailto:vishal.200085@gmail.com" className="font-mono tracking-wide hover:text-primaryColor hover:-translate-x-1 transition transform duration-300 ease-in-out">
          vishal.200085@gmail.com
      </a>
      </div>
      <hr className="border w-40 rounded-full  bg-textColor border-textColor"/>
  </div>
}
export default Mail;