"use client";

import { useState, useEffect, useRef } from "react";

import PostCard from "./PostCard";
import { motion } from "framer-motion"

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-12 post_layout flex flex-wrap gap-4'>
      {data.map((post) => (
        <motion.div
          key={post._id}
          className="card"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ease: "easeOut" }}
        >
          <PostCard
            post={post}
            handleTagClick={handleTagClick}
          />
        </motion.div>
      ))}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Search states
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  // Ref for tracking scroll position
  const scrollRef = useRef(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    const response = await fetch("/api/post");
    const data = await response.json();

    setAllPosts((prevPosts) => [...prevPosts, ...data]);
    setIsLoading(false);
  };

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;

    if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const filterPosts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return allPosts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.category) ||
        regex.test(item.title) ||
        regex.test(item.description) ||
        regex.test(item.imagePath)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPosts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPosts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className='feed p-4' ref={scrollRef}>
      <form className='relative w-full flex-center'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer border p-4 rounded-md bg-white'    
        />
      </form>

      {/* All Posts */}
      {searchText ? (
        <PostCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PostCardList data={allPosts} handleTagClick={handleTagClick} />
      )}

      {isLoading && <p>Loading...</p>}
    </section>
  );
};

export default Feed;
