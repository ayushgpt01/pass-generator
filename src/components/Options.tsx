import React from "react";
import { OptionsType } from "../App";

interface OptionsProps {
  options: OptionsType;
  setOptions: React.Dispatch<React.SetStateAction<OptionsType>>;
}

const Options = ({ options, setOptions }: OptionsProps) => {
  const { upper, lower, number, special } = options;

  const optionsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const newOptions: OptionsType = { ...options, [name]: checked };

    // auto check lowercase if nothing else is checked
    if (!checked) {
      // if current element is being unchecked
      const remainingOptions = Object.keys(newOptions).filter(
        (key) => key !== name
      );
      const allUnchecked = remainingOptions.every(
        (opt) => !newOptions[opt as keyof OptionsType]
      );

      if (allUnchecked) {
        newOptions.lower = true;
      }
    }

    // set the new Options
    setOptions(newOptions);
  };

  return (
    <div className='options-wrapper'>
      <div className='option'>
        <label htmlFor='uppercase' className='option-title'>
          Uppercase
        </label>
        <input
          id='uppercase'
          name='upper'
          type='checkbox'
          checked={upper}
          className='option-checkbox'
          onChange={optionsHandler}
        />
      </div>
      <div className='option'>
        <label htmlFor='lowercase' className='option-title'>
          Lowercase
        </label>
        <input
          id='lowercase'
          name='lower'
          type='checkbox'
          checked={lower}
          className='option-checkbox'
          onChange={optionsHandler}
        />
      </div>
      <div className='option'>
        <label htmlFor='numbers' className='option-title'>
          Numbers
        </label>
        <input
          id='numbers'
          name='number'
          type='checkbox'
          checked={number}
          className='option-checkbox'
          onChange={optionsHandler}
        />
      </div>
      <div className='option'>
        <label htmlFor='special-characters' className='option-title'>
          Special Characters
        </label>
        <input
          id='special-characters'
          name='special'
          type='checkbox'
          checked={special}
          className='option-checkbox'
          onChange={optionsHandler}
        />
      </div>
    </div>
  );
};

export default Options;
