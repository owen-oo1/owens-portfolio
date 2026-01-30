/*
my-portfolio/
├── public/
│   ├── css/
│   │   └── style.css          # All your styles
│   ├── js/
│   │   └── client.js          # Any front-end JavaScript
│   └── assets/
│       ├── images/
│       │   └── profile.jpg    # Your portfolio images
│       └── fonts/             # Any custom fonts
│
├── views/
│   ├── partials/
│   │   ├── header.ejs         # Navbar / head section
│   │   └── footer.ejs         # Footer or reusable components
│   ├── pages/
│   │   ├── home.ejs           # Home page
│   │   ├── about.ejs          # About Me section
│   │   └── contact.ejs        # Contact form
│   └── layout.ejs             # Base layout template
│
├── routes/
│   └── index.js               # All routes (GET /about, /contact, etc.)
│
├── index.js                   # Server entry point
├── package.json               # Project config and dependencies
└── README.md                  # Description and usage instructions
*/

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS   
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render("pages/home");
})

app.get('/about', (req, res) => {
    res.render("pages/about");
})

app.get('/contact', (req, res) => {
    res.render("pages/contact");
})

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at port ${PORT}`);
});

