import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "Junior VR Developer",
    company: "Vinacts",
    location: "Dhaka, Bangladesh",
    period: "2025 - Present",
    responsibilities: [
      "Designed and developed complex VR training simulations using Unreal Engine and C++",
      "Collaborated with cross-functional teams (Design, QA) to implement highly interactive, logic-driven VR environments and user interfaces",
      "Optimized VR application performance and memory usage, achieving smoother, multi-platform functionality across various VR headsets",
    ],
  },
  {
    title: "IT Assistant (Remote)",
    company: "Boca Pharmacy Group",
    location: "Bronx, NY",
    period: "2024 - 2025",
    responsibilities: [
      "Delivered comprehensive remote Tier 1 and Tier 2 IT support, managing and resolving technical issues for over 50+ pharmacy staff members",
      "Managed specialized pharmacy systems (PrimeRX) and communication platforms (3CX, ScreenConnect) to ensure continuous operation",
      "Handled prior authorization and clinical calls, performed critical data entry, and supported daily digital workflow needs",
    ],
  },
  {
    title: "Founder & CEO",
    company: "Mug Freak BD",
    location: "Dhaka, Bangladesh",
    period: "2021 - Present",
    responsibilities: [
      "Established and scaled a custom merchandise e-commerce business, successfully managing over 2,500 individual client orders and securing five corporate clients",
      "Developed and led targeted digital marketing campaigns (Facebook/Instagram Ads), directly responsible for driving sales revenue growth",
      "Oversaw all operational aspects, from initial product design and inventory management to final delivery logistics",
    ],
  },
  {
    title: "3D Artist (Remote)",
    company: "Kaleidosoft",
    location: "Croatia",
    period: "2021 - 2022",
    responsibilities: [
      "Created detailed, optimized 3D assets (props, environmental elements) for use in real-time gaming environments",
      "Ensured assets adhered to strict performance and polycount budgets for seamless integration into game engine pipelines",
    ],
  },
  {
    title: "3D Artist",
    company: "Ginduce",
    location: "Dhaka, Bangladesh",
    period: "2017 - 2019",
    responsibilities: [
      "Developed high-quality 3D models and textures for various client projects, supporting external game development pipelines",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 animate-on-scroll">
          <span className="text-primary font-mono text-xl">03.</span>
          Professional Experience
          <span className="flex-1 h-px bg-border ml-4"></span>
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 hover:border-primary/50 transition-colors animate-on-scroll stagger-${(index % 6) + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-muted-foreground text-sm mt-2 md:mt-0">{exp.period}</span>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-2 text-pretty">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
