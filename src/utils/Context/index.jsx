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

  const unlockHelperPorg = () => {
    if (bank >= 50) {
      setAutoIncrement(true);
      setBank(bank - 50);
      setCreditSecond(creditSecond + 1);
    }
  };

  const unlockHelperEwok = () => {
    if (bank >= 100) {
      setCountPower(countPower + 1);
      setBank(bank - 100);
    }
  };

  const unlockHelperC3po = () => {
    if (bank >= 500) {
      setBank(bank - 500);
      setCreditSecond(creditSecond + 10);
    }
  };

  const unlockHelperR2d2 = () => {
    if (bank >= 1000) {
      setCountPower(countPower + 10);
      setBank(bank - 1000);
    }
  };

  const unlockHelperXwing = () => {
    if (bank >= 10000) {
      setCountPower(countPower + 100);
      setBank(bank - 10000);
    }
  };

  const unlockFalcon = () => {
    if (bank >= 1000000) {
      setBank(bank - 1000000);
      setDisplayConfetti(true);
      setDisplayMessage(true);
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
        unlockHelperPorg,
        unlockHelperEwok,
        unlockHelperC3po,
        unlockHelperR2d2,
        unlockHelperXwing,
        unlockFalcon,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
