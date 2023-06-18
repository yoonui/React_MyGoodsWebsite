import { useState } from "react";
import { useNavigate } from "react-router-dom";
import account from "../database/account.json";

const LoginPage = () => {
  const navigate = useNavigate();
  const goJoinBtn = () => {
    // 회원가입 페이지로 이동
    navigate("/join");
  };

  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");

  const idOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value.toLocaleLowerCase());
  };
  const pwdOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
  };

  const loginBtn = () => {
    account.filter((e) => {
      if (e.id === id && e.password === pwd) {
        console.log("gooooood");
      }
    });
  };

  return (
    <div className="flex justify-center my-16">
      <div className="w-[400px] m-3 px-16 py-10 border-[3px] text-center">
        <div className="my-3 text-2xl font-Kim700 tracking-wider">로그인</div>

        <div className="mt-8">
          <div className="text-lg text-left font-Kim400">아이디</div>
          <input
            className="w-[265px] h-[43px] border-[2px] p-2"
            placeholder="id"
            value={id}
            onChange={idOnChange}
          />
        </div>

        <div className="my-4">
          <div className="text-lg text-left font-Kim400">비밀번호</div>
          <input
            className="w-[265px] h-[43px] border-[2px] p-2"
            placeholder="password"
            onChange={pwdOnChange}
          />
        </div>

        <div className="mt-10 text-center">
          <button
            className="w-[265px] px-8 py-3 tracking-wider font-bold text-white bg-secondary-color hover:bg-secondary-color-bold"
            onClick={loginBtn}
          >
            로그인하기
          </button>
        </div>

        <div className="mt-3">
          <span className="font-Kim500">아직 계정이 없나요?</span>
          <button
            className="mx-2 text-main-color font-Kim700 hover:underline"
            onClick={goJoinBtn}
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
