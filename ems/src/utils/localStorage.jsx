// Initial data
const Employee = {
  "employees": [
    {
      "id": 1,
      "name": "Aarav Sharma",
      "email": "employee1@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "new": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Update project report",
          "description": "Add the latest figures to the Q1 report.",
          "date": "2025-04-04",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix login bug",
          "description": "Resolve the issue with user login failures.",
          "date": "2025-03-29",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Client follow-up",
          "description": "Missed the scheduled call with client X.",
          "date": "2025-03-25",
          "category": "Client Management"
        }
      ]
    },
    {
      "id": 2,
      "name": "Sneha Iyer",
      "email": "employee2@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 2,
        "new": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Design landing page",
          "description": "Create initial mockups for new product launch.",
          "date": "2025-04-05",
          "category": "Design"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Review competitor analysis",
          "description": "Analyze top 3 competitors' strategies.",
          "date": "2025-03-30",
          "category": "Research"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Update brand guidelines",
          "description": "Incorporate latest changes in the color palette.",
          "date": "2025-04-03",
          "category": "Branding"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Team sync-up",
          "description": "Missed the design team sync due to delay.",
          "date": "2025-03-28",
          "category": "Communication"
        }
      ]
    },
    {
      "id": 3,
      "name": "Rohan Mehta",
      "email": "employee3@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "new": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Test mobile app",
          "description": "Ensure all features work smoothly on Android & iOS.",
          "date": "2025-04-04",
          "category": "Testing"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Fix UI bugs",
          "description": "Correct alignment issues on the dashboard.",
          "date": "2025-03-31",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Code review",
          "description": "Failed to complete peer review before deadline.",
          "date": "2025-03-26",
          "category": "Code Quality"
        }
      ]
    },
    {
      "id": 4,
      "name": "Priya Deshmukh",
      "email": "employee4@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 2,
        "new": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Data migration",
          "description": "Migrate client data from legacy system.",
          "date": "2025-04-03",
          "category": "Data Management"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Audit logs",
          "description": "Review system logs for any unusual activity.",
          "date": "2025-03-29",
          "category": "Security"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Patch update",
          "description": "Missed installing patch v1.2.1 on time.",
          "date": "2025-03-27",
          "category": "Maintenance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "title": "Optimize queries",
          "description": "Improve performance of slow database queries.",
          "date": "2025-04-04",
          "category": "Database"
        }
      ]
    },
    {
      "id": 5,
      "name": "Kunal Bhatt",
      "email": "employee5@example.com",
      "password": "123",
      "taskNumbers": {
        "active": 1,
        "new": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "title": "Organize team event",
          "description": "Plan quarterly team outing activities.",
          "date": "2025-04-06",
          "category": "HR"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "title": "Create training material",
          "description": "Develop onboarding resources for new hires.",
          "date": "2025-03-30",
          "category": "Training"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "title": "Conduct workshop",
          "description": "Couldn't conduct scheduled upskilling workshop.",
          "date": "2025-03-28",
          "category": "Training"
        }
      ]
    }
  ],
  };

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setlocalStorage = () => {
  // Only set if not already present
  if (!localStorage.getItem('employees')) {
    // ye Employee.employees array ke object ko refer kr rha hai confuse mt hona .. uske anday ek aur aray hai .object keandar array hai 
    localStorage.setItem('employees', JSON.stringify(Employee.employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
}

export const getlocalStorage = () => {
  try {
    const employees = JSON.parse(localStorage.getItem('employees')) || Employee;
    const admin = JSON.parse(localStorage.getItem('admin')) || admin;
    return { employees, admin };
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return { employees: Employee.employees, admin: admin };
  }
}

//    export const  setlocalStorage =() =>{
//     localStorage.setItem('employees', JSON.stringify(employees))
//     localStorage.setItem('admin', JSON.stringify(admin))
//    } 
//    export const  getlocalStorage =() =>{
//     const employees = JSON.parse(localStorage.getItem('employees'))

//     const admin = JSON.parse(localStorage.getItem('admin'))
    
//     return {employees,admin}
    
//    } 
  
  