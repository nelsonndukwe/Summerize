import { useState, useEffect } from "react";
import { copy, tick, loader, linkIcon } from "../assets/index";
import { AiOutlineEnter } from "react-icons/ai";
import { useLazyGetSummaryQuery } from "../Services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopy] = useState("")

  // HOOK FROM ARTICLE.JS

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    // GETTING ITEMS VIA LOCAL STORAGE

    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  // HANDLE SUBMIT ----- UPDATING SUMMARY

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updateArticles = [newArticle, ...allArticles];

      setArticle(newArticle);
      setAllArticles(updateArticles);

      // SETTING LOCAL STORAGE

      localStorage.setItem("articles", JSON.stringify(updateArticles));

      console.log(newArticle);
    }
  };

const handleCopy = (copyurl) => {
setCopy(copyurl)
navigator.clipboard.writeText(copyurl)
setTimeout(() => setCopy(false), 3000)
}

  return (
    <section className="w-full mt-16 max-w-xl">
      <div className="flex flex-col gap-2 w-full">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="linkicon"
            className="absolute left-0 my-2 ml-3 w-5 active:scale-[0.98]"
          />
          <input
            type="url"
            placeholder="Enter a Url "
            value={article.url}
            required
            className="peer url_input "
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            <AiOutlineEnter />
          </button>
        </form>

        {/* Browse history of serach */}

        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.map((items, index) => {
            return (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(items)}
                className="link_card"
              >
                <div className="copy_btn" onClick={()=> {
                  handleCopy(items.url)
                }}>
                  <img
                    src={copied === items.url ? tick : copy}
                    alt="copy"
                    className="w-[40%] h-[40%] object-contain"
                  />
                </div>
                <p className="flex-1 font-satoshi text-orange-700 font-medium text-sm truncate">
                  {items.url}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Display result */}

      <div className="my-10 max-h-full flex justify-center items-center ">
        {isFetching ? (
          <img src={loader} alt="loader" className="w-10 h-20 object-contain" />
        ) : error ? (
          <p className="font-bold font-inter text-black text-center">
            Something Went Wrong <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                Article <span className="orange_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter font-medium text-sm text-justify text-gray-800">{article.summary}</p>
                </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
