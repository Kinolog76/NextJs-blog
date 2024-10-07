import HeaderTop from "@/Components/HeaderTop";

function Header() {
  return (
    <header className="py-5 px-5 md:px-12 lg:px-28">
      <HeaderTop />
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold">Latest Blogs</h1>
        <p className="mt-10 max-w-[750px] mx-auto text-sx sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, vitae ipsa. Iste
          obcaecati corrupti natus facere quae consequuntur qui.
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-solid border-black p-1 shadow-[-2px_2px_0px_#000] focus-within:shadow-[-7px_7px_0px_#000] transition-all duration-300"
          action="">
          <input type="email" placeholder="Enter your email" className="pl-4 outline-none w-full" />
          <button
            type="submit"
            className="bg-black border border-solid border-black text-white py-2 px-4 hover:bg-gray-300 hover:text-black focus:bg-gray-300 focus:text-black transition-all duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
