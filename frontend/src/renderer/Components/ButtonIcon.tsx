import React, { MouseEvent } from 'react';

export interface ButtonIconProps {
  onClick: (e: MouseEvent) => void;
}

function ButtonIcon(props: React.PropsWithChildren<ButtonIconProps>) {
  const { children, onClick } = props;
  return (
    <button
      type="button"
      onClick={(e) => onClick(e)}
      className="px-2 py-1 rounded-md hover:cursor-pointer hover:bg-slate-800"
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
