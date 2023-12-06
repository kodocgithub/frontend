import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import iconBack from "../assets/icon-back.svg";
import iconPlus from "../assets/icon-plus.svg";
import {URL_BACKEND} from "../config"
import axios from "axios";
import ListDocument from "./ListDocument";

export default function AllDocument() {
  const [allDokumen, setAllDokumen] = useState()
    const navigation = useNavigate()
    useEffect(() => {
        const fetchAllDokumen = async ()=>{
            const res = await axios.get(`${URL_BACKEND}/dokumen`)
            setAllDokumen(res.data.data)
            console.log(res.data.data)
        }
        fetchAllDokumen()
    },[])
  return (
    <section className="py-16 px-20 h-[75vh] overflow-auto">
      <div>
      {!allDokumen ? <p>loading....</p> : <ul className="flex flex-col gap-4">
            {allDokumen.map((dokumen, idx) => {
                return <ListDocument judul={dokumen.judul} id={dokumen._id} onClick={() => {navigation(`/edit/${dokumen._id}`)}} key={idx} />
            })}
        </ul> }
      </div>
      <div>
        <Link to={"/"} className="absolute bottom-0 left-8 md:left-20">
          <img src={iconBack} alt="icon-plus" className="w-10 md:w-[5.25rem]" />
        </Link>
        <Link to={"/create-document"} className="absolute bottom-0 right-8 md:right-20">
          <img src={iconPlus} alt="icon-plus" className="w-10 md:w-[5.25rem]" />
        </Link>
      </div>
    </section>
  );
}
