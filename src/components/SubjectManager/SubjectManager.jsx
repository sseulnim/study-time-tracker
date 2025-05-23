import React from 'react';
import { Plus, Trash2 } from 'lucide-react';

const SubjectManager = ({ subjects, newSubject, setNewSubject, addSubject, deleteSubject, selectedSubject, setSelectedSubject }) => {
  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">과목 관리</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newSubject}
          onChange={(e) => setNewSubject(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addSubject()}
          placeholder="새 과목 추가..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={addSubject}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          추가
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {subjects.map((subject) => (
          <div
            key={subject}
            className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
              selectedSubject === subject
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span
                onClick={() => setSelectedSubject(subject)}
                className="flex-1 font-medium text-gray-700"
              >
                {subject}
              </span>
              <button
                onClick={() => deleteSubject(subject)}
                className="p-1 text-red-500 hover:bg-red-50 rounded"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectManager;