import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

const projects = [
  {
    title: "DocuSign Data Analytics",
    company: "DocuSign",
    description: [
      "Developed and maintained scalable data pipelines using Apache Spark (PySpark) and Kafka",
      "Designed and implemented efficient data pipelines in Snowflake, utilising dbt™ Cloud for data modelling and transformations to ensure data consistency and quality handling 1B+ e-Sign transaction data and 1M customers data across 180+ countries",
      "Proficient in Snowflake - Procedures, Functions, Views, SnowPipe, File formats, Storage Integration, Internal and External Stage",
      "Developed and maintained dbt model components, including dbt Packages, dbt Macros, Incremental Models, Hooks, Seeds, and dbt jobs, to streamline data transformation processes",
      "Orchestrating data workflows and scheduling tasks using Airflow, improving data processing efficiency by 40%",
      "Leveraged Python and PySpark scripts to enrich the customer data from various B2B data providers, including Dun & Bradstreet, through their REST APIs for Master Data Management (MDM)",
      "Designed and implemented an end-to-end data ingestion pipeline for Oracle Eloqua, automating data extraction, warehousing in Snowflake, and transformation using dbt Cloud",
      "Mentored a team of data engineers in migrating existing data pipelines from Matillion ETL to dbt Cloud and MWAA",
      "Developed data pipelines for Kafka brokers to handle streaming data efficiently",
      "Contributed to Generative AI implementation projects and Proof of Concepts (PoCs)"
    ],
    tags: ["Apache Spark", "Kafka", "Snowflake", "dbt Cloud", "Airflow"],
    period: "Jun 2023 - Oct 2024",
    products: ["Contract Analytics Platform", "Real-time Dashboard", "ML Document Classifier"]
  },
  {
    title: "Copia Global Data Science & Analytics",
    company: "Copia Global",
    description: [
      "Designed and developed end-to-end ETL processes, data pipeline components, and visualization reports using PySpark and AWS Glue for Copia's e-commerce analytics platform, serving over 200K+ customers across East Africa",
      "Wrote complex queries in PostgreSQL and Redshift for data pipelines and Tableau reports, ensuring efficient data retrieval and e-commerce business analysis",
      "Automated customer segmentation analysis for marketing activities using Python, pandas, and NumPy, resulting in a 63% increase in customer conversion rate",
      "Developed and optimized PySpark data processing pipelines for batch processing",
      "Deploying the analytics code using AWS Services like Lambda, AWS Glue, Spark, S3, Redshift, Cloud Watch, EMR",
      "Successfully implemented open-source software and tools for both internal use cases and client projects, resulting in a 20% reduction in budget"
    ],
    tags: ["PySpark", "AWS Glue", "PostgreSQL", "Python", "Tableau"],
    period: "Dec 2021 - Jun 2023",
    products: ["E-commerce Analytics Platform", "Inventory Prediction System", "Customer Segmentation Engine"]
  },
  {
    title: "TCS Customer Intelligence & Insights",
    company: "Tata Consultancy Services",
    description: [
      "Responsible for the ETL and Data Engineering tasks on the product development for the banking domain, enabling the customer analytics to TCS BaNCS",
      "Complex transformation logic using PostgreSQL and Spark SQL / Pyspark / Advanced SQL",
      "Led the migration from a legacy big data platform utilizing Hive and Hadoop to a modern data architecture with PySpark and object storage",
      "Designed and managed Airflow DAGs for ETL workflow orchestration",
      "Implemented a digital persona data solution for banking customers, using the K-Means clustering algorithm in Apache Spark MLlib",
      "Developed and deployed ML data pipelines for a banking analytics product, leveraging MLOps practices with Apache Airflow"
    ],
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
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
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
                  <ul className="list-disc list-inside space-y-2 text-blue-900/80 mb-4">
                    {project.description.map((point, idx) => (
                      <li key={idx} className="text-sm leading-relaxed">{point}</li>
                    ))}
                  </ul>
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