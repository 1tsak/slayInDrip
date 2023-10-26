// app.js

document.getElementById('ticketForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const subject = document.getElementById('subject').value;
    const description = document.getElementById('description').value;

    if (subject && description) {
        const ticket = {
            subject,
            description,
            date: new Date().toJSON()
        };

        let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
        tickets.push(ticket);
        localStorage.setItem('tickets', JSON.stringify(tickets));

        document.getElementById('subject').value = '';
        document.getElementById('description').value = '';

        displayTickets();
    }
});

function displayTickets() {
    const ticketList = document.getElementById('ticketList');
    ticketList.innerHTML = '';

    const tickets = JSON.parse(localStorage.getItem('tickets')) || [];

    tickets.forEach((ticket, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'border-b border-gray-300 py-2 flex items-center justify-between';

        listItem.innerHTML = `
            <div>
                <strong>${ticket.subject}</strong><br>
                ${ticket.description}<br>
                <small>${new Date(ticket.date).toLocaleString()}</small>
            </div>
            <button class="text-red-500 ml-4" onclick="deleteTicket(${index})">Delete</button>
        `;
        ticketList.appendChild(listItem);
    });
}

function deleteTicket(index) {
    let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
    tickets.splice(index, 1);
    localStorage.setItem('tickets', JSON.stringify(tickets));
    displayTickets();
}

// Initial display of tickets
displayTickets();
