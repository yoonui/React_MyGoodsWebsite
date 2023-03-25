import GoodsPreview from "../components/GoodsPreview";
import { BiSearch } from "react-icons/bi";

const DisplayPage = () => {
  return (
    <div className="flex justify-center m-8">
      <div className="w-[80%]">
        <div className="my-3 text-2xl font-Kim700">전시용 굿즈</div>

        <div>
          <div>캐릭터</div>
          <div className="flex items-center border-t-[2px] border-b-[2px] my-2 py-5 px-4 justify-between">
            <div className="font-Kim400 hover:font-bold">최애캐 이름</div>
            <div className="font-Kim400 hover:font-bold">차애캐 이름 1</div>
            <div className="font-Kim400 hover:font-bold">차애캐 이름 2</div>
            <div className="font-Kim400 hover:font-bold">차애캐 이름 3</div>
            <div className="font-Kim400 hover:font-bold">기타등등</div>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="my-5 relative w-[280px] h-[43px] border-[2px] flex">
            <input
              className="w-[100%] p-2 focus:outline-none"
              placeholder="검색어를 입력하세요."
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

export default DisplayPage;
