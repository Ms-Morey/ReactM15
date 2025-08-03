import React from 'react';

const T27_StudentGrades = () => {
  const students = [
    { name: 'Ramesh', grade: 85 },
    { name: 'Suresh', grade: 92 },
    { name: 'Ganesh', grade: 78 },
    { name: 'Vaishnavi', grade: 95 },
    { name: 'Rajesh', grade: 88 }
  ];

  return (
    <div className="p-4 bg-gray-100">
      <h1 className="text-xl font-bold text-center mb-4">Student Grades</h1>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} className="border-t">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.grade}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default T27_StudentGrades;
