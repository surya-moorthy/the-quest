// src/components/Activity.tsx
import React from "react";

export interface ActivityProps {
  dsa: number;
  money: number;
  workout: boolean;
}

/**
 * Activity shows key stats for your daily quest in a website-themed card.
 */
export const Activity: React.FC<ActivityProps> = ({
  dsa,
  money,
  workout,
}) => {
  return (
    <div className="my-4 rounded-lg border border-gray-700 p-6 shadow-sm">
      <h3 className="mb-4 text-2xl font-bold text-primary">Daily Summary</h3>
      <ul className="space-y-2">
        <li className="text-muted-foreground">
          <span className="font-semibold">DSA Problems Solved:</span> {dsa}
        </li>
        <li className="text-muted-foreground">
          <span className="font-semibold">Income Earned:</span> ₹{money}
        </li>
        <li className="text-muted-foreground">
          <span className="font-semibold">Workout Completed:</span> {workout ? "Yes" : "No"}
        </li>
      </ul>
    </div>
  );
};
