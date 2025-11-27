import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

const data = [
  { name: 'Power BI', proficiency: 95, color: '#10c5ff' },
  { name: 'SQL', proficiency: 90, color: '#5effd7' },
  { name: 'Excel (Adv)', proficiency: 92, color: '#10c5ff' },
  { name: 'Python', proficiency: 80, color: '#5effd7' },
  { name: 'VBA', proficiency: 75, color: '#10c5ff' },
  { name: 'ETL', proficiency: 85, color: '#5effd7' },
];

const AnalyticsChart: React.FC = () => {
  return (
    <div className="w-full bg-brand-soft/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-semibold text-white">Core Competencies</h3>
        <p className="text-sm text-brand-muted">Relative proficiency levels</p>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
            <XAxis type="number" hide />
            <YAxis 
              dataKey="name" 
              type="category" 
              stroke="#98b4d6" 
              tick={{ fill: '#98b4d6', fontSize: 12, fontWeight: 500 }}
              width={80}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: '#030812', borderColor: '#10c5ff', color: '#fff', borderRadius: '8px' }}
              itemStyle={{ color: '#fff' }}
            />
            <Bar dataKey="proficiency" radius={[0, 4, 4, 0]} barSize={24}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;