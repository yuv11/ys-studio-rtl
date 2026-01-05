import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";

const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: "project-1",
      title: "טיפול נשיות באיזון חיים",
      summary: "דף נחיתה לקורס דיגיטלי בתחום הבריאות והאיזון האישי לנשים. העיצוב משדר רוגע ומקצועיות, עם דגש על חווית משתמש נעימה וממירה.",
      url: "https://hadasgroup.yuvalsiti.com/",
      image: project1
    },
    {
      id: "project-2",
      title: "דף נחיתה לפרסום שירות של שיעורים פרטיים בעזרת אימוני ניורופידבק",
      summary: "דף נחיתה לפרסום שירות של שיעורים פרטיים בעזרת אימוני ניורופידבק",
      url: "https://gili.yuvalsiti.com/",
      image: project2
    },
    {
      id: "project-3",
      title: "טיפול היכרות אישי",
      summary: "דף נחיתה לתוכנית ליווי אישי ופגישות טיפול מותאמות אישית. העיצוב מדגיש אמון, חום אנושי ומקצועיות גבוהה.",
      url: "https://hadas.yuvalsiti.com/",
      image: project3
    },
    {
      id: "project-4",
      title: "ליווי מורים פרטיים",
      summary: "דף נחיתה שנועד לליווי מורים פרטיים על מנת שיוכלו לגדול ולייצר הכנסה משמעותית מהתחום",
      url: "https://gili-gali-li.yuvalsiti.com/",
      image: project4
    },
    {
      id: "project-5",
      title: "אתר לדיג׳יי",
      summary: "אתר שגורם לגולשים להרגיש כאילו הם במסיבה - עם סאונד שנשאר בלב גם אחרי שהרחבה מתרוקנת.",
      url: "https://djrazzo.yuvalsiti.com/",
      image: project5
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Header */}
      <header className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            חזרה לדף הראשי
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent"
          >
            כמה דפים שבניתי לאחרונה
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            כל דף שאני בונה שונה לגמרי, כי כל עסק שונה לגמרי. המטרה שלי היא שכל אחד מהם ירגיש מדויק — בעיצוב, במסרים, ובאווירה שהוא משדר.
          </motion.p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 px-4 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 md:gap-16">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-8`}>
                    {/* Image */}
                    <div className="lg:w-1/2 relative group">
                      <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                        {item.summary}
                      </p>
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
                      >
                        צפייה בפרויקט
                        <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky CTA Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-background via-background/95 to-transparent">
        <div className="max-w-md mx-auto">
          <Link to="/#purchase-section">
            <GradientButton className="w-full py-4 text-lg font-bold">
              אז מה? אני רוצה גישה לקורס
            </GradientButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
