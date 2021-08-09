/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "JC Seok",
  title: "Hi all, I'm JC",
  subTitle: emoji(
    "A data science enthusiast 📊 and a former mechanical engineer 🦾 eager to optimize world processes using data-driven techniques."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/seok0704",
  linkedin: "https://www.linkedin.com/in/jc-seok/",
  gmail: "seok0704@gmail.com",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  skills: [
    emoji(
      "⚡ Leverage data analysis, data cleaning, and predictive modeling skills for providing business solutions"
    ),
    emoji("⚡ Utilize cloud computing, Rest API, and containers for productionizing and deploying machine learning systems"),
    emoji(
      "⚡ Aggregate data from a wide variety of sources, including external APIs"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "pyspark",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-flask"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Engineering Intern",
      company: "TESLA",
      companylogo: require("./assets/images/teslaLogo.png"),
      date: "Sep 2020 – Dec 2021",
      desc: "Worked on various engineering projects for Tesla Powerwall, Semi and Model S",
      descBullets: [
        "Performed data analysis and made data-driven decisions",
        "Led multiple presentations and worked with cross-functional teams"
      ]
    },
    {
      role: "Engineering Intern",
      company: "NVIDIA",
      companylogo: require("./assets/images/nvidia.png"),
      date: "Jan 2017 – Sep 2018",
      desc: "Worked at consumer electronics and autonomous drive team",
      descBullets: [
        "Led various engineering projects for development of consumer electronics and self-driving technology, involving design, data analysis, design of experiments, etc.",
        "Created and standardized statistical dimension control process for the mechanical team"
      ]

    },
    {
      role: "Engineer",
      company: "AMPHENOL",
      companylogo: require("./assets/images/amphenol.jpg"),
      date: "Jun 2018 – Jum 2019",
      desc: "Worked on various engineering projects, developing parts in military and aerospace",
      descBullets: [
        "Worked closely with customers, test engineers, manufacturing engineers, and technicians to meet project milestones",
        "Managed technicians and mentored interns"
      ]

    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Collaborate Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/1591628761190.jfif"),
      projectName: "STNG - Tribological Services",
      projectDesc: "Developed deep learning architecture for engine failure prediction and provided action plans to mitigate risks in decision making while reducing cost by leveraging data science",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.stng.cl/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/titan.png"),
      projectName: "Titan Group",
      projectDesc: "Developed compensation algorithm that computes actual wind speed and direction using sensor measurement from device floating on the ocean",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.titangroupco.com/en/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
const achievementSection = {
  title: emoji("Projects 🏆"),
  subtitle:
    "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Champ2Play League of Legends Recommender System",
      subtitle:
        "Champ2Play is a recommender engine for the recommendation of champions/characters",
      tech:"Django, Collaborative Filtering, Python, API Request, Web Scraping",
      image: require("./assets/images/leagueoflegends.jpg"),
      footerLink: [
        {
          name: "Application",
          url: "https://champ2play.herokuapp.com/"
        },
        {
          name: "Github",
          url: "https://github.com/seok0704/lol-recsys"
        },
      ]
    },
    {
      title: "Banana Ripeness Level Detection",
      subtitle:
        "Developed a image classification model that detects the level of banana ripeness.",
      tech:"ImageNet, Transfer Learning, AWS SageMaker, AWS ECR, AWS Lmabda, Docker, Flask",
      image: require("./assets/images/banana.jpg"),
      footerLink: [
        {
          name: "Application",
          url: "https://banana-classification.herokuapp.com/"
        },
        {
          name: "Github",
          url: "https://github.com/seok0704/banana-ripe-classification"
        },
      ]
    },

    {
      title: "GPU Analytics Dashboard",
      subtitle: "Data analytics dashboard for various GPUs, comparing its price and performance per chipset, merchandise and manufacturer",
      image: require("./assets/images/gpu.jpg"),
      tech:"Postgre SQL, Web Scraping, Flask",
      footerLink: [
        {
          name: "Application",
          url: "https://gpu-dashboard-application.herokuapp.com/chipset"
        },
        {
          name: "Github",
          url: "https://github.com/seok0704/gpu-dashboard"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "seok0704@gmail.com"
};

// Twitter Section

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
};
