import GoodsPreview from "../components/GoodsPreview";
import { BiSearch } from "react-icons/bi";

const MyLovePage = () => {
  return (
    <div className="flex justify-center m-8">
      <div className="w-[80%]">
        <div className="my-3 text-2xl font-Kim700">찜하기 (갯수)</div>

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

export default MyLovePage;
