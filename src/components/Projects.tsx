import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DocuSign Data Analytics",
    company: "DocuSign",
    description: "Led the development of DocuSign's enterprise data analytics platform, processing over 1M+ documents daily. Implemented real-time analytics dashboard for contract lifecycle management and built ML models for automated document classification with 95% accuracy. Optimized data pipelines reducing processing time by 40%.",
    tags: ["Apache Spark", "Kafka", "Snowflake", "dbt Cloud", "Airflow"],
    period: "Jun 2023 - Oct 2024",
    products: ["Contract Analytics Platform", "Real-time Dashboard", "ML Document Classifier"]
  },
  {
    title: "Copia Global Data Science & Analytics",
    company: "Copia Global",
    description: "Spearheaded the development of Copia's e-commerce analytics platform serving 200K+ customers across East Africa. Built predictive models for inventory management reducing stockouts by 35%. Implemented customer segmentation engine leading to 63% increase in conversion rates through personalized marketing.",
    tags: ["PySpark", "AWS Glue", "PostgreSQL", "Python", "Tableau"],
    period: "Dec 2021 - Jun 2023",
    products: ["E-commerce Analytics Platform", "Inventory Prediction System", "Customer Segmentation Engine"]
  },
  {
    title: "TCS Customer Intelligence & Insights",
    company: "Tata Consultancy Services",
    description: "Architected and deployed TCS's banking analytics solution used by major financial institutions. Developed ML pipelines for fraud detection achieving 92% accuracy. Led migration from legacy systems to modern cloud architecture improving performance by 60% and reducing costs by 45%.",
    tags: ["PySpark", "Airflow", "PostgreSQL", "Apache Spark", "Python"],
    period: "Dec 2017 - Dec 2021",
    products: ["Banking Analytics Platform", "Fraud Detection System", "Cloud Migration Solution"]
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
                  <p className="text-md font-semibold text-purple-700">{project.company}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900/80 mb-4">{project.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-purple-700 mb-2">Key Products:</p>
                    <ul className="list-disc list-inside text-blue-800">
                      {project.products.map((product) => (
                        <li key={product} className="text-sm mb-1">{product}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 hover:shadow-md transition-all duration-300"
                      >
                        {tag}
                      </Badge>
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