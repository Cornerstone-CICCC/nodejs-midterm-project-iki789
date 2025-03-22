import React, { useRef, useEffect } from 'react';
import EditorJS, { OutputData } from '@editorjs/editorjs';
import Header from '@editorjs/header';
// import Slate from './Slate';

// CSS styles
// import "./styles.css";

interface EditorProps {
  initialData: OutputData;
}

function Editor(props: EditorProps) {
  const { initialData } = props;
  const editorRef = useRef<EditorJS | null>(null);

  const handleSave = async () => {
    if (editorRef.current) {
      const outputData: OutputData = await editorRef.current.save();
      console.log('Editor Content:', outputData);
    }
  };

  useEffect(() => {
    // Initialize EditorJS
    editorRef.current = new EditorJS({
      holder: 'editor-container',
      autofocus: true,
      tools: {
        header: Header,
      },
      onChange: (e) => {
        console.log(e);
      },
      data: initialData,
    });

    // Cleanup function to destroy the editor when the component unmounts
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
      }
    };
  }, [initialData]);

  return (
    <div className="w-full h-full relative">
      <div id="editor-container" className="w-full h-full" />
    </div>
  );

  // return <Slate />;
}

export default Editor;
