import React from 'react';
import { FiSidebar, FiEdit, FiTrash2, FiSettings } from 'react-icons/fi';
import ButtonIcon from '../ButtonIcon';

function ActionControls() {
  return (
    <div className="flex gap-0">
      <ButtonIcon onClick={(e) => console.log(e)}>
        <FiSidebar size={18} />
      </ButtonIcon>
      <ButtonIcon onClick={() => console.log('')}>
        <FiEdit />
      </ButtonIcon>

      <ButtonIcon onClick={() => console.log('')}>
        <FiTrash2 />
      </ButtonIcon>
      <ButtonIcon onClick={() => console.log('')}>
        <FiSettings />
      </ButtonIcon>
    </div>
  );
}

export default ActionControls;
