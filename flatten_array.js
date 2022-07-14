const data = [
    {
        name: "Spleff Gorbinson",
        id: 3,
        title: "Janitor",
        directReports: [
            {
                name: "Al Gore",
                id: 1,
                title: "Developer",
                directReports: []
            },
            {
                name: "Amaria Crambles",
                id: 2,
                title: "Architect",
                directReports: []
            }
        ]
    },
    {
        name: "John Deere",
        id: 4,
        title: "Developer",
        directReports: []
    },
    {
        name: "John Doe",
        id: 5,
        title: "Developer",
        directReports: []
    },
    {
        name: "Jane Dimploop",
        id: 6,
        title: "Manager",
        directReports: [
            {
                name: "Samanthana Branthis",
                id: 7,
                title: "Developer",
                directReports: []
            }
        ]
    }
];

/**
 * Write a function that flattens the array
 * of objects and returns an array.
 */

let employees = [];

function flatten(data) {

    for (let i = 0; i < data.length; i++) {
        employees.push(data[i]);
        if (data[i].directReports.length > 0) {
            flatten(data[i].directReports); // using recursion since we don't know how many levels directReports goes
        }
    }

};

flatten(data);
console.log(employees);