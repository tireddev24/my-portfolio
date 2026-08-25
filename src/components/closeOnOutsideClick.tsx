import { useEffect } from 'react';

export const useCloseOnOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  onClose: () => void,
  isOpen: boolean,
) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClose, isOpen]);
};
