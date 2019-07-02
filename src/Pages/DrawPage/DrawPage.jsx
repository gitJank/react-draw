import React, { useRef, useState } from 'react';
import { makeStyles, Button, Card, CardContent, CardActions } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';
import CanvasDraw from 'react-canvas-draw';
import ColorPicker from '../../Components/ColorPicker/ColorPicker';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    padding: '0px',
    height: 'fit-content',
    backgroundColor: '#3f51b5'
  },
  cardActions: {
    justifyContent: 'flex-end',
    padding: '8px 16px'
  },
  colorButton: {
    marginRight: '0',
    border: '2px solid #fff'
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold'
  },
  containedButton: {
    backgroundColor: '#fff',
    fontWeight: 'bold'
  },
  sliderRoot: {
    color: '#fff',
    width: '164px',
    marginRight: 'auto'
  },
  sliderLabel: {
    color: '#fff'
  }
}));

const DrawPage = () => {
  const classes = useStyles();
  const canvasDraw = useRef();
  const randomHex = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  const [colorAnchorEl, setColorAnchorEl] = useState(null);
  const [selectedColor, setSelectedColor] = useState(randomHex());
  const [brushRadius, setBrushRadius] = useState(12);

  const open = Boolean(colorAnchorEl);
  const id = open ? 'simple-popover' : undefined;

  const marks = [
    { value: 4, label: '4px' },
    { value: 8, label: '8px' },
    { value: 12, label: '12px' },
    { value: 16, label: '16px' },
    { value: 20, label: '20px' }
  ];

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <CanvasDraw
            ref={canvasDraw}
            hideGrid
            canvasWidth={600}
            canvasHeight={600}
            brushColor={selectedColor}
            brushRadius={brushRadius}
          />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.colorButton}
            style={{ backgroundColor: selectedColor, height: '36px' }}
            aria-describedby={id}
            variant="outlined"
            onClick={e => setColorAnchorEl(e.currentTarget)}
          >
            {''}
          </Button>
          <Button
            className={classes.textButton}
            style={{ marginRight: 'auto' }}
            onClick={() => setSelectedColor(randomHex())}
          >
            Random
          </Button>
          <Slider
            value={brushRadius}
            onChange={(e, value) => setBrushRadius(value)}
            aria-labelledby="discrete-slider"
            step={4}
            marks={marks}
            classes={{ root: classes.sliderRoot, markLabel: classes.sliderLabel }}
            min={marks[0].value}
            max={marks[marks.length - 1].value}
          />
          <Button className={classes.textButton} onClick={() => canvasDraw.current.undo()}>
            Undo
          </Button>
          <Button className={classes.textButton} onClick={() => canvasDraw.current.clear()}>
            Clear
          </Button>

          <Button
            className={classes.containedButton}
            variant="contained"
            onClick={() => console.log(canvasDraw.current.getSaveData())}
          >
            Save
          </Button>
        </CardActions>
      </Card>
      <ColorPicker
        id={id}
        open={open}
        anchorEl={colorAnchorEl}
        onClose={() => setColorAnchorEl(null)}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
    </div>
  );
};

export default DrawPage;
