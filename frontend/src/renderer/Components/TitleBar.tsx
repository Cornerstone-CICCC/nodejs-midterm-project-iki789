import React from 'react';

function TitleBar() {
  return (
    <div
      /* @ts-ignore */
      style={{ appRegion: 'drag' }}
      className="bg-slate-700 text-center text-sm h-8 flex items-center justify-center font-bold rounded-tl-xl rounded-tr-xl"
    >
      Electro Notes
    </div>
  );
}

export default TitleBar;
