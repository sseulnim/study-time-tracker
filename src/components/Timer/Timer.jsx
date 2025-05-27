import React from 'react';
import { Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';
import { formatTime } from '../../utils/timeUtils';

const Timer = ({ selectedSubject, time, isRunning, startTimer, pauseTimer, resetTimer, saveStudyTime }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-200">타이머</h3>
      {selectedSubject ? (
        <>
          <p className="text-lg mb-2 text-gray-600 dark:text-gray-300">
            현재 과목: <span className="font-bold text-indigo-600 dark:text-indigo-400">{selectedSubject}</span>
          </p>
          <div className="text-5xl font-mono font-bold text-center my-6 text-gray-800 dark:text-white">
            {formatTime(time)}
          </div>
          <div className="flex gap-2 justify-center mb-4">
            {!isRunning ? (
              <button
                onClick={startTimer}
                className="px-6 py-3 bg-green-600 dark:bg-green-500 text-white rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                시작
              </button>
            ) : (
              <button
                onClick={pauseTimer}
                className="px-6 py-3 bg-yellow-600 dark:bg-yellow-500 text-white rounded-lg hover:bg-yellow-700 dark:hover:bg-yellow-600 transition-colors flex items-center gap-2"
              >
                <Pause className="w-5 h-5" />
                일시정지
              </button>
            )}
            <button
              onClick={resetTimer}
              className="px-6 py-3 bg-gray-600 dark:bg-gray-500 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              초기화
            </button>
            <button
              onClick={saveStudyTime}
              disabled={time === 0}
              className="px-6 py-3 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <CheckCircle className="w-5 h-5" />
              저장
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 my-8">과목을 선택해주세요</p>
      )}
    </div>
  );
};

export default Timer;