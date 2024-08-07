// Function to fetch records from the database and populate the table
function fetchRecords() {
    // Simulated data for demonstration
    const records = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Smith", email: "jane@example.com" }
        // Add more records as needed
    ];

    const tableBody = document.getElementById("recordBody");
    tableBody.innerHTML = ""; // Clear existing table rows

    records.forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.email}</td>
            <td><button onclick="deleteRecord(${record.id})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to add a new record
function addRecord(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Simulated function to add record to database
    console.log(`Adding record: Name - ${name}, Email - ${email}`);

    // Simulated function to fetch records again after adding new record
    fetchRecords();

    // Clear input fields after submission
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}

// Function to delete a record
function deleteRecord(id) {
    // Simulated function to delete record from database
    console.log(`Deleting record with ID ${id}`);

    // Simulated function to fetch records again after deleting record
    fetchRecords();
}

// Event listener for form submission
document.getElementById("form").addEventListener("submit", addRecord);

// Fetch records when page loads
fetchRecords();
