import React, { createContext, useContext, useReducer } from 'react';

// Theme Context
const ThemeContext = createContext();

// Theme Reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        isDark: !state.isDark
      };
    case 'SET_THEME':
      return {
        ...state,
        isDark: action.payload
      };
    default:
      return state;
  }
};

// Theme Provider
const ThemeProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, { isDark: false });

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  const setTheme = (isDark) => {
    dispatch({ type: 'SET_THEME', payload: isDark });
  };

  const themeStyles = {
    background: theme.isDark ? 'bg-gray-900' : 'bg-gray-50',
    text: theme.isDark ? 'text-white' : 'text-gray-800',
    card: theme.isDark ? 'bg-gray-800' : 'bg-white',
    border: theme.isDark ? 'border-gray-700' : 'border-gray-200',
    button: theme.isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Theme Toggle Component
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm">🌞</span>
      <button
        onClick={toggleTheme}
        className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors"
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            theme.isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className="text-sm">🌙</span>
    </div>
  );
};

// Header Component
const Header = () => {
  const { themeStyles } = useTheme();

  return (
    <header className={`${themeStyles.card} shadow-md border-b ${themeStyles.border}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className={`text-2xl font-bold ${themeStyles.text}`}>Theme Manager</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};

// Content Component
const Content = () => {
  const { theme, themeStyles } = useTheme();

  return (
    <div className="container mx-auto px-6 py-8">
      <div className={`${themeStyles.card} rounded-lg shadow-md p-6 border ${themeStyles.border}`}>
        <h2 className={`text-xl font-bold mb-4 ${themeStyles.text}`}>
          Current Theme: {theme.isDark ? 'Dark' : 'Light'}
        </h2>
        
        <div className="space-y-4">
          <p className={themeStyles.text}>
            This is a sample content area that adapts to the current theme.
          </p>
          
          <div className={`p-4 rounded-md border ${themeStyles.border}`}>
            <h3 className={`font-semibold mb-2 ${themeStyles.text}`}>Sample Card</h3>
            <p className={`text-sm ${themeStyles.text} opacity-80`}>
              This card demonstrates how different elements respond to theme changes.
            </p>
          </div>
          
          <button className={`px-4 py-2 rounded-md text-white transition-colors ${themeStyles.button}`}>
            Sample Button
          </button>
        </div>
      </div>
    </div>
  );
};

const T47_ThemeManagementWithContextReducer = () => {
  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-colors duration-300 ${useTheme().themeStyles.background}`}>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default T47_ThemeManagementWithContextReducer; 