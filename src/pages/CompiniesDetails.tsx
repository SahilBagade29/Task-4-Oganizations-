"use client";
import { useEffect, useState } from "react";
import { getCompaniesData } from "../services/page";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const CompiniesDetails = () => {
  const [companyData, setCompanydata] = useState<any[]>([]);
  console.log(companyData, "hii");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getCompaniesData("/data");
        setCompanydata(response);
        console.log(response, "123");
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl font-bold my-8">
        Welcome to Companies Details
      </h1>
      <div
        className="flex flex-wrap justify-center gap-6"
        style={{ marginTop: "85rem" }}
      >
        {companyData.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <Image src={item.logo} width={50} height={40} alt="Logo" />{" "}
            <Link href="#">
              {" "}
              {/* Organization Name */}
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {" "}
                Name: {item.name}{" "}
              </h5>{" "}
            </Link>{" "}
            {/* Organization Description */}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {" "}
              Description: {item.description}{" "}
            </p>{" "}
            {/* Contact Information */}
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
                    href={`mailto:${item.contact.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {item.contact?.email || "N/A"}
                  </Link>
                </li>
                <li>
                  <span className="font-medium">Website:</span>{" "}
                  <Link
                    href={item.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {item.contact?.website || "N/A"}
                  </Link>
                </li>
              </ul>
            </div>
            {/* Address */}
            <div className="text-gray-700">
              <h2 className="font-semibold text-lg mb-2">Address:</h2>
              <p>
                {item.address?.street || "N/A"}, {item.address?.city || "N/A"},{" "}
                {item.address?.state || "N/A"}, {item.address?.zip || "N/A"}
              </p>
            </div>
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export default CompiniesDetails;
