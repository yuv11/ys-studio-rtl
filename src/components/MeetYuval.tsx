import { motion } from "framer-motion";
import yuvalProfile from "@/assets/yuval-profile.png";

const MeetYuval = () => {
  return (
    <section className="py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        >
          {/* Text Content - Right side in RTL */}
          <div className="flex-1 text-center lg:text-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent">
              נעים להכיר, אני יובל סיטי
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                אני בונה דפי נחיתה ואתרים כבר מעל 4 שנים.
                <br />
                במהלך הזמן הזה בניתי עשרות אתרים – גם ללקוחות וגם למיזמים אישיים שלי.
              </p>
              
              <p>
                התחלתי כמו כולם עם וורדפרס, אלמנטור והמון זמן פנוי כדי לבנות כל אתר.
                <br />
                עם הזמן גיליתי איך להשתמש ב־AI כדי לבנות אתרים הרבה יותר מקצועיים ויפים, בצורה מהירה ופשוטה – בלי לוותר על איכות.
              </p>
              
              <p>
                הקורס הזה נולד בדיוק מהמקום הזה.
                <br />
                המטרה שלי היא להעביר לך בדיוק את הדרך שבה אני בונה היום אתרים:
                <br />
                בלי הסתבכויות טכניות, בלי לשבור את הראש, ובלי לשלם אלפי שקלים לבוני אתרים.
              </p>
              
              <p>
                לבנות אתר טוב לא צריך להיות מסובך, לא צריך לדרוש מעצב ובונה אתרים,
                <br />
                ובטח שלא צריך לקחת יותר משעה-שעתיים.
              </p>
            </div>
          </div>
          
          {/* Image - Left side in RTL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-50" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border border-border/50 bg-card">
                <img 
                  src={yuvalProfile} 
                  alt="יובל סיטי" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeetYuval;
