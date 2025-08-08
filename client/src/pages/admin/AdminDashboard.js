import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../../components/AdminSidebar';
import UsersTab from '../../components/admin/UsersTab'; // Changed from components/admin to pages/admin
import TasksTab from '../../components/admin/TasksTab';
import ProductsTab from '../../components/admin/ProductsTab';
import WeatherTab from '../../components/admin/WeatherTab';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('users');
  const [adminInfo, setAdminInfo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('adminInfo'));
    if (!admin || admin.role !== 'admin') {
      navigate('/admin');
    } else {
      setAdminInfo(admin);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminInfo');
    navigate('/admin');
  };

  if (!adminInfo) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex h-screen bg-green-50">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} handleLogout={handleLogout} />
      
      <div className="flex-1 overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-800">
            {activeTab === 'users' && 'User Management'}
            {activeTab === 'tasks' && 'Task Management'}
            {activeTab === 'products' && 'Product Management'}
            {activeTab === 'weather' && 'Weather Insights'}
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-green-700">Welcome, {adminInfo.name}</span>
            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-800 font-bold">
              {adminInfo.name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          {activeTab === 'users' && <UsersTab />}
          {activeTab === 'tasks' && <TasksTab />}
          {activeTab === 'products' && <ProductsTab />}
          {activeTab === 'weather' && <WeatherTab />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;