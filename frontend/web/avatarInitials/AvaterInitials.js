import React, { memo } from "react";

const AvatarInitials = memo(function AvatarInitials({ firstName, lastName }) {
  const whitebackcolors = [
    "#E2DFD2",
    "#FFF5EE",
    "#F3E5AB",
    "#FFFAFA",
    "#F0FFF0",
    "#F5FFFA",
    "#F0FFFF",
    "#F0F8FF",

    "#FF5733",
    "#F3EB3F",
    "#3FF38B",
    "#3FF3CF",
    "#41C3EC",
    "#8D41EC",
    "#D941EC",
    "#EC4194",
    "#F63F4A",
  ];

  const getBackgroundColor = (list) => {
    // return list[Math.floor(Math.random() * list.length)];
    let first = firstName?.length ? firstName?.length : 0;
    let last = lastName?.length ? lastName?.length : 2;
    return list[Math.floor((first + last) % list.length)];
  };
  return (
    <div
      className="avatar"
      style={{
        borderRadius: "50%",
        fontSize: "1.5rem",
        width: "3.2rem",
        backgroundColor: getBackgroundColor(whitebackcolors),
        color: "black",
      }}
    >
      {firstName && firstName.charAt(0).toUpperCase()}
      {lastName && lastName.charAt(0).toUpperCase()}
    </div>
  );
});

export default AvatarInitials;
