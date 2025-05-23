import React from 'react';
import { formatTime } from '../../utils/timeUtils';
import { Download, Database } from 'lucide-react';

const StudyStatus = ({ todayStudy, storageUsage, exportData }) => {
  const getTotalStudyTime = () => {
    return Object.values(todayStudy).reduce((acc, time) => acc + time, 0);
  };

  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-700">오늘의 공부 현황</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={exportData}
            className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors flex items-center gap-1"
          >
            <Download className="w-4 h-4" />
            내보내기
          </button>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <Database className="w-4 h-4" />
            <span>{storageUsage} KB</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {Object.entries(todayStudy).map(([subject, seconds]) => (
          <div key={subject} className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
            <span className="font-medium text-gray-700">{subject}</span>
            <span className="text-green-600 font-mono">{formatTime(seconds)}</span>
          </div>
        ))}
        {Object.keys(todayStudy).length === 0 && (
          <p className="text-center text-gray-500">아직 공부 기록이 없습니다</p>
        )}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-700">총 공부 시간</span>
          <span className="text-2xl font-bold text-green-600 font-mono">
            {formatTime(getTotalStudyTime())}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StudyStatus;