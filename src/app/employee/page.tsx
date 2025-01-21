"use client";
import { getEmployeesData } from "@/services/employeeApi";
import { Employee } from "@/types/employee";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PersonalData = () => {
  const [employeeData, setEmployeeData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeesData("/employees");
        setEmployeeData(response);
        console.log(response, "Fetched Data");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>
        <h1 className="text-center text-2xl font-bold my-8">
          Total Number Employees In an Organization
        </h1>
        <div className="flex justify-center mb-8">
          <Image
            src={"/assests/Acme.webp"}
            className="rounded-md shadow-lg"
            width={200}
            height={200}
            alt="Logo"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-auto border border-gray-200 rounded-lg shadow dark:border-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-10 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
              {employeeData?.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <td className="px-10 py-4 text-sm text-gray-900 dark:text-white">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {item.name}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <Link
                      href={`/employee/${item.id}`}
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PersonalData;
