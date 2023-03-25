const MyPage = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="w-[400px] m-3 px-16 py-10 border-[3px] text-center">
        <div className="my-3 text-2xl font-Kim700">회원가입</div>

        <div className="mt-8">
          <div className="text-lg text-left font-Kim400">아이디</div>
          <input className="w-[265px] h-[43px] border-[2px] p-2" />
        </div>

        <div className="my-4">
          <div className="text-lg text-left font-Kim400">비밀번호</div>
          <input className="w-[265px] h-[43px] border-[2px] p-2" />
        </div>

        <div className="my-4">
          <div className="text-lg text-left font-Kim400">닉네임</div>
          <input className="w-[265px] h-[43px] border-[2px] p-2" />
        </div>

        <div className="mt-10 text-center">
          <button className="w-[265px] px-8 py-3 text-white bg-secondary-color hover:bg-secondary-color-bold">
            가입하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
