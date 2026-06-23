const teamMembers = [
  {
    name: "Emanuel Portugal",
    role: "Project Manager",
    assignment:
      "Coordinate the progress update, track team completion, organize blockers, confirm prototype direction, and prepare final submission wording.",
    contribution: "20%"
  },
  {
    name: "Kirstyn Navarro",
    role: "Client Liaison",
    assignment:
      "Confirm client priorities from the interview, follow up on open questions, and gather screenshots or examples from Classy Clay's current request process.",
    contribution: "20%"
  },
  {
    name: "Darshan Parekh",
    role: "Technical Lead",
    assignment:
      "Build the Airtable base structure, confirm Make.com automation feasibility, and document the prototype or workspace link.",
    contribution: "20%"
  },
  {
    name: "Eli Hammett",
    role: "UI/UX Lead",
    assignment:
      "Create or update screenshots and wireframes for the dashboard, order intake view, customer request tracker, and menu management interface.",
    contribution: "20%"
  },
  {
    name: "Ashlyn Romero",
    role: "Documentation Lead",
    assignment:
      "Organize the progress report, document the current data model, format evidence of progress, and ensure the submission is clear and professional.",
    contribution: "20%"
  }
];

const dataModel = [
  {
    table: "Customers",
    fields: [
      "Customer ID",
      "First Name",
      "Last Name",
      "Phone Number",
      "Email Address",
      "Customer Type",
      "Preferred Contact Method",
      "Allergies",
      "Food Preferences",
      "Disliked Foods",
      "Past Orders",
      "Notes"
    ]
  },
  {
    table: "Requests / Orders",
    fields: [
      "Request ID",
      "Customer",
      "Request Type",
      "Event Type",
      "Event Date",
      "Event Time",
      "Guest Count",
      "Menu Items Requested",
      "Meal Prep Goal",
      "Allergies / Restrictions",
      "Customer Notes",
      "Missing Information",
      "Order Status",
      "Priority",
      "Next Action",
      "Assigned Owner",
      "Created Date",
      "Last Updated"
    ]
  },
  {
    table: "Menu Items",
    fields: [
      "Menu Item ID",
      "Item Name",
      "Category",
      "Description",
      "Base Price",
      "Price Type",
      "Serving Size",
      "Active Status",
      "Notes"
    ]
  },
  {
    table: "AI Drafts",
    fields: [
      "Draft ID",
      "Related Request",
      "Draft Type",
      "AI Prompt Used",
      "Generated Draft",
      "Review Status",
      "Reviewed By",
      "Final Message",
      "Created Date"
    ]
  },
  {
    table: "Marketing / Campaigns",
    fields: [
      "Campaign ID",
      "Campaign Name",
      "Goal",
      "Channel",
      "Target Audience",
      "Campaign Status",
      "AI Content",
      "Scheduled Date",
      "Notes"
    ]
  }
];

const menuItems = [
  {
    name: "Sweet & Spicy Meatballs",
    category: "Starter",
    price: "$65.00",
    type: "Fixed",
    serving: "TBD",
    active: "Yes"
  },
  {
    name: "60ct Wings",
    category: "Starter",
    price: "$75.00",
    type: "Fixed",
    serving: "TBD",
    active: "Yes"
  },
  {
    name: "Baked Chicken",
    category: "Entree",
    price: "$75.00",
    type: "Fixed",
    serving: "TBD",
    active: "Yes"
  },
  {
    name: "Blackened Salmon",
    category: "Entree",
    price: "$110.00",
    type: "Fixed",
    serving: "TBD",
    active: "Yes"
  },
  {
    name: "Green Beans",
    category: "Side",
    price: "$55.00",
    type: "Fixed",
    serving: "TBD",
    active: "Yes"
  },
  {
    name: "Baked Macaroni & Cheese",
    category: "Side",
    price: "$65.00",
    type: "Fixed",
    serving: "TBD",
    active: "Yes"
  },
  {
    name: "Cajun Pasta",
    category: "Pasta",
    price: "$55.99+",
    type: "Starting Price",
    serving: "TBD",
    active: "Yes"
  },
  {
    name: "Lunch Box",
    category: "Lunch Box",
    price: "$9.00-$12.00",
    type: "Price Range",
    serving: "1 person",
    active: "Yes"
  }
];

