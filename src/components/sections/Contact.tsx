import { useState } from "react"
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/integrations/supabase/client"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

interface ContactForm {
  name: string
  email: string
  phone: string
  company: string
  subject: string
  message: string
}

export function Contact() {
  const scrollRef = useScrollAnimation()
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send to SheetDB
      const response = await fetch('https://sheetdb.io/api/v1/2bs5xj8i1o4lw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || '',
          company: formData.company || '',
          subject: formData.subject || '',
          message: formData.message,
          submitted_at: new Date().toISOString()
        })
      })

      if (!response.ok) {
        throw new Error('Failed to submit to SheetDB')
      }

      // Also save to Supabase database
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            company: formData.company || null,
            subject: formData.subject || null,
            message: formData.message
          }
        ])

      if (error) {
        throw error
      }

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        className: "border-green-500/50 bg-green-500/10"
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "35, Chetla Central Road, Alipore, Kolkata, West Bengal 700027",
      color: "text-blue-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98 7563 5062",
      color: "text-green-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@lynqgroup.in",
      color: "text-purple-500"
    }
  ]

  return (
    <section id="contact" className="section-enhanced" ref={scrollRef} aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 scroll-fade-in">
          <h2 id="contact-heading" className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how LYNQ Group 
            can help you achieve your goals with our innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="xl:col-span-1 space-y-8 scroll-slide-left">
            <div>
              <h3 className="text-3xl font-bold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Whether you're looking to innovate your industrial processes, upgrade your technology infrastructure, 
                develop hospitality projects, or enhance wellness programs, our team of experts is here to help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="glossy hover-lift cursor-pointer group transition-all duration-300 hover:shadow-elegant border hover:border-primary/30">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 rounded-full bg-muted/50 group-hover:bg-primary/10 transition-colors duration-300`}>
                          <Icon className={`h-7 w-7 ${info.color} group-hover:text-primary transition-colors duration-300`} />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3 group-hover:text-primary transition-colors duration-300 text-lg">
                            {info.title}
                          </h4>
                          <p className="text-muted-foreground text-base">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Business Hours */}
            <Card className="glossy hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-base">
                    <span>Monday - Friday:</span>
                    <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span>Saturday:</span>
                    <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span>Sunday:</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="glossy hover-lift">
              <CardHeader>
                <CardTitle className="text-xl">Find Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6745899999997!2d88.33447937435698!3d22.554540636012598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0276e6b8b8a7b9%3A0x5c5c5c5c5c5c5c5c!2s35%2C%20Chetla%20Central%20Rd%2C%20Alipore%2C%20Kolkata%2C%20West%20Bengal%20700027!5e0!3m2!1sen!2sin!4v1704886800000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="LYNQ Satnaliwala Enterprises - 35, Chetla Central Road, Alipore, Kolkata"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="xl:col-span-2 scroll-slide-right">
            <Card className="glossy hover-lift border hover:border-primary/30">
              <CardHeader>
                <CardTitle className="text-3xl">Send Us a Message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-base">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glossy h-14 text-base"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glossy h-14 text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-base">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="glossy h-14 text-base"
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-base">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="glossy h-14 text-base"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="subject" className="text-base">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="glossy h-14 text-base"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-base">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="glossy min-h-[160px] text-base resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="dark w-full glossy bg-primary hover:bg-primary/90 text-primary-foreground hover-scale hover:shadow-glow h-14 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <AlertCircle className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
