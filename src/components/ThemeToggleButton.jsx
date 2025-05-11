export default function ThemeToggleButton({ isDark, toggleTheme }) {
    const styles = {
      padding: "10px 20px",
      backgroundColor: isDark ? "#f1f1f1" : "#222",
      color: isDark ? "#222" : "#f1f1f1",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    };
  return (
    <>
        <button style={styles} onClick={toggleTheme}>{isDark ? 'Light' : 'Dark'}</button>
    </>
  );
}
