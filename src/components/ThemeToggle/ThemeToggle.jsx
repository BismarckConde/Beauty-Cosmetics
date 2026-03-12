import { useContext } from "react"
import { ThemeContext } from "../../ThemeContext/ThemeContext"
import "./ThemeToggle.css"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button className={`theme-toggle-container ${theme}`} onClick={toggleTheme} aria-label="Cambiar tema">
            <div className="toggle-circle">
                <i className={theme === "light" ? "fas fa-sun" : "fas fa-moon"}></i>
            </div>
        </button>
    )
}

export default ThemeToggle