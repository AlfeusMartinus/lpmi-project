import React from "react";
import logo from "../assets/logo_lpmi_sidebar.png";

const Sidebar = () => {
  return (
    <div className="w-1/3 bg-white p-8 flex flex-col items-center justify-center text-center shadow-lg">
        <img src={logo} alt="" className="w-32 mb-4"/>
        <h2 className="text-xl font-semibold mb-2 text-black">Lembaga Pelayanan Mahasiswa Indonesia Jatinangor</h2>
        <p className="text-gray-600 mb-6">Komunitas Pelayanan khusus mahasiswa Jatinangor, Kabupaten Sumedang dan sekitarnya</p>
        <button className="bg-blue-500 text-white px-4 py-2 w-3/4 rounded-lg hover:bg-blue-600 transition">Read more</button>
    </div>
  );
};

export default Sidebar;
