import { useEffect, useState } from "react";

// const User = (props) => {
const User = ({ name }) => {
  useEffect(() => {
    // API call
  }, []);

  //   async function getData() {
  //     const data = await fetch();
  //   }

  return (
    <div className="user-card container mx-auto">
      <h2>Name: {name}</h2>
      <h3>Location: Indore</h3>
      <h4>Contact Info: @FairyTaniya</h4>
    </div>
  );
};

export default User;
