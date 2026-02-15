"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";

// Define types for menu items
interface DropdownItem {
  href: string;
  label: string;
}

interface MenuItem {
  href?: string;
  label: string;
  dropdown?: DropdownItem[];
}

export const MENU_ITEMS: MenuItem[] = [
  { href: "/mitglied", label: "Mitglied werden" },
  { href: "/kontakt", label: "Kontakt" },
  {
    label: "Rechtliches",
    dropdown: [
      { href: "/rechtliches/impressum", label: "Impressum" },
      { href: "/rechtliches/datenschutz", label: "Datenschutz" },
    ],
  },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState<boolean | null>(null);

  // Initialize theme on mount
  useEffect(() => {
    const initializeTheme = () => {
      const saved = localStorage.getItem("darkMode");
      
      if (saved !== null) {
        // Use saved preference
        const isDark = saved === "true";
        setDarkMode(isDark);
        applyTheme(isDark);
      } else {
        // Use system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(prefersDark);
        applyTheme(prefersDark);
      }
    };

    initializeTheme();

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("darkMode");
      // Only auto-update if user hasn't set a preference
      if (saved === null) {
        setDarkMode(e.matches);
        applyTheme(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Apply theme to document
  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    applyTheme(newMode);
    localStorage.setItem("darkMode", String(newMode));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} />
        
        <ul className={styles.menu}>
          {MENU_ITEMS.map((item: MenuItem, index: number) => {
            const isParentActive =
              item.dropdown &&
              item.dropdown.some((sub) => pathname.startsWith(sub.href));
            const isNormalActive = item.href && pathname.startsWith(item.href);

            return (
              <li
                key={index}
                className={`${styles.menuItem} ${
                  isParentActive || isNormalActive ? styles.active : ""
                }`}
              >
                {item.dropdown ? (
                  <>
                    <span className={styles.dropdownTrigger}>
                      {item.label}
                    </span>
                    <ul className={styles.dropdown}>
                      {item.dropdown.map((sub: DropdownItem) => {
                        const isActive = pathname === sub.href;
                        return (
                          <li
                            key={sub.href}
                            className={isActive ? styles.activeDropdown : ""}
                          >
                            <Link href={sub.href}>{sub.label}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </>
                ) : (
                  <Link href={item.href!}>{item.label}</Link>
                )}
              </li>
            );
          })}
        </ul>

        {darkMode !== null && (
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            <span className="material-symbols-outlined">
              {darkMode ? "light_mode" : "dark_mode"}
            </span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;