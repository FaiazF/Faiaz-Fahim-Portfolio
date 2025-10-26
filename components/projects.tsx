"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

type ProjectCategory = "all" | "vr" | "game" | "code" | "3d" | "graphics"

interface Project {
  title: string
  description: string
  mediaType: "video" | "image"
  videoUrl?: string
  imageUrl?: string
  links: { label: string; url: string }[]
  tags: string[]
  category: ProjectCategory
}

const projects: Project[] = [
  // VR Projects
  {
    title: "VR Training Simulation",
    description:
      "Developed high-fidelity VR simulation for procedural training, focusing on complex object interaction, UMG interaction and multi-step task completion using Unreal Engine and C++.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/pHohiKpOzZI?si=3Hd0-ZYLR2dzdkdG", //video URL
    links: [
      { label: "Demo 1", url: "https://youtu.be/pHohiKpOzZI" },
    ],
    tags: ["Unreal Engine", "C++", "VR", "Blueprint"],
    category: "vr",
  },
  {
    title: "VR Training Simulation",
    description:
      "Developed high-fidelity VR simulation for procedural training, focusing on complex object interaction, UMG interaction and multi-step task completion using Unreal Engine and C++.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/3n0hVCO-Rpw?si=4b2k_NdCKSxTYdI8", //video URL
    links: [
      { label: "Demo 2", url: "https://youtu.be/3n0hVCO-Rpw" },
    ],
    tags: ["Unreal Engine", "C++", "VR", "Blueprint"],
    category: "vr",
  },
  {
    title: "VR Training Simulation",
    description:
      "Developed high-fidelity VR simulation for procedural training, focusing on complex object interaction, UMG interaction and multi-step task completion using Unreal Engine and C++.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/e1i7REmugn4?si=k2W7ZALJmNMXI5zk", //video URL
    links: [
      { label: "Demo 3", url: "https://youtu.be/e1i7REmugn4" },
    ],
    tags: ["Unreal Engine", "C++", "VR", "Blueprint"],
    category: "vr",
  },
  // Game Projects
  {
    title: "Recurse ",
    description: "A dark, recursive dungeon crawler where every failure reshapes the world.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/PA3cWPH8s9w?si=vSctKT4rP4Klt_M1", //video URL
    links: [
      { label: "Gameplay Trailer", url: "https://youtu.be/PA3cWPH8s9w?si=pShGORRrS0VRgzdF" },
      { label: "Itch.io", url: "https://framework-interactive.itch.io/recurse" },
    ],
    tags: ["Unreal Engine", "Dungeon", "Crawler", "Roguelike"],
    category: "game",
  },
  {
    title: "Ghatok",
    description: "A team-strategy-based multiplayer first-person shooter game with immersive gameplay mechanics.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/GDSWC7s8LZU?si=sOHzdIH8O0f_NMOn", //video URL
    links: [
      { label: "Teaser", url: "https://youtu.be/GDSWC7s8LZU?si=aqaTD8ARZUINGpoi" },
      { label: "Gameplay", url: "https://youtu.be/O18FkBqXw30?si=E7wGf--0kpACJKq6" },
      { label: "Itch.io", url: "https://ginduce.itch.io/ghatok-pre-alpha" },
    ],
    tags: ["Unreal Engine", "Multiplayer", "FPS"],
    category: "game",
  },
  {
    title: "Endless Runner",
    description: "Endless Runner is a fast-paced, adrenaline-fueled game built entirely in Unreal Engine. Your goal is simple — keep running, avoid obstacles, and survive as long as possible.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/iZPvqSGdzGk?si=Bu9YF9zkXOxI9xAA", //video URL
    links: [
      { label: "Gameplay", url: "https://youtu.be/iZPvqSGdzGk" },
      { label: "Itch.io", url: "https://faiazfahim.itch.io/endless-runner" },
    ],
    tags: ["Unreal Engine", "Platformer", "Game", "Endless", "Casual Game"],
    category: "game",
  },
  {
    title: "Tardigrade",
    description:
      "A platformer game based on the microorganism tardigrade. This project was a submission for Epic Mega Jam (2019).",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/EPlQKda4DBM?si=cQPlw0qL1CqyK-Hy", //video URL
    links: [
      { label: "Trailer", url: "https://youtu.be/EPlQKda4DBM?si=5-bBWi6tY5iTbLnQ" },
      { label: "Gameplay", url: "https://youtu.be/y_GdvHj-2Ks?si=w7cM3MsyyR5iqQAh" },
      { label: "Itch.io", url: "https://ginduce.itch.io/tardigrade" },
    ],
    tags: ["Unreal Engine", "Platformer", "Game Jam"],
    category: "game",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A sleek, 3D interpretation of the timeless classic, Noughts and Crosses.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/2UMRZzND6-w?si=aPfJkjOTvK93lG1F", //video URL
    links: [
      { label: "Gameplay", url: "https://youtu.be/2UMRZzND6-w?si=MxJDiloJsu5XYxG1" },
      { label: "Itch.io", url: "https://faiazfahim.itch.io/tictactoe" },
    ],
    tags: ["Unreal Engine", "3D", "Game"],
    category: "game",
  },
  // Code Projects
  {
    title: "Marriage Biodata Template",
    description: "An interactive, printable, and customizable Marriage Biodata Form - Leisure project.",
    mediaType: "image",
    imageUrl: "/Marriage_Biodata_Template.png",
    links: [
      { label: "Live Demo", url: "https://marriage-biodata-template.vercel.app/" },
      { label: "GitHub", url: "https://github.com/FaiazF/Marriage_Biodata_Template" },
    ],
    tags: ["Web Development", "Frontend", "HTML", "CSS", "Javascript", "TailwindCSS"],
    category: "code",
  },
  {
    title: "Run and Dodge",
    description: "A fast-paced endless runner game built with C++ and raylib.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/nwuKBsvtl5A?si=U8purdByOK-Ui0aJ", //video URL
    links: [
      { label: "Gameplay", url: "https://youtu.be/nwuKBsvtl5A?si=YAPe-TuZPFw3q_Cn" },
      { label: "GitHub", url: "https://github.com/FaiazF/Run-and-Dodge" },
    ],
    tags: ["C++", "Raylib", "2D", "Game"],
    category: "code",
  },
  {
    title: "MobiPhysio Dataset",
    description: "A 2D Video Dataset of Physical Rehabilitation - Bachelor's thesis project.",
    mediaType: "image",
    imageUrl: "/physical-rehabilitation-dataset-mobile-app.jpg",
    links: [
      { label: "Research Paper", url: "https://drive.google.com/file/d/1woZAc1NFi8knY38gauQI6m_rG_sCp6yh/view" },
    ],
    tags: ["Python", "Machine Learning", "Data Analysis", "Data Cleaning", "Data Transformation", "Data Reduction", "Data Integration", "Data preprocessing ", "Dataset"],
    category: "code",
  },
  {
    title: "OneHealth",
    description: "A web-based E-health system for managing patient records and appointments - Bachelor's course project.",
    mediaType: "image",
    imageUrl: "/healthcare-management-web-application.jpg",
    links: [
      { label: "Project Document", url: "https://drive.google.com/file/d/10tzfCC-k5SmOXiR0RHexs-1tUKjOmZYv/view" },
    ],
    tags: ["Web Development", "Healthcare", "Frontend", "HTML", "CSS", "Javascript", "Full Stack"],
    category: "code",
  },
  {
    title: "Axe Game",
    description: "A simple 2D game made with C++ and Raylib.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/P0nUVYu8BXY?si=4k5Gt0gVm9rHQzuI", //video URL
    links: [
      { label: "Gameplay", url: "https://youtu.be/P0nUVYu8BXY?si=KiKlcyFy_Gn-Tig6" },
      { label: "GitHub", url: "https://github.com/FaiazF/Axe_Game" },
    ],
    tags: ["C++", "Raylib", "2D", "Game"],
    category: "code",
  },
  {
    title: "Faiaz Fahim Portfolio",
    description: "A modern and responsive personal portfolio website showcasing my work in VR development, 3D artistry, and game development, featuring smooth animations, dynamic backgrounds, and a clean, futuristic design.",
    mediaType: "image",
    imageUrl: "/Faiaz_Portfolio.png",
    links: [
      { label: "Live Demo", url: "https://faiaz-fahim-portfolio.vercel.app" },
      { label: "GitHub", url: "https://github.com/FaiazF/Faiaz-Fahim-Portfolio" },
    ],
    tags: ["Web Development", "Healthcare", "Frontend", "HTML", "CSS", "Javascript", "Full Stack"],
    category: "code",
  },
  // 3D Projects
  {
    title: "Mitsubishi A6M Zero Fighter Aircraft",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/MitsubishiA6mZeroFighterAircraft.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/4XPwal" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Volkswagen Passat Highpoly",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/VolkswagenPassatHighpoly.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/xY00wO" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "German Aircraft Carrier Graf Zeppelin",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/GermanAircraftCarrierGrafZeppelin.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/b5RRPd" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Extra 330SC Fighter Aircraft",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/Extra330SCAircraft.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/PozA2B" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Low-poly Sports Car",
    description: "Low-poly, optimized 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/LowpolySportsCar.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/rJPg0J" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Simple Scene",
    description: "Detailed, optimized, high-quality 3D environmental scene with optimized optimized models.",
    mediaType: "image",
    imageUrl: "/SimpleScene.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/eaO1vX" },
    ],
    tags: ["Blender", "Render", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "A Bottle of Gin",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/aBottleOfGin.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/vJ1K6Y" },
    ],
    tags: ["Blender", "Render", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Wooden Wrecked Mining Shack",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/WoodenWreckedMiningShack.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/r9GGD6" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Donut And Coffee",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/DonutAndCoffee.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/68WVQx" },
      { label: "Animation", url: "https://youtube.com/shorts/TjOenBai5Hs?feature=share" },
    ],
    tags: ["Blender", "Animation", "Render", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Tree",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/Tree.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/NG5Lm5" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Wooden Ammo Box",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/WoodenAmmoBox.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/J9XgRR" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Coffee Cup",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/CoffeeCup.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/q9aYvy" },
    ],
    tags: ["Blender", "Render", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Wooden Bookshelf",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/WoodenBookshelf.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/r9RYy2" },
    ],
    tags: ["Blender", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  {
    title: "Wooden Cart",
    description: "Detailed, optimized, high-quality 3D environmental assets with optimized topology and texture for game engines.",
    mediaType: "image",
    imageUrl: "/WoodenCart.jpg",
    links: [
      { label: "ArtStation", url: "https://www.artstation.com/artwork/Aq05ZW" },
    ],
    tags: ["Blender", "Render", "Substance Painter", "Quixel Mixer", "Game Assets", "UV Unwrapping", "Game Ready", "3D Modeling"],
    category: "3d",
  },
  // Graphics Projects
  {
    title: "Real Estate Promotional Poster Design",
    description: "A clean and modern real estate poster designed in Adobe Illustrator to promote a premium residential property. Focused on warmth, trust, and family comfort — blending professional aesthetics with emotional appeal.",
    mediaType: "image",
    imageUrl: "/RealEstatePoster.png",
    links: [
      { label: "Behance", url: "https://www.behance.net/gallery/236526053/Real-Estate-Promotional-Poster" },
    ],
    tags: ["Adobe Illustrator", "Graphic Design", "Vector Art", "Digital Illutration", "AdobeIllustrator", "Minimalist", "Poster Design"],
    category: "graphics",
  },
  {
    title: "Folk Fest : Event Poster Design",
    description: "This poster design was created from scratch for a fictional folk music event, Folk Fest. The goal was to capture the warm, cozy, and organic vibe of traditional folk gatherings through color, form, and typography.",
    mediaType: "image",
    imageUrl: "/Folk Fest.png",
    links: [
      { label: "Behance", url: "https://www.behance.net/gallery/236234617/Folk-Fest-Event-Poster-Design" },
    ],
    tags: ["Adobe Illustrator", "Graphic Design", "Vector Art", "Digital Illutration", "AdobeIllustrator", "Minimalist", "Poster Design"],
    category: "graphics",
  },
  {
    title: "Minimalist Sailing Boat Illustration",
    description: "This is a vector illustration of a stylized sailing boat created using Adobe Illustrator. The artwork explores minimalist design principles, bold color contrasts, and clean shapes, all built using the Pen Tool.",
    mediaType: "image",
    imageUrl: "/Sailing Boat.png",
    links: [
      { label: "Behance", url: "https://www.behance.net/gallery/236166191/Minimalist-Sailing-Boat-Illustration" },
    ],
    tags: ["Adobe Illustrator", "Graphic Design", "Vector Art", "Digital Illutration", "AdobeIllustrator", "Minimalist"],
    category: "graphics",
  },
  {
    title: "Apple Logo Recreation : From Scratch",
    description: "This is a design exercise where I recreated the iconic Apple logo from scratch to refine my vector design and detailing skills.",
    mediaType: "image",
    imageUrl: "/Apple Black.png",
    links: [
      { label: "Behance", url: "https://www.behance.net/gallery/235913373/Apple-Logo-Recreation-From-Scratch" },
    ],
    tags: ["Adobe Illustrator", "Graphic Design", "Branding", "Vector Art", "Minimalist", "Logo Design", "Digital Illutration", "AdobeIllustrator"],
    category: "graphics",
  },
]

