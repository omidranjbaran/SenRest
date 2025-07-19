import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Auth() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = useState(true);

  // داده‌های فرم ورود
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // داده‌های فرم ثبت‌نام
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regPasswordConfirm, setRegPasswordConfirm] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!loginName.trim() || !loginPassword.trim()) {
      alert("نام کاربری و رمز عبور را وارد کنید.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (u) => u.name === loginName && u.password === loginPassword
    );

    if (user) {
      setUser({ name: user.name, email: user.email });
      navigate("/user"); // هدایت به پنل کاربری بعد از ورود
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است.");
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (
      !regName.trim() ||
      !regEmail.trim() ||
      !regPassword.trim() ||
      !regPasswordConfirm.trim()
    ) {
      alert("تمام فیلدها را پر کنید.");
      return;
    }

    if (regPassword !== regPasswordConfirm) {
      alert("رمز عبور و تکرار آن مطابقت ندارند.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some((u) => u.name === regName);

    if (userExists) {
      alert("این نام کاربری قبلا ثبت شده است. لطفا وارد شوید.");
      return;
    }

    users.push({ name: regName, email: regEmail, password: regPassword });
    localStorage.setItem("users", JSON.stringify(users));
    setUser({ name: regName, email: regEmail });
    alert("ثبت نام با موفقیت انجام شد.");
    navigate("/user"); // هدایت به پنل کاربری بعد از ثبت نام
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      {isLoginMode ? (
        <form
          onSubmit={handleLoginSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          dir="rtl"
        >
          <h2 className="text-2xl mb-4 text-center font-bold">ورود</h2>

          <label className="block mb-2 font-semibold">نام کاربری</label>
          <input
            type="text"
            value={loginName}
            onChange={(e) => setLoginName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="نام کاربری خود را وارد کنید"
            required
          />

          <label className="block mb-2 font-semibold">رمز عبور</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="رمز عبور"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            ورود
          </button>

          <p
            className="mt-4 text-center text-sm cursor-pointer text-blue-600 hover:underline"
            onClick={() => setIsLoginMode(false)}
          >
            حساب کاربری ندارید؟ ثبت نام کنید.
          </p>
        </form>
      ) : (
        <form
          onSubmit={handleRegisterSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
          dir="rtl"
        >
          <h2 className="text-2xl mb-4 text-center font-bold">ثبت نام</h2>

          <label className="block mb-2 font-semibold">نام کاربری</label>
          <input
            type="text"
            value={regName}
            onChange={(e) => setRegName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="نام کاربری خود را وارد کنید"
            required
          />

          <label className="block mb-2 font-semibold">ایمیل</label>
          <input
            type="email"
            value={regEmail}
            onChange={(e) => setRegEmail(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="ایمیل خود را وارد کنید"
            required
          />

          <label className="block mb-2 font-semibold">رمز عبور</label>
          <input
            type="password"
            value={regPassword}
            onChange={(e) => setRegPassword(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="رمز عبور"
            required
          />

          <label className="block mb-2 font-semibold">تکرار رمز عبور</label>
          <input
            type="password"
            value={regPasswordConfirm}
            onChange={(e) => setRegPasswordConfirm(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="رمز عبور را دوباره وارد کنید"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            ثبت نام
          </button>

          <p
            className="mt-4 text-center text-sm cursor-pointer text-green-600 hover:underline"
            onClick={() => setIsLoginMode(true)}
          >
            قبلا ثبت نام کرده‌اید؟ ورود
          </p>
        </form>
      )}
    </div>
  );
}
