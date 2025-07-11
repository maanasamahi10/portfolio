
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "JavaScript", "C++", "HTML", "CSS"],
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "Frameworks",
      skills: ["Spring", "React.js", "Angular", "Node.js", "Hibernate", "RESTful APIs"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Databases",
      skills: ["MySQL", "Oracle", "NoSQL"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Redshift)", "GitHub", "Jenkins", "Docker", "CI/CD"],
      gradient: "from-purple-500 to-violet-500"
    },
    {
      title: "Other",
      skills: ["Agile/Scrum", "SDLC", "Jira", "ElasticSearch", "JUnit", "Postman"],
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="glass-card hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
