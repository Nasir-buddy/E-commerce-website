import React from "react";

const Header = (props) => {
console.log("props in header", props)
  const logOutUser =() =>{
localStorage.setItem('loggedInUser' , '')
//window.location.reload()
props.changeUser('')
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-white  text-2xl font-semibold">
         Hey  <br /> <span className="text-3xl font-semibold">username</span> 
      </h1>

      <button onClick={logOutUser}className="bg-pink-300 text-black px-5 py-2 rounded-full ">Log out </button>
    </div>
  );
};

export default Header;
