import GoodsPreview from "../components/GoodsPreview";
import { BiSearch } from "react-icons/bi";

const SalePage = () => {
  return (
    <div className="flex justify-center mt-10 mb-16">
      <div className="w-[80%]">
        <div className="my-3 text-2xl font-Kim700">판매용 굿즈</div>

        <div className="mt-6">
          <div>캐릭터</div>
          <div className="flex items-center border-t-[2px] border-b-[2px] my-2 py-5 px-4 justify-between">
            <button className="font-Kim400 hover:font-bold">
              히다카 호쿠토
            </button>
            <button className="font-Kim400 hover:font-bold">
              아마기 히이로
            </button>
            <button className="font-Kim400 hover:font-bold">
              신카이 카나타
            </button>
            <button className="font-Kim400 hover:font-bold">시노 하지메</button>
            <button className="font-Kim400 hover:font-bold">기타 등등</button>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="my-5 relative w-[280px] h-[43px] border-[2px] flex">
            <input
              className="w-[100%] p-2 focus:outline-none"
              placeholder="굿즈 이름을 검색하세요."
            />
            <BiSearch
              className="m-2 cursor-pointer"
              size="25"
              color="#9A9A9A"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
        </div>

        <div className="flex justify-between">
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
        </div>

        <div className="flex justify-between">
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
          <GoodsPreview name="d" />
        </div>
      </div>
    </div>
  );
};

export default SalePage;
