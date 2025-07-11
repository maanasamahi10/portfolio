
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: "InforReel",
      subtitle: "Content-Driven Video Commerce Platform",
      description: "A revolutionary platform that lets users purchase products directly from video reels. Features seamless integration with payment processing and shipping services, deployed on scalable cloud infrastructure.",
      technologies: ["React", "Node.js", "AWS EC2", "S3", "Docker", "Stripe", "Shippo"],
      features: [
        "Stripe for payments/KYC",
        "Shippo for shipping",
        "AWS EC2 + S3 + Docker deployment",
        "Scalable APIs for media, orders, and user management"
      ],
      status: "Featured Project",
      image: "/lovable-uploads/7206fd95-3053-40cc-8d1a-4a3dabf4129e.png"
    },
    {
      title: "Enterprise Onboarding System",
      subtitle: "DBS Bank - Microservices Architecture",
      description: "Architected a comprehensive onboarding system using microservices that reduced enterprise onboarding time by 70% through automated workflows and real-time processing.",
      technologies: ["Java", "Spring Boot", "Angular", "Microservices", "MySQL", "Docker"],
      features: [
        "Microservices architecture",
        "70% reduction in onboarding time",
        "Automated workflow processing",
        "Real-time data validation"
      ],
      status: "Enterprise Solution"
    },
    {
      title: "Claims Management System",
      subtitle: "Harman International - Real-time Processing",
      description: "Developed a robust claims management system with real-time validation capabilities, achieving a 60% reduction in claim processing time through optimized algorithms.",
      technologies: ["Java", "Spring", "React", "Oracle", "REST APIs", "JUnit"],
      features: [
        "Real-time validation",
        "60% faster processing",
        "Automated claim routing",
        "Comprehensive reporting"
      ],
      status: "Production Ready"
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
