import React from 'react';

function TitleBar() {
  return (
    <div
      /* @ts-ignore */
      style={{ appRegion: 'drag' }}
      className="bg-slate-100 text-slate-700 text-center text-sm h-8 flex items-center justify-center font-bold dark:text-white dark:bg-slate-700"
    >
      Electro Notes
    </div>
  );
}

export default TitleBar;
