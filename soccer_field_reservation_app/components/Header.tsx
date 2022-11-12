import React, { useState } from "react";
import Modal from "./Modal";
import ReactDom from "react-dom";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal && <Modal setOpenModal={setOpenModal} />}
      <div className="sticky top-0 w-full left-0 bg-inherit flex items-center justify-between p-4 border-b border-solid border-white">
        <h1 className="text-2xl select-none sm:text-6xl">
          System rezerwacji boisk
        </h1>
        <i
          onClick={() => setOpenModal(true)}
          className="fa-regular fa-user text-xl sm:text-4xl duration-300 hover:opacity-40 cursor-pointer"
        ></i>
      </div>
    </>
  );
}
