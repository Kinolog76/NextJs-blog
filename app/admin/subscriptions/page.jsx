"use client";
import SubsTableItem from "@/Components/AdminComponents/SubsTableItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Subscription() {
  const [emails, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get("/api/email");
    setEmails(response.data.emails);
  };

  const deleteEmail = async (_id) => {
    try {
      const response = await axios.delete("/api/email", { params: { id: _id } });
      toast.success(response.data.message);
      fetchEmails();
    } catch (error) {
      toast.error("Error deleting Email");
    }
    fetchEmails();
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  return (
    <div className="flex flex-col py-5 px-5 sm:pt-12 lg:pl-16">
      <h1 className="text-2xl font-bold">All subscriptions</h1>
      <div className="relative max-w-[700px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-sm text text-gray-100 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                Email subscription
              </th>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {emails
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .map((email) => {
                return <SubsTableItem key={email._id} {...email} deleteEmail={deleteEmail} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Subscription;
