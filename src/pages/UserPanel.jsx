import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import {
  User,
  Calendar,
  PackageCheck,
  MessageSquare,
  LogOut,
  Edit2,
  Save,
  X,
  Trash2,
} from "lucide-react";

export default function UserPanel() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [tab, setTab] = useState("profile");

  const [appointments, setAppointments] = useState([
    { id: 1, date: "1402/06/20", time: "10:00", status: "تایید شده" },
    { id: 2, date: "1402/07/05", time: "14:30", status: "در انتظار تایید" },
  ]);
  const [orders, setOrders] = useState([
    { id: 101, type: "پروتز دست", date: "1402/05/15", status: "تحویل داده شده" },
    { id: 102, type: "ارتوز پا", date: "1402/06/10", status: "در حال ساخت" },
  ]);
  const [messages, setMessages] = useState([
    { id: 1, from: "کلینیک", content: "نوبت شما برای 20 شهریور تایید شد." },
    { id: 2, from: "پشتیبانی", content: "لطفا اطلاعات خود را به‌روزرسانی کنید." },
  ]);

  const [editingProfile, setEditingProfile] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const handleLogout = () => {
    setUser(null);
    navigate("/auth");
  };

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    setUser({ ...user, ...profileData });
    setEditingProfile(false);
    alert("اطلاعات پروفایل با موفقیت به‌روزرسانی شد.");
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  const statusColors = {
    "تایید شده": "bg-green-100 text-green-800",
    "در انتظار تایید": "bg-yellow-100 text-yellow-800",
    "لغو شده": "bg-red-100 text-red-800",
    "تحویل داده شده": "bg-green-100 text-green-800",
    "در حال ساخت": "bg-yellow-100 text-yellow-800",
  };

  const tabs = [
    { key: "profile", label: "پروفایل", icon: <User size={18} /> },
    { key: "appointments", label: "نوبت‌ها", icon: <Calendar size={18} /> },
    { key: "orders", label: "سفارشات", icon: <PackageCheck size={18} /> },
    { key: "messages", label: "پیام‌ها", icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 mt-20" dir="rtl">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">
          پنل کاربری کلینیک پروتز و ارتوز
        </h1>

        {/* تب‌ها */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full shadow transition cursor-pointer ${
                tab === t.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-blue-200"
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* پروفایل */}
        {tab === "profile" && (
          <div className="max-w-xl mx-auto space-y-4 p-6 bg-blue-50 rounded-xl shadow">
            {!editingProfile ? (
              <>
                <p><strong>نام:</strong> {profileData.name}</p>
                <p><strong>ایمیل:</strong> {profileData.email}</p>
                <p><strong>شماره تماس:</strong> {profileData.phone || "وارد نشده"}</p>
                <p><strong>آدرس:</strong> {profileData.address || "وارد نشده"}</p>
                <button
                  onClick={() => setEditingProfile(true)}
                  className="bg-blue-600 text-white px-4 py-2 mt-4 rounded flex items-center gap-2 hover:bg-blue-700 cursor-pointer"
                >
                  <Edit2 size={16} />
                  ویرایش اطلاعات
                </button>
              </>
            ) : (
              <div className="space-y-4">
                <input name="name" value={profileData.name} onChange={handleProfileChange}
                  className="w-full border rounded px-3 py-2" placeholder="نام" />
                <input name="email" value={profileData.email} onChange={handleProfileChange}
                  className="w-full border rounded px-3 py-2" placeholder="ایمیل" />
                <input name="phone" value={profileData.phone} onChange={handleProfileChange}
                  className="w-full border rounded px-3 py-2" placeholder="شماره تماس" />
                <input name="address" value={profileData.address} onChange={handleProfileChange}
                  className="w-full border rounded px-3 py-2" placeholder="آدرس" />
                <div className="flex gap-4 justify-center">
                  <button onClick={saveProfile} className="bg-green-600 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-green-700 cursor-pointer">
                    <Save size={16} /> ذخیره
                  </button>
                  <button onClick={() => setEditingProfile(false)} className="bg-gray-500 text-white px-5 py-2 rounded flex items-center gap-2 hover:bg-gray-600 cursor-pointer">
                    <X size={16} /> انصراف
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* نوبت‌ها */}
        {tab === "appointments" && (
          <div className="overflow-x-auto">
            {appointments.length === 0 ? (
              <p className="text-center text-gray-500">نوبتی ثبت نشده است.</p>
            ) : (
              <table className="w-full table-auto text-right border rounded-xl overflow-hidden">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="p-3">تاریخ</th>
                    <th className="p-3">ساعت</th>
                    <th className="p-3">وضعیت</th>
                    <th className="p-3">اقدام</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((app) => (
                    <tr key={app.id} className="border-b hover:bg-blue-50">
                      <td className="p-3">{app.date}</td>
                      <td className="p-3">{app.time}</td>
                      <td className={`p-3 font-bold text-center ${statusColors[app.status]}`}>
                        {app.status}
                      </td>
                      <td className="p-3 text-center">
                        <button onClick={() => setAppointments((prev) => prev.filter((a) => a.id !== app.id))}
                          className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-red-600 mx-auto cursor-pointer">
                          <Trash2 size={16} /> لغو
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* سفارشات */}
        {tab === "orders" && (
          <div className="overflow-x-auto">
            {orders.length === 0 ? (
              <p className="text-center text-gray-500">سفارشی ثبت نشده است.</p>
            ) : (
              <table className="w-full table-auto text-right border rounded-xl overflow-hidden">
                <thead className="bg-blue-100 text-blue-800">
                  <tr>
                    <th className="p-3">نوع</th>
                    <th className="p-3">تاریخ</th>
                    <th className="p-3">وضعیت</th>
                    <th className="p-3">اقدام</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-blue-50">
                      <td className="p-3">{order.type}</td>
                      <td className="p-3">{order.date}</td>
                      <td className={`p-3 font-bold text-center ${statusColors[order.status]}`}>
                        {order.status}
                      </td>
                      <td className="p-3 text-center">
                        <button onClick={() => setOrders((prev) => prev.filter((o) => o.id !== order.id))}
                          className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-red-600 mx-auto cursor-pointer">
                          <Trash2 size={16} /> لغو
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* پیام‌ها */}
        {tab === "messages" && (
          <div className="max-w-xl mx-auto space-y-4">
            {messages.length === 0 ? (
              <p className="text-center text-gray-500">پیامی موجود نیست.</p>
            ) : (
              messages.map((msg) => (
                <div key={msg.id} className="bg-blue-50 p-4 rounded-xl shadow hover:shadow-md">
                  <p className="font-bold text-blue-700">{msg.from}</p>
                  <p className="text-gray-800">{msg.content}</p>
                </div>
              ))
            )}
          </div>
        )}

        <div className="text-center mt-10">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-8 py-3 rounded-full flex items-center gap-2 justify-center mx-auto hover:bg-red-700 font-semibold cursor-pointer"
          >
            <LogOut size={18} />
            خروج از حساب کاربری
          </button>
        </div>
      </div>
    </div>
  );
}
