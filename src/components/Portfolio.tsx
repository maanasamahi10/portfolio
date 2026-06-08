
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
   {
title: "Enterprise RAG AI Agent",
subtitle: "LLM-Powered Knowledge Retrieval Platform",
description: "Built a production-grade Retrieval-Augmented Generation (RAG) platform using Python, FastAPI, PostgreSQL, and pgvector to enable intelligent enterprise knowledge search and question answering. Implemented semantic search pipelines, vector embeddings, and LLM agent orchestration to provide context-aware responses across large knowledge repositories. Designed auditable token tracking and cost management capabilities to optimize LLM usage while maintaining enterprise-grade observability and performance.",
technologies: [
"Python",
"FastAPI",
"PostgreSQL",
"pgvector",
"RAG",
"LLM Agents",
"OpenAI",
"Vector Search"
],
features: [
"Semantic Search Across 50K+ Documents",
"150ms Average Retrieval Latency",
"Enterprise Knowledge Assistant",
"Vector Embedding Storage",
"Token Usage Tracking & Auditing",
"30% Reduction in LLM Costs",
"Multi-User Access Management"
],
status: "AI/ML Project"
},
{
title: "Real-Time Fraud Detection Platform",
subtitle: "Event-Driven Banking Risk Monitoring System",
description: "Designed and developed a real-time fraud detection platform capable of analyzing banking transactions at scale using event-driven architecture. Leveraged Apache Kafka for transaction streaming, Spring Boot microservices for fraud evaluation, and Redis for low-latency rule execution. The platform identified suspicious transactions within milliseconds while supporting high transaction volumes and regulatory compliance requirements.",
technologies: [
"Java",
"Spring Boot",
"Apache Kafka",
"Redis",
"PostgreSQL",
"Microservices",
"Docker",
"AWS"
],
features: [
"Real-Time Fraud Detection",
"Kafka-Based Event Streaming",
"Rule Engine for Risk Scoring",
"Sub-Second Transaction Analysis",
"Distributed Microservices Architecture",
"Audit Logging & Compliance Tracking",
"High Availability Processing"
],
status: "Banking Solution"
},
{
title: "Digital Loan Processing Platform",
subtitle: "End-to-End Enterprise Lending Workflow",
description: "Architected a scalable digital loan origination platform enabling customers to apply, verify, and track loan applications online. Developed secure REST APIs, automated approval workflows, document verification services, and notification systems. Reduced loan processing turnaround time through workflow automation and real-time integration with internal banking systems.",
technologies: [
"Java",
"Spring Boot",
"Angular",
"MySQL",
"REST APIs",
"AWS",
"Docker",
"Jenkins"
],
features: [
"Digital Loan Application Workflow",
"Automated Approval Process",
"Document Verification Pipeline",
"Role-Based Access Control",
"Real-Time Application Tracking",
"CI/CD Deployment Pipeline",
"Secure Banking Integrations"
],
status: "Enterprise Banking Solution"
}
  ];

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that drive business impact and enhance user experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className={`${index === 0 ? 'bg-gradient-to-r from-purple-500 to-purple-700' : 'bg-muted'} text-white`}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold gradient-text">{project.title}</CardTitle>
                <CardDescription className="text-purple-400 font-medium">{project.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-purple-500/30 text-purple-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white"
                  onClick={() => window.open('#contact', '_self')}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
