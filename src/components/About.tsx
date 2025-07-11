
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
                  I am a highly motivated and results-driven <span className="text-primary font-semibold">Full Stack Software Engineer</span> with 
                  over 3 years of hands-on experience designing, developing, and maintaining robust, scalable web applications.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  My work spans the entire software development lifecycle, with expertise in microservices, cloud platforms, 
                  and modern front-end frameworks. I enjoy solving algorithmic challenges and building seamless, high-performance 
                  solutions that drive real business impact.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  Currently, I'm focused on crafting innovative digital products that enhance user experience and operational efficiency.
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
                    <p className="text-muted-foreground">Aug 2023 – Dec 2024</p>
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
