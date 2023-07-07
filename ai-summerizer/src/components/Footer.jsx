import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdOutgoingMail } from "react-icons/md";
import { useRef, useState, useEffect} from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [submit, setSubmitted] = useState("false");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmitted("false");
    }, 3000);

    return () => clearTimeout(timer);
  }, [submit]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1xzqtlh",
        "template_oljgyha",
        form.current,
        "BLLsOFvUMfZ6fbN5U"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted("true");
        },
        (error) => {
          console.log(error.text);
          setSubmitted("error");
        }
      );

    e.target.reset();
  };

  return (
    <div className="w-full bg-black">
      <div className="sm:py-8 sm:px-20 sm:grid sm:grid-cols-2 gap-4  flex flex-col py-3 px-3">
        <div>
          <p className="orange_gradient text-2xl font-inter font-bold uppercase sm:text-3xl">
            Summerize
          </p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                window.open("https://github.com/nelsonndukwe");
              }}
              className=" mt-5 rounded-t-xl border border-black bg-black py-1.5 px-3 text-lg text-white transition-all hover:bg-white hover:text-black duration-300"
            >
              <VscGithubAlt />
            </button>
            <button
              type="button"
              onClick={() => {
                window.open("https://twitter.com/NelsonNdukwe6");
              }}
              className=" mt-5 rounded-t-xl border border-black bg-black py-1.5 px-3 text-lg text-white transition-all hover:bg-white hover:text-black duration-300"
            >
              <FiTwitter />
            </button>{" "}
            <button
              type="button"
              onClick={() => {
                window.open("https://github.com/nelsonndukwe");
              }}
              className=" mt-5 rounded-t-xl border border-black bg-black py-1.5 px-3 text-lg text-white transition-all hover:bg-white hover:text-black duration-300"
            >
              <FiLinkedin />
            </button>{" "}
            <button
              type="button"
              onClick={() => {
                window.open("https://github.com/nelsonndukwe");
              }}
              className=" mt-5 rounded-t-xl border border-black bg-black py-1.5 px-3 text-lg text-white transition-all hover:bg-white hover:text-black duration-300"
            >
              <MdOutgoingMail />
            </button>
          </div>
        </div>

        <div>
          <p className="font-staoshi text-2xl text-white mb-4  ">
            Wish to get in contact? Leave a message...
          </p>
          <form
            className="flex flex-col gap-3 justify-start "
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              placeholder="Full name"
              required
              name="name"
              className="w-full rounded-lg py-2 px-2 font-satoshi font-sm"
            />
            <input
              type="email"
              placeholder="Pls input your email"
              required
              name="email"
              className="w-full rounded-lg py-2 px-2 font-satoshi font-sm"
            />
            <input
              type="text"
              placeholder="message"
              required
              name="message"
              className="w-full rounded-lg py-2 px-2 font-satoshi font-sm"
            />
            <div>
              <button
                type="submit"
                className="py-2 px-4 bg-orange-800 rounded-lg hover:text-orange-800 hover:bg-white active:scale-[0.98] text-white"
              >
                {submit === "true"? (
                    <p>Submitted</p>
                ) : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
