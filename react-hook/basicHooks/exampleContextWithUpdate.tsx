import {createContext, ReactElement, useState} from 'react';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const defaultSettings = {
  theme: themes.dark,
  toggleTheme: () => {},
};

function changeTheme(s: { toggleTheme: () => void; theme: { background: string; foreground: string } }) {
  if (s.theme === themes.dark) {
    s.theme = themes.light;
  } else {
    s.theme = themes.dark;
  }

  return {theme: s.theme, toggleTheme: this};
}

const ThemeContext = createContext(defaultSettings);

export function ExampleContextWithUpdate(): ReactElement {
  const [settings, setSettings] = useState(defaultSettings);
  const updateTheme = () => setSettings((s)=>changeTheme(s));

  return (
    <ThemeContext.Provider value={{theme: settings.theme, toggleTheme: updateTheme}}>
      <Content/>
    </ThemeContext.Provider>
  );
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton/>
    </div>
  );
}

function ThemeTogglerButton() {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button
          onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
                    Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

