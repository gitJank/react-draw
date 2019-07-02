import React from 'react';
import { Popover } from '@material-ui/core';
import { SketchPicker } from 'react-color';

export default ({ id, open, anchorEl, onClose, selectedColor, setSelectedColor }) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
    >
      <SketchPicker
        color={selectedColor}
        onChangeComplete={color => setSelectedColor(color.hex)}
        disableAlpha
      />
    </Popover>
  );
};
