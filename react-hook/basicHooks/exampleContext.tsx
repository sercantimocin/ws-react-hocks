import {createContext, ReactElement, useState} from "react";

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: (settings) => ({
        theme: settings.theme === themes.dark
            ? themes.light
            : themes.dark,
    })
});

export function ExampleContext(): ReactElement {


    let defaultSettings = {
        theme: themes.dark,
        toggleTheme: (settings) => ({
            theme: settings.theme === themes.dark
                ? themes.light
                : themes.dark,
        }),
    };

    const [settings, setSettings] = useState(defaultSettings);

    return (
        <ThemeContext.Provider value={settings}>
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

