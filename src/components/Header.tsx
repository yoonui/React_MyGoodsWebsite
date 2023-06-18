import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-36">
        <Link className="text-3xl font-Kim700" to="/">
          타이틀
        </Link>
      </div>

      <div className="flex items-center justify-between bg-main-color px-4 text-white tracking-wider font-Kim400 text-lg">
        <div className="flex items-center">
          <Link
            className="px-8 py-2 hover:underline hover:bg-main-color-deep"
            to="/display"
          >
            전시용
          </Link>
          <Link
            className="px-8 py-2 hover:underline hover:bg-main-color-deep"
            to="/sale"
          >
            판매용
          </Link>
        </div>

        <div>
          <Link
            className="px-8 py-2 hover:underline hover:bg-main-color-deep"
            to="/join"
          >
            회원가입
          </Link>
          <Link
            className="px-8 py-2 hover:underline hover:bg-main-color-deep"
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
