const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// SELECTORS
const coursesSection = document.querySelector('.courses');
// BUTTON CONTAINER
const coursesButtons = document.querySelector('.buttons');
// NEW CARD CONTAINER
const cardsContainer = document.querySelector('.cardsContainer');
// TOTAL CREDITS
const credits = document.querySelector('#credits');

// NEW FILTER BUTTONS
const filterAll = document.createElement('button');
filterAll.innerHTML = 'All Courses';
filterAll.setAttribute('aria-label', 'Show all courses');
coursesButtons.appendChild(filterAll);

const filterCSE = document.createElement('button');
filterCSE.innerHTML = 'CSE Courses';
filterCSE.setAttribute('aria-label', 'Show CSE courses');
coursesButtons.appendChild(filterCSE);

const filterWDD = document.createElement('button');
filterWDD.innerHTML = 'WDD Courses';
filterWDD.setAttribute('aria-label', 'Show WDD courses');
coursesButtons.appendChild(filterWDD);

// DISPLAY ALL COURSES
generateCards(courses);

// All Courses
filterAll.addEventListener('click', () => {
    generateCards(courses);
});

// WDD Courses only
filterWDD.addEventListener('click', () => {
    generateCards(courses.filter((course) => course.subject === 'WDD'))
});

// CSE Courses only    
filterCSE.addEventListener('click', () => {
    generateCards(courses.filter((course) => course.subject === 'CSE'))
});

// FUNCTION TO GENERATE THE CARDS
function generateCards(filteredCourses) {
    cardsContainer.innerHTML = '';
    // Create a card for each course in the array
    filteredCourses.forEach(course => {
        let card = document.createElement('span');
        // Add classes for styling
        card.classList.add('card');
        if (course.completed) {
            card.classList.add('completed');
        }
        // Populate the card
        card.innerHTML = `${course.subject} ${course.number}`

        cardsContainer.appendChild(card);

    });
    
    let totalCredits = filteredCourses.reduce((total, course) => {
        return total + course.credits;
    }, 0);

    credits.innerHTML = `${totalCredits}`;
}