const categories = [
  { id: "all" as ProjectCategory, label: "All Projects" },
  { id: "vr" as ProjectCategory, label: "VR Projects" },
  { id: "game" as ProjectCategory, label: "Game Projects" },
  { id: "code" as ProjectCategory, label: "Code Projects" },
  { id: "3d" as ProjectCategory, label: "3D Projects" },
  { id: "graphics" as ProjectCategory, label: "Graphics Projects" },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects =
    activeCategory === "all"
      ? // Show 1-2 items from each category for "All"
        [
          ...projects.filter((p) => p.category === "vr").slice(0, 2),
          ...projects.filter((p) => p.category === "game").slice(0, 2),
          ...projects.filter((p) => p.category === "code").slice(0, 2),
          ...projects.filter((p) => p.category === "3d").slice(0, 2),
          ...projects.filter((p) => p.category === "graphics").slice(0, 2),
        ]
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 animate-on-scroll">
          <span className="text-primary font-mono text-xl">04.</span>
          Featured Projects
          <span className="flex-1 h-px bg-border ml-4"></span>
        </h2>

        <div className="flex flex-wrap gap-3 mb-8 animate-on-scroll stagger-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-card/80 border border-border hover:border-primary/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:border-primary/50 transition-colors flex flex-col animate-on-scroll stagger-${(index % 6) + 1}`}
            >
              <div className="aspect-video w-full bg-muted">
                {project.mediaType === "video" ? (
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <img
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1 text-pretty leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
