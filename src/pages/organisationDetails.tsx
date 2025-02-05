"use client";
 import { useEffect, useState } from "react";
 import { getCompaniesData } from "@/services/organisationApi"
import Image from "next/image";
import Link from "next/link";


const CompaniesDetails = () => {
  const [companyData, setCompanyData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false)
  
  
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await getCompaniesData("/data")
        console.log(response, "hi")
        setCompanyData(response)
      } catch (error) {
        console.log(error)
      }finally {
          setLoading(false);
           }
    }
    fetchApi()
  },[])

  if (loading) {
       return (
        <div className="flex justify-center items-center h-screen">
           Loading...
           </div>
        );
      }

      return(
        <>
        <div >
          {/* <h1 className="text-center text-3xl font-bold  my-4">
            Total Number Organizations
          </h1> */}
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
                          className="px-20 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                          >
                            ID
                          </th>
                          <th
                          scope="col"
                          className="px-40 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                          >
                            Total Number of Companies
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200">
                          {companyData?.map((item) => (
                            <tr
                            key={item.id}
                            className="hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                
                            <td className="px-20 py-4 text-sm text-gray-900 dark:text-white">
                              {item.id}
                            </td>
                            <td className="px-60 py-4 text-sm text-gray-900 dark:text-white">
                              {item.name}
                            </td>
                            <td>
                              <Link href={``}></Link>
                            </td>
                           
                            </tr>
                          ))}
                      </tbody>
                    </table>
        
          </div>
        
        </div>
        </>
      )
}

export default CompaniesDetails;
