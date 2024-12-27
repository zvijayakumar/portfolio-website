import { Card, CardContent } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Data Engineer with 7 years of experience specialising in designing, developing, and scalable data solutions and data warehouses utilising cloud-native architectures and open-source tools. Proficient in Apache Spark, Python, Pyspark, SQL, SparkSQL, dbt cloud, Generative AI and ML/AI Data Pipeline, ETL/ELT, data modelling, and data governance. Enthusiastic about continuous learning and staying updated with the latest advancements in the data engineering field.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <a href="https://github.com/zvijayakumar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/zvijayakumar" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn</a>
              <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LeetCode</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};