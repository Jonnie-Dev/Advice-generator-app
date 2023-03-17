const Quotes = () => {
  return (
    <div className="max-w-lg flex flex-col gap-5 bg-grayishBlue-d p-8 rounded-lg text-center relative">
      <h1 className="text-neonGreen text-[.625rem] tracking-[4.25px]">
        #ADVICE 117{" "}
      </h1>
      <p className="text-cyan">
        <q>
          Content goes here as this is an example of a quote we will be
          expectiong
        </q>
      </p>
      <img src="/images/pattern-divider-mobile.svg" />
      <div className="absolute bg-neonGreen">
        <img src="/images/icon-dice.svg" />
      </div>
    </div>
  );
};

export default Quotes;
