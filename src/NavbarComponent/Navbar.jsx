import React from "react";

const navbar =()=>{
    return(
        <>
        <div className="navbar bg-base-100 bg-indigo-500/100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Myntra</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img src="/Images/priyanka.img.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        {/* <li><a>Settings</a></li> */}
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
        </>
    );
}
export default navbar;