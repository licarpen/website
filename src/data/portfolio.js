import piMain from '../assets/pi/pi_main.png';
import treksSearch from '../assets/treks/treks_search.png';
import minesweeperGame from '../assets/minesweeper/minesweeper_game.png';
import postmanMain from '../assets/postman/postman_main.png';
import plantsMain from '../assets/plants/plants_main.png';
import physicsMain from '../assets/physics/physics_main.png';
import whiteboard from '../assets/DSA/whiteboard.png';
import cars from '../assets/edge/cars.png';
import github from '../assets/github/github.png';
import authentication from '../assets/authentication/authentication.png';
import todo from '../assets/todo/todo.png';
import bananas from '../assets/bananas/bananas.png';
import piMainSmall from '../assets/pi/pi_mainSmall.png';
import treksSearchSmall from '../assets/treks/treks_searchSmall.png';
import minesweeperGameSmall from '../assets/minesweeper/minesweeper_gameSmall.png';
import postmanMainSmall from '../assets/postman/postman_mainSmall.png';
import plantsMainSmall from '../assets/plants/plants_mainSmall.png';
import physicsMainSmall from '../assets/physics/physics_mainSmall.png';
import whiteboardSmall from '../assets/DSA/whiteboardSmall.png';
import carsSmall from '../assets/edge/carsSmall.png';
import githubSmall from '../assets/github/githubSmall.png';
import authenticationSmall from '../assets/authentication/authenticationSmall.png';
import todoSmall from '../assets/todo/todoSmall.png';
import bananasSmall from '../assets/bananas/bananasSmall.png';


