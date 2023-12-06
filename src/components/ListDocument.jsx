import {  DocumentTextIcon, PencilIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import {URL_BACKEND} from "../config"
import React from "react";
import { useNavigate } from "react-router-dom";

function ListDocument(props) {
  const handleDelete = async () => {
    const response = await axios.delete(`${URL_BACKEND}/dokumen/${props.id}`)
    alert(response.data.message)
    window.location.reload()
  }

  const navigate= useNavigate()
  

  return (
    <li
      className="w-full flex md:flex-row flex-col items-center justify-between gap-2 border-2 rounded-xl px-2 py-3 border-black cursor-pointer hover:bg-green-300 duration-300 ease-in "
      // onClick={props.onClick}
    >
      <div className="flex gap-2 items-center">
        <DocumentTextIcon className="w-10" />
        <p>{props.judul}</p>
      </div>
      <div className="flex gap-4 items-center">
        <PencilIcon onClick={props.onClick} className="w-12 cursor-pointer rounded-full p-3 hover:bg-green-500"/>
        <PencilSquareIcon onClick={()=> navigate(`/edit-document/${props.id}`)} className="w-12 cursor-pointer rounded-full p-3 hover:bg-green-500"/>
        <TrashIcon onClick={handleDelete} className="w-12 cursor-pointer rounded-full p-3 hover:bg-green-500"/>
      </div>
    </li>
  );
}

export default ListDocument;
