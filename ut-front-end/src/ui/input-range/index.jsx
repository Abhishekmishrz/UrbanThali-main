'use client';
import { getTrackBackground, Range } from "react-range";

const InputRange = ({ STEP, MIN, MAX, values, handleChanges }) => {
  return (
    <>
      <Range
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(vals) => handleChanges(vals)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: '3px',
              width: '100%',
              background: getTrackBackground({
                values: values,
                colors: ["#EDEDED", "#FCB53B", "#EDEDED"],
                min: MIN,
                max: MAX
              }),
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            key={props.key}
            style={{
              ...props.style,
              height: '17px',
              width: '5px',
              backgroundColor: '#FCB53B',
              backgroundColor: isDragged ? "#FCB53B" : "#FCB53B"
            }}
          />
        )}
      />
    </>
  );
};


export default InputRange;
