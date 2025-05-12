# Joyce Wamocho's Portfolio

Welcome to my personal portfolio website! This project showcases my skills, experience, projects, and education as a full-stack developer and UI/UX enthusiast. Built with modern web technologies, this portfolio provides an interactive and visually appealing experience for visitors to explore my work.

## Features

* **About Me:** Learn about my background, experience, and passion for web development.
* **Education:** View my academic journey, including my Software Engineering program at Moringa School and Bachelor’s degree from Kabarak University.
* **Projects:** Explore a collection of my projects, including Trade Hub and School Minibus Booking System, with links to live demos and GitHub repositories.
* **Skills:** Discover my technical skills, such as JavaScript, React, and PostgreSQL.
* **Contact:** Get in touch with me via a contact form.
* **Responsive Design:** Fully responsive layout that works on mobile, tablet, and desktop devices.
* **CV Download:** Download my CV directly from the About section with user-friendly feedback.

## Technologies Used

* **Framework:** Next.js 15.3.1 (React Framework)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Notifications:** SweetAlert2 (for CV download feedback)
* **Deployment:** Vercel
* **Data Storage:** JSON file (public/data.json) for projects and skills
* **Version Control:** Git and GitHub

## Setup Instructions

### Prerequisites

* Node.js (v18 or later recommended)
* npm (v9 or later)
* Git

### Installation

#### Clone the Repository

```bash
git clone https://github.com/joycewamocho/My-Portfolio.git
cd My-Portfolio
```

#### Install Dependencies

```bash
npm install
```

#### Prepare the Data File

Ensure the public/data.json file exists and contains your project and skills data. Example structure:

```json
{
  "projects": [
    {
      "title": "Trade Hub",
      "description": "A marketplace application built with React, Flask, and Bootstrap.",
      "link": "https://github.com/joycewamocho/trade-hub"
    }
  ],
  "skills": [
    "JavaScript",
    "React",
    "PostgreSQL"
  ]
}
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### Build for Production

To create an optimized production build:

```bash
npm run build
npm run start
```

## Deployment on Vercel

### Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Create a Vercel Account

* Sign up at [Vercel](https://vercel.com).

### Import the Repository

1. Go to the Vercel dashboard and click "New Project".
2. Import your GitHub repository (My-Portfolio).
3. Configure the project settings:

   * Framework Preset: Next.js
   * Root Directory: ./ (default)
   * Build Command: npm run build (default)
   * Output Directory: .next (default)

### Deploy

Click "Deploy". Vercel will handle the build and deployment process. Once complete, you’ll get a live URL (e.g., my-portfolio.vercel.app).

## Troubleshooting Deployment

If you encounter a `ReferenceError: document is not defined` error during deployment:

* Ensure all document or window usage is wrapped in `useEffect` or dynamically imported with `ssr: false`.

## Usage

* **Navigation:** Use the navigation bar to jump to sections like About, Education, Projects, Skills, and Contact.
* **Download CV:** In the About section, click the "Download CV" button to download my CV. A SweetAlert2 notification will confirm the download status.
* **View Projects:** Check out my projects with descriptions and links to live demos or GitHub repositories.
* **Contact Me:** Fill out the contact form to send me a message.

## Contributing

Contributions are welcome! To contribute:

* Fork the repository.

* Create a new branch:

  ```bash
  git checkout -b feature/your-feature
  ```

* Make changes and commit:

  ```bash
  git commit -m "Add your feature"
  ```

* Push to your branch:

  ```bash
  git push origin feature/your-feature
  ```

- Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

* **Name:** Joyce Wamocho
* **Email:** [nafulajoycewamocho@gmail.com](mailto:nafulajoycewamocho@gmail.com)
* **GitHub:** [Joyce Wamocho](https://github.com/joycewamocho)
* **LinkedIn:** [Joyce Wamocho](https://linkedin.com/in/joyce-wamocho)

Feel free to reach out if you have any questions or opportunities to collaborate!
