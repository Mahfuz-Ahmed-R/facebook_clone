import React from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const Posts = () => {
  return (
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mt-3">
      <div className="card bg-dark text-white">
        <div className="card-header d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="/api/placeholder/40/40" alt="Profile" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
            <div>
              <h6 className="mb-0">Hello with IR</h6>
              <small className="text-muted">10 hours ago · 🌐</small>
            </div>
          </div>
          <div>
            <MoreHorizontal />
          </div>
        </div>
        <div className="card-body">
          <p className="card-text">National Geographic Award winning photograph of the year 📷</p>
          <img src="/api/placeholder/600/400" alt="Award-winning photograph" className="img-fluid rounded mb-3" />
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
  );
};

export default Posts;
