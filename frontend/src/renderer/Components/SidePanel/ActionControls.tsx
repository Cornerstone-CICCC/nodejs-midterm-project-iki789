import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit, FiTrash2, FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { add, remove, setActiveNote } from '../../store/notesSlice';
import ButtonIcon from '../ButtonIcon';
import { AppState } from '../../store';

function ActionControls() {
  const activeNote = useSelector((state: AppState) => state.notes.activeNote);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createNote = async () => {
    const req = await fetch('http://localhost:3001/notes/add', {
      method: 'POST',
      body: JSON.stringify({
        note: {
          time: 1678901234001,
          blocks: [
            {
              type: 'header',
              data: {
                text: '',
                level: 2,
              },
            },
          ],
          version: '2.28.2',
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const newNote = await req.json();
    return newNote;
  };

  const onAddNote = async () => {
    const newNote = await createNote();
    dispatch(add(newNote));
    dispatch(setActiveNote(newNote));
  };

  const removeNote = async (noteId: string) => {
    // eslint-disable-next-line no-alert
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this note?',
    );
    if (!confirmDelete) return false;

    const req = await fetch(`http://localhost:3001/notes/remove/${noteId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });
    const { success } = await req.json();

    return success;
  };

  const onRemoveNote = async () => {
    if (!activeNote) return;
    const removedNote = await removeNote(activeNote.id);
    if (removedNote) dispatch(remove(activeNote.id));
  };

  return (
    <div className="flex gap-0">
      <ButtonIcon onClick={onAddNote}>
        <FiEdit />
      </ButtonIcon>
      {activeNote && (
        <ButtonIcon onClick={onRemoveNote}>
          <FiTrash2 />
        </ButtonIcon>
      )}
      <ButtonIcon onClick={() => navigate('/settings')}>
        <FiSettings />
      </ButtonIcon>
    </div>
  );
}

export default ActionControls;
