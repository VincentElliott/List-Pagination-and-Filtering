/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

console.log('Script started');

// Add variables that store DOM elements you will need to reference and/or manipulate
const page = document.querySelector('.page');
const students = document.getElementsByClassName('student-item cf');
const studentsPerPage = 10;
const pagesCount = Math.ceil(students.length / 10);

// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
function showTenStudents(page, students) {
    for (let i = 0; i < students.length; i++) {
        if (i < page * studentsPerPage && i >= ((page * studentsPerPage) - studentsPerPage)) {
            students[i].style.display = 'block';
        } else {
            students[i].style.display = 'none';
        }
    }
}

showTenStudents(1, students);


// Create and append the pagination links - Creating a function that can do this is a good approach
function appendPageLinks() {
    const div = document.createElement('div');
    div.className = 'pagination';

    const ul = document.createElement('ul');

    for (let i = 1; i <= pagesCount; i++) {
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = i;

        if(i === 1) {
            a.className = 'active';
        }

        //Add event listener to change the page on click
        a.addEventListener('click', (element) => {

            //Find the previous active page and remove the "active" class
            previousAciveElement = document.querySelector('.active');

            if (previousAciveElement) {
                previousAciveElement.classList.remove('active');
            }

            //Add "active" class to the page the user clicked on
            element.target.className = 'active';
            showTenStudents(i, students);
        });

        const li = document.createElement('li');
        li.appendChild(a);

        ul.appendChild(li);
    }

    div.appendChild(ul);

    page.appendChild(div);
}

appendPageLinks();


// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here






