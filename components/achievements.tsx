import { Card } from "@/components/ui/card"

const achievements = [
  {
    title: "Esho Robot Banai 2019",
    result: "Finalist",
    description: "Applied robotics, IoT and problem-solving in a national competition.",
  },
  {
    title: "Power and Energy Hackathon 2017",
    result: "Finalist",
    description: "Applied IoT and problem-solving in a national competition.",
  },
  {
    title: "Intra College Chess Tournament 2016",
    result: "Semifinalist",
    description: "Demonstrated strategic thinking and focus.",
  },
  {
    title: "Moulvibazar MTB Championship 2021",
    result: "Finisher",
    description: "Completed the mountain biking championship.",
  },
]

const communityInvolvement = [
  "Co-lead of the full volunteer team for multiple major marathons (Bangabandhu Sheikh Mujib Dhaka Marathon 2021-2023, Women's Marathon 2023, Bangabandhu 3rd Inter-University Sports Championship 2022, and Rangamati Half Marathon 2021)",
  "Co-organiser of Cyclists Grand Picnic 2019, 2020",
  "Lead of a volunteer team for the CCCL Run Bangla International 10K 2020 and Dhaka Half Marathon 2020",
  "Participated in the Cox's Bazar Beach Clean Up (BD Clean, 2018) and Dhaka University Clean Campus (BD Clean, 2017) contributing to a team initiative focused on environmental stewardship",
]

export function Achievements() {
  return (
    <section id="achievements" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 animate-on-scroll">
          <span className="text-primary font-mono text-xl">06.</span>
          Achievements & Community
          <span className="flex-1 h-px bg-border ml-4"></span>
        </h2>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 animate-on-scroll stagger-1">Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className={`p-6 hover:border-primary/50 transition-colors animate-on-scroll stagger-${index + 2}`}
              >
                <h4 className="text-lg font-semibold mb-2 text-balance">{achievement.title}</h4>
                <p className="text-primary text-sm mb-2">{achievement.result}</p>
                <p className="text-muted-foreground text-sm text-pretty">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 animate-on-scroll stagger-6">Community Involvement</h3>
          <Card className="p-6 animate-on-scroll stagger-6">
            <ul className="space-y-3 text-muted-foreground">
              {communityInvolvement.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-primary mt-1.5">▹</span>
                  <span className="text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
