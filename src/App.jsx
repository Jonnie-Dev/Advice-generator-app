import React, { useState, useEffect } from "react";

const App = () => {
  const [qoutes, setQuote] = useState({});

  const url = "https://api.adviceslip.com/advice";
  const fetchData = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setQuote(data.slip);
      console.log(data);
    } catch (error) {
      let data = {
        slip: {
          id: 0,
          advice: "Never give up, Keep trying.",
        },
      };
      setQuote(data.slip);
    }
  };

  const handleClick = () => {
    fetchData(url);
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <div className="h-[100vh] flex items-center justify-center bg-deepBlue text-2xl">
      <div className="max-w-xs md:max-w-lg mx-4 md:mx-0 flex flex-col gap-8 bg-grayishBlue-d p-8 rounded-lg text-center relative">
        <h1 className="text-neonGreen text-[.625rem] tracking-[4.25px]">
          #ADVICE {qoutes.id ? qoutes.id : 0}
        </h1>

        <p className="text-cyan">
          <q>
            {/* {qoutes.advice
              ? qoutes.advice
              : "Welcome! Take these advices at your own risk as they are from an API"} */}
            {qoutes.advice}
          </q>
        </p>

        <picture className="mb-6">
          <source
            srcSet="/images/pattern-divider-desktop.svg"
            media="(min-width: 512px)"
          />
          <img src="/images/pattern-divider-mobile.svg" alt="divider image" />
        </picture>

        <div
          onClick={() => fetchData(url)}
          className="cursor-pointer transition-all absolute top-[100%] right-[50%] translate-x-2/4 -translate-y-2/4 rounded-full p-4 bg-neonGreen hover:shadow-[0px_4px_8px_4px_#52ffa833] active:scale-105"
        >
          <img src="/images/icon-dice.svg" />
        </div>
      </div>
    </div>
  );
};

export default App;
