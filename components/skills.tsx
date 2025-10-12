import { Card } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Programming & Game Engines",
    skills: ["C", "C++", "Python", "HTML", "CSS", "Unreal Engine 5", "Blueprint Scripting"],
  },
  {
    title: "3D & Design Tools",
    skills: ["Blender", "Substance Painter", "Quixel Mixer", "Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva"],
  },
  {
    title: "Development Tools",
    skills: ["Visual Studio", "Code::Blocks", "Collab", "Kaggle"],
  },
  {
    title: "IT & Productivity",
    skills: ["MS Office Suite", "Google Workspace", "PrimeRX", "3CX", "ScreenConnect"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 animate-on-scroll">
          <span className="text-primary font-mono text-xl">02.</span>
          Skills & Technologies
          <span className="flex-1 h-px bg-border ml-4"></span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className={`p-6 animate-on-scroll stagger-${index + 1}`}>
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-md text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6">
          <Card className="p-6 animate-on-scroll stagger-5">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex gap-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-md">Bangla (Native)</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-md">English (Fluent)</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
