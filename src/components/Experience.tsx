
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "InforReel Inc",
      position: "Software Developer",
      period: "Apr 2025 – Present",
      description: "Built an innovative content-commerce platform integrating Stripe and Shippo, deployed on AWS with Docker/Nginx, managing video reels and real-time product interactions.",
      technologies: ["AWS", "Docker", "Nginx", "Stripe", "Shippo", "React", "Node.js"],
      current: true
    },
    {
      company: "DBS Bank",
      position: "Java Full Stack Developer",
      period: "Aug 2022 – Aug 2023",
      description: "Architected onboarding microservices with Spring Boot & Angular, reduced enterprise onboarding time by 70%.",
      technologies: ["Java", "Spring Boot", "Angular", "Microservices", "MySQL"],
      current: false
    },
    {
      company: "Harman International",
      position: "Associate Software Engineer",
      period: "Mar 2022 – Jul 2022",
      description: "Developed a claims management system with real-time validation, reducing claim processing time by 60%.",
      technologies: ["Java", "Spring", "React", "Oracle", "REST APIs"],
      current: false
    },
    {
      company: "YKS IT Services",
      position: "Full Stack Developer",
      period: "Jan 2021 – Feb 2022",
      description: "Delivered an end-to-end e-commerce solution with secure user flows and AWS deployment.",
      technologies: ["Java", "React", "AWS", "MySQL", "Spring Boot"],
      current: false
    },
    {
      company: "YKS IT Services",
      position: "Web Developer Intern",
      period: "Oct 2020 – Dec 2020",
      description: "Contributed to frontend and backend modules of an e-commerce site, strengthening API integration and UI design.",
      technologies: ["JavaScript", "HTML", "CSS", "Node.js", "MySQL"],
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
