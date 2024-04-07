import contacts from "../data/contacts.mjs";

function convertContactsToArray(contacts) {
  return contacts.results;
}

function lastNameSorting(contactsArray) {
  const res = contactsArray.slice().sort((a, b) => {
    const lastNameA = a.name.last.toLowerCase();
    const lastNameB = b.name.last.toLowerCase();
    if (lastNameA < lastNameB) return -1;
    if (lastNameA > lastNameB) return 1;
    return 0;
  });

  return res;
}

function reverseContacts(contactsArray) {
  const res = [];
  const len = contactsArray.length;
  for (let i = len - 1; i >= 0; i--) {
    res.push(contactsArray[i]);
  }
  return res;
}

function getFiveContacts(contactsArray) {
  const res = contactsArray.slice(0, 5);
  return res;
}

function getFiveContactsFromSorted(sortedContactsArray) {
  return getFiveContacts(sortedContactsArray);
}

function getUniqueFirstNames(contactsArray) {
  const res = [];
  contactsArray.forEach((contact) => {
    const firstName = contact.name.first;
    if (!res.includes(firstName)) {
      res.push(firstName);
    }
  });
  return res;
}

function createFullNamesArray(contactsArray) {
  const res = [];
  contactsArray.forEach((contact) => {
    const fullName = `${contact.name.first} ${contact.name.last}`;
    res.push(fullName);
  });
  return res;
}

function logEmails(contactsArray) {
  contactsArray.forEach((contact) => {
    console.log(contact.email);
  });
}

function getContactById(contactsArray, id) {
  return contactsArray.find((contactsArray) => contactsArray.id.value === id);
}

function countContactsFromCountry(contactsArray, country) {
  const lowercaseCountry = country.toLowerCase();
  let res = 0;
  contactsArray.forEach((contact) => {
    const contactCountry = contact.location.country.toLowerCase();
    if (contactCountry === lowercaseCountry) {
      res++;
    }
  });
  return res;
}

function filteredByAge(contactsArray, minAge, maxAge) {
  const res = contactsArray.filter((contact) => {
    const age = contact.dob.age;
    return age >= minAge && age <= maxAge;
  });
  return res;
}

function search(event) {
  event.preventDefault();
  const contactsList = document.getElementById("contactsList");
  const searchInput = document.getElementById("searchInput").value.trim();

  if (!searchInput) {
    console.log("Nothing to search");
    contactsList.textContent = "Nothing to search";
    return;
  }
  const searchValue = searchInput.replace(/[^\d]/g, "");

  const isPhoneNumber = /^\d+$/.test(searchValue);

  if (isPhoneNumber) {
    const formattedSearchValue = searchValue.replace(/[^\d]/g, "");
    const filteredContacts = contactsArray.filter((contact) => {
      const formattedPhoneNumber = contact.phone.replace(/[^\d]/g, "");
      return formattedPhoneNumber.includes(formattedSearchValue);
    });
    displayContacts(filteredContacts);
  } else {
    const filteredContacts = contactsArray.filter((contact) => {
      const fullName = `${contact.name.first} ${contact.name.last}`;
      return fullName.toLowerCase().includes(searchInput.toLowerCase());
    });
    displayContacts(filteredContacts);
  }
}

function displayContacts(contactsArray) {
  const contactsList = document.getElementById("contactsList");
  contactsList.innerHTML = "";

  if (contactsArray.length === 0) {
    contactsList.textContent = "No contacts.";
    return;
  }

  const ul = document.createElement("ul");
  contactsArray.forEach((contact) => {
    const li = document.createElement("li");
    li.textContent = `${contact.name.first} ${contact.name.last} - ${contact.phone}`;
    ul.appendChild(li);
  });
  contactsList.appendChild(ul);
}

const searchButton = document.getElementById("searchButton");
const contactsArray = convertContactsToArray(contacts);
searchButton.addEventListener("click", search);
