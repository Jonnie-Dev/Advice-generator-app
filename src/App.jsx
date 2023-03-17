import React from "react";

const App = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center bg-deepBlue text-2xl">
      <div className="max-w-lg flex flex-col gap-8 bg-grayishBlue-d p-8 rounded-lg text-center relative">
        <h1 className="text-neonGreen text-[.625rem] tracking-[4.25px]">
          #ADVICE {"117"}
        </h1>
        <p className="text-cyan">
          <q>
            Content goes here as this is an example of a quote we will be
            expectiong of a quote gubberish sha you get what im saying dont you
          </q>
        </p>
        <img className="mb-4" src="/images/pattern-divider-mobile.svg" />
        <div className="cursor-pointer transition-all absolute top-[100%] right-[50%] translate-x-2/4 -translate-y-2/4 rounded-full p-4 bg-neonGreen hover:shadow-[0px_4px_8px_4px_#52ffa833] active:scale-105">
          <img src="/images/icon-dice.svg" />
        </div>
      </div>
    </div>
  );
};

export default App;
