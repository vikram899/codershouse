import React, { useEffect, useState } from "react";
import { RoomCard, StartRoomCard } from "../components";
import { getAllRooms } from "../http";

const Rooms = () => {
  const [startRoom, setStartRoom] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getAllRooms();
      const { rooms } = data;
      setRooms(rooms);
    })();
  }, []);

  const handleStartRoomClick = () => {
    setStartRoom(!startRoom);
  };
  return (
    <div className="mx-auto w-3/4 mt-10">
      <div className="flex justify-between pb-3 border-b-2 border-blue-500 rounded">
        <div className="flex">
          <span className="mx-5">All voice rooms</span>
          <div className="flex rounded-lg bg-gray-800">
            <img src="/images/search.png" className="p-0.5"></img>
            <input
              className="bg-transparent border-none p-0.5 outline-none"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <button
          onClick={handleStartRoomClick}
          className="flex bg-green-700 rounded-2xl p-1 px-2 hover:bg-green-600"
        >
          <img src="/images/start-room.png" className="mr-3"></img>
          <span>Start a room</span>
        </button>
      </div>
      <div className="mt-4 flex flex-wrap justify-evenly">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
      {startRoom && <StartRoomCard onClick={handleStartRoomClick} />}
    </div>
  );
};

export default Rooms;
