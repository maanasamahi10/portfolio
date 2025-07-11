
const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Manasa K</h3>
            <p className="text-muted-foreground">Full Stack Software Engineer</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:manasamahi.work@gmail.com"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/manasa-software-engineer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="tel:+19372045361"
              className="text-muted-foreground hover:text-purple-400 transition-colors"
            >
              Phone
            </a>
          </div>

          <div className="border-t border-border/50 pt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 Manasa K. All rights reserved. | Building the future, one line of code at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
