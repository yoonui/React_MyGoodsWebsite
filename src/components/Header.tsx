const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-3xl h-36 font-Kim700">
        타이틀
      </div>
      <div className="flex items-center justify-between h-12 bg-main-color">
        <div>
          <button className="p-8 text-lg text-white font-Kim400 hover:font-Kim700">
            전시용
          </button>
          <button className="p-8 text-lg text-white font-Kim400 hover:font-Kim700">
            판매용
          </button>
        </div>
        <div>
          <button className="p-8 text-lg text-white font-Kim400 hover:font-Kim700">
            회원가입
          </button>
          <button className="p-8 text-lg text-white font-Kim400 hover:font-Kim700">
            로그인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
