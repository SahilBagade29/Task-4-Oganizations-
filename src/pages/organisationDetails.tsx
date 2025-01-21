"use client";
import { useEffect, useState } from "react";
import { getCompaniesData } from "../services/organisationApi";
import Image from "next/image";
import Link from "next/link";


const CompaniesDetails = () => {
  const [companyData, setCompanyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getCompaniesData("/data");
        setCompanyData(response);
        console.log(response, "123");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!companyData || companyData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <> 
      
      <div
        className="flex flex-wrap justify-center gap-6"
        style={{ marginTop: "85rem" }}
      >
        {companyData.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Image src={item.logo} width={50} height={40} alt="Logo" />
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Name: {item.name}
              </h5>
            </Link>
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Description: {item.description}
            </p>
            <div className="text-gray-700 mb-4">
              <h2 className="font-semibold text-lg mb-2">
                Contact Information:
              </h2>
              <ul>
                <li>
                  <span className="font-medium">Phone:</span>{" "}
                  <Link
                    href={`tel:${item.contact?.phone || "N/A"}`}
                    className="text-blue-500 hover:underline"
                  >
                    {item.contact?.phone || "N/A"}
                  </Link>
                </li>
                <li>
                  <span className="font-medium">Email:</span>{" "}
                  <Link
                    href={`mailto:${item.contact?.email || "N/A"}`}
                    className="text-blue-500 hover:underline"
                  >
                    {item.contact?.email || "N/A"}
                  </Link>
                </li>
                <li>
                  <span className="font-medium">Website:</span>{" "}
                  <Link
                    href={item.contact?.website || "N/A"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {item.contact?.website || "N/A"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-gray-700">
              <h2 className="font-semibold text-lg mb-2">Address:</h2>
              <p>
                {item.address?.street || "N/A"}, {item.address?.city || "N/A"},{" "}
                {item.address?.state || "N/A"}, {item.address?.zip || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CompaniesDetails;
