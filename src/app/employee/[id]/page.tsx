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
<div className="flex flex-wrap justify-center gap-6 tracking-wider">
    <div
      key={empid.id}
      className="w-full sm:w-2/3 lg:w-1/2 xl:w-1/3 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4"
      >
      <div className="p-4">
        <p className="text-center font-bold text-lg text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
           {empid.name}
      <img alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-15 w-20 rounded-full"
      />
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Gender: {empid.gender}
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Nationality: {empid.nationality}
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Phone:
          <Link
              href={`tel:${empid.contact?.phone || "N/A"}`}
              className="text-blue-500 hover:underline"
           >
              {empid.contact?.phone || "N/A"}
          </Link> 
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Email: 
          <Link
            href={`tel:${empid.contact?.phone || "N/A"}`}
            className="text-blue-500 hover:underline"
           >
            {empid.contact?.phone || "N/A"}
          </Link> 
        </p><br />
    
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Role: {empid.organizationDetails.role}
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Designation: {empid.organizationDetails.designation}
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Department: {empid.organizationDetails.department}
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Employee Code: {empid.additionalDetails.employeeCode}
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Date of Joining: {empid.additionalDetails.dateOfJoining}
        </p><br />

        <p className="font-normal text-gray-700 dark:text-gray-400">
          Location: {empid.additionalDetails.location}
        </p><br />

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
