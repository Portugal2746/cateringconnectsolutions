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
  // Most Ordered / Popular Items
  {
    name: "Chicken Dinner",
    category: "Most Ordered",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Crazy Fries",
    category: "Most Ordered",
    price: "$5.49",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "2pc Chicken Tenders",
    category: "Most Ordered",
    price: "$5.29",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "50 Ct Wings",
    category: "Most Ordered / Family Meals",
    price: "$60.00",
    type: "Fixed",
    serving: "Group order",
    active: "Yes"
  },

  // Snacks & Small Plates
  {
    name: "Lays - Chips",
    category: "Snacks & Small Plates",
    price: "$2.00",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "6pc Wings and Fries",
    category: "Snacks & Small Plates",
    price: "$9.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "5 Pc Garlic Parmesan Ranch Dry Wings",
    category: "Snacks & Small Plates",
    price: "$5.00",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Fish & Fries",
    category: "Snacks & Small Plates",
    price: "$7.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },

  // Entrees
  {
    name: "Chicken Tenders",
    category: "Entree",
    price: "$10.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "8 Count Wings",
    category: "Entree",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Cheeseburger",
    category: "Entree",
    price: "$10.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Salmon",
    category: "Entree",
    price: "$15.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Fish Sandwich with Fries",
    category: "Entree",
    price: "$10.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "2pc Fish Plate",
    category: "Entree",
    price: "$15.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "BLT with One Side",
    category: "Entree",
    price: "$7.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "8 Count Butterfly Shrimp",
    category: "Entree",
    price: "$10.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Pork Chop",
    category: "Entree",
    price: "$15.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Crispy Chicken Club",
    category: "Entree",
    price: "$10.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Veggie Plate",
    category: "Entree",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Country Fried Steak",
    category: "Entree",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },

  // Pastas
  {
    name: "Tuscan Pasta",
    category: "Pastas",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Cajun Pasta",
    category: "Pastas",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Jerk Pasta",
    category: "Pastas",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Shrimp and Broccoli",
    category: "Pastas",
    price: "$16.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Chicken and Broccoli",
    category: "Pastas",
    price: "$15.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },

  // Salads
  {
    name: "Garden Salad",
    category: "Salads",
    price: "$7.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Cobb Salad",
    category: "Salads",
    price: "$7.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Greek Salad",
    category: "Salads",
    price: "$7.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Caesar Salad",
    category: "Salads",
    price: "$7.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },

  // Sides
  {
    name: "French Fries",
    category: "Sides",
    price: "$4.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Green Beans",
    category: "Sides",
    price: "$4.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Broccoli",
    category: "Sides",
    price: "$4.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Seasoned Yellow Rice",
    category: "Sides",
    price: "$4.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Side Salad",
    category: "Sides",
    price: "$4.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Mac n Cheese",
    category: "Sides",
    price: "$4.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Fried Okra",
    category: "Sides",
    price: "$4.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Hush Puppies",
    category: "Sides",
    price: "$3.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Collard Greens",
    category: "Sides",
    price: "$4.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },

  // Family Meals / Catering-Sized Items
  {
    name: "8pc Chicken with 2 Large Sides",
    category: "Family Meals",
    price: "$29.99",
    type: "Fixed",
    serving: "Family meal",
    active: "Yes"
  },
  {
    name: "Half Pan Cajun Chicken Pasta with Salad and Bread Stick",
    category: "Family Meals / Catering",
    price: "$55.99",
    type: "Fixed",
    serving: "Half pan; approx. 8-12 people",
    active: "Yes"
  },
  {
    name: "Half Pan Shrimp and Salmon Pasta with Salad and 6 Breadsticks",
    category: "Family Meals / Catering",
    price: "$75.99",
    type: "Fixed",
    serving: "Half pan; approx. 8-12 people",
    active: "Yes"
  },
  {
    name: "8 Ct Pork Chop Meal",
    category: "Family Meals",
    price: "$55.99",
    type: "Fixed",
    serving: "Group order",
    active: "Yes"
  },

  // Drinks
  {
    name: "Bottle Water",
    category: "Drinks",
    price: "$1.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Bottled Coke",
    category: "Drinks",
    price: "$2.79",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Bottled Sprite",
    category: "Drinks",
    price: "$2.79",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Bottled Diet Coke",
    category: "Drinks",
    price: "$2.79",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Minute Maid",
    category: "Drinks",
    price: "$2.79",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Bottled Tea",
    category: "Drinks",
    price: "$2.79",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Hot Cup Coffee",
    category: "Drinks",
    price: "$1.59",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "House Lemonade",
    category: "Drinks",
    price: "$2.79",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },

  // Add-Ons
  {
    name: "Extra Cheese",
    category: "Add-On",
    price: "$0.50",
    type: "Fixed",
    serving: "Add-on",
    active: "Yes"
  },
  {
    name: "Wing",
    category: "Add-On",
    price: "$1.50",
    type: "Fixed",
    serving: "Add-on",
    active: "Yes"
  },
  {
    name: "Protein",
    category: "Add-On",
    price: "$5.00",
    type: "Fixed",
    serving: "Add-on",
    active: "Yes"
  },
  {
    name: "Additional Bread",
    category: "Add-On",
    price: "$1.00",
    type: "Fixed",
    serving: "Add-on",
    active: "Yes"
  },
  {
    name: "Chicken Tender",
    category: "Add-On",
    price: "$1.50",
    type: "Fixed",
    serving: "Add-on",
    active: "Yes"
  },
  {
    name: "Fish",
    category: "Add-On",
    price: "$3.00",
    type: "Fixed",
    serving: "Add-on",
    active: "Yes"
  },
  {
    name: "Extra Sauce",
    category: "Add-On",
    price: "$0.50",
    type: "Fixed",
    serving: "Add-on",
    active: "Yes"
  },
  {
    name: "Chicken Pieces",
    category: "Add-On",
    price: "$3.00",
    type: "Fixed",
    serving: "Add-on",
    active: "Yes"
  },

  // Desserts
  {
    name: "Homemade Cake",
    category: "Desserts",
    price: "$5.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },

  // Combo Meals
  {
    name: "Cheeseburger Combo",
    category: "Combo Meal",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Fish Sandwich Combo",
    category: "Combo Meal",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Crispy Chicken Club Combo",
    category: "Combo Meal",
    price: "$12.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Whole Wings Combo",
    category: "Combo Meal",
    price: "$14.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Wing Combo",
    category: "Combo Meal",
    price: "$14.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },
  {
    name: "Pasta Combo",
    category: "Combo Meal",
    price: "$15.99",
    type: "Fixed",
    serving: "1 person",
    active: "Yes"
  },

  // Catering Rules / Service Fees
  {
    name: "Catering Deposit",
    category: "Catering Policy",
    price: "50%",
    type: "Deposit",
    serving: "Required at time of order",
    active: "Yes"
  },
  {
    name: "Delivery Fee Within 15 Miles",
    category: "Catering Policy",
    price: "$35.00",
    type: "Delivery Fee",
    serving: "Within 15 miles",
    active: "Yes"
  },
  {
    name: "Delivery Fee Over 15 Miles",
    category: "Catering Policy",
    price: "Additional fee applies",
    type: "Delivery Fee",
    serving: "Over 15 miles",
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
    title: "Serving size rules need final confirmation",
    detail:
      "The current menu includes many individual items and some catering-sized items. Half pans are listed as approximately feeding 8-12 people, but the team still needs confirmation for other items, trays, drinks, desserts, and family meals."
  },
  {
    title: "Owner.com integration is unclear",
    detail:
      "The team needs to confirm whether Owner.com can export form submissions, customize request fields, or connect to outside tools."
  },
  {
    title: "Avoiding too many customer emails",
    detail:
      "The client does not want customers overwhelmed with duplicate emails, so automation must be carefully controlled and should focus on drafts or limited confirmations."
  },
  {
    title: "Square already handles invoices and payments",
    detail:
      "The prototype should support Square instead of rebuilding the estimate, invoice, and payment process."
  },
  {
    title: "Marketing scope could become too broad",
    detail:
      "The client strongly emphasized marketing and repeat customers, but the team still needs to satisfy the class requirement for order intake and menu management progress."
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
  "Use the updated Classy Clay's menu items in the Menu Items table.",
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