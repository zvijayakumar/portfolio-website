import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const skills = [
  { name: "React", level: "Advanced" },
  { name: "TypeScript", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "SQL", level: "Advanced" },
  { name: "AWS", level: "Intermediate" },
];

export const Skills = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                  <p className="text-muted-foreground">{skill.level}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};