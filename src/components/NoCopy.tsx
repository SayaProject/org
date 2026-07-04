import { useEffect } from "react";

/**
 * Disables right-click, text selection copy, and common DevTools / view-source shortcuts.
 * Note: This is a deterrent only. Anyone with browser dev tools can still inspect a site.
 */
const NoCopy = () => {
  useEffect(() => {
    const prevent = (e: Event) => e.preventDefault();

    const handleKey = (e: KeyboardEvent) => {
      const k = e.key.toLowerCase();
      // Block: F12, Ctrl/Cmd+U (view source), Ctrl/Cmd+S (save),
      // Ctrl/Cmd+Shift+I/J/C (devtools), Ctrl/Cmd+P (print),
      // Ctrl/Cmd+C (copy), Ctrl/Cmd+A (select all)
      if (
        e.key === "F12" ||
        ((e.ctrlKey || e.metaKey) && ["u", "s", "p", "c", "a"].includes(k)) ||
        ((e.ctrlKey || e.metaKey) && e.shiftKey && ["i", "j", "c"].includes(k))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", prevent);
    document.addEventListener("copy", prevent);
    document.addEventListener("cut", prevent);
    document.addEventListener("selectstart", prevent);
    document.addEventListener("dragstart", prevent);
    document.addEventListener("keydown", handleKey);

    // Disable text selection visually
    document.body.style.userSelect = "none";
    (document.body.style as unknown as { webkitUserSelect: string }).webkitUserSelect = "none";

    return () => {
      document.removeEventListener("contextmenu", prevent);
      document.removeEventListener("copy", prevent);
      document.removeEventListener("cut", prevent);
      document.removeEventListener("selectstart", prevent);
      document.removeEventListener("dragstart", prevent);
      document.removeEventListener("keydown", handleKey);
      document.body.style.userSelect = "";
      (document.body.style as unknown as { webkitUserSelect: string }).webkitUserSelect = "";
    };
  }, []);

  return null;
};

export default NoCopy;
