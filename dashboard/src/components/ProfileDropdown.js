import { useState, useRef, useEffect } from "react";

function ProfileDropdown({ onLogout }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setOpen(!open);
  };

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile" ref={dropdownRef}>
      <div className="avatar" onClick={toggleDropdown}>User</div>

      {open && (
        <div className="profile-dropdown">
          <button onClick={onLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;