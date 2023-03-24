import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-36">
        <Link className="text-3xl font-Kim700" to="/">
          타이틀
        </Link>
      </div>

      <div className="flex items-center justify-between h-12 bg-main-color">
        <div>
          <Link
            className="p-8 text-lg text-white font-Kim400 hover:font-Kim700"
            to="/display"
          >
            전시용
          </Link>
          <Link
            className="p-8 text-lg text-white font-Kim400 hover:font-Kim700"
            to="/sale"
          >
            판매용
          </Link>
        </div>

        <div>
          <Link
            className="p-8 text-lg text-white font-Kim400 hover:font-Kim700"
            to="/join"
          >
            회원가입
          </Link>
          <Link
            className="p-8 text-lg text-white font-Kim400 hover:font-Kim700"
            to="/login"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
