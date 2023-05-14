"use client";

import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

// const PromptCardList = ({ data, handleTagClick }) => {
//   return (
//     <div className="mt-16 prompt_layout">
//       {data.map((post) => (
//         <PromptCard
//           key={post._id}
//           post={post}
//           handleTagClick={handleTagClick}
//         />
//       ))}
//     </div>
//   );
// };

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPost] = useState([]);
  const handleSearchChange = (e) => {};

  //fetch data
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("/api/prompt");
  //     const data = await response.json();
  //     setPost(data);
  //   })();
  // }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* <PromptCardList data={posts} handleTagClick={() => {}} /> */}
      <p>feeds</p>
    </section>
  );
};

export default Feed;
