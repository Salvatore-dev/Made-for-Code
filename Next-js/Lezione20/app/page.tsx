'use client'

import { useReducer, useState, useEffect } from "react"

function makePost() {
  fetch('/api/posts', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: 'Ciao a tutti',
      author: 'Luigi Verdi'
    })
  })
  .then(resp => resp.json())
  .then(data => data)
}

export default function Home() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useReducer((state, action) : any => {
    switch(action.type) {
      case 'open':
        return {
          open: true,
          post: action.post
        }

      case 'close':
        return {
          open: false
        }

      case 'update':
        return {
          open: true,
          post: {...state.post, ...action.post}
        }
    }
  }, {
    open: false,
    post: {}
  })

  useEffect(() => {
    async function gp () {
      await getPosts()
    }

    gp()
  }, [])

  async function getPosts() {
    const resp = await fetch('/api/posts')
    const data = await resp.json()
    setPosts(data)
  }

  async function updatePost() {
    const resp = await fetch('/api/posts/' + post.post.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: post.post.title,
        author: post.post.author
      })
    })
    const data = await resp.json()
    const updatedPosts = posts.map(p => {
      return (p.id === data.data.id) ? data.data : p
    })

    setPost({type: 'close'})
    setPosts(updatedPosts)
  } 

  async function deletePost(id) {
    const resp = await fetch('/api/posts/' + id, {
      method: 'DELETE'
    })
    const data = await resp.json()

    const updatedPosts = posts.filter(p => p.id !== parseInt(data.id))
    

    setPost({type: 'close'})
    setPosts(updatedPosts)
  } 

  return (
    <main>
      Home

      {/* <button className="p-4 bg-green-400 mr-4" onClick={() => getPosts()}>Get posts</button> */}
      <button className="p-4 bg-green-400" onClick={() => makePost()}>Post post</button>

      {posts.length > 0 && (
        <section className="flex flex-col gap-4 mt-20">
          <h2>All Posts</h2>
          {posts.map(_post => (
            <div className="p-4 bg-gray-300" key={_post.id}>
              <div>[Pst ID: {_post.id}]</div>
              <div><button onClick={() => deletePost(_post.id)} className="p-2 bg-red-400">Delete</button></div>
              <button onClick={() => setPost({type: 'open', post: _post})}>{_post.title}</button> by {_post.author}
            </div>
          ))}
        </section>
      )}

      {/* <section>
          <h2>Insert post</h2>
          <div>Title: <input type="text" className="border border-gray-800" value={post.post.title} onChange={(e) => setPost({type: 'update', post: {title: e.target.value}})} /></div> 
          <div>Author: <input type="text" className="border border-gray-800" value={post.post.author} onChange={(e) => setPost({type: 'update', post: {author: e.target.value}})} /></div>
      </section> */}

      {post.open && (
        <div>
          <section className="absolute top-0 left-0 bg-slate-900 opacity-60 w-full h-full"></section>
          <section className="absolute w-[50%] h-[50%] bg-gray-300 border-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div><button onClick={() => setPost({type: 'close'})}>Close X</button></div>
            <div>Title: <input type="text" value={post.post.title} onChange={(e) => setPost({type: 'update', post: {title: e.target.value}})} /></div> 
            <div>Author: <input type="text" value={post.post.author} onChange={(e) => setPost({type: 'update', post: {author: e.target.value}})} /></div>

            <div className="my-10">
              Post ID: {post.post.id}
              Post Title: {post.post.title} Post Author: {post.post.author}</div>

            <button onClick={updatePost} className="p-4 bg-blue-400 text-white ">Update</button>
          </section>
        </div>
      )}
    </main>
  )
}
