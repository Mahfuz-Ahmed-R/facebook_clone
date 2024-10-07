import { Camera, Video, Smile } from "lucide-react";
import CreatePostModal from "./CreatePostModal";
import React, { useState } from 'react';
import { Modal } from 'antd';

const SharingPost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mt-3">
      <div className="card bg-dark text-white">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <img
              src="/api/placeholder/40/40"
              alt="User avatar"
              className="rounded-circle me-3"
              style={{ width: "40px", height: "40px" }}
            />
            <input
              type="text"
              placeholder="What's on your mind, Mahfuz?"
              className="form-control bg-secondary text-white"
              onClick={showModal}
              style={{ borderRadius: "20px" }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-danger d-flex align-items-center">
              <Video size={20} className="me-2" />
              <span>Live video</span>
            </button>
            <button className="btn btn-success d-flex align-items-center">
              <Camera size={20} className="me-2" />
              <span>Photo/video</span>
            </button>
            <button className="btn btn-warning d-flex align-items-center">
              <Smile size={20} className="me-2" />
              <span>Feeling/activity</span>
            </button>
          </div>
        </div>
        <Modal open={isModalOpen} footer={null} onCancel={handleCancel}>
          <CreatePostModal handleOk={handleOk} />
        </Modal>
      </div>
    </div>
  );
};

export default SharingPost;
