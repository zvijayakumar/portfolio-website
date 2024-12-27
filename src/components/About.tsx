import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { FileDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About Me</h2>
        <div className="flex flex-col items-center mb-8">
          <Avatar className="w-48 h-48 mb-6 ring-4 ring-blue-100 shadow-xl">
            <AvatarImage src="/lovable-uploads/72af6fc2-f916-48d6-b267-79dbba8eb6f7.png" alt="Profile picture" className="object-cover" />
            <AvatarFallback>VZ</AvatarFallback>
          </Avatar>
          <Button 
            variant="outline" 
            size="lg" 
            className="group bg-white/80 hover:bg-white/90 border-blue-200 mb-8"
            onClick={() => window.open('/path-to-your-resume.pdf', '_blank')}
          >
            Download Resume
            <FileDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
        <Card className="max-w-3xl mx-auto backdrop-blur-sm bg-white/80 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <p className="text-lg text-blue-900/80 leading-relaxed">
              Data Engineer with 7 years of experience specialising in designing, developing, and scalable data solutions and data warehouses utilising cloud-native architectures and open-source tools. Proficient in Apache Spark, Python, Pyspark, SQL, SparkSQL, dbt cloud, Generative AI and ML/AI Data Pipeline, ETL/ELT, data modelling, and data governance. Enthusiastic about continuous learning and staying updated with the latest advancements in the data engineering field.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a href="https://github.com/zvijayakumar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/zvijayakumar" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">LinkedIn</a>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">LeetCode</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};