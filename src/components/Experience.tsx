
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
const experiences = [
  {
    company: "JPMorgan Chase & Co.",
    position: "Software Engineer",
    period: "Feb 2025 – Present",
    description:
      "Engineered Spring Batch pipelines ingesting data from heterogeneous sources including REST APIs, flat files, and Kafka real-time topics, orchestrating end-to-end workflows using AWS Step Functions across hybrid on-premises and AWS environments with 99.99% uptime. Modernized API security by implementing token-based authentication mechanisms and reduced technical debt by 20% through framework upgrades and architectural refactoring of legacy backend modules. Participated in on-call rotations, rapidly diagnosing and resolving production incidents through root cause analysis, contributing to zero SLA breaches while maintaining ownership of critical backend modules. Architected an event-driven architecture platform using Apache Kafka, enabling real-time data flow and state consistency across distributed microservices while scaling message throughput for peak production workloads. Developed high-volume Java Spring Boot microservices integrated with AWS S3 for CBR file processing, ensuring reliable and scalable ingestion of large financial datasets across the Global Banking Platform.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Batch",
      "Apache Kafka",
      "AWS",
      "AWS Step Functions",
      "AWS S3",
      "REST APIs",
      "Microservices",
      "Event-Driven Architecture",
      "Distributed Systems",
      "Token Authentication",
      "Production Support",
      "System Design"
    ],
    current: true
  },
  {
    company: "Barclays",
    position: "Software Development Engineer",
    period: "Aug 2021 – Sep 2023",
    description:
      "Developed RESTful microservices using Java 8/11/19 and Spring Boot, leveraging J2EE design patterns such as Singleton and DAO along with Java 8 features including Streams and Lambda expressions to build modular and maintainable backend components supporting high-volume data integration workflows. Implemented OAuth 2.0 token-based authentication across REST APIs to ensure secure service-to-service communication and reduce unauthorized access risks in distributed systems. Architected real-time data ingestion pipelines using Kafka Producer API, Kafka Connect, and Kafka Streams, backed by Oracle SQL, MongoDB, and Redis for relational persistence, document storage, and session caching under high-concurrency workloads. Accelerated release cycles by automating CI/CD pipelines with Jenkins, enforcing test coverage through JUnit and Mockito, and collaborating within Agile development teams through sprint planning, backlog grooming, and iterative stakeholder delivery.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "J2EE",
      "OAuth 2.0",
      "Apache Kafka",
      "Kafka Streams",
      "Kafka Connect",
      "Oracle SQL",
      "MongoDB",
      "Redis",
      "Jenkins",
      "JUnit",
      "Mockito",
      "CI/CD",
      "Agile"
    ],
    current: false
  },
  {
    company: "Virtusa",
    position: "Software Engineer Intern",
    period: "Jan 2021 – Jul 2021",
    description:
      "Built an IT incident automation platform using Python and AWS, integrating machine learning-based failure prediction capabilities to proactively detect performance anomalies, reducing system downtime and improving incident response times. Developed RESTful microservices that seamlessly integrated with existing IT operations tools, enabling real-time system updates and streamlining troubleshooting workflows across distributed infrastructure. Containerized applications using Docker and orchestrated deployments with Kubernetes, improving resource utilization, scalability, and deployment consistency in cloud environments. Automated CI/CD pipelines, reducing deployment times by 30% and enhancing overall development efficiency.",
    technologies: [
      "Python",
      "AWS",
      "Machine Learning",
      "REST APIs",
      "Microservices",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Cloud Computing",
      "Automation"
    ],
    current: false
  }
];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-card/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-purple-500 to-purple-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className={`glass-card hover:scale-105 transition-all duration-300 ${exp.current ? 'ring-2 ring-purple-500' : ''}`}>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl font-bold">{exp.position}</CardTitle>
                        {exp.current && <Badge className="bg-green-500 text-white">Current</Badge>}
                      </div>
                      <div className="text-lg font-semibold text-purple-400">{exp.company}</div>
                      <div className="text-sm text-muted-foreground">{exp.period}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10 w-8 h-8 bg-purple-500 rounded-full border-4 border-background flex items-center justify-center my-4 md:my-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>

                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
