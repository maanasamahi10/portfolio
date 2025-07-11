
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Settings, Star } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "API Development",
      description: "I design and develop scalable, secure, and performance-optimized APIs tailored to your business needs—whether you're building a new product or modernizing legacy systems.",
      deliverables: [
        "RESTful API design",
        "Documentation (Swagger/Postman)",
        "Integration support",
        "Secure authentication mechanisms"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Settings,
      title: "Full Stack Development",
      description: "Complete end-to-end web application development using modern technologies. From responsive frontend interfaces to robust backend systems with cloud deployment.",
      deliverables: [
        "React/Angular frontend development",
        "Spring Boot/Node.js backend",
        "Database design and optimization",
        "Cloud deployment (AWS/Docker)"
      ],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Star,
      title: "System Architecture",
      description: "Design scalable microservices architectures that grow with your business. Focus on performance, reliability, and maintainability for enterprise-grade solutions.",
      deliverables: [
        "Microservices architecture design",
        "Performance optimization",
        "System scalability planning",
        "DevOps integration"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering high-quality software solutions that drive business growth and enhance user experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:scale-105 transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold mb-2">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold mb-3 text-foreground">Deliverables:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-purple-400 mr-2 font-bold">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let's discuss how I can help bring your vision to life with cutting-edge technology and best practices.
                From initial consultation to final deployment, I'll be with you every step of the way.
              </p>
              <a 
                href="#contact"
                className="inline-block bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get In Touch
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
