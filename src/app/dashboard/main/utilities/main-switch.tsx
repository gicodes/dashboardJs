import { Button, ButtonGroup } from '@mui/material';
import React, { useState } from 'react';

export type MainSwitchProps = { handleSwitch?: () => void; }

export const MainSwitch: React.FC<MainSwitchProps> = ({ handleSwitch }) => {
  const [isMernActive, setIsMernActive] = useState(true);

  const handleButtonClick = () => {
    setIsMernActive((prev) => !prev);
    if (handleSwitch) handleSwitch();
  };

  return (
    <ButtonGroup>
      <Button
        variant={isMernActive ? 'contained' : 'outlined'}
        onClick={handleButtonClick}
      >
        MERN
      </Button>
      <Button
        variant={!isMernActive ? 'contained' : 'outlined'}
        onClick={handleButtonClick}
      >
        More
      </Button>
    </ButtonGroup>
  );
};