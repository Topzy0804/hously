import React from 'react';
import Sidebar from '../component/sidebar/sidebar';
import { DollarSign, Users, Home, Zap, LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  Icon: LucideIcon;
  colorClass: string;
}

interface SalesSourceProps {
  label: string;
  percentage: number;
  color: string;
}

const AdminDashboard: React.FC = () => {
  const stats: StatCardProps[] = [
    { label: 'Total Revenue', value: '$ 45,890', Icon: DollarSign, colorClass: 'text-green-500 bg-green-50' },
    { label: 'Total Visitor', value: '2,456', Icon: Users, colorClass: 'text-green-500 bg-green-50' },
    { label: 'Total Properties', value: '358', Icon: Home, colorClass: 'text-green-500 bg-green-50' },
    { label: 'Properties for Sell', value: '243', Icon: Zap, colorClass: 'text-green-500 bg-green-50' },
    { label: 'Properties for Rent', value: '115', Icon: Home, colorClass: 'text-green-500 bg-green-50' },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <Sidebar />
      
      <main className="flex-1 p-4 lg:p-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-xl font-bold text-slate-800">Hello, Calvin</h1>
            <p className="text-slate-400 text-sm">Welcome back!</p>
          </div>
          <div className="flex items-center gap-4">
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex justify-between items-start">
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
                <h3 className="text-xl font-black text-slate-800">{stat.value}</h3>
              </div>
              <div className={`p-2 rounded-lg ${stat.colorClass}`}>
                <stat.Icon size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-slate-800">Revenue Analytics</h2>
              <select className="text-xs border-slate-200 rounded p-1 outline-none">
                <option>Yearly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="h-72 w-full bg-slate-50 rounded-lg border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400 italic">
              (Integrate Chart.js or Recharts here)
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-slate-800">Sales Data</h2>
              <select className="text-xs border-slate-200 rounded p-1 outline-none">
                <option>Yearly</option>
              </select>
            </div>
            
            <div className="space-y-6">
              <SalesSource label="Via Website" percentage={50} color="bg-green-500" />
              <SalesSource label="Via Team Member" percentage={12} color="bg-green-500" />
              <SalesSource label="Via Agents" percentage={6} color="bg-green-500" />
              <SalesSource label="Via Social Media" percentage={15} color="bg-green-500" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SalesSource: React.FC<SalesSourceProps> = ({ label, percentage, color }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm text-slate-500">{label}</span>
      <span className="text-sm font-bold text-slate-800">{percentage}%</span>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-1.5">
      <div 
        className={`${color} h-1.5 rounded-full transition-all duration-500`} 
        style={{ width: `${percentage}%` }}
      />
    </div>
  </div>
);

export default AdminDashboard;
