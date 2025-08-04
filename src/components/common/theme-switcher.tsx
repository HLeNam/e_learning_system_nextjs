"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ThemeSwitcherProps {
  size?: number;
  lightBg?: string;
  darkBg?: string;
  paddingX?: number;
  paddingY?: number;
}

export default function ThemeSwitcher({
  size = 48,
  lightBg = "bg-white",
  darkBg = "bg-gray-800",
  paddingX = 8,
  paddingY = 8,
}: ThemeSwitcherProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const modes = [
    { value: "light", icon: Sun, label: "Light" },
    { value: "dark", icon: Moon, label: "Dark" },
    { value: "system", icon: Monitor, label: "System" },
  ];

  const getIndicatorPosition = () => {
    const index = modes.findIndex((m) => m.value === theme);
    return paddingX + index * (size + 4);
  };

  const iconSize = Math.floor(size * 0.45);

  if (!isMounted) return null;

  return (
    <div
      className={`relative inline-flex rounded-full transition-all duration-300 ${
        resolvedTheme === "dark"
          ? `${darkBg} border border-zinc-700`
          : `${lightBg}`
      }`}
      style={{
        paddingLeft: paddingX,
        paddingRight: paddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
        boxShadow:
          resolvedTheme === "dark"
            ? "inset 0 3px 6px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.5)"
            : "inset 0 3px 6px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.1)",
      }}
    >
      {/* Indicator */}
      <div
        className={`absolute rounded-full transition-all duration-300 ease-out ${
          resolvedTheme === "dark" ? "bg-black" : "bg-white"
        }`}
        style={{
          height: size,
          width: size,
          top: paddingY,
          left: getIndicatorPosition(),
          boxShadow:
            resolvedTheme === "dark"
              ? "0 3px 8px rgba(0,0,0,0.4)"
              : "0 3px 8px rgba(0,0,0,0.15)",
        }}
      />

      {/* Buttons */}
      <div className="relative flex gap-1">
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = theme === mode.value;

          const textColor = isActive
            ? resolvedTheme === "dark"
              ? "text-white"
              : "text-black"
            : resolvedTheme === "dark"
              ? "text-gray-400 hover:text-gray-200"
              : "text-gray-500 hover:text-gray-700";

          return (
            <button
              key={mode.value}
              onClick={() =>
                setTheme(mode.value as "light" | "dark" | "system")
              }
              className={`group relative z-10 flex items-center justify-center overflow-hidden rounded-full transition-all duration-300 ${textColor}`}
              style={{
                height: size,
                width: size,
              }}
            >
              <div className="relative">
                <Icon
                  size={iconSize}
                  className={`transition-all duration-500 ${
                    isActive
                      ? mode.value === "light"
                        ? "sunrise scale-110 drop-shadow-lg"
                        : mode.value === "dark"
                          ? "moonrise scale-110"
                          : "scale-110"
                      : "group-hover:scale-105"
                  } ${
                    isActive && mode.value === "light"
                      ? "drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] filter"
                      : isActive && mode.value === "dark"
                        ? "drop-shadow-[0_0_8px_rgba(147,197,253,0.8)] filter"
                        : ""
                  }`}
                />

                {/* Glow effect for dark */}
                {mode.value === "dark" && isActive && (
                  <div className="pointer-events-none absolute inset-0">
                    <div
                      className="absolute top-1/2 left-1/2"
                      style={{
                        height: size * 0.8,
                        width: size * 0.8,
                        transform: "translate(-50%, -50%)",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(96, 165, 250, 0.2)",
                        filter: "blur(8px)",
                        animation: "pulse 2s infinite",
                      }}
                    />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
