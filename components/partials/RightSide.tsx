const RightSide = () => {
  return (
    <div className="font-Jura text-sm">
      <div className=" bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>Editais</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>TCCs</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-1 p-2 mb-2">
        <span>Resoluções</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>

      <div className="bg-basicBlack rounded flex text-white items-center gap-2 p-2 mb-2">
        <span>ATVs</span>
        <img className="h-5" src="Chevron.png" alt="" />
      </div>
    </div>
  );
};

export default RightSide;
