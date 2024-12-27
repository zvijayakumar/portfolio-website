import { Card, CardContent } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate developer with expertise in building modern web applications.
              With a strong foundation in both frontend and backend technologies,
              I create efficient, scalable, and user-friendly solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};