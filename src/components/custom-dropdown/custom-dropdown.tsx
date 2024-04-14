import { useRef } from "react";

import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { SlDivider } from "@shoelace-style/shoelace/dist/react";
import { SlDropdown } from "@shoelace-style/shoelace/dist/react";
import { SlMenu } from "@shoelace-style/shoelace/dist/react";
import { SlMenuItem } from "@shoelace-style/shoelace/dist/react";

import "./custom-dropdown.css";
type customDropdownProps = {
  menuItems: Array<String> | undefined | null;
  text: String;
};

function CustomDropdown({
  text = "Dropdown",
  menuItems = [],
}: customDropdownProps) {
  const dropDownButton = useRef<HTMLElement>(null);

  const addMenuItem = (text: String, key: Number) => {
    if (text === "hr") {
      return <SlDivider key={key} />;
    }
    return <SlMenuItem key={key}>{text}</SlMenuItem>;
  };

  const addRemoveOpen = () => {
    const dropdown = dropDownButton.current;

    if (dropdown && menuItems.length > 0) {
      if (dropdown.classList.contains("open")) {
        dropdown.classList.remove("open");
      } else {
        dropdown.classList.add("open");
      }
    }
  };

  return (
    <SlDropdown onSlShow={addRemoveOpen} onSlHide={addRemoveOpen}>
      <SlButton
        className="custom-dropdown-button"
        slot="trigger"
        caret={menuItems.length > 0 ? true : false}
        ref={dropDownButton}
      >
        {text}
      </SlButton>
      {menuItems.length > 0 && (
        <SlMenu>
          {menuItems.map((menuItem: String, i) => addMenuItem(menuItem, i))}
        </SlMenu>
      )}
    </SlDropdown>
  );
}

export default CustomDropdown;
