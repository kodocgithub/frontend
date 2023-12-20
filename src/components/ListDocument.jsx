import {
  DocumentTextIcon,
  EyeIcon,
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { URL_BACKEND } from "../config";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function ListDocument(props) {
  const handleDelete = async () => {
    const response = await axios.delete(`${URL_BACKEND}/dokumen/${props.id}`);
    alert(response.data.message);
    window.location.reload();
  };

  const navigate = useNavigate();
  const reportTemplateRef = useRef(null);
  const handleDownload = () => {
    const doc = new jsPDF();
    const content = props.content;
    doc.html(content, {
      async callback(doc) {
        await doc.save("pdf_name");
      },
    });
  };

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
        <EyeIcon
          onClick={() => navigate(`/detail/${props.id}`)}
          className="w-12 cursor-pointer rounded-full p-3 hover:bg-green-500"
        />
        <PencilIcon
          onClick={props.onClick}
          className="w-12 cursor-pointer rounded-full p-3 hover:bg-green-500"
        />
        <PencilSquareIcon
          onClick={() => navigate(`/edit-document/${props.id}`)}
          className="w-12 cursor-pointer rounded-full p-3 hover:bg-green-500"
        />
        <TrashIcon
          onClick={handleDelete}
          className="w-12 cursor-pointer rounded-full p-3 hover:bg-green-500"
        />
      </div>
    </li>
  );
}

export default ListDocument;
