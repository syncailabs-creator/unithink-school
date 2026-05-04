import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setIsDark(saved === 'dark');
    } else {
      // Default to dark as per brand guidelines
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full glass hover:bg-white/10 transition-colors text-sm font-medium"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <>
          <Moon className="w-4 h-4" />
          <span>Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-4 h-4" />
          <span>Light</span>
        </>
      )}
    </button>
  );
}
