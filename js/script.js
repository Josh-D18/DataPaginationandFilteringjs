/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {
   let start = (page * list.length) - list.length;
   let end = page * list.length;
   let ul = document.querySelector('.student-list');
   

   ul.innerHTML = '';
   for (let i = 0; i < list.length; i++){
      if (i >= start && i < end){
         let html = ` <li class="student-item cf">
         <div class="student-details">
         <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
         <h3>${list[i].name.first||list[i].name.last}</h3>
         <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
         <span class="date">Joined ${list[i].registered.date}</span>
         </div>
            </li>`;
         ul.insertAdjacentHTML('beforeend', html)
      }
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list){
   const pageNumber = 9;
   let ul = document.querySelector('.link-list');

   ul.innerHTML = '';

   
   for (let i = 1; i <= pageNumber; i++){
      let li = document.createElement('li');
      let button = document.createElement('button');

      button.type = 'button';
      button.innerHTML = `${i}`;

      li.appendChild(button);
      ul.appendChild(li);
   }

   let button = document.querySelectorAll('.link-list li button');
   
   for (let i = 0; i < button.length; i++){
      button[i].addEventListener('click', () => {
         
      if (button[i].className === 'active'){
         button[i].className = '';
      } else{
         button[i].classList.add('active');
      }
      console.log(showPage(list))
      console.log(button)

   })
}}





// Call functions
showPage(data,1)
addPagination(data)