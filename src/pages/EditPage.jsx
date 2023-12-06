import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { URL_BACKEND } from "../config";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EditPage = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    judul: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${URL_BACKEND}/dokumen/rubah-judul/${id}`, {
      judul: form.judul,
    });
    console.log(response)
    alert("dokumen diedit!");
    navigate("/manage");
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${URL_BACKEND}/dokumen/${id}`);
      setForm(res.data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const user = Cookies.get("user");
    if (!user) {
      navigate("/login");
    } else {
      return;
    }
  }, []);
  return (
    <>
      <Navbar />
      <main className="max-container">
        <h1 className="text-3xl font-bold text-center my-5">
          Edit Judul Dokumen{" "}
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col p-6 gap-4">
          {form && (
            <>
              <label className="text-xl font-semibold">Judul Dokumen :</label>
              <input
                className="rounded-xl border border-black bg-opacity-50 outline-none bg-white px-2 py-3"
                value={form.judul}
                onChange={handleChange}
                name="judul"
                type="text"
              />
              <button
                type="submit"
                className="bg-green-500 mt-10 px-3 py-4 uppercase font-bold rounded-xl hover:bg-green-600 duration-300 ease-in-out"
              >
                Edit
              </button>
            </>
          )}
        </form>
      </main>
    </>
  );
};

export default EditPage;
