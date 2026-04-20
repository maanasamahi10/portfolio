
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
  "company": "Microsoft",
  "position": "Software Engineer",
  "period": "Aug 2024 – Present",
  "description": "Architected and led development of 30+ distributed Java-based microservices supporting real-time collaboration and version control for 1M+ daily active users. Designed scalable, high-availability systems enabling seamless co-authoring across globally distributed environments. Developed high-throughput backend services handling 50K+ requests/sec using asynchronous processing, caching strategies, and optimized inter-service communication, reducing synchronization latency by 40%. Implemented conflict resolution and 3-way merge algorithms to support concurrent editing, improving data consistency and collaboration accuracy by 30%. Applied fault-tolerant design patterns (retry, exponential backoff, circuit isolation) and optimized database performance through indexing and query tuning, achieving 99.99% system uptime and improved response times.",
  "technologies": [
    "Java",
    "Spring Boot",
    "Microservices Architecture",
    "Hibernate",
    "PostgreSQL",
    "REST APIs",
    "Distributed Systems",
    "Caching",
    "Asynchronous Processing",
    "System Design",
    "High Availability"
  ],
  "current": true
    },
    {
  "company": "DBS Bank",
  "position": "Software Development Engineer",
  "period": "Aug 2022 – Sep 2023",
  "description": "Designed and developed a real-time Speech-to-Text and AI-driven summarization platform by integrating SIP (TCP) and RTP (UDP) pipelines with OpenAI Whisper, reducing manual analysis effort by 60% for live trading communications. Engineered a scalable session management layer using MQTT (Eclipse Paho) and WebSockets, supporting 10K+ concurrent sessions with low-latency and reliable communication. Built and optimized event-driven data pipelines for real-time audio streaming using MQTT and WebSockets, improving processing throughput by 35% and ensuring high data reliability. Implemented a fault-tolerant distributed data layer using Hazelcast (IMap) and resilient microservices patterns, reducing downtime by 40% and accelerating integration time by 50%. Developed Angular-based dashboards and backend REST APIs for 50K+ users, and automated CI/CD pipelines using Jenkins, Maven, SonarQube, and Fortify, improving deployment speed by 50% while ensuring code quality and security compliance.",
  "technologies": [
    "Java",
    "Spring Boot",
    "Microservices Architecture",
    "Angular",
    "MQTT",
    "WebSockets",
    "Hazelcast",
    "REST APIs",
    "Event-Driven Architecture",
    "OpenAI Whisper",
    "Jenkins",
    "Maven",
    "SonarQube",
    "Fortify",
    "Distributed Systems"
  ],
  "current": false
    },
   {
  "company": "DBS Bank India",
  "position": "Associate Software Engineer",
  "period": "Jun 2021 – Aug 2022",
  "description": "Automated a 3-day release cycle by implementing CI/CD pipelines using Jenkins and Docker with blue-green deployment and rollback strategies, reducing deployment time to under 4 hours and enabling zero-downtime releases. Developed a scalable Angular-based banking dashboard serving 500K+ users and handling millions of requests per month, driving API design, schema versioning, and secure authentication/authorization mechanisms while ensuring zero breaking changes over 14 months. Owned production reliability for 6 critical services as Directly Responsible Individual (DRI), creating service dependency maps and performing failure-mode analysis, reducing root cause analysis (RCA) time from days to hours and improving overall system resilience.",
  "technologies": [
    "Java",
    "Spring Boot",
    "Angular",
    "REST APIs",
    "Microservices Architecture",
    "Jenkins",
    "Docker",
    "CI/CD",
    "Blue-Green Deployment",
    "System Design",
    "API Versioning",
    "Authentication & Authorization",
    "Production Support"
  ],
  "current": false
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
