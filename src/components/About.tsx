
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
                I am a results-driven <span className="text-primary font-semibold">Software Development Engineer</span> with 4+ years of experience building scalable distributed systems and microservices on AWS, delivering high-performance solutions in multi-tenant environments.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                I specialize in system design, backend development, and API engineering, with a strong focus on improving reliability and performance. I have successfully increased system uptime to 99.9% and reduced latency by 30% by optimizing architectures, implementing efficient data processing, and leveraging cloud-native technologies.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                My expertise spans the full software development lifecycle, including microservices architecture, cloud platforms, and modern frontend frameworks. I am passionate about solving complex engineering problems and building scalable, resilient systems that drive real business impact.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                Currently, I am focused on developing innovative, high-throughput applications that enhance user experience, ensure system reliability, and support large-scale enterprise use cases.
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
                    <div className="text-3xl font-bold text-purple-400">4+</div>
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
