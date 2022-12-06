import React, { useCallback, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    console.log(`handleToggle()`);
    setIsOpen((open) => !open);
  }, []);

  return (
    <div className="App">
      <Dropdown isOpen={isOpen} toggle={handleToggle}>
        <DropdownToggle caret>
          <div style={{ padding: 3, backgroundColor: '#ccc' }}>
            Toggle me
          </div>
        </DropdownToggle>
        <DropdownMenu container={'body'}>
          <DropdownItem>Item 1</DropdownItem>
          <DropdownItem>Item 2</DropdownItem>
          <DropdownItem>Item 3</DropdownItem>
          <DropdownItem>Item 4</DropdownItem>
          <DropdownItem>Item 5</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default App;
