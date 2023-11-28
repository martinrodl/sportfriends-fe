import React from 'react';
import clsx from 'clsx';
import { twJoin } from 'tailwind-merge';

interface SportsInfoProps {
  sports: string[];
}

const SportsInfo = ({ sports }: SportsInfoProps) => {
  return (
    <div className="flex flex-wrap bg-accent6 rounded-full items-center px-4 py-1">
      {sports.map((sport, index) => {
        return (
          <div className="flex items-center gap-x-2">
            <div
              className={twJoin(
                'bg-main3 w-2 h-2 rounded-xl ml-2',
                clsx(index === 0 && 'md:hidden'),
              )}
            />

            <h3 className="text-main3">{sport}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default SportsInfo;
