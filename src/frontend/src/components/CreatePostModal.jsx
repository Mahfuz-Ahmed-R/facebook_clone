import React from 'react';
import { Globe, ChevronDown, MapPin, Image, Users, Smile, Gift } from 'lucide-react';
import { useUser } from './UserProvider';
import api from '../api';

const CreatePostModal = ({ handleOk }) => {
  const { user } = useUser(); // Get user context

  const submitForm = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const postContent = document.getElementById('myinput').value; // Get the input value

    const postData = {
      image: null,
      content: postContent,
    };

    try {
      const response = await api.post('/post/', postData);
      console.log('Post created:', response.data);
      console.log('Post created:', postData);
      handleOk(); // Call the handleOk function to close the modal or perform additional actions
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="container my-4">
      <div className="card bg-dark text-white">
        <div className="card-header d-flex justify-content-between align-items-center border-bottom border-secondary">
          <h5 className="mb-0">Create post</h5>
        </div>
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <img src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${user.id}`} alt="Profile" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />
            <div>
              <h6 className="mb-0">{user.username}</h6>
              <button className="btn btn-sm btn-secondary d-flex align-items-center">
                <Globe size={14} className="me-1" />
                Public
                <ChevronDown size={14} className="ms-1" />
              </button>
            </div>
          </div>
          <form onSubmit={submitForm}> {/* Add onSubmit to form */}
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
            <div className="card-footer">
              <button className="btn btn-primary" type="submit"> {/* Set button type to submit */}
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
