import piMain from '../assets/pi/pi_main.png';
import treksSearch from '../assets/treks/treks_search.png';
import minesweeperGame from '../assets/minesweeper/minesweeper_game.png';
import postmanMain from '../assets/postman/postman_main.png';
import plantsMain from '../assets/plants/plants_main.png';
import physicsMain from '../assets/physics/physics_main.png';

export const portfolioPieces = [
  { 
    title: 'Plot a Pi',
    image: piMain,
    technology: 'D3, React/Redux, Socket.IO, NodeJS, JS, MongoDB',
    description: 'An interactive data visualization app to celebrate pi. Built by a 5-person team in a 7-day sprint.',
    github: 'https://github.com/plot-a-pi/pi',
    site: 'https://plot-a-pi-prod.firebaseapp.com/',
    contributions: ['Led team from ideation through development to production', 'Generated D3 data visualizations', 'Implemented Monte Carlo simulation', 'Actively maintaining and improving app functionality as a resource for educators']
  },
  { title: 'Treks N Trails',
    image: treksSearch,
    technology: 'NodeJS, JS, Restful APIs, PostgreSQL',
    description: 'A full stack, mobile-responsive hiking and camping app built by a 6-person team in a 4-day sprint.',
    github: 'https://github.com/Plant-Parenthood/treks-n-tents',
    site: 'https://treksntrails.herokuapp.com/index.html?redirect=%2F',
    contributions: ['Wrote fetch routes to 5 external APIs', 'Munged API data', 'Implemented user auth', 'Maintained state for user on front end', 'Filtered hike data based on user input', 'Built and tested components']
  },
  { 
    title: 'Plant Parenthood',
    image:plantsMain,
    technology: 'Python, NodeJS, MongoDB, JS, Raspbian',
    description: 'A secure, server-side app for remote gathering of sensor data from an IoT device, build by a 5-person team in a 4-day sprint.',
    github: 'https://github.com/piParty/pi-party',
    site: null,
    contributions: ['Set up and integrated hardware', 'Developed security processes', 'Seeded and tested plant database', 'Wrote and tested plants routes', 'Gathered and posted sensor data to database']
  },
  { title: 'Postman',
    image:postmanMain,
    technology: 'ReactJS',
    description: 'A server-side client application for visualizing responses to requests',
    github: 'https://github.com/licarpen/postman',
    site: 'https://carpenterpostman.netlify.com/',
    contributions: ['All']
  },
  { 
    title: 'Computational Models',
    image:physicsMain,
    technology: 'Python, D3, ReactJS',
    description: 'A collection of computational models that simulate physical systems from classical mechanics, electricity and magnetism, chaos, quantum mechanics, and statistical mechanics.',
    github: null,
    site: null,
    contributions: ['Compared errors in approximation methods for modeling radioactive decay', 'Graphed chaotic behavior of two pendula', 'Graphed bifurcation and chaos of the logistic equation', 'Graphed Mandelbrot set fractal', 'Visualized interactions of sound waves', 
      'Modeled Pyrochlore lattice structure in 3D']
  },
  { 
    title: 'Minesweeper No. 2',
    image:minesweeperGame,
    technology: 'Vanilla Javascript, HTML5/CSS3',
    description: 'A recursion of the classic 90\'s computer game. Built by a 5- person team in a 4-day sprint.',
    github: 'https://github.com/ACL-minesweeper/mindsweepers',
    site: 'https://acl-minesweeper.github.io/mindsweepers/',
    contributions: ['Led team from ideation through MVP', 'Wrote and tested logic for seeding board with mines', 'Wrote and tested logic for board setup', 'Implemented and tested game play']
  },
  { 
    title: 'Data Structures and Algorithms',
    image: null,
    technology: 'JavaScript',
    description: 'Implementation of common data structures and algorithms in computer programming.',
    github: 'https://github.com/licarpen/data-structures-and-algorithms',
    site: null,
    contributions: ['All']
  }
];
