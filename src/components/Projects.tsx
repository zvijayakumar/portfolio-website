import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DocuSign Data Analytics",
    description: "Developed scalable data pipelines using Apache Spark and Kafka, designed data pipelines in Snowflake, and implemented dbt Cloud for data modeling.",
    tags: ["Apache Spark", "Kafka", "Snowflake", "dbt Cloud", "Airflow"],
    period: "Jun 2023 - Oct 2024"
  },
  {
    title: "Copia Global Data Science & Analytics",
    description: "Developed ETL processes and visualization reports using Pyspark and AWS Glue. Automated customer segmentation analysis resulting in 63% increase in conversion rate.",
    tags: ["PySpark", "AWS Glue", "PostgreSQL", "Python", "Tableau"],
    period: "Dec 2021 - Jun 2023"
  },
  {
    title: "TCS Customer Intelligence & Insights",
    description: "Led migration from legacy big data platform to modern data architecture with PySpark. Developed ML data pipelines for banking analytics using MLOps practices.",
    tags: ["PySpark", "Airflow", "PostgreSQL", "Apache Spark", "Python"],
    period: "Dec 2017 - Dec 2021"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-white/80">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">{project.title}</CardTitle>
                  <p className="text-sm text-blue-600">{project.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:shadow-md transition-all duration-300">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};