import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";

const Portfolio = () => {
  const handleClick = () => {
    toast({
      title: "שכרגע אני לא בונה דפי נחיתה",
    });
  };
  const portfolioItems = [
    {
      id: "project-1",
      title: "טיפול נשיות באיזון חיים",
      summary: "דף נחיתה לקורס דיגיטלי בתחום הבריאות והאיזון האישי לנשים. העיצוב משדר רוגע ומקצועיות, עם דגש על חווית משתמש נעימה וממירה.",
      url: "https://hadasgroup.yuvalsiti.com/",
      image: project1,
    },
    {
      id: "project-2",
      title: "דף נחיתה לפרסום שירות של שיעורים פרטיים בעזרת אימוני ניורופידבק",
      summary: "דף נחיתה לפרסום שירות של שיעורים פרטיים בעזרת אימוני ניורופידבק",
      url: "https://gili.yuvalsiti.com/",
      image: project2,
    },
    {
      id: "project-3",
      title: "טיפול היכרות אישי",
      summary: "דף נחיתה לתוכנית ליווי אישי ופגישות טיפול מותאמות אישית. העיצוב מדגיש אמון, חום אנושי ומקצועיות גבוהה.",
      url: "https://hadas.yuvalsiti.com/",
      image: project3,
    },
    {
      id: "project-4",
      title: "ליווי מורים פרטיים",
      summary: "דף נחיתה שנועד לליווי מורים פרטיים על מנת שיוכלו לגדול ולייצר הכנסה משמעותית מהתחום",
      url: "https://gili-gali-li.yuvalsiti.com/",
      image: project4,
    },
    {
      id: "project-5",
      title: "אתר לדיג'יי",
      summary: "אתר שגורם לגולשים להרגיש כאילו הם במסיבה - עם סאונד שנשאר בלב גם אחרי שהרחבה מתרוקנת.",
      url: "https://djrazzo.yuvalsiti.com/",
      image: project5,
    },
  ];

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto">
        <div className="mb-16 md:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              כמה דפים שבניתי לאחרונה
            </h2>
            <p className="text-muted-foreground text-lg sm:text-xl">
              כל דף שאני בונה שונה לגמרי, כי כל עסק שונה לגמרי. המטרה שלי היא שכל אחד מהם ירגיש מדויק — בעיצוב, במסרים, ובאווירה שהוא משדר.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden transition-all duration-300 hover:shadow-gradient-glow"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative h-[300px] md:h-[400px] overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent md:bg-gradient-to-r md:from-background/80 md:via-background/20 md:to-transparent" />
                </div>

                {/* Text Section */}
                <div className={`flex flex-col justify-center p-8 md:p-12 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg mb-6 leading-relaxed">
                    {item.summary}
                  </p>
                  <div>
                    <Button
                      variant="outline"
                      size="lg"
                      className="group/btn border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a href={item.url} className="flex items-center gap-2">
                        <span>צפייה בפרויקט</span>
                        <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover/btn:-translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6 pt-16">
          <p className="text-lg md:text-xl font-medium">
            רוצים דף כזה לעסק שלכם?
          </p>
          <GradientButton 
            variant="variant"
            className="px-14"
            onClick={handleClick}
          >
            בואו נתחיל
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
