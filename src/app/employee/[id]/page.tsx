import { getEmployeesData } from '@/services/employeeApi'
import { log } from 'console';
import Link from 'next/link'

const EmployeeId = async(props:any) => {

    const data = getEmployeesData("/employees")
    const emp = await data;
    console.log(props.params.id)
    const userId = props.params.id;
     const empid = emp[userId - 1]

  return (
    <>
       <div>
        <h1 className="text-center text-2xl font-bold my-8">
   Employees Details 
</h1>
<div className="flex flex-wrap justify-center gap-6">
    <div
      key={empid.id}
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
    >
      <div className="p-4">
        <p className="font-bold text-lg text-gray-900 dark:text-white mb-2">
          Name: {empid.name}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Gender: {empid.gender}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Nationality: {empid.nationality}
        </p>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Phone:
          <Link
              href={`tel:${empid.contact?.phone || "N/A"}`}
              className="text-blue-500 hover:underline"
           >
              {empid.contact?.phone || "N/A"}
          </Link> 
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Email: 
          <Link
            href={`tel:${empid.contact?.phone || "N/A"}`}
            className="text-blue-500 hover:underline"
           >
            {empid.contact?.phone || "N/A"}
          </Link> 
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Role: {empid.organizationDetails.role}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Designation: {empid.organizationDetails.designation}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Department: {empid.organizationDetails.department}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Employee Code: {empid.additionalDetails.employeeCode}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Date of Joining: {empid.additionalDetails.dateOfJoining}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Location: {empid.additionalDetails.location}
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Address: {empid.additionalDetails.address.street}, {empid.additionalDetails.address.city}, {empid.additionalDetails.address.state}, {empid.additionalDetails.address.zip}
        </p>
      </div>
    </div>
  
</div>
      </div>
    </>
  )
}

export default EmployeeId
