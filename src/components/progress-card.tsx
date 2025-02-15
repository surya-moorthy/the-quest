import React from "react";

interface ProgressCardProps {
  title: string;
  goal: number;
  achieved: number;
  unit?: string;
}

export default function ProgressCard({ title, goal, achieved, unit = "" }: ProgressCardProps) {
  const progress = Math.min((achieved / goal) * 100, 100);
  
  return (
    <div className="w-full rounded-lg border bg-card p-6">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Progress</span>
          <span>{achieved}{unit} / {goal}{unit}</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
} 