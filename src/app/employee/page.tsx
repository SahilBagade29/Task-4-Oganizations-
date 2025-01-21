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
        <div className="flex flex-wrap justify-center gap-6">
          {employeeData?.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
            >
              <div className="p-4">
                <Link
                  href={`/employee/${item.id}`}
                  className="font-medium dark:text-blue-500 hover:text-blue-600 underline font-bold text-lg text-gray-900 dark:text-white mb-2"
                >
                  Name : {item.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PersonalData;
