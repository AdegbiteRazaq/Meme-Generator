import { useState, useEffect } from "react";
import logos from "../assets/memeimg.png";
const Body = () => {
  const [meme, setMeme] = useState({
    memeImage: logos,
    topText: "",
    bottomText: "",
  });
  const [memesData, setMemesData] = useState([]);
  // console.log(meme.topText);
  console.log("new rendering started");

  // console.log(Math.floor(Math.random() * memesData.length));
  const randomNumber = Math.floor(Math.random() * memesData.length);
  console.log(memesData[randomNumber]);
  // const source = memesData[randomNumber].url;
  const SubmitHandler = function (event) {
    event.preventDefault();
    // console.log(event.target);
  };
  const HandleClickToGetMeme = function () {
    setMeme((prev) => {
      return {
        ...prev,
        memeImage: memesData[randomNumber].url,
      };
    });
  };
  const onChangeHandler = function (event) {
    const { name, value } = event.target;
    // console.log(event.target.value);
    // console.log(name);
    // console.log("entering");

    setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  };
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setMemesData(data.data.memes);
        // console.log(memesData);
      });
  }, []);

  return (
    <div className="p-10 bg-white border-x-2 border-b-2 drop-shadow-sm">
      <form className="grid grid-cols-2 gap-5 mb-11" onSubmit={SubmitHandler}>
        <input
          name="topText"
          type="text"
          placeholder="topText"
          onChange={onChangeHandler}
          value={meme.topText}
          className="h-10 border-2 rounded-lg p-4 "
        />
        <input
          name="bottomText"
          type="text"
          placeholder="bottomText"
          onChange={onChangeHandler}
          value={meme.bottomText}
          className="h-10 border-2 rounded-lg p-4"
        />
        <button
          onClick={HandleClickToGetMeme}
          className="col-span-2 border-2 h-12 bg-purple-900 rounded-lg mt-1 text-gray-100 font-bold text-base"
        >
          Get New Meme Image
        </button>
      </form>
      <div className="relative">
        <img src={meme.memeImage} className="w-full h-full" />
        <h1 className="absolute top-10 w-full uppercase text-center text-3xl font-extrabold text-gray-100">
          {meme.topText}
        </h1>
        <h1 className="absolute bottom-10 w-full uppercase text-center text-3xl font-extrabold text-gray-100">
          {meme.bottomText}
        </h1>
      </div>
    </div>
  );
};
export default Body;
