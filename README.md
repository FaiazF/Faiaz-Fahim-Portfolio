# 🌐 MD Faiaz Fahim — Portfolio Website

A modern and responsive **personal portfolio website** showcasing my work in **VR development**, **3D artistry**, and **game development**, featuring smooth animations, dynamic backgrounds, and a clean, futuristic design.

![Portfolio Preview](public/profile.jpg) <!-- (optional preview, replace with actual screenshot path) -->

---

## 🧠 About This Project

This portfolio serves as a digital representation of my professional and creative journey.
Built using **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**, it includes modular components for easy customization and scalability.

---

## 🚀 Quick Start

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Run the development server
npm run dev

# 3️⃣ Open in browser
http://localhost:3000
```

---

## ⚙️ How to Customize

### 🎨 Colors & Theme

File: `app/globals.css`
Modify theme variables:

```css
--color-background: oklch(0.15 0.08 250); /* Background */
--color-primary: oklch(0.7 0.15 195);     /* Accent */
--color-card: oklch(0.18 0.06 250);       /* Card background */
--color-foreground: oklch(0.98 0.01 250); /* Text color */
```

---

### 👤 Personal Info

File: `components/hero.tsx`

```tsx
<h1>MD Faiaz Fahim</h1>
const roles = ["VR Developer", "Game Developer", "3D Artist"];
```

---

### 📧 Contact Information

File: `components/contact.tsx`

```tsx
email: "faiazfahim64@gmail.com"
phone: "+8801521437853"
whatsapp: "+8801521437853"
messenger: "m.me/faiaz.fahim.9"
location: "Dhaka, Bangladesh"
```

---

### 🔗 Social Media Links

File: `components/navigation.tsx`

```tsx
{ icon: Linkedin, href: "https://www.linkedin.com/in/md-faiaz-fahim/" }
{ icon: Github, href: "https://github.com/FaiazF" }
{ icon: Behance, href: "https://www.behance.net/faiazfahim" }
{ icon: ArtStation, href: "https://www.artstation.com/faiaz_fahim" }
```

---

### 💼 Work Experience

File: `components/experience.tsx`

```tsx
{
  title: "Junior VR Developer",
  company: "Vinacts",
  location: "Dhaka, Bangladesh",
  period: "2025 - Present",
  responsibilities: [
    "Developed VR training simulations in Unreal Engine 5",
    "Collaborated with design and QA teams to optimize performance"
  ]
}
```

---

### 🎮 Projects

File: `components/projects.tsx`

**For video display:**

```tsx
{
  category: "vr",
  mediaType: "video",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
  title: "VR Simulation Project",
  description: "Immersive VR training experience built in Unreal Engine.",
  tags: ["Unreal Engine", "C++"],
  links: [{ label: "Demo", url: "https://..." }]
}
```

**For image display:**

```tsx
{
  category: "3d",
  mediaType: "image",
  imageUrl: "/project-image.jpg",
  title: "3D Environment Design",
  description: "Real-time optimized 3D environment.",
  tags: ["Blender", "Substance Painter"],
  links: [{ label: "ArtStation", url: "https://..." }]
}
```

---

### 🎓 Education

File: `components/education.tsx`

```tsx
{
  degree: "B.Sc. in Computer Science and Engineering",
  institution: "Stamford University Bangladesh",
  period: "2020 - 2024",
  gpa: "3.56/4.00",
  highlights: ["Thesis: MobiPhysio — A 2D Video Dataset of Physiotherapy Exercises"]
}
```

---

### 🏆 Achievements

File: `components/achievements.tsx`

```tsx
{
  title: "Esho Robot Banai 2019 (Finalist)",
  description: "National robotics and IoT competition.",
  year: "2019"
}
```

---

### 💡 Skills

File: `components/skills.tsx`

```tsx
{
  category: "Programming & Engines",
  skills: ["C++", "Python", "Unreal Engine 5", "Blueprint Scripting"]
}
```

---

### 🧾 Resume

Replace your resume in `public/resume.pdf` or update the path in `components/hero.tsx`.

---

### 📄 About Me Text

File: `components/about.tsx`

```tsx
<p>Motivated and adaptable Computer Science graduate with five years of experience in VR simulation, 3D modeling, and IT support.</p>
```

---

### ✉️ Contact Form Setup

File: `app/api/send-email/route.ts`

```tsx
to: "faiazfahim64@gmail.com"
from: "onboarding@resend.dev"
```

Then, create a `.env.local` file:

```

## 🧩 File Overview

| File                          | Description                              |
| ----------------------------- | ---------------------------------------- |
| `app/page.tsx`                | Main layout with all components          |
| `app/layout.tsx`              | Fonts, metadata, and site-wide layout    |
| `app/globals.css`             | Theme, animations, and global styles     |
| `components/hero.tsx`         | Hero section with name, roles, and photo |
| `components/about.tsx`        | About me section                         |
| `components/skills.tsx`       | Skills and tools                         |
| `components/experience.tsx`   | Professional experience                  |
| `components/projects.tsx`     | Projects and media showcase              |
| `components/education.tsx`    | Academic details                         |
| `components/achievements.tsx` | Achievements and awards                  |
| `components/contact.tsx`      | Contact form                             |
| `app/api/send-email/route.ts` | Email handler using Resend               |
| `public/resume.pdf`           | Downloadable resume                      |
| `public/profile.jpg`          | Profile picture                          |

---

## 🧰 Technologies Used

* **Next.js 15 (App Router)**
* **Tailwind CSS v4**
* **TypeScript**
* **shadcn/ui**
* **Resend (Email API)**

---

## 🧑‍💻 Author

**MD FAIAZ FAHIM**
📍 Dhaka, Bangladesh
🎓 B.Sc. in Computer Science & Engineering
💼 VR Developer | 3D Artist | IT Specialist

**Connect with me:**
🔗 [LinkedIn](https://www.linkedin.com/in/md-faiaz-fahim/)
💻 [GitHub](https://github.com/FaiazF)
🎨 [ArtStation](https://www.artstation.com/faiaz_fahim)
🖌️ [Behance](https://www.behance.net/faiazfahim)
✉️ [Email](mailto:faiazfahim64@gmail.com)

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 💬 Support

If you find this project helpful, please ⭐ the repository or connect with me for collaborations!
