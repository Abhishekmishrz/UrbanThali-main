'use client'
import React, { useState } from "react";

function SingleNav({ active = false, id, title, icon, onClick }) {
  return (
    <button
      className={`nav-link ${active ? "active" : ""}`}
      id={`nav-${id}-tab`}
      type="button"
      role="tab"
      aria-controls={id}
      aria-selected={active ? "true" : "false"}
      onClick={() => onClick(id)}
    >
      <span>
        <i className={icon}></i>
      </span>
      {title}
    </button>
  );
}

const ProfileNavTab = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    
    // Hide all tab panes
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
      pane.classList.remove('show', 'active');
    });
    
    // Show the selected tab pane
    const selectedPane = document.getElementById(`nav-${tabId}`);
    if (selectedPane) {
      selectedPane.classList.add('show', 'active');
    }
  };

  return (
    <nav>
      <div
        className="nav nav-tabs tp-tab-menu flex-column"
        id="profile-tab"
        role="tablist"
      >
        <SingleNav
          active={activeTab === "profile"}
          id="profile"
          title="Profile"
          icon="fa-regular fa-user-pen"
          onClick={handleTabClick}
        />
        <SingleNav
          active={activeTab === "information"}
          id="information"
          title="Information"
          icon="fa-regular fa-circle-info"
          onClick={handleTabClick}
        />
        <SingleNav
          active={activeTab === "order"}
          id="order"
          title="My Orders"
          icon="fa-light fa-clipboard-list-check"
          onClick={handleTabClick}
        />
        <SingleNav
          active={activeTab === "password"}
          id="password"
          title="Change Password"
          icon="fa-regular fa-lock"
          onClick={handleTabClick}
        />
      </div>
    </nav>
  );
};

export default ProfileNavTab;
