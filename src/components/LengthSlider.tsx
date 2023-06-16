import Slider from "rc-slider";
import "rc-slider/assets/index.css";

interface LengthSliderProps {
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
}

const LengthSlider = ({ length, setLength }: LengthSliderProps) => {
  const handler = (num: number | number[]) => {
    setLength(num as number);
  };
  return (
    <div className='slider-wrapper'>
      <p className='slider-length'>Password Length : {length}</p>
      <Slider
        min={5}
        max={30}
        value={length}
        onChange={handler}
        className='slider'
      />
    </div>
  );
};

export default LengthSlider;
