import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
import { AppState } from '../../store';
import { EditorNote, update } from '../../store/notesSlice';

interface EditorProps {
  initialData: OutputData;
}

function Editor(props: EditorProps) {
  const { initialData } = props;
  const dispatch = useDispatch();
  const editorRef = useRef<EditorJS | null>(null);
  const activeNote = useSelector((state: AppState) => state.notes.activeNote);

  const handleSave = useCallback(async () => {
    if (editorRef.current) {
      const outputData: OutputData = await editorRef.current.save();
      if (activeNote)
        dispatch(
          update({
            id: activeNote?.id,
            note: outputData as unknown as EditorNote,
          }),
        );
    }
  }, [activeNote, dispatch]);

  useEffect(() => {
    console.log(activeNote);
  }, [activeNote]);

  useEffect(() => {
    // Initialize EditorJS
    editorRef.current = new EditorJS({
      holder: 'editor-container',
      autofocus: true,
      minHeight: 300,
      data: activeNote ? (activeNote.note as unknown as OutputData) : undefined,
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
      <div id="editor-container" className="w-full h-full" />
    </div>
  );

  // return <Slate />;
}

export default Editor;
