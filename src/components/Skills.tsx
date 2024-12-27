import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Data Engineering Technologies",
    skills: ["Apache Spark", "Python", "SQL", "PyPpark", "dbt Cloud", "Apache Kafka", "Airflow", "Azure Databricks", "AWS Glue", "ETL"]
  },
  {
    category: "Cloud Platforms",
    skills: ["AWS (S3, Glue, Redshift, Lambda, EC2)", "Azure (Databricks, Data Factory, Data Lake)", "Docker", "Kubernetes"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redshift", "Snowflake", "BigQuery"]
  },
  {
    category: "Tools & Frameworks",
    skills: ["Tableau", "Apache Superset", "Jenkins", "Git", "Jira", "Confluence", "Terraform"]
  },
  {
    category: "Languages",
    skills: ["Python", "SQL", "PySpark", "Shell Script", "Java", "JavaScript"]
  },
  {
    category: "Methodologies",
    skills: ["Agile", "Scrum", "Data Modeling", "ETL/ELT", "Data Governance"]
  }
];

export const Skills = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
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