
"use client";

import { useState } from "react";
import Modal from "../components/Modal";

interface Employee {
  id: number;
  name: string;
  designation: string;
}

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    { id: 1, name: "John ", designation: "Software Engineer" },
    { id: 2, name: " Smith", designation: "Product Manager" },
  ]);

  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"create" | "edit" | "delete">("create");

  const openModal = (type: "create" | "edit" | "delete", employee?: Employee) => {
    setModalType(type);
    setSelectedEmployee(employee || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = (employee: Employee) => {
    if (modalType === "edit") {
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === employee.id ? employee : emp))
      );
    } else {
      setEmployees([...employees, { ...employee, id: employees.length + 1 }]);
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    closeModal();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
      <button
        onClick={() => openModal("create")}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Employee
      </button>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Designation</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="text-center">
              <td className="border p-2">{employee.id}</td>
              <td className="border p-2">{employee.name}</td>
              <td className="border p-2">{employee.designation}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => openModal("edit", employee)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => openModal("delete", employee)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <Modal
          type={modalType}
          employee={selectedEmployee}
          onSave={handleSave}
          onDelete={handleDelete}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default EmployeeManagement;