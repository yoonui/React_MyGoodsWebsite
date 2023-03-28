import { Link } from "react-router-dom";

const GoodsPreview = (props: { name: string; price?: number }) => {
  return (
    <div className="mx-2 my-6">
      <Link to="/goodsdetails">
        <div className="w-[250px] h-[250px] border-[2px]">이미지</div>
        <div className="my-1 text-xl font-Kim700">{props.name}</div>
        <div className="my-1 font-Kim400">{props.price ?? ""}</div>
      </Link>
    </div>
  );
};

export default GoodsPreview;
