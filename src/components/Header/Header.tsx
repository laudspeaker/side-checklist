const Header = () => {
  return (
    <div className="w-full h-14 px-6 py-3 bg-[#6366F1] shadow justify-center items-center gap-4 inline-flex">
      <div className="text-center text-white text-sm font-bold">
        You have 6 days left on your free trial
      </div>
      <div className="justify-start items-start gap-2 flex">
        <div className="w-[200px] px-4 bg-[#6366F1] rounded-lg justify-center items-center gap-2 flex">
          <div className="text-center text-white text-sm font-bold cursor-pointer border-white border-[2px] rounded-lg px-[4px]">
            Upgrade to paid plan
          </div>
        </div>
      </div>
      <div className="w-[118px] px-4  bg-white rounded-lg shadow  justify-center items-center gap-2 flex">
        <div className="text-center text-[#6366F1] text-sm font-bold cursor-pointer">
          Get in touch
        </div>
      </div>
    </div>
  );
};

export default Header;
