"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}
interface NavBarProps {
  items: NavItem[];
  className?: string;
}
export function NavBar({
  items,
  className
}: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleClick = (item: NavItem) => {
    setActiveTab(item.name);
    const element = document.querySelector(item.url);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6", className)}>
      
    </div>;
}