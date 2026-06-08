
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="glass-card">
  <CardContent className="p-8">
    <p className="text-lg leading-relaxed text-muted-foreground">
      I am a results-driven <span className="text-primary font-semibold">Software Development Engineer</span> with 3+ years of experience building scalable distributed systems, cloud-native applications, and microservices architectures. I specialize in designing and developing high-performance backend services using Java, Spring Boot, and AWS, with a strong focus on scalability, reliability, and system performance.
    </p>

    <p className="text-lg leading-relaxed text-muted-foreground mt-4">
      Throughout my career, I have engineered solutions for high-throughput, multi-tenant environments, successfully improving system uptime to <span className="text-primary font-semibold">99.9%</span> and reducing service latency by <span className="text-primary font-semibold">30%</span>. By leveraging efficient system design, API optimization, cloud-native technologies, and performance tuning techniques, I have delivered robust solutions that enhance both user experience and operational efficiency.
    </p>

    <p className="text-lg leading-relaxed text-muted-foreground mt-4">
      My expertise spans microservices development, REST API design, cloud infrastructure, database optimization, CI/CD automation, and distributed systems engineering. I have hands-on experience across the entire software development lifecycle, from requirement analysis and architecture design to implementation, deployment, monitoring, and continuous improvement.
    </p>

    <p className="text-lg leading-relaxed text-muted-foreground mt-4">
      I enjoy transforming complex business requirements into scalable technical solutions and am passionate about building resilient systems that can efficiently support growing workloads. My interest in cloud technologies, software architecture, and modern engineering practices drives me to continuously learn and adopt innovative approaches to software development.
    </p>

    <p className="text-lg leading-relaxed text-muted-foreground mt-4">
      Beyond technical expertise, I thrive in collaborative Agile environments, value clean and maintainable code, and enjoy solving challenging engineering problems that deliver measurable business impact. I am committed to creating reliable, scalable, and high-quality software solutions that contribute to organizational success and customer satisfaction.
    </p>
  </CardContent>
</Card>
          </div>

          <div className="space-y-6">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="text-xl font-semibold">Master's in Computer Science</h4>
                    <p className="text-purple-400 font-medium">University of Dayton</p>
                    <p className="text-muted-foreground">Sep 2023 – Dec 2024</p>
                    <p className="text-muted-foreground">CGPA: 3.8/4.0</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">3+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