const orderStatuses = [
  {
    status: "New Request",
    meaning: "Customer request has been received."
  },
  {
    status: "Missing Information",
    meaning: "Request does not include enough detail to prepare an estimate."
  },
  {
    status: "Waiting on Customer",
    meaning: "A follow-up has been drafted or sent and the customer response is needed."
  },
  {
    status: "Ready for Estimate",
    meaning: "Enough information is available to prepare an estimate."
  },
  {
    status: "Custom Review Needed",
    meaning: "Request requires owner judgment because it is not a standard order."
  },
  {
    status: "Estimate Sent",
    meaning: "Estimate has been prepared or sent through Square."
  },
  {
    status: "Approved",
    meaning: "Customer approved the estimate."
  },
  {
    status: "Completed",
    meaning: "Order has been fulfilled."
  }
];

const blockers = [
  {
    title: "Serving size rules are not confirmed",
    detail:
      "The menu includes prices, but the team still needs to confirm how many people each item serves."
  },
  {
    title: "Owner.com integration is unclear",
    detail:
      "The team needs to confirm whether Owner.com can export form submissions, customize fields, or connect to outside tools."
  },
  {
    title: "Avoiding too many customer emails",
    detail:
      "The client does not want customers overwhelmed with duplicate emails, so automation must be carefully controlled."
  },
  {
    title: "Square already handles invoices and payments",
    detail:
      "The prototype should support Square instead of rebuilding the estimate, invoice, and payment process."
  },
  {
    title: "Marketing scope could become too broad",
    detail:
      "The team needs to balance marketing features with the class requirement for order intake progress."
  },
  {
    title: "Text messaging may not be feasible",
    detail:
      "The client expressed interest in text-style reminders, but SMS integration may be outside the current prototype scope."
  }
];

const nextSteps = [
  "Finish creating the Airtable base with Customers, Requests/Orders, Menu Items, AI Drafts, and Campaigns tables.",
  "Add sample data for customers, menu items, and catering or meal prep requests.",
  "Build the Airtable Interface dashboard for order tracking and menu management.",
  "Create screenshots showing menu management and order intake progress.",
  "Test a sample AI-generated follow-up draft using mock request data.",
  "Confirm serving-size rules and intake form fields with the client.",
  "Decide whether Make.com will be used for the final automation demo.",
  "Prepare a clean progress update package with prototype screenshots and workspace or repository links."
];

function loadTeamTable() {
  const tbody = document.querySelector("#teamTable tbody");

  teamMembers.forEach((member) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${member.name}</td>
      <td>${member.role}</td>
      <td>${member.assignment}</td>
      <td>${member.contribution}</td>
    `;

    tbody.appendChild(row);
  });
}

function loadDataModel() {
  const container = document.querySelector("#dataModel");

  dataModel.forEach((table) => {
    const item = document.createElement("div");
    item.className = "accordion-item";

    const fields = table.fields.map((field) => `<li>${field}</li>`).join("");

    item.innerHTML = `
      <div class="accordion-header">${table.table}</div>
      <div class="accordion-body">
        <ul>${fields}</ul>
      </div>
    `;

    container.appendChild(item);
  });

  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.addEventListener("click", () => {
      header.nextElementSibling.classList.toggle("open");
    });
  });
}

function loadMenuTable() {
  const tbody = document.querySelector("#menuTable tbody");

  menuItems.forEach((item) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${item.price}</td>
      <td>${item.type}</td>
      <td>${item.serving}</td>
      <td>${item.active}</td>
    `;

    tbody.appendChild(row);
  });
}

function loadStatuses() {
  const container = document.querySelector("#statusList");

  orderStatuses.forEach((status) => {
    const div = document.createElement("div");
    div.className = "status-item";

    div.innerHTML = `
      <span class="badge">${status.status}</span>
      <p>${status.meaning}</p>
    `;

    container.appendChild(div);
  });
}

function loadBlockers() {
  const container = document.querySelector("#blockers");

  blockers.forEach((blocker) => {
    const div = document.createElement("div");
    div.className = "blocker-item";

    div.innerHTML = `
      <h3>${blocker.title}</h3>
      <p>${blocker.detail}</p>
    `;

    container.appendChild(div);
  });
}

function loadNextSteps() {
  const container = document.querySelector("#nextSteps");

  nextSteps.forEach((step) => {
    const li = document.createElement("li");
    li.textContent = step;
    container.appendChild(li);
  });
}

loadTeamTable();
loadDataModel();
loadMenuTable();
loadStatuses();
loadBlockers();
loadNextSteps();