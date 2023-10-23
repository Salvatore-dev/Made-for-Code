import { useState } from 'react';
import Header from './components/Header';
import InsertPost from './components/InsertPost';
import Posts from './components/Posts';
import SearchPosts from './components/SearchPosts';

let postsId = 1;
const makePost = (title, text, authorId) => {
  return {
    id: postsId++,
    title,
    text,
    authorId,
  };
};

const config = {
  authors: [
    { id: 1, name: 'Mario' },
    { id: 2, name: 'Luigi' },
    { id: 3, name: 'Peach' },
  ],

  posts: [
    makePost('primo post', 'testo', 1),
    makePost('secondo post', 'testo', 1),
    makePost('terzo post', 'testo', 2),
    makePost('jjj', 'testo', 3),
  ],
};

const getAuthorById = (id) => {
  const author = config.authors.filter((author) => author.id === parseInt(id));
  return author.length === 1 ? author[0] : config.authors[0];
};

export default () => {
  //const [authors, setAuthors] = useState(config.authors);
  const [posts, setPosts] = useState(config.posts);
  const { authors } = config;
  const [search, setSearch] = useState({
    content: '',
    authorsSelected: [],
  });

  return (
    <main>
      <Header />
      <div className="md:grid grid-cols-12">
        <div className="col-span-4 p-4">
          <InsertPost authors={authors} postsData={[posts, setPosts]} />
        </div>
        <div className="col-span-4 p-4">
          <Posts postsData={[posts, getAuthorById]} search={search} />
        </div>
        <div className="col-span-4 p-4">
          <SearchPosts authors={authors} searchData={[search, setSearch]} />
        </div>
      </div>
    </main>
  );
};
