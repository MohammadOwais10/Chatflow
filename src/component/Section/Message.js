import React, { useContext } from "react";
import "./Message.css";
import { Data } from "../../App";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import SendIcon from "@mui/icons-material/Send";
import ReportIcon from "@mui/icons-material/Report";
import { Button } from "@mui/material";

const Message = () => {
  const { member, setMember } = useContext(Data);

  return (
    <>
      <div>
        <div class="message-header">
          <span>
            <MarkUnreadChatAltIcon
              style={{
                width: "37px",
                height: "37px",
                color: "white",
              }}
            />
            Message Request
          </span>
        </div>

        <div className="message-lists">
          {member
            .filter((person) => person.message === true)
            .map((list, idx) => {
              return (
                <div
                  className="message-lists-line"
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
                  <span>
                    <Button
                      style={{
                        color: "lightGrey",
                        background: "#212222",
                        padding: "8px",
                        margin: "5px",
                      }}
                    >
                      Reply
                      <SendIcon />
                    </Button>
                    <Button
                      style={{
                        color: "lightGrey",
                        background: "#212222",
                        padding: "8px",
                        margin: "5px",
                      }}
                    >
                      <ReportIcon />
                    </Button>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Message;
