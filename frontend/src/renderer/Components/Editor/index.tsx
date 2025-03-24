import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import { useDebouncedCallback } from 'use-debounce';
import { FiEdit3 } from 'react-icons/fi';
import { AppState } from '../../store';
import { EditorNote, update } from '../../store/notesSlice';

function Editor() {
  const dispatch = useDispatch();
  const editorRef = useRef<EditorJS | null>(null);
  const activeNote = useSelector((state: AppState) => state.notes.activeNote);

  const saveNote = useDebouncedCallback(async (updatedNote) => {
    const req = await fetch(`http://localhost:3001/notes/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedNote),
      credentials: 'include',
    });
    const { success } = await req.json();
    return success;
  }, 2000);

  const handleSave = useCallback(async () => {
    if (editorRef.current) {
      const outputData: OutputData = await editorRef.current.save();
      if (activeNote) {
        const updatedNote = {
          ...activeNote,
          note: outputData as unknown as EditorNote,
        };
        dispatch(update(updatedNote));
        saveNote(updatedNote);
      }
    }
  }, [activeNote, dispatch, saveNote]);

  useEffect(() => {
    // Initialize EditorJS
    editorRef.current = new EditorJS({
      holder: 'editor-container',
      autofocus: true,
      minHeight: 300,
      data:
        activeNote &&
        activeNote.note.blocks.length &&
        activeNote.note.blocks[0].data
          ? (activeNote.note as unknown as OutputData)
          : undefined,
      tools: {
        header: Header,
      },
      onChange: () => {
        handleSave();
      },
    });

    // Cleanup function to destroy the editor when the component unmounts
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, [activeNote, handleSave]);

  return (
    <div className="w-full h-dvh relative overflow-scroll scroll">
      {!activeNote && (
        <div className="h-full w-full grid place-content-center text-slate-400 dark:text-slate-500">
          <h1 className="text-xl flex gap-2 items-center">
            <span>Select a note to start editing </span>
            <span>
              <FiEdit3 />
            </span>
          </h1>
        </div>
      )}
      <div
        id="editor-container"
        className={`w-full h-full ${!activeNote && 'hidden'} p-2`}
      />
    </div>
  );
}

export default Editor;
