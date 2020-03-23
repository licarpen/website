import piMain from '../assets/pi/pi_main.png';
import treksSearch from '../assets/treks/treks_search.png';
import minesweeperGame from '../assets/minesweeper/minesweeper_game.png';
import postmanMain from '../assets/postman/postman_main.png';
import plantsMain from '../assets/plants/plants_main.png';

export const portfolioPieces = [
  { 
    title: 'Plot a Pi',
    image: piMain,
    technology: 'D3, React/Redux, Socket.IO, NodeJS, JS, MongoDB',
    description: 'An interactive data visualization app to celebrate pi. Built by a 5-person team in a 7-day sprint.',
    github: 'https://github.com/plot-a-pi/pi',
    site: 'https://plot-a-pi-prod.firebaseapp.com/'
  },
  { title: 'Treks N Trails',
    image: treksSearch,
    technology: 'NodeJS, JS, Restful APIs, PostgreSQL',
    description: 'A full stack, mobile-responsive hiking and camping app built by a 6-person team in a 4-day sprint.',
    github: 'https://github.com/Plant-Parenthood/treks-n-tents',
    site: 'https://treksntrails.herokuapp.com/index.html?redirect=%2F'
  },
  { 
    title: 'Plant Parenthood',
    image:plantsMain,
    technology: 'Python, NodeJS, MongoDB, JS, Raspbian',
    description: 'A secure, server-side app for remote gathering of sensor data from an IoT device, build by a 5-person team in a 4-day sprint.',
    github: 'https://github.com/piParty/pi-party',
    site: null
  },
  { title: 'Postman',
    image:postmanMain,
    technology: 'ReactJS',
    description: 'A server-side client application for visualizing responses to requests',
    github: 'https://github.com/licarpen/postman',
    site: null
  },
  { 
    title: 'Minesweeper No. 2',
    image:minesweeperGame,
    technology: 'Vanilla Javascript, HTML5/CSS3',
    description: 'A recursion of the classic 90\'s computer game. Built by a 5- person team in a 4-day sprint.',
    github: 'https://github.com/ACL-minesweeper/mindsweepers',
    site: 'https://acl-minesweeper.github.io/mindsweepers/'
  },
  { 
    title: 'Minesweeper No. 2',
    image:minesweeperGame,
    technology: 'Vanilla Javascript, HTML5/CSS3',
    description: 'A recursion of the classic 90\'s computer game. Built by a 5- person team in a 4-day sprint.',
    github: 'https://github.com/ACL-minesweeper/mindsweepers',
    site: 'https://acl-minesweeper.github.io/mindsweepers/'
  }
];
