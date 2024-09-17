import React from "react";

const LeaderBoardUserDetail = ({ users, setSelectedUser }) => {


  const handleClick = (user) => {
    setSelectedUser(user);
  };
  return (
    <div className="leader_board_user_details_container flex flex-col gap-3">
    {users.map((user) => (
      <div
        key={user.rank}
        onClick={()=>handleClick(user)}
        className="leader_board_user_detail flex items-center justify-between border-2 border-gray-200 rounded-[30px] px-2 py-1 cursor-pointer"
      >
        <div className="leader_board_user_left flex gap-4 items-center">
          <div className="w-12 h-12">
            <img
              className="w-full h-full object-cover rounded-full"
              src={user.image}
              alt="user"
            />
          </div>
          <div>
            <h3 className="text-md font-medium">{user.name}</h3>
            <p className="text-xs tracking-wider text-gray-500">
              Rank: {user.rank}
            </p>
          </div>
        </div>
        <div className="leader_board_user_middle text-yellow-400 font-medium">
          <p>Prize: &#8377; {user.prize} </p>
        </div>
        <div className="leader_board_user_right px-8 text-green-500 font-medium">
          <p>{user.number}</p>
        </div>
      </div>
    ))}
  </div>
  )
  
};

export default LeaderBoardUserDetail;
