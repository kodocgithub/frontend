import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { URL_BACKEND } from "../config";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import jsPDF from "jspdf";

function DetailPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  const reportTemplateRef = useRef(null);
  const handleDownload = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
      },
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${URL_BACKEND}/dokumen/${id}`);
      const data = response.data.data;
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <main className="max-container mx-auto p-5">
        {data && (
          <>
            <button onClick={handleDownload} className="flex bg-white justify-center items-center px-5 py-3">
              <ArrowDownIcon
                className="w-5 cursor-pointer rounded-full "
              />{" "}
              Download
            </button>
            <h1 className="font-bold text-3xl text-center my-5 ">
              {data && data.judul}
            </h1>
            <div
              ref={reportTemplateRef}
              className="min-h-screen bg-white p-10"
              dangerouslySetInnerHTML={{ __html: data.content }}
            ></div>
          </>
        )}
      </main>
    </>
  );
}

export default DetailPage;
