import React from 'react';
import { Globe, ChevronDown, MapPin, Image, Users, Smile, Gift } from 'lucide-react';

const submitForm = () => {
  const postContent = document.getElementById('myinput').value;

  fetch('https://your-api-url-here.com/posts', { // Replace with the actual URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post: postContent }),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

const CreatePostModal = ({ handleOk }) => {
  return (
    <div className="container my-4">
      <div className="card bg-dark text-white">
        <div className="card-header d-flex justify-content-between align-items-center border-bottom border-secondary">
          <h5 className="mb-0">Create post</h5>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <img src="/api/placeholder/40/40" alt="Mahfuz Ahmed" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
            <div>
              <h6 className="mb-0">Mahfuz Ahmed</h6>
              <button className="btn btn-sm btn-secondary d-flex align-items-center">
                <Globe size={14} className="me-1" />
                Public
                <ChevronDown size={14} className="ms-1" />
              </button>
            </div>
          </div>
          <div className="mb-3">
            <input type="text" id="myinput" className="form-control bg-dark text-white border-0" placeholder="What's on your mind, Mahfuz?" />
          </div>
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-outline-light me-2">
              <MapPin size={20} />
            </button>
            <button className="btn btn-outline-light">
              <Image size={20} />
            </button>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn btn-light me-2">Aa</button>
            <button className="btn btn-outline-light">
              <Smile size={20} />
            </button>
          </div>
          <div className="mt-3 p-2 bg-secondary bg-opacity-25 rounded">
            <h6 className="mb-2">Add to your post</h6>
            <div className="d-flex flex-wrap">
              <button className="btn btn-outline-light me-2 mb-2"><Image size={20} /></button>
              <button className="btn btn-outline-light me-2 mb-2"><Users size={20} /></button>
              <button className="btn btn-outline-light me-2 mb-2"><Smile size={20} /></button>
              <button className="btn btn-outline-light me-2 mb-2"><MapPin size={20} /></button>
              <button className="btn btn-outline-light me-2 mb-2">GIF</button>
              <button className="btn btn-outline-light mb-2"><Gift size={20} /></button>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" onClick={() => { submitForm(); handleOk(); }}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
