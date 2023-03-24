import GoodsPreview from "../components/GoodsPreview";

const DisplayPage = () => {
  return (
    <div className="flex justify-center m-8">
      <div className="w-[80%]">
        {/* 캐릭터 필터링 */}
        <div>
          <div>캐릭터</div>
          <div className="border-t-[2px] border-b-[2px] my-2">
            여기에 캐릭터 이름을 적으시오
          </div>
        </div>

        <div className="flex justify-between">
          <input
            className="w-[265px] h-[43px] border-[2px] p-2"
            placeholder="검색어를 입력하세요."
          />
          <div>정렬</div>
        </div>

        {/* 굿즈 리스트 */}
        <GoodsPreview name="d" price={1000} />
      </div>
    </div>
  );
};

export default DisplayPage;
