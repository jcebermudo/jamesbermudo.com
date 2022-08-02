const Footy = () => {
  return (
    <footer>
      <div className="mt-14">
        <hr className="border-[#b4b4b4] border-dashed opacity-30" />
        <div className="flex flex-row mt-7">
          <p className="basis-11/12 text-[#A1A1A1] text-base sm:text-sm select-none">
            © 2022 James Bermudo
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jcebermudo/bermudo.me/tree/main"
            className="basis-1/12 text-[#A1A1A1] underline text-base sm:text-sm select-none duration-150 hover:text-[#19A1FD]"
          >
            source
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footy;
