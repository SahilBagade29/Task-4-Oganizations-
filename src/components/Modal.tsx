import { useState, useEffect } from "react";

interface Employee {
  id: number;
  name: string;
  designation: string;
}

interface ModalProps {
  type: "create" | "edit" | "delete";
  employee?: Employee | null;
  onSave: (employee: Employee) => void;
  onDelete: (id: number) => void;
  onClose: () => void;
}

const Modal = ({ type, employee, onSave, onDelete, onClose }: ModalProps) => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");

  useEffect(() => {
    if (employee) {
      setName(employee.name);
      setDesignation(employee.designation);
    }
  }, [employee]);

  const handleSave = () => {
    if (!name || !designation) return;
    onSave({ id: employee ? employee.id : Date.now(), name, designation });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {type === "create" ? "Add Employee" : type === "edit" ? "Edit Employee" : "Delete Employee"}
        </h2>

        {type === "delete" ? (
          <>
            <p>Are you sure you want to delete <strong>{employee?.name}</strong>?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button onClick={onClose} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
              <button onClick={() => onDelete(employee!.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full border p-2 mb-2"
            />
            <div className="flex justify-end space-x-2 mt-4">
              <button onClick={onClose} className="bg-gray-400 text-white px-3 py-1 rounded">Cancel</button>
              <button onClick={handleSave} className="bg-blue-500 text-white px-3 py-1 rounded">
                {type === "edit" ? "Update" : "Create"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;