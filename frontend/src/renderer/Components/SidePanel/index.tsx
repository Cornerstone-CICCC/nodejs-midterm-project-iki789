import React from 'react';
import ActionControls from './ActionControls';

const Notes = [
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
  {
    title: 'Japan trip',
    createdOn: '2025-04-21',
    peekText: 'Overview',
  },
];

function SidePanel() {
  return (
    <div className="px-2 select-none h-svh bg-slate-700 w-[250px]">
      <div className="flex justify-between items-center pb-2 drop-shadow-2xl">
        <h2 className="px-4 text-sm font-bold">Notes</h2>
        <ActionControls />
      </div>
      <ul className="overflow-scroll h-[calc(100%-80px)] scroller">
        {Notes.map((note) => (
          <li
            key={note.peekText}
            className="border-b-1 border-slate-500 pb-2 pt-1 last:border-0"
          >
            <div
              className="py-2 px-4 text-sm rounded-xl hover:cursor-pointer hover:bg-slate-500"
              role="button"
              onClick={() => console.log('')}
              onKeyDown={() => console.log('')}
              tabIndex={0}
            >
              <h3 className="font-bold">Japan Trip</h3>
              <div className="flex gap-2">
                <div className="">2025-04-21</div>
                <div className="">Overview</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidePanel;
