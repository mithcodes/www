const user = {
    lastActivityTime: null,
  };
  
  const posts = [];
  
  function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        resolve(post);
      }, 1000);
    });
  }
  
  function deletePost() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const deletedPost = posts.pop();
        resolve(deletedPost);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentTime = new Date().toLocaleString();
        user.lastActivityTime = currentTime;
        resolve(currentTime);
      }, 1000);
    });
  }
  
  createPost({ title: 'New Post 1', content: 'This is the first post.' })
    .then((post) => {
      console.log('Post created:', post);
      return updateLastUserActivityTime();
    })
    .then((lastActivityTime) => {
      console.log('Last activity time updated:', lastActivityTime);
      return deletePost();
    })
    .then((deletedPost) => {
      console.log('Deleted Post:', deletedPost);
      console.log('Remaining Posts:', posts);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  