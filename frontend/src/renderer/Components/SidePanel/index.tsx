import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ActionControls from './ActionControls';
import { Note, setNotes, setActiveNote } from '../../store/notesSlice';
import { AppState } from '../../store';

function SidePanel() {
  const notes = useSelector((state: AppState) => state.notes.notes);
  const activeNote = useSelector((state: AppState) => state.notes.activeNote);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const req = await fetch('http://localhost:3001/notes/user');
      const res = (await req.json()) as Note[];

      if (res) {
        dispatch(setNotes(res));
      }
    })();
  }, [dispatch]);

  const handleNoteClick = (noteId: string) => {
    dispatch(setActiveNote(notes.find((note) => note.id === noteId) || null));
  };

  return (
    <div className="px-2 select-none h-svh bg-slate-700 w-[250px]">
      <div className="flex justify-between items-center pb-2 drop-shadow-2xl">
        <h2 className="px-4 text-sm font-bold">Notes</h2>
        <ActionControls />
      </div>
      <ul className="overflow-scroll h-[calc(100%-80px)] scroller">
        {notes.map((note) => (
          <li
            key={note.id}
            className="border-b-1 border-slate-500 pb-2 pt-1 last:border-0"
          >
            <div
              className={`py-2 px-4 text-sm rounded-xl hover:cursor-pointer hover:bg-slate-500 ${activeNote && activeNote.id === note.id && 'bg-slate-600'} `}
              role="button"
              onClick={() => handleNoteClick(note.id)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleNoteClick(note.id);
              }}
              tabIndex={0}
            >
              <h3 className="font-semibold mb-1">
                {note.note.blocks[0].data.text.length > 10
                  ? `${note.note.blocks[0].data.text.substring(0, 20)}...`
                  : note.note.blocks[0].data.text}
              </h3>
              <div className="flex gap-2">
                <div className="">{note.createdAt}</div>
                <div className="text-gray-400">
                  {note.note.blocks[1] &&
                    `${note.note.blocks[1].data.text.substring(0, 10)}...`}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidePanel;
