import React from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Header.module.css";
import { HiMoon, HiSun } from "react-icons/hi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button onClick={toggleDarkMode} className={styles.toggle}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <ul className={styles.filters}>
        {filters.map((value, index) => (
          //얘는 왜 중괄호가 아니라 소괄호지..?
          <li key={index}>
            <button
              className={`${styles.filter} ${
                filter === value && styles.selected
              }`}
              //이런식으로 식별자만 아니라면, 무의미한 값을 넣어도 무리없이 돌아가는구나.
              //className에는 다중으로 입력할 수 있구나.
              onClick={() => onFilterChange(value)}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
