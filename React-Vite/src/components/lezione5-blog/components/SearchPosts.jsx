import { useState } from 'react';

export default ({ authors, searchData }) => {
  const [search, setSearch] = searchData;
  //const [authorsSelected, setAuthorsSelected] = useState([]);

  const updateSearchData = (e) => {
    setSearch({
      ...search,
      content: e.target.value,
    });
  };

  const updateAuthorsSelected = (e) => {
    const id = parseInt(e.target.value);
    const checked = e.target.checked;
    let filteredIds = search.authorsSelected;

    if (checked) {
      filteredIds = Array.from(new Set([...search.authorsSelected, id]));
    } else {
      filteredIds = filteredIds.filter((el) => {
        return el != id;
      });
    }

    setSearch({ ...search, authorsSelected: filteredIds });
  };

  return (
    <>
      <h2>Search posts by author</h2>

      <div>
        {authors.map((author) => (
          <label key={author.id}>
            <div>{author.name}</div>
            <input
              type="checkbox"
              value={author.id}
              onChange={updateAuthorsSelected}
            />
          </label>
        ))}
      </div>

      <div className="mt-10">
        <h2>Search posts by content</h2>
        <input
          type="text"
          className="border border-gray-400 p-2 w-full max-w-full"
          onChange={updateSearchData}
          value={search.content}
        />
      </div>

      {/* <div>Authors selected: {search.authorsSelected.join(', ')}</div> */}
    </>
  );
};