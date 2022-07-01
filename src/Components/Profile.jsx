import React from "react";

const Profile = () => {
    return (
        <div className="app-wrapper__content">
        <div className="main__content__foto">
          <img src="https://www.business2community.com/wp-content/uploads/2018/02/Tips-for-a-Perfectly-Irresistible-Blog-Post.jpg" 
          alt="main content foto" />
        </div>
        <div className="app-wrapper__content__avatar">
          avatar + description
        </div>
        <div className="app-wrapper__content__myPosts">
          my Posts
        </div>
        <div className="app-wrapper__content__newPost">
          New Post
        </div>
        <div className="app-wrapper__content__post-item">
          post 1
        </div>
      </div>
    );
}

export default Profile;