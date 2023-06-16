import { useState, useEffect, useRef } from "react";
import { ReactComponent as Copy } from "../assets/copy.svg";
import { ReactComponent as Refresh } from "../assets/refresh.svg";
import { Strength } from "../App";
import { OptionsType } from "../App";
import { generatePassword } from "../PassGenerator";

interface PasswordProps {
  options: OptionsType;
  length: number;
  setStrength: React.Dispatch<React.SetStateAction<Strength>>;
}

const Password = ({ options, length, setStrength }: PasswordProps) => {
  const calculateStrength = () => {
    let str: Strength = Strength.Short;
    if (length >= 8) {
      let numberOfMissingOptions = 0;
      Object.values(options).forEach((val) => {
        if (!val) {
          numberOfMissingOptions++;
        }
      });
      switch (numberOfMissingOptions) {
        case 2:
          str = Strength.Weak;
          break;
        case 1:
          str = Strength.Medium;
          break;
        case 0:
          str = Strength.Hard;
          break;
      }
    }
    return str;
  };

  const [password, setPassword] = useState<string>(
    generatePassword(length, options)
  );
  const [copyText, setCopyText] = useState<string>("Copy");
  const copyTimeout = useRef<number | undefined>(undefined);

  const refreshHandler = () => {
    const newPass = generatePassword(length, options);
    setPassword(newPass);
    setStrength(calculateStrength());
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(password);
    setCopyText("Copied");
    clearTimeout(copyTimeout.current);

    copyTimeout.current = window.setTimeout(() => {
      setCopyText("Copy");
    }, 1000);
  };

  useEffect(() => {
    return () => {
      clearTimeout(copyTimeout.current);
    };
  }, []);

  return (
    <div className='password-box'>
      <div className='password-field'>
        <input
          type='text'
          placeholder='Your password'
          value={password}
          readOnly
        />
        <Refresh onClick={refreshHandler} />
      </div>
      <button onClick={copyHandler} className='copy-btn'>
        <Copy /> {copyText}
      </button>
    </div>
  );
};

export default Password;
