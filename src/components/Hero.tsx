
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in mt-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-muted-foreground">
            Full Stack Software Engineer
          </h2>

          {/* Profile Image with actual photo */}
          <div className="mb-8">
            <div className="w-48 h-47 mx-auto rounded-full bg-gradient-to-br from-purple-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src="/manasaMahi.jpeg"
                  alt="MANASA MAHENDRA - Full Stack Software Engineer"
                  className="w-48 h-50 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Building scalable, customer-focused software solutions with precision and passion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-3">
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-8 h-8 mx-auto text-purple-400" />
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;
