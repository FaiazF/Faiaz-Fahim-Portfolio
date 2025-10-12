import { Card } from "@/components/ui/card"

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering (B.Sc. CSE)",
    institution: "Stamford University Bangladesh",
    location: "Dhaka, Bangladesh",
    year: "2024",
    gpa: "CGPA: 3.56/4.00",
    highlights: [
      "Thesis: MobiPhysio: A 2D Video Dataset of Physical Rehabilitation",
      "Project: OneHealth: A web-based E-health system",
    ],
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    institution: "Birshreshtha Munshi Abdur Rouf Public College",
    location: "Dhaka, Bangladesh",
    year: "2017",
    gpa: "GPA: 4.33/5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Ideal School and College",
    location: "Dhaka, Bangladesh",
    year: "2014",
    gpa: "GPA: 5.00/5.00",
  },
]

export function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 animate-on-scroll">
          <span className="text-primary font-mono text-xl">05.</span>
          Education
          <span className="flex-1 h-px bg-border ml-4"></span>
        </h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-6 hover:border-primary/50 transition-colors animate-on-scroll stagger-${index + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-balance">{edu.degree}</h3>
                  <p className="text-primary">
                    {edu.institution} · {edu.location}
                  </p>
                </div>
                <span className="text-muted-foreground text-sm mt-2 md:mt-0">{edu.year}</span>
              </div>
              <p className="text-muted-foreground mb-2">{edu.gpa}</p>
              {edu.highlights && (
                <ul className="space-y-1 text-muted-foreground">
                  {edu.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span className="text-pretty">{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
