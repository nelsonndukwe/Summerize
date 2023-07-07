import { logo } from "../assets/index";
import { VscGithubAlt } from "react-icons/vsc";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <p className="orange_gradient text-2xl font-inter font-bold uppercase ">Summerize</p>
        <button
          type="button"
          onClick={() => {
            window.open("https://github.https://github.com/nelsonndukwe/Summerize/tree/main/nelsonndukwe");
          }}
          className="black_btn"
        >
          <VscGithubAlt />
        </button>
      </nav>

      <h1 className="head_text">
        Summarise Articles With <br />
        <span className="orange_gradient">OPENAI GPT-4</span>
      </h1>

      <h2 className="desc">
        Summerise and simplify your reading and studying experince using
        summize, summerize lengthy articles in seconds.
      </h2>
    </header>
  );
};

export default Hero;
