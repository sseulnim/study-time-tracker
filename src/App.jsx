import React, { useState, useEffect } from 'react';
import { Book, Calendar, Moon, Sun } from 'lucide-react';
import SubjectManager from './components/SubjectManager/SubjectManager';
import Timer from './components/Timer/Timer';
import GoalSetting from './components/GoalSetting/GoalSetting';
import StudyStatus from './components/StudyStatus/StudyStatus';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTimer } from './hooks/useTimer';
import { requestNotificationPermission } from './utils/alarmUtils';

function App() {
  const [subjects, setSubjects] = useLocalStorage('subjects', []);
  const [newSubject, setNewSubject] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [targetHours, setTargetHours] = useState(1);
  const [targetMinutes, setTargetMinutes] = useState(0);
  const [todayStudy, setTodayStudy] = useState({});
  const [alarmEnabled, setAlarmEnabled] = useState(true);
  const [storageUsage, setStorageUsage] = useState(0);

  // 다크 모드 설정
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const { time, isRunning, startTimer, pauseTimer, resetTimer, setTime } = useTimer(
    targetHours,
    targetMinutes,
    alarmEnabled,
    selectedSubject
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  // 스토리지 사용량 체크
  const checkStorageUsage = () => {
    let totalSize = 0;
    for (let key in localStorage) {
      if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
        totalSize += localStorage[key].length + key.length;
      }
    }
    setStorageUsage((totalSize / 1024).toFixed(2));
  };

  // 날짜별 데이터 관리
  useEffect(() => {
    const savedTodayStudy = localStorage.getItem('todayStudy');
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('studyDate');

    if (savedDate === today && savedTodayStudy) {
      setTodayStudy(JSON.parse(savedTodayStudy));
    } else {
      localStorage.setItem('studyDate', today);
      setTodayStudy({});
    }

    requestNotificationPermission();
    checkStorageUsage();
  }, []);

  // 오늘의 공부 데이터 저장
  useEffect(() => {
    localStorage.setItem('todayStudy', JSON.stringify(todayStudy));
    checkStorageUsage();
  }, [todayStudy]);

  const addSubject = () => {
    if (newSubject.trim() && !subjects.includes(newSubject)) {
      setSubjects([...subjects, newSubject]);
      setNewSubject('');
    }
  };

  const deleteSubject = (subject) => {
    setSubjects(subjects.filter(s => s !== subject));
    const newTodayStudy = { ...todayStudy };
    delete newTodayStudy[subject];
    setTodayStudy(newTodayStudy);
    if (selectedSubject === subject) {
      setSelectedSubject('');
      setTime(0);
      pauseTimer();
    }
  };

  const saveStudyTime = () => {
    if (selectedSubject && time > 0) {
      const currentTime = todayStudy[selectedSubject] || 0;
      setTodayStudy({
        ...todayStudy,
        [selectedSubject]: currentTime + time
      });
      resetTimer();
    }
  };

  const exportData = () => {
    const allData = {
      subjects,
      todayStudy,
      exportDate: new Date().toISOString(),
    };

    const dataStr = JSON.stringify(allData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = `study-data-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Book className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Study Tracker</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="다크모드 토글"
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span>{new Date().toLocaleDateString('ko-KR')}</span>
              </div>
            </div>
          </div>

          <SubjectManager
            subjects={subjects}
            newSubject={newSubject}
            setNewSubject={setNewSubject}
            addSubject={addSubject}
            deleteSubject={deleteSubject}
            selectedSubject={selectedSubject}
            setSelectedSubject={setSelectedSubject}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Timer
              selectedSubject={selectedSubject}
              time={time}
              isRunning={isRunning}
              startTimer={startTimer}
              pauseTimer={pauseTimer}
              resetTimer={resetTimer}
              saveStudyTime={saveStudyTime}
            />

            <GoalSetting
              targetHours={targetHours}
              setTargetHours={setTargetHours}
              targetMinutes={targetMinutes}
              setTargetMinutes={setTargetMinutes}
              alarmEnabled={alarmEnabled}
              setAlarmEnabled={setAlarmEnabled}
            />
          </div>

          <StudyStatus
            todayStudy={todayStudy}
            storageUsage={storageUsage}
            exportData={exportData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;