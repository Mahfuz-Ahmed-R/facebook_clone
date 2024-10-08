import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import api from '../api';
import {useUser} from './UserProvider';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const {user} = useUser();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/post/'); // Use axios to fetch posts
        setPosts(response.data); // Update state with the fetched posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="container col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mt-3  ">
      {posts.map((post) => (
        <div key={post.id} className="">
          <div className="card bg-dark text-white mt-2">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <img
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${user.id}`}
                  alt="Profile"
                  className="rounded-circle me-2"
                  style={{ width: '40px', height: '40px' }}
                />
                <div>
                  <h6 className="mb-0">{post.user.username}</h6>
                  <small className="text-muted">{post.date_posted}</small>
                </div>
              </div>
              <div>
                <MoreHorizontal />
              </div>
            </div>
            <div className="card-body">
              {
                post.image && (
                  <img
                    src={post.image}
                    alt="Post"
                    className="img-fluid mb-3 w-100"
                    style={{ maxHeight: '500px' }}
                  />
                )
              }
              <p className="card-text">{post.content}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span className="me-2">❤️😮👍</span>
                  <span>157</span>
                </div>
                <div>
                  <span className="me-2">4 comments</span>
                  <span>7 shares</span>
                </div>
              </div>
            </div>
            <div className="row card-footer">
              <div className="col-4 d-flex justify-content-center">
                <button className="btn btn-dark d-flex align-items-center">
                  <Heart size={20} className="me-2" />
                  Like
                </button>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <button className="btn btn-dark d-flex align-items-center">
                  <MessageCircle size={20} className="me-2" />
                  Comment
                </button>
              </div>
              <div className="col-4 d-flex justify-content-center">
                <button className="btn btn-dark d-flex align-items-center">
                  <Share2 size={20} className="me-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
