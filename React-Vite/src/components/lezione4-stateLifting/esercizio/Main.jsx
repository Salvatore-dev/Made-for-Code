import Insert from "./components/Insert";
import Messages from "./components/Messages";
import Checkbox from "./components/Checkbox";
import Searchbar from "./components/Searchbar";
import { useState } from "react";

function EsLezione4() {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState([
    { name: "mario", id: 1, checked: false },
    { name: "luigi", id: 2, checked: false },
    { name: "pink", id: 3, checked: false },
  ]);

  function selectAuthors(e) {
    console.log(e.target?.name);
    const a = authors.map((el) => {
      if (e.target?.name === el?.name) {
        return { ...el, checked: !el.checked };
      }
      return el;
    });
    setAuthors(a);
  }

  return (
    <>
      <h1 className=" font-bold text-lg text-center border border-gray-500 border-b-2 pb-4">
        my blog
      </h1>
      <div className="flex ">
        <div className=" flex w-1/4">
          <Insert posts={posts} setPosts={setPosts} authors={authors} />
        </div>
        <div className=" flex w-1/4">
          <Messages messages={posts} />
        </div>
        <div className="flex flex-col w-1/4">
          <Checkbox users={authors} selector={selectAuthors} />
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default EsLezione4;
