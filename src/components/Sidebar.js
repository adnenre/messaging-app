import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { logoutAction } from "../actions/authActions";
import { setUser } from "../actions/index";
import User from "../containers/User";
import "./Sidebar.css";
import PhoneIcon from "./icons/PhoneIcon";
import MessageIcon from "./icons/MessageIcon";
import Actus from "./icons/Actus";
import Community from "./icons/Community";

const Sidebar = ({ contacts, authUser, logoutAction, setUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("chats");
  const menuRef = useRef(null);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    logoutAction();
    setUser(null);
    history.push("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const renderContent = () => {
    switch (activeTab) {
      case "chats":
        return filteredContacts.map((contact) => <User user={contact} key={contact.user_id} />);
      case "updates":
        return <div className="sidebar__placeholder">No updates yet</div>;
      case "communities":
        return <div className="sidebar__placeholder">No communities yet</div>;
      case "calls":
        return <div className="sidebar__placeholder">No recent calls</div>;
      default:
        return null;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case "chats":
        return "WhatsApp";
      case "updates":
        return "Updates";
      case "communities":
        return "Communities";
      case "calls":
        return "Calls";
      default:
        return "WhatsApp";
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__brand">
          <h1 className="sidebar__title">{getTitle()}</h1>
          <div className="sidebar__menu" ref={menuRef}>
            <button className="sidebar__menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              ⋮
            </button>
            {menuOpen && (
              <div className="sidebar__dropdown">
                <button onClick={handleLogout} className="sidebar__dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        {activeTab === "chats" && (
          <div className="sidebar__search">
            <input
              type="text"
              placeholder="Search or start new chat"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="sidebar__search-input"
            />
          </div>
        )}
      </div>

      <div className="sidebar__content">{renderContent()}</div>

      <div className="sidebar__footer">
        <button className={`sidebar__tab ${activeTab === "chats" ? "sidebar__tab--active" : ""}`} onClick={() => setActiveTab("chats")}>
          <span className="sidebar__tab-icon">
            <MessageIcon />
          </span>
          <span className="sidebar__tab-label">Chats</span>
        </button>
        <button className={`sidebar__tab ${activeTab === "updates" ? "sidebar__tab--active" : ""}`} onClick={() => setActiveTab("updates")}>
          <span className="sidebar__tab-icon">
            <Actus />
          </span>
          <span className="sidebar__tab-label">Updates</span>
        </button>
        <button className={`sidebar__tab ${activeTab === "communities" ? "sidebar__tab--active" : ""}`} onClick={() => setActiveTab("communities")}>
          <span className="sidebar__tab-icon">
            <Community />
          </span>
          <span className="sidebar__tab-label">Communities</span>
        </button>
        <button className={`sidebar__tab ${activeTab === "calls" ? "sidebar__tab--active" : ""}`} onClick={() => setActiveTab("calls")}>
          <span className="sidebar__tab-icon">
            <PhoneIcon />
          </span>
          <span className="sidebar__tab-label">Calls</span>
        </button>
      </div>
    </aside>
  );
};

const mapStateToProps = (state) => ({
  contacts: Object.values(state.contacts),
  authUser: state.auth.user,
});

const mapDispatchToProps = {
  logoutAction,
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
