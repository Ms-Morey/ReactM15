import { useState } from 'react';
import { themes } from '../Data';

const T25_DynamicTheme = () => {
  const [themeId, setThemeId] = useState('light');

  const currentTheme = themes.find(t => t.id === themeId);

  return (
    <div className={`${currentTheme.bg} ${currentTheme.text} p-4 min-h-screen`}>
      <h1 className="text-xl font-bold text-center mb-6">Dynamic Theme</h1>
      <div className="flex gap-4 justify-center mb-6">
        {themes.map(t => (
          <button
            key={t.id}
            onClick={() => setThemeId(t.id)}
            className={`px-3 py-2 rounded ${
              themeId === t.id ? `${t.button} text-white` : 'bg-gray-300'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className={`p-4 rounded border ${currentTheme.card} ${currentTheme.border}`}>
        <p>The current theme is: <strong>{currentTheme.name}</strong></p>
      </div>
    </div>
  );
};

export default T25_DynamicTheme;
