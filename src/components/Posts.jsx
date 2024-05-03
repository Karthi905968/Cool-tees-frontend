import React, { useEffect, useState } from "react";
import { GripHorizontal} from "lucide-react";
import axios from "axios";
export const Posts = () => {
  const [toggle, setToggle] = useState(false);
  const [postData,setPostData]=useState()
  const ToggleFunction = () => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  useEffect(()=>{
    let fetchData = async ()=>{
         const {data} = await axios.get('http://127.0.0.1:8000/post/')
         console.log(data)
    }

    fetchData()
  },[])

  return (
    <div className="post-section">
      <div className="section-2">
        <div className="posts">
          <main id="user-sec">
            <img
              src="http://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
              alt="user-image"
              id="user-image"
            />
          </main>
          <main id="post-sec">
            <section className="menu-dot" style={{ textAlign: "right" }}>
              <GripHorizontal
                style={{ cursor: "pointer" }}
                onClick={ToggleFunction}
              />{" "}
              <br />
              {toggle ? (
                <button className="delete-button">Delete</button>
              ) : (
                <></>
              )}
            </section>
            <span id="user-name">
              Name <br /> <span id="post-date">date</span>
            </span>
            <p style={{ fontSize: "1.5rem", minHeight: "2rem" }}>Comments</p>

            <img
              src="https://sumacgeo.ca/wp-content/uploads/2017/06/circle-nature-forest-trees-fog.png"
              alt=""
              id="post-image"
            />
          </main>
        </div>
      </div>
      <span className="horizontal-line"></span>
    </div>
  );
};
