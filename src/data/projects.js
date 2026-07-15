
import aeroOne from "/images/aero-1.webp";
import aeroMobOne from "/images/aero-mob-1.webp";
import aeroMobTwo from "/images/aero-mob-2.webp";
import aeroMobThree from "/images/aero-mob-3.webp";
import chibiOne from "/images/chibiHome.webp";
import chibiMobOne from "/images/chibi-mob-home.webp";
import chibiMobTwo from "/images/chibi-mob-project.webp";
import chibiMobThree from "/images/chibi-mob-hobby.webp";


export const PROJECTS_DATA = [
  {
    id: 1,
    category: "Client Project",
    themeClass: "theme-aerospace",
    title: "Interactive Aerospace Engineering Portfolio",
    desc: "A custom-built portfolio website created to reflect the client's aerospace engineering background. The experience combines cinematic storytelling, interactive 3D graphics and scroll-driven animations while maintaining usability, responsiveness and performance.",
    tags: ["UI/UX", "Three.js", "GSAP", "Responsive design", "Custom animations"],
    client: "Sadish Pieris",
    year: "2026",
    role: ["Designer / Concept Artist / Developer"],
    duration: "5 Weeks",
    status: "Completed",
    featured: true,
    theme: "Dark / Aerospace / Cinematic",
    accentColor: "#FF0000",
    heroImage: "/projects/sadish/hero.webp",
    thumbnail: "/projects/sadish/thumbnail.webp",
    liveDemo: { label: "View Demo", value: "https://sadishpieris.netlify.app" },
    github: "",
    overview: "A cinematic portfolio website designed and developed for an aerospace engineer, featuring cinematic 3D interactions, scroll-driven storytelling, and responsive performance.",
    challenge: `The client wanted a portfolio that reflected the precision and innovation of aerospace engineering rather than using a generic portfolio template.
                  The challenge was to create an immersive user experience with Three.js while ensuring smooth interactions, responsive layouts and production-ready performance.`,
    laptop: [aeroOne],
    screens: {
      left: [aeroMobOne],
      center: [aeroMobTwo],
      right: [aeroMobThree]
    },
    goals: [
      "Create a memorable first impression.",
      "Reflect aerospace engineering through visual storytelling.",
      "Build an interactive 3D experience.",
      "Maintain high performance across devices.",
      "Provide a clean structure for recruiters to browse projects."
    ],

    designProcess: [
      {phase: "Idea"},
      {
        phase: "Research",
        description:
          "Studied aerospace branding, engineering presentations and technical interfaces to establish a suitable visual direction."
      },
      {
        phase: "Visual Exploration",
        description:
          "Explored multiple color palettes including monochrome, cyberpunk-inspired themes and premium dark interfaces before refining the final red accent system."
      },
      {
        phase: "UI Design",
        description:
          "Designed responsive layouts, navigation systems, typography hierarchy and HUD-inspired interface elements."
      },
      {
        phase: "Prototyping",
        description:
          "Validated interactions and experimented with multiple navigation concepts and animation flows."
      }
    ],

    developmentTimeline: [
      {
        title: "Phase 1",
        name: "Discovery & Research",
        tasks: [
          "Client consultation",
          "Content planning",
          "Information architecture",
          "Moodboard creation",
          "Visual research"
        ]
      },
      {
        title: "Phase 2",
        name: "Visual Exploration",
        tasks: [
          "Dark UI concepts",
          "Color palette exploration",
          "Glassmorphism experiments",
          "Navigation concepts",
          "Typography selection"
        ]
      },
      {
        title: "Phase 3",
        name: "Frontend Development",
        tasks: [
          "React project setup",
          "Component architecture",
          "Responsive layouts",
          "Navigation system",
          "Reusable UI components"
        ]
      },
      {
        title: "Phase 4",
        name: "Three.js Integration",
        tasks: [
          "GLTF model integration",
          "Scene setup",
          "Lighting",
          "Camera positioning",
          "Material configuration"
        ]
      },
      {
        title: "Phase 5",
        name: "Animation System",
        tasks: [
          "GSAP integration",
          "ScrollTrigger timelines",
          "Model transitions",
          "Responsive animation values",
          "Interactive storytelling"
        ]
      },
      {
        title: "Phase 6",
        name: "Optimization",
        tasks: [
          "Performance improvements",
          "Responsive refinements",
          "Canvas interaction fixes",
          "Animation tuning",
          "Deployment"
        ]
      }
    ],

    technologies: [
      "react",
      "vitejs",
      "js",
      "threejs",
      "gsap",
      "css3",
      "netlify"
    ],

    features: [
      "Interactive 3D aircraft",
      "Scroll-driven animations",
      "Responsive layouts",
      "Smooth scrolling navigation",
      "Section-aware navigation",
      "Custom HUD-inspired interface",
      "Optimized GLTF loading",
      "Responsive GSAP animations",
      "Intersection Observer navigation",
      "Dark mode interface"
    ],

    problemsSolved: [
      {
        problem:
          "Three.js canvas blocked interactions with HTML elements.",
        solution:
          "Separated rendering layers and disabled pointer events on the canvas."
      },
      {
        problem:
          "Aircraft positioning differed across screen sizes.",
        solution:
          "Implemented GSAP MatchMedia with device-specific animation values."
      },
      {
        problem:
          "Scroll animations required synchronization between React and Three.js.",
        solution:
          "Built independent GSAP timelines using ScrollTrigger."
      },
      {
        problem:
          "Navigation needed to update automatically while scrolling.",
        solution:
          "Used IntersectionObserver to synchronize active navigation states."
      },
      {
        problem:
          "The client requested red branding while maintaining a professional engineering aesthetic.",
        solution:
          "Developed a restrained accent-color system using red only for interactive highlights."
      }
    ],

    achievements: [
      "Fully responsive experience",
      "Interactive 3D hero section",
      "Smooth GSAP-powered animations",
      "Production deployment",
      "Reusable component architecture",
      "Optimized rendering performance"
    ],

    metrics: [
      {label: "performance:", value: "null"},
      {label: "accessibility", value: "null"},
      {label: "seo", value: "null"},
      {label: "bestPractices", value: "null"},
      {label: "firstContentfulPaint", value: ""},
      {label: "largestContentfulPaint", value: ""},
      {label: "cumulativeLayoutShift", value: ""}
  ],

    // gallery: [
    //   aeroOne, aeroTwo, aeroThree
    // ],

    lessonsLearned: [
      "Synchronizing DOM animations with Three.js scenes.",
      "Building responsive animation systems using GSAP MatchMedia.",
      "Optimizing React Three Fiber for production.",
      "Balancing cinematic experiences with usability.",
      "Designing interactive experiences that communicate a client's professional identity."
    ],

    futureImprovements: [
      "Interactive launch sequence",
      "Procedural runway environment",
      "Dynamic lighting transitions",
      "Additional project animations",
      "Performance analytics dashboard"
    ],

    testimonial: {
      name: "Sadish Pieris",
      role: "Aerospace Engineer",
      quote:
        "The final website captured the vision of combining aerospace engineering with modern web interaction."
    }
  },

  {
    id: 2,
    category: "Personal Project",
    themeClass: "theme-chibi",
    title: "Kanishka's Creative Desk",
    desc: "This portfolio was built to showcase not only my technical skills but also my personality and creative process. Every section is designed as part of a cozy desktop environment, where animated characters, interactive objects, and subtle micro-interactions invite visitors to explore naturally. Visitors are encouraged to explore the scene, discover interactive objects, and learn about my work through a fun, immersive experience inspired by the charm of Yumi's Cells",
    tags: ["React", "Pixverse AI", "Interactive", "Point and Click", "Custom animations"],
    client: "Personal Project",
    year: "2026",
    role: ["Designer / Concept Artist / Developer"],
    duration: "4 Weeks",
    status: "Completed",
    featured: true,
    theme: "Dark / Aerospace / Cinematic",
    accentColor: "#FF0000",
    heroImage: "/projects/sadish/hero.webp",
    thumbnail: "/projects/sadish/thumbnail.webp",
    liveDemo: "https://sadishpieris.netlify.app",
    github: "",
    overview: "A cozy, interactive portfolio designed to feel like stepping into my creative workspace. The website blends storytelling, playful animations, and handcrafted illustrations to introduce who I am as both a developer and designer.",
    challenge: "Traditional portfolios often prioritize information over experience, making them visually similar and easy to forget. I wanted to challenge myself by designing a portfolio that balanced creativity with usability.",
    laptop: [chibiOne],
    screens: {
      left: [chibiMobOne],
      center: [chibiMobTwo],
      right: [chibiMobThree]
    },
    goals: [
      "The goal was to create a memorable experience that feels warm, personal, and engaging while demonstrating modern front-end development techniques.",
      "Create a portfolio that feels personal instead of corporate.",
      "Tell my story through interaction rather than long paragraphs.",
      "Blend illustration, animation, and web development into a single experience.",
      "Encourage visitors to explore and discover hidden details.",
      "Demonstrate both technical ability and attention to design."
    ],

    designProcess: [
      {
        phase: "Research",
        description:
          "Studied aerospace branding, engineering presentations and technical interfaces to establish a suitable visual direction."
      },
      {
        phase: "Visual Exploration",
        description:
          "Explored multiple color palettes including monochrome, cyberpunk-inspired themes and premium dark interfaces before refining the final red accent system."
      },
      {
        phase: "UI Design",
        description:
          "Designed responsive layouts, navigation systems, typography hierarchy and HUD-inspired interface elements."
      },
      {
        phase: "Prototyping",
        description:
          "Validated interactions and experimented with multiple navigation concepts and animation flows."
      },
      {phase: "Development"}
    ],

    developmentTimeline: [
      {
        title: "Phase 1",
        name: "Idea & Brainstorming",
        tasks: [
          "Defined the overall concept and user journey.",
          "Planned the content hierarchy and information architecture.",
          "Draw mockups and positioning elements"
        ]
      },
      {
        title: "Phase 2",
        name: "Visual Exploration",
        tasks: [
          "Designed the colour palette and typography.",
          "Created custom illustrations and character concepts.",
          "Navigation concepts",
          "Designed reusable UI components and decorative elements."
        ]
      },
      {
        title: "Phase 3",
        name: "Frontend Development",
        tasks: [
          "React project setup",
          "Component architecture",
          "Navigation system",
          "Reusable UI components"
        ]
      },
      {
        title: "Phase 4",
        name: "Animation & Interaction",
        tasks: [
          "Added hover effects and micro-interactions.",
          "Created animated hobby characters and decorative elements.",
          "Implemented smooth transitions and scroll animations."
        ]
      },
      {
        title: "Phase 5",
        name: "Optimization & Polish",
        tasks: [
          "Converted assets to WebP.",
          "Optimized image loading and bundle size.",
          "Improved accessibility and responsiveness.",
          "Refined animations for better performance."
        ]
      }
    ],

    technologies: [
      "vscode",
      "react",
      "vitejs",
      "js",
      "gemini",
      "openai",
      "pixverse",
      "css3",
      "netlify"
    ],

    features: [
      "Interactive Experience",
      "Animated Characters",
      "Micro-interactions",
      "Performance Optimisation",
      "Custom Artwork"
    ],

    problemsSolved: [
      {
        problem:
          "Three.js canvas blocked interactions with HTML elements.",
        solution:
          "Separated rendering layers and disabled pointer events on the canvas."
      },
      {
        problem:
          "Aircraft positioning differed across screen sizes.",
        solution:
          "Implemented GSAP MatchMedia with device-specific animation values."
      },
      {
        problem:
          "Scroll animations required synchronization between React and Three.js.",
        solution:
          "Built independent GSAP timelines using ScrollTrigger."
      },
      {
        problem:
          "Navigation needed to update automatically while scrolling.",
        solution:
          "Used IntersectionObserver to synchronize active navigation states."
      },
      {
        problem:
          "The client requested red branding while maintaining a professional engineering aesthetic.",
        solution:
          "Developed a restrained accent-color system using red only for interactive highlights."
      }
    ],

    achievements: [
      "Designed a portfolio that reflects both my technical skills and creative personality instead of following a conventional template.",
      "Developed an unconventional interface while keeping navigation intuitive and easy to understand",
      "Integrated animations, hover states, and playful interactions to encourage exploration without compromising usability",
      "Optimized an Image-Heavy Website",
      "Handled every stage of the project independently—from concept sketches and visual design to development, optimization, testing, and deployment.",
      "Showcased the ability to bridge UI/UX design with front-end engineering, creating an experience that is both visually engaging and technically robust."
    ],

    metrics: [
      {label: "performance:", value: "null"},
      {label: "accessibility", value: "null"},
      {label: "seo", value: "null"},
      {label: "bestPractices", value: "null"},
      {label: "firstContentfulPaint", value: ""},
      {label: "largestContentfulPaint", value: ""},
      {label: "cumulativeLayoutShift", value: ""}
  ],

    // gallery: [
    //   aeroOne, aeroTwo, aeroThree
    // ],

    lessonsLearned: [
      "Synchronizing DOM animations with Three.js scenes.",
      "Building responsive animation systems using GSAP MatchMedia.",
      "Optimizing React Three Fiber for production.",
      "Balancing cinematic experiences with usability.",
      "Designing interactive experiences that communicate a client's professional identity."
    ],

    futureImprovements: [
      "Interactive launch sequence",
      "Procedural runway environment",
      "Dynamic lighting transitions",
      "Additional project animations",
      "Performance analytics dashboard"
    ],

    testimonial: {
      name: "Sadish Pieris",
      role: "Aerospace Engineer",
      quote:
        "The final website captured the vision of combining aerospace engineering with modern web interaction."
    }
  }

  ];
