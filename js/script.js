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

// The showPage function which displays the list of people in the array on the screen

const showPage = (list, page) => {
   // Defining the startIndex and endIndex as well as the ul.
   let start = (page * 9) - 9;
   let end = page * 9;
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
   const numOfPages = Math.ceil(list.length / 9);
   let ul = document.querySelector('.link-list');

   ul.innerHTML = '';

   
   for (let i = 1; i <= numOfPages; i++){
      let li = document.createElement('li');
      let button = document.createElement('button');

      button.type = 'button';
      button.innerHTML = `${i}`;

      li.appendChild(button);
      ul.appendChild(li);
   }

   ul.querySelectorAll('button')[0].className = 'active';


   ul.addEventListener('click', (e) =>{
      if (e.target.tagName === "BUTTON"){
         ul.querySelector('.active').classList.remove('active');
         e.target.className = 'active';
         showPage(list,e.target.textContent)
      }
   })
}

// Search Component

function search(list){
   // Creating Search Bar
   let search = `<label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>`
   let header = document.querySelector('.header');
   header.insertAdjacentHTML('beforeend', search);

   // Adding Functionality To Search Bar
   let searchIcon = document.querySelector('img');
   let bar = document.querySelector('#search');
   let arr = [];
   let studentItems = document.querySelectorAll('.student-item.cf');
   let ul = document.querySelector('.link-list');

   let eventFunc = function (){
         for (let i = 0; i < list.length; i++){
            let input = bar.value.toLowerCase();
            let names = list[i].name.first.toLowerCase();
            console.log(list[i])

            if(input.length !== 0 && names.includes(input)){
               arr.push(list[i]);
               studentItems[i].style.display = '';
               console.log(arr);
            } else{
               studentItems[i].style.display = 'none';
            };

            // if(!names.includes(input)){
            //    let html = `No results found`
            //    ul.insertAdjacentText('afterbegin',html)
            // }

            if(input.length === 0){
               studentItems[i].style.display = '';
            }
         }
         showPage(arr,1);
   }

   let eventKeyFunc = function (){
      for (let i = 0; i < arr.length; i++){
         addPagination(arr);
      };
   }

   searchIcon.addEventListener('click', eventFunc);
   bar.addEventListener('keyup', eventFunc);
   bar.addEventListener('keyup', eventKeyFunc);
}



// Call functions
showPage(data,1);
addPagination(data);
search(data);