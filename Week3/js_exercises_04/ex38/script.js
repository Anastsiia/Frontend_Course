/*JavaScript – forEachDOM
The following exercise contains the following subjects:
● DOM
● foreach
Instructions
You get an array of objects of users from your database:
const users = [
{
id: 167464,
firstName: "Jimmy",
lastName: "Arnold",
email: "jimmya@gmail.com",
},
{
id: 578447,
firstName: "Martha",
lastName: "Goldman",
email: "gold@hotmail.com",
},
{
id: 864578,
firstName: "Tim",
lastName: "Burton",
email: "timmy.hotmail.com",
},
];
Your markup should look like this:*/
const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];
document.addEventListener("DOMContentLoaded", function() {
    const userList = document.createElement("ol");

    //2. Remove the bullet points of the ordered list with JavaScript.
    userList.style.listStyleType = "none";

    //1. Loop over the array with the forEach method and dynamically create an ordered list of the first and last names of the objects.
    users.forEach(function(user) {
        const listItem = document.createElement("li");
        listItem.textContent = `${user.firstName} ${user.lastName}`;
        
        // 3. Create a custom data attribute called “data-id” and attach the id value to each li.
        listItem.setAttribute("data-id", user.id);
        userList.appendChild(listItem);
    });
    document.body.appendChild(userList);
});