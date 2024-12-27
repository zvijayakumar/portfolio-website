import { Card, CardContent } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">About Me</h2>
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