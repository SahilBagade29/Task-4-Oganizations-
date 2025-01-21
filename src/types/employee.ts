export interface Employee {
    id: string;
    name: string;
    gender: string;
    nationality: string;
    contact: {
      phone: string;
      email: string;
    };
    organizationDetails: {
      role: string;
      designation: string;
      department: string;
    };
    additionalDetails: {
      employeeCode: string;
      dateOfJoining: string;
      location: string;
      address: {
        street: string;
        city: string;
        state: string;
        zip: string;
      };
    };
  };