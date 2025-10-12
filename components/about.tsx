export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 animate-on-scroll">
          <span className="text-primary font-mono text-xl">01.</span>
          About Me
          <span className="flex-1 h-px bg-border ml-4"></span>
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p className="text-pretty animate-on-scroll stagger-1">
            Motivated and adaptable computer science graduate with five years of combined experience in VR simulation
            development, 3D asset creation, and technical IT support. I have a proven track record of leveraging Unreal
            Engine, C++, and Blueprint scripting to develop immersive training solutions and real-time gaming
            environments.
          </p>
          <p className="text-pretty animate-on-scroll stagger-2">
            Currently working as a Junior VR Developer at Vinacts, I design and develop complex VR training simulations,
            collaborating with cross-functional teams to implement highly interactive, logic-driven VR environments. I'm
            passionate about optimizing VR application performance to achieve smoother, multi-platform functionality
            across various VR headsets.
          </p>
          <p className="text-pretty animate-on-scroll stagger-3">
            Beyond my professional work, I founded Mug Freak BD, a custom merchandise e-commerce business where I
            successfully managed over 2,500 individual client orders. I'm also an active community volunteer, having
            co-led volunteer teams for multiple major marathons and environmental initiatives.
          </p>
        </div>
      </div>
    </section>
  )
}
