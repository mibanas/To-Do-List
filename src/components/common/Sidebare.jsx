import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiTable,
  HiViewBoards,
} from "react-icons/hi";

const Sidebare = () => {
  return (
    <div className="h-screen w-2/12">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-28 h-28 mb-3 rounded-[50%] text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 20a8 8 0 0 1-5-1.8v-.6c0-1.8 1.5-3.3 3.3-3.3h3.4c1.8 0 3.3 1.5 3.3 3.3v.6a8 8 0 0 1-5 1.8ZM2 12a10 10 0 1 1 10 10A10 10 0 0 1 2 12Zm10-5a3.3 3.3 0 0 0-3.3 3.3c0 1.7 1.5 3.2 3.3 3.2 1.8 0 3.3-1.5 3.3-3.3C15.3 8.6 13.8 7 12 7Z"
                clip-rule="evenodd"
              />
            </svg>

            <p className="mb-4">Sanabi</p>
          </div>

          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiChartPie}>
              <Link to={"/"}>Backlog</Link>
            </Sidebar.Item>
            <Sidebar.Item icon={HiViewBoards}>
              <Link to={"/Kanban"}>Kanban</Link>
            </Sidebar.Item>

            <Sidebar.Item icon={HiArrowSmRight}>Sign In</Sidebar.Item>
            <Sidebar.Item icon={HiTable}>Sign Up</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default Sidebare;
