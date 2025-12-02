import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container max-w-6xl mx-auto text-center space-y-2">
        <p className="text-muted-foreground text-sm">
          © 2025 כל הזכויות שמורות ליובל סיטי - SiteMaster AI
        </p>
        <Link 
          to="/terms" 
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          תנאי שימוש ומדיניות פרטיות
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
