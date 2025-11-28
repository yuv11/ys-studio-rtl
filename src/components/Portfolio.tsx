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
      title: "שכרגע אני לא בונה דפי נחיתה"
    });
  };
  const portfolioItems = [{
    id: "project-1",
    title: "טיפול נשיות באיזון חיים",
    summary: "דף נחיתה לקורס דיגיטלי בתחום הבריאות והאיזון האישי לנשים. העיצוב משדר רוגע ומקצועיות, עם דגש על חווית משתמש נעימה וממירה.",
    url: "https://hadasgroup.yuvalsiti.com/",
    image: project1
  }, {
    id: "project-2",
    title: "דף נחיתה לפרסום שירות של שיעורים פרטיים בעזרת אימוני ניורופידבק",
    summary: "דף נחיתה לפרסום שירות של שיעורים פרטיים בעזרת אימוני ניורופידבק",
    url: "https://gili.yuvalsiti.com/",
    image: project2
  }, {
    id: "project-3",
    title: "טיפול היכרות אישי",
    summary: "דף נחיתה לתוכנית ליווי אישי ופגישות טיפול מותאמות אישית. העיצוב מדגיש אמון, חום אנושי ומקצועיות גבוהה.",
    url: "https://hadas.yuvalsiti.com/",
    image: project3
  }, {
    id: "project-4",
    title: "ליווי מורים פרטיים",
    summary: "דף נחיתה שנועד לליווי מורים פרטיים על מנת שיוכלו לגדול ולייצר הכנסה משמעותית מהתחום",
    url: "https://gili-gali-li.yuvalsiti.com/",
    image: project4
  }, {
    id: "project-5",
    title: "אתר לדיג'יי",
    summary: "אתר שגורם לגולשים להרגיש כאילו הם במסיבה - עם סאונד שנשאר בלב גם אחרי שהרחבה מתרוקנת.",
    url: "https://djrazzo.yuvalsiti.com/",
    image: project5
  }];
  return <section className="py-32 px-6">
      
    </section>;
};
export default Portfolio;