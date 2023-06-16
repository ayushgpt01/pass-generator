import { useState } from "react";
import Info from "./components/Info";
import Password from "./components/Password";
import Status from "./components/Status";
import LengthSlider from "./components/LengthSlider";
import Options from "./components/Options";

export interface OptionsType {
  upper: boolean;
  lower: boolean;
  number: boolean;
  special: boolean;
}

const initialOptions = {
  upper: true,
  lower: true,
  number: true,
  special: true,
};

export enum Strength {
  Short = "Too Short",
  Weak = "Weak",
  Medium = "Medium",
  Hard = "Hard",
}

const App = () => {
  const [options, setOptions] = useState<OptionsType>(initialOptions);
  const [strength, setStrength] = useState<Strength>(Strength.Hard);
  const [length, setLength] = useState<number>(8);
  return (
    <div className='app'>
      <Info />
      <Password length={length} options={options} setStrength={setStrength} />
      <Status strength={strength} />
      <LengthSlider length={length} setLength={setLength} />
      <Options options={options} setOptions={setOptions} />
    </div>
  );
};

export default App;