export const portfolioPieces = [
  { 
    title: 'Plot a Pi',
    image: piMain,
    imageSmall: piMainSmall,
    technology: 'D3, React/Redux, Socket.IO, NodeJS, JS, MongoDB',
    description: 'An interactive data visualization app to celebrate pi. Built by a 5-person team in a 7-day sprint.',
    github: 'https://github.com/plot-a-pi/pi',
    site: 'https://plot-a-pi-prod.firebaseapp.com/',
    contributions: ['Led team from ideation through development to production', 'Generated D3 interactive data visualizations', 'Implemented Monte Carlo simulation', 'Converted mobile app to fully responsive design', 'Integrated unit conversion functionality with Redux', 'Actively maintaining and improving app functionality as a resource for educators'],
    takeaways: ['We initially were excited to use Firestore for our database needs.  Halfway through through the sprint, we unexpectedly reached the maximum number of free reads and quickly realized that in order to make this app available broadly and freely, we would need to change course and develop a backend and use socket.IO for realtime updates.  While this was a stressful change to make less than 72 hours from our MVP deadline (not only was Firestore completely new to us, but we had no experience with socket.IO), we came together as a team and made it happen.', 'The immutability of React state presents a problem at orders of magnitude greater than 3 for the Monte Carlo simulation, as the array of data points continues to grow. I\'m currently working on a solution that preserves all of the data for the csv download while trimming down data to be stored in state for the purpose of being displayed to the user.', 'Prior to this project, I had no experience using D3, let alone D3 with React hooks.  I assumed it would be quick to pick up, but soon realized that in order to take advantage of the power of the library and integrate it with React, I needed to start from the beginning.  While this was a lot to take on in the middle of a week-long sprint, it was incredibly rewarding and an unbelievable amount of fun.  It\'s safe to say I\'ve chosen the right career by how much dancing and celebrating transpired during this week.', 'I underestimated the complexity of this app and how long it would take to reach an MVP worthy of launching to the public, and that\'s ok. I am proud of what we have accomplished thus far and it continues to challenge me as we work towards Pi Day 2021.']
  },
  { title: 'Treks N Trails',
    image: treksSearch,
    imageSmall: treksSearchSmall,
    technology: 'NodeJS, JS, Restful APIs, PostgreSQL',
    description: 'A full stack, mobile-responsive hiking and camping app built by a 6-person team in a 4-day sprint.',
    github: 'https://github.com/Plant-Parenthood/treks-n-tents',
    site: 'https://treksntrails.herokuapp.com/index.html?redirect=%2F',
    contributions: ['Wrote fetch routes to 5 external APIs', 'Munged API data', 'Implemented user auth', 'Maintained state for user on front end', 'Filtered hike data based on user input', 'Built and tested components'],
    takeaways: ['We initially set out to make a plant care app using a plants api.  Half a day into this project, we came to terms with the fact that no api was robust enough to be feasible for our vision. As a team, we had to go back to the drawing board and come up with a new idea that we all were excited about while the clock was ticking.  While it was stressful, we kept focused and grounded as a team, shifting into a new project efficiently.']
  },
  { 
    title: 'Computational Models',
    image:physicsMain,
    imageSmall: physicsMainSmall,
    technology: 'Python, ReactJS',
    description: 'A collection of computational models that simulate physical systems from classical mechanics, electricity and magnetism, chaos, quantum mechanics, and statistical mechanics.',
    github: 'https://github.com/licarpen/computational-modeling',
    site: 'https://computationalmodeling.netlify.com',
    contributions: ['Compared errors in Euler and Euler-Comer approximation methods for modeling radioactive decay', 'Graphed chaotic behavior of two driven damped pendula', 'Graphed bifurcation and chaos of the logistic equation', 'Graphed Mandelbrot set fractal', 'Visualized interactions of sound waves', 'Modeled Pyrochlore lattice structure in 3D', 'Simulated knuckleball throw', 'Generated random walk in 1D', 'Approximated pi using Archimedes\' method', 'Compared integral approximation techniques', 'Modeled potential surrounding a hollow prism', 'Generated white noise']
  },
  { 
    title: 'Plant Parenthood',
    image:plantsMain,
    imageSmall: plantsMainSmall,
    technology: 'Python, NodeJS, MongoDB, JS, Raspbian',
    description: 'A secure, server-side app for remote gathering of sensor data from an IoT device, built by a 5-person team in a 4-day sprint.',
    github: 'https://github.com/piParty/pi-party',
    site: null,
    contributions: ['Set up and integrated hardware', 'Developed security processes', 'Seeded and tested plant database', 'Wrote and tested plants routes', 'Gathered and posted sensor data to database'],
    takeaways: ['Working with hardware is hard!', 'Adversity snuck up on us repeatedly and insidiously during this sprint. One day, we were up and running and the next we could no longer connect to the Raspberry Pis.  After severeal hours troubleshooting, we discovered that a new access point had been added to the network the night prior and our inability to connect was due to a configuration beyond our control. The takeaway? Ask for help sooner, especially when you are confident that you are doing everything correctly.', 'After several hours trying to ssh into the pi, it became clear that ']
  },
  {
    title: 'Computer Vision',
    image: cars,
    imageSmall: carsSmall,
    technology: 'Python, OpenCV, OpenVino Toolkit',
    description: 'Examples of using the Intel OpenVino toolkit to enable computer vision applications at the edge of computing, such as with IoT devices.  Implementations include gaining familiarity with the model optimizer, utilizing the inference engine, processing model output, and addressing communication with servers.  The image shown is taken from a video output that uses Single Shot MultiBox Detection for vehicles on a roadway to identify vehicles in each frame based on desired confidence threshold.',
    github: 'https://github.com/licarpen/computer_vision',
    site: null,
    contributions: null
  },
  {
    title: 'Overripe Bananas',
    image: bananas,
    imageSmall: bananasSmall,
    description: 'Overripe Bananas is a RESTful movie review API built with a non-relational database (mongoDB), nodeJS, mongoose, and express. Developer tools include easy seeding of a development database with desired number of films, studios, reviewers, and reviews.  Authentication is implemented with bcryptjs, jsonwebtoke, and cookie-parser.  All routes and models are tested using jest with the aid of data helpers and supertest.',
    technology: 'NodeJS, mongoose, MongoDB, express, bcryptjs, jsonwebtoken, cookie-parser',
    github: 'https://github.com/licarpen/overripe-bananas',
    site: null,
    contributions: null
  },
  {
    title: 'GitHub Viewer',
    image: github,
    imageSmall: githubSmall,
    technology: 'React/Redux, Redux-thunk',
    description: 'An exercise in using the react-redux methodology.  This app allows a user to search for a github user and display their public info and repos.  Redux-thunk is used to resolve fetches to the external github api.',
    github: 'https://github.com/licarpen/github-viewer',
    site: 'https://github-user-viewer.netlify.com',
    contributions: null
  },
  {
    title: 'User Authentication',
    image: authentication,
    imageSmall: authenticationSmall,
    technology: 'NodeJS, MongoDB, express, bcryptjs, cookie-parser, jsonwebtoken, supertest',
    description: 'An exericise in implementing user authentication on the backend with signup, login, and verification. Passwords are hashed and session cookies are set on signup/login.  Jest and supertest are used for testing.',
    github: 'https://github.com/licarpen/authentication',
    site: null,
    contributions: null
  },
  {
    title: 'To Do List',
    image: todo,
    imageSmall: todoSmall,
    technology: 'PostgreSQL, NodeJS, JavaScript, bcryptjs, jsonwebtoken',
    description: 'This full stack application allows users to add, edit, and delete items from a to do list.  The app makes use of a component-like architecture built with JavaScript.  Development features include the ability to create tables, drop tables, and load seed data with respect to the postgreSQL database. Error messages are intentionally clear and unambiguous.  The authentication process includes hashing passwords and utilizing ensure-auth middleware to preserve user login. Models and routes are tested using jest.',
    github: 'https://github.com/licarpen/to-do',
    site: 'https://desolate-mountain-09873.herokuapp.com/',
    contributions: null
  },
  { title: 'Postman',
    image: postmanMain,
    imageSmall: postmanMainSmall,
    technology: 'ReactJS',
    description: 'An api server client application for visualizing responses to requests',
    github: 'https://github.com/licarpen/postman',
    site: 'https://carpenterpostman.netlify.com/',
    contributions: null
  },
  { 
    title: 'Minesweeper No. 2',
    image:minesweeperGame,
    imageSmall: minesweeperGameSmall,
    technology: 'Vanilla Javascript, HTML5/CSS3',
    description: 'A recursion of the classic 90\'s computer game. Built by a 5- person team in a 4-day sprint.',
    github: 'https://github.com/ACL-minesweeper/mindsweepers',
    site: 'https://acl-minesweeper.github.io/mindsweepers/',
    contributions: ['Led team from ideation through MVP', 'Wrote and tested logic for seeding board with mines', 'Wrote and tested logic for board setup', 'Implemented and tested game play']
  },
  { 
    title: 'Data Structures & Algorithms',
    image: whiteboard,
    imageSmall: whiteboardSmall,
    technology: 'JavaScript',
    description: 'Tested implementation of a variety of array methods, linked lists, queues, stacks, binary search trees, search and sort algorithms, recursion, and more.  Includes selected exercises from Cracking the Coding Interview.',
    github: 'https://github.com/licarpen/data-structures-and-algorithms',
    site: null,
    contributions: null
  }
];
