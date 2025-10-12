"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-4 animate-on-scroll">
          <span className="text-primary font-mono text-xl">07.</span>
          Get In Touch
          <span className="flex-1 h-px bg-border ml-4"></span>
        </h2>

        <div className="text-center max-w-2xl mx-auto mb-12 animate-on-scroll stagger-1">
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            I'm open to new opportunities and collaborations. Whether you have a question, want to discuss a
            project, or just want to say hi, feel free to reach out. I'll do my best to get back to you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          <Card className="p-6 text-center hover:border-primary/50 transition-colors animate-on-scroll stagger-2">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <a
              href="mailto:faiazfahim64@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors text-sm break-all"
            >
              faiazfahim64@gmail.com
            </a>
          </Card>

          <Card className="p-6 text-center hover:border-primary/50 transition-colors animate-on-scroll stagger-3">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <a href="tel:+8801521437853" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              (+880)1521437853
            </a>
          </Card>

          <Card className="p-6 text-center hover:border-primary/50 transition-colors animate-on-scroll stagger-4">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Dhaka, Bangladesh</p>
          </Card>

          <Card className="p-6 text-center hover:border-primary/50 transition-colors animate-on-scroll stagger-5">
            <svg
              className="w-8 h-8 text-primary mx-auto mb-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/8801521437853"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              (+880)1521437853
              Chat on WhatsApp
            </a>
          </Card>

          <Card className="p-6 text-center hover:border-primary/50 transition-colors animate-on-scroll stagger-6">
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Messenger</h3>
            <a
              href="https://m.me/faiaz.fahim.9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              m.me/faiaz.fahim.9
              Chat on Messenger
            </a>
          </Card>
        </div>

        <Card className="p-8 mb-12 animate-on-scroll stagger-6">
          <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={6}
                className="w-full"
              />
            </div>
            {submitStatus === "success" && (
              <p className="text-green-500 text-sm">Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === "error" && (
              <p className="text-destructive text-sm">Failed to send message. Please try again or email me directly.</p>
            )}
            <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>

        <footer className="mt-20 text-center text-muted-foreground text-sm">
          <p>Built with Next.js & Tailwind CSS</p>
          <p className="mt-2">© 2025 MD Faiaz Fahim. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
