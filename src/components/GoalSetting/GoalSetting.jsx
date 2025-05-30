import React from 'react';
import { Bell } from 'lucide-react';

const GoalSetting = ({ targetHours, setTargetHours, targetMinutes, setTargetMinutes, alarmEnabled, setAlarmEnabled }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">목표 시간 설정</h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label className="text-gray-600 dark:text-gray-300 w-16">시간:</label>
          <input
            type="number"
            min="0"
            max="23"
            value={targetHours}
            onChange={(e) => setTargetHours(parseInt(e.target.value) || 0)}
            className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span className="text-gray-600 dark:text-gray-300">시간</span>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-gray-600 dark:text-gray-300 w-16">분:</label>
          <input
            type="number"
            min="0"
            max="59"
            value={targetMinutes}
            onChange={(e) => setTargetMinutes(parseInt(e.target.value) || 0)}
            className="w-20 px-3 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <span className="text-gray-600 dark:text-gray-300">분</span>
        </div>
        <div className="flex items-center gap-3 mt-6">
          <input
            type="checkbox"
            id="alarmToggle"
            checked={alarmEnabled}
            onChange={(e) => setAlarmEnabled(e.target.checked)}
            className="w-5 h-5 text-purple-600 dark:text-purple-400 focus:ring-purple-500 dark:focus:ring-purple-400 rounded"
          />
          <label htmlFor="alarmToggle" className="flex items-center gap-2 text-gray-700 dark:text-gray-200 cursor-pointer">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            목표 도달 시 알람
          </label>
        </div>
      </div>
    </div>
  );
};

export default GoalSetting;