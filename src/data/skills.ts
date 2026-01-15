import type React from "react";
import { Cpu, Database, Layout, BrainCircuit } from "lucide-react";

// [Range]: Beginner (1–30%), Intermediate (31–70%), Expert (71–99%)

export type SkillLevel = "Beginner" | "Intermediate" | "Expert";

export type SkillItem = {
  name: string;
  level: SkillLevel;
  percent: number;
};

export type SkillCategory = {
  name: string;
  icon: React.ElementType;
  items: SkillItem[];
};

export const skills: SkillCategory[] = [
  
  {
    name: "Frontend",
    icon: Layout,
    items: [
      { name: "HTML", level: "Beginner", percent: 20 },
      { name: "CSS", level: "Intermediate", percent: 60 },
      { name: "JavaScript", level: "Intermediate", percent: 60 },
      { name: "React", level: "Expert", percent: 80 },
    ],
  },
  {
    name: "Backend",
    icon: Database,
    items: [
      { name: "Python", level: "Intermediate", percent: 60 },
      { name: "C++", level: "Beginner", percent: 30 },
      { name: "MySQL", level: "Expert", percent: 90 },
    ],
  },
];
