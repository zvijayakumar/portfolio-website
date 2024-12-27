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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="backdrop-blur-sm bg-white/80 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4 text-blue-800">Contact Information</h3>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:zvijayakumar0@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    zvijayakumar0@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">+49 15560997804</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-800">Berlin, Germany</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-blue-600" />
                  <a href="https://github.com/zvijayakumar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                    github.com/zvijayakumar
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-600" />
                  <a href="https://linkedin.com/in/zvijayakumar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
                    linkedin.com/in/zvijayakumar
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input placeholder="Your Name" required className="bg-white/80 border-blue-200 focus:border-blue-400" />
            <Input type="email" placeholder="Your Email" required className="bg-white/80 border-blue-200 focus:border-blue-400" />
            <Textarea placeholder="Your Message" className="min-h-[150px] bg-white/80 border-blue-200 focus:border-blue-400" required />
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
          </form>
        </div>
      </div>
    </section>
  );
};