"use client";
import Link from "next/link";
import "./style.css";
import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

export const Header = ({ className }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const path = usePathname();
  const isHomePage = path === "/" || path.startsWith("/#");
  return (
    <div className="sticky">
      <div className={`header ${className}`}>
        <div className="navbar">
          <Link href={isHomePage ? "#home" : "/"}>
            <div
              className={`text-wrapper ${
                isHomePage && activeSection == "home" ? "xl:text-[#4291e9]" : ""
              }`}
            >
              Home
            </div>
          </Link>

          <Link href={isHomePage ? "#projects" : "/"}>
            <div
              className={`text-wrapper ${
                isHomePage && activeSection == "projects"
                  ? "xl:text-[#4291e9]"
                  : ""
              }`}
            >
              Projects
            </div>
          </Link>

          <Link href={isHomePage ? "#experience" : "/"}>
            <div
              className={`text-wrapper ${
                isHomePage && activeSection == "experience"
                  ? "xl:text-[#4291e9]"
                  : ""
              }`}
            >
              Experience
            </div>
          </Link>

          <Link href={isHomePage ? "#contact" : "/"}>
            <div
              className={`text-wrapper ${
                isHomePage && activeSection == "contact"
                  ? "xl:text-[#4291e9]"
                  : ""
              }`}
            >
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
