import React, { useState, useEffect, useRef } from "react";

const useInterval = (func, delay) => {
  const funcToPerform = useRef();

  useEffect(() => {
    funcToPerform.current = func;
  }, [func]);

  useEffect(() => {
    if (delay !== null) {
      let interval = setInterval(() => {
        const status = funcToPerform.current();
        if (status === "end") return clearInterval(interval);
      }, delay);
      return () => clearInterval(interval);
    }
  }, [delay]);

  return;
};

export default useInterval;
