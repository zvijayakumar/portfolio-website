import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:zvijayakumar0@gmail.com" className="text-muted-foreground hover:text-primary">
                    zvijayakumar0@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">+49 15560997804</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Berlin, Germany</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a href="https://github.com/zvijayakumar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    github.com/zvijayakumar
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a href="https://linkedin.com/in/zvijayakumar" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    linkedin.com/in/zvijayakumar
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Textarea placeholder="Your Message" className="min-h-[150px]" required />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};