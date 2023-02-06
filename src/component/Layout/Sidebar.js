import React, { useState, useContext, useEffect } from "react";
import "./Sidebar.css";
import { Data } from "../../App";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import { SectionLink, MemberList } from "../Collection/Collection";

const Sidebar = () => {
  const { member, setMember } = useContext(Data);
  const [search, setSearch] = useState("");

  const handleInput = (value) => {
    setSearch(value);
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      if (search.length > 0) {
        let findMember = member.filter((list) =>
          list.name.toLowerCase().includes(search)
        );
        setMember([...findMember]);
      } else {
        setMember(MemberList);
      }
    }, 1000);
    return () => clearTimeout(getData);
  }, [search]);

  return (
    <>
      <div className="sidebar-search">
        <input
          type="text"
          placeholder="Find or Start a conversation"
          onChange={(e) => {
            handleInput(e.target.value.toLowerCase());
          }}
        />
      </div>

      <div className="sidebar-section">
        {SectionLink.map((list, idx) => {
          return (
            <div key={idx} className="sidebar-section head">
              <NavLink
                to={list.path}
                className={({ isActive }) => {
                  return isActive ? "focus" : "noFocus";
                }}
              >
                <span>{list.icon}</span>
                <span
                  style={{
                    marginLeft: "1.5rem",
                    fontSize: "18px",
                  }}
                >
                  {list.title}
                </span>
              </NavLink>
            </div>
          );
        })}
      </div>

      <div className="sidebar-list">
        <div className="direct-message">
          Direct Message <AddIcon />
        </div>
        {member.map((list, idx) => {
          return (
            <div
              className="sidebar-list member"
              key={idx}
              style={{ color: list.online ? "white" : "grey" }}
            >
              <span>
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "white",
                  }}
                >
                  {list.icon}
                </span>
                <span style={{ display: "block", marginLeft: "10px" }}>
                  <h3 style={{ margin: "0px" }}>{list.name}</h3>
                  <p style={{ margin: "0px" }}>{list.member} </p>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
