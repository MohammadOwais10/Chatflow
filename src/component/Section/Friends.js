import React, { useContext, useEffect, useState } from "react";
import "./Friends.css";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import AssistantIcon from "@mui/icons-material/Assistant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Data } from "../../App";
import { MemberList } from "../Collection/Collection";

const Friends = () => {
  const { member, setMember } = useContext(Data);
  const [item, setItem] = useState(member);
  const [search, setSearch] = useState("");
  const headerButton = ["Online", "All", "Pending", "Blocked"];

  useEffect(() => {
    setItem(member);
  }, [member]);

  useEffect(() => {
    const getData = setTimeout(() => {
      if (search.length > 0) {
        let findMember = item.filter((list) =>
          list.name.toLowerCase().includes(search)
        );
        setItem([...findMember]);
      } else {
        setItem(member);
      }
    }, 1000);
    return () => clearTimeout(getData);
  }, [search]);

  const handleClick = (btnClicked) => {
    let buttonClicked = btnClicked.btnHeader;
    console.log(buttonClicked);
    switch (buttonClicked) {
      case "Online": {
        console.log("online clicked");
        let memList = [...MemberList];
        let findMember = memList.filter((list) => list.online === true);
        setItem([...findMember]);
        break;
      }
      case "Pending": {
        console.log("Pending clicked");
        let memList = [...MemberList];
        let findMember = memList.filter((list) => list.pending === true);
        setItem([...findMember]);
        break;
      }
      case "Blocked": {
        let memList = [...MemberList];
        console.log("Blocked clicked");
        let findMember = memList.filter((list) => list.blocked === true);
        setItem([...findMember]);
        break;
      }
      default: {
        setItem(member);
        break;
      }
    }
  };

  return (
    <>
      <div className="friends">
        <nav class="friends-header">
          <div class="friends-container">
            <span>
              <Diversity1Icon />
              Friends
            </span>
            {headerButton.map((btnHeader) => {
              return (
                <button
                  onClick={() => {
                    handleClick({ btnHeader });
                  }}
                  className={
                    btnHeader === "Online" ? "activeClass" : "inactiveClass"
                  }
                  aria-current="page"
                >
                  {btnHeader}
                </button>
              );
            })}
            <Button variant="contained" color="success">
              Add Friend
            </Button>
          </div>
        </nav>

        <form class="friend-search">
          <input
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <SearchIcon
            style={{ position: "absolute", right: "30px", color: "grey" }}
          />
        </form>

        <div className="friend-total">
          <h4>Group Available - {item.length}</h4>
        </div>

        <div className="friend-lists">
          {item.map((list, index) => {
            return (
              <div
                className="friend-lists-line"
                key={index}
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
                <span>
                  <AssistantIcon
                    style={{
                      color: "lightGrey",
                      background: "#212222",
                      borderRadius: "50%",
                      padding: "8px",
                      margin: "5px",
                    }}
                  />

                  <MoreVertIcon
                    style={{
                      color: "lightGrey",
                      background: "#212222",
                      borderRadius: "50%",
                      padding: "8px",
                      margin: "5px",
                    }}
                  />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Friends;
