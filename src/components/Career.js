import React from "react";

const Career = (props) => {
  return (
    <>
      <div>
        <h1>
          {props.location.state.loggedUser.username} Welcome to Career
          Management Application
        </h1>
      </div>
    </>
  );
};

export default Career;
