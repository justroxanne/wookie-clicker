import React, { useState, createContext, useEffect } from 'react';

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [clickCounter, setClickCounter] = useState(0);
  const [count, setCount] = useState(0);
  const [bank, setBank] = useState(0);
  const [countPower, setCountPower] = useState(1);
  const [creditSecond, setCreditSecond] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(false);
  const [displayConfetti, setDisplayConfetti] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

  const manualClick = () => {
    setClickCounter(clickCounter + 1);
  };

  const moreClick = () => {
    setCount(count + countPower);
  };

  const moreCredits = () => {
    setBank(bank + countPower);
  };

  const unlockFalcon = () => {
    if (bank >= 1000000) {
      setBank(bank - 1000000);
      setDisplayConfetti(true);
      setDisplayMessage(true);
    }
  };

  const unlockClicHelper = (cost, power) => {
    if (bank >= cost) {
      setCountPower(countPower + power);
      setBank(bank - cost);
    }
  };

  const unlockSecondPowerHelper = (cost, power) => {
    if (bank >= cost) {
      if (autoIncrement == false) {
        setAutoIncrement(true);
      }
      setBank(bank - cost);
      setCreditSecond(creditSecond + power);
    }
  };

  useEffect(() => {
    let interval;
    if (autoIncrement) {
      interval = setInterval(() => {
        setBank((prevBank) => prevBank + creditSecond);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [autoIncrement, creditSecond]);

  return (
    <CountContext.Provider
      value={{
        clickCounter,
        count,
        countPower,
        moreClick,
        creditSecond,
        bank,
        displayConfetti,
        displayMessage,
        manualClick,
        moreCredits,
        unlockFalcon,
        unlockClicHelper,
        unlockSecondPowerHelper,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
