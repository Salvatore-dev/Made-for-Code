export default ({ postsData, search }) => {
    const [posts, getAuthorById] = postsData;
  
    let filteredPosts = posts;
    if (search.content != '') {
      filteredPosts = filteredPosts.filter((post) => {
        return (
          post.title.includes(search.content) ||
          post.text.includes(search.content)
        );
      });
    }
  
    if (search.authorsSelected.length > 0) {
      filteredPosts = filteredPosts.filter((post) => {
        return search.authorsSelected.includes(post.authorId);
      });
    }
  
    const authorsSelectedLabels = search.authorsSelected
      .map((el) => {
        return getAuthorById(parseInt(el)).name;
      })
      .join(', ');
  
    return (
      <>
        <h2>Posts</h2>
        <div className="my-4">
          {search.content != '' && (
            <div>Search by content: "{search.content}"</div>
          )}
        </div>
  
        <div className="my-4">
          {search.authorsSelected.length > 0 && (
            <div>Search by Authors: "{authorsSelectedLabels}"</div>
          )}
        </div>
  
        <div className="flex flex-col gap-4">
          {filteredPosts.length > 0 &&
            filteredPosts.map((post, i) => (
              <div key={post.id} className="bg-gray-200 p-2">
                <div className="text-xl font-medium">{post.title}</div>
                <div>{post.text}</div>
                <div className="mt-4 bg-gray-500 text-white p-2">
                  By {getAuthorById(post.authorId).name} <br /> Post#
                  {post.id}
                </div>
              </div>
            ))}
  
          {filteredPosts.length === 0 ? 'No posts yet' : ''}
        </div>
      </>
    );
  };