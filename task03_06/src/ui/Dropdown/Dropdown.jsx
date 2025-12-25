import  { useState, useRef} from "react";
import { useClickOutside } from "@/utils/hooks/useClickOutside";
import style from "./Dropdown.module.scss";
import { Icon, ICON_PATHS } from "@/ui/Icon";
import clsx from "clsx";
const OPTIONS = ["Day", "Week"];

function Dropdown({ selected, setSelected }) {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };
  
 useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef} className={style.dropdown}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleDropdown}
        className={clsx(style.dropdownButton, isOpen && style.active)}
      >
        {selected ?? "Select"}
        <span>
    <Icon d={ICON_PATHS.down} viewBox="-6 -6 16 16" size="l" />
        </span>
        
      </button>

      {isOpen && (
        <div className={style.dropdownContent}>
          {OPTIONS.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={clsx(style.dropdownItem, selected === option && style.selected)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
