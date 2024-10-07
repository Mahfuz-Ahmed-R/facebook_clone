import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  ProductOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="d-flex justify-content-evenly align-items-center" style={{ backgroundColor: "#001529" }}>
        <div className="d-flex justify-content-evenly align-items-center" style={{marginLeft: "5%", width: "80%" }}>
          <p onClick={() => navigate("/")} className="h2 text-white" style={{cursor: "pointer"}}>
            <HomeOutlined />
          </p>
          <p onClick={() => navigate("/product")} className="h2 text-white" style={{cursor: "pointer"}}>
            <ProductOutlined />
          </p>
          <p onClick={() => navigate("/shop")} className="h2 text-white" style={{cursor: "pointer"}}>
            <ShopOutlined />
          </p>
          <p onClick={() => navigate("/friends")} className="h2 text-white" style={{cursor: "pointer"}}>
            <UsergroupAddOutlined />
          </p>
        </div>
        <div>
          <img src="sdsd" alt="logo" />
          </div>
      </div>
    </nav>
  );
};

export default Navbar;