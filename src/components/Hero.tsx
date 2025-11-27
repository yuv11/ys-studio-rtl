import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-gradient.jpg";
import codingPerson from "@/assets/coding-person.png";
import phonesMockup from "@/assets/phones-mockup.png";
import womanCopywriter from "@/assets/woman-copywriter.png";
import courseMockup from "@/assets/course-mockup.png";
import { toast } from "@/hooks/use-toast";
import { DollarSign, Settings, RefreshCw, Target, Award } from "lucide-react";
const Hero = () => {
  const handleClick = () => {
    toast({
      title: "שכרגע אני לא בונה דפי נחיתה"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">{/* Removed bg-background to show shader */}
      
      <div className="container relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl leading-tight fade-in font-medium text-white lg:text-6xl">יש דרך לבנות אתר שנראה מקצועי וממותג - בלי לשבור את הראש ובלי לשלם אלפי שקלים</h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto fade-in-delay-1">
            גם אתם יכולים לבנות בקלות ובמהירות אתרים שנראים כמו מיליון דולר באמצעות AI בלבד! (בדיוק כמו הדף נחיתה הזה)<br />
            ​
          </p>
          
          {/* Video Frame */}
          <div className="relative max-w-3xl mx-auto mt-8 fade-in-delay-2">
            <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border bg-card shadow-gradient-glow">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted/30 to-muted/10">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground text-sm">מקום לסרטון</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10 fade-in-delay-2">
            <GradientButton className="px-14" onClick={handleClick}>
              ​אני חייב כזה גם בעסק שלי!                
            </GradientButton>
          </div>
          
          {/* Story Section */}
          <div className="max-w-3xl mx-auto mt-24 space-y-8">
            {/* First Text Block */}
            <div className="text-right space-y-4 text-foreground/90 leading-relaxed mt-[84px]">
              <p className="text-lg my-0">כשהתחלתי את הדרך שלי,</p>
              
              <p className="text-lg">
                רציתי להיות <strong className="text-foreground font-semibold">בונה דפי נחיתה לעסקים</strong>.
                <br />
                חשבתי שזה מקצוע שמאפשר לי לעזור, ליצור, לבנות - וגם להרוויח.
              </p>
              
              <p className="text-lg">אבל מהר מאוד גיליתי את המציאות
והבנתי שבניית אתר טוב לוקחת שבועות,
ואין בשוק שום פתרון טוב ופשוט לזה...</p>
              
              
              
              <p className="text-lg">
                ובאיזשהו שלב… שאלתי את עצמי:
                <br />
                <strong className="text-foreground font-semibold text-xl">"אם רק בעלי העסקים היו יכולים לבנות אתר בעצמם בקלות… זה היה משנה את כל התמונה!"</strong>
              </p>
              
              <p className="text-lg">
                באותו זמן התחלתי להתעניין עמוק בעולם ה-AI.
                <br />
                חקרתי, ניסיתי כלים, בדקתי מה אפשר לעשות.
              </p>
              
              <p className="text-xl font-bold">ואז גיליתי את עולם התכנות עם AI.</p>
            </div>
            
            {/* Image */}
            <div className="flex justify-center my-8">
              <img src={codingPerson} alt="תכנות עם AI" className="rounded-2xl max-w-sm w-full shadow-gradient-glow" />
            </div>
            
            {/* Second Text Block */}
            <div className="text-right space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                בהתחלה זלזלתי - באמת.
                <br />
                חשבתי שזה צעצוע, סתם דרך לייצר אתרים בסיסיים ובינוניים.
              </p>
              
              <p className="text-lg">ואז זה קרה.</p>
              <p className="text-lg">נכנסתי לזה קצת יותר עמוק.</p>
              <p className="text-lg">ניסיתי פרומפטים.</p>
              <p className="text-lg">שיחקתי עם המבנה.</p>
              <p className="text-lg">פיתחתי שיטות עבודה מתוחכמות.</p>
              <p className="text-lg">בדקתי הגדרות.</p>
              
              <p className="text-lg">
                ופתאום - זה נפתח.
                <br />
                <strong className="text-foreground font-semibold">הבנתי שאפשר לבנות ככה דברים מטורפים.</strong>
                <br />
                אתרים שנראים כאילו עלו 10,000 ₪.
                <br />
                אתרים מקצועיים, נקיים, ממותגים.
              </p>
            </div>
            
            {/* Phones Image */}
            <div className="flex justify-center my-8">
              <img src={phonesMockup} alt="דוגמאות אתרים בנייד" className="max-w-2xl w-full shadow-none rounded-none" />
            </div>
            
            {/* Third Text Block */}
            <div className="text-right space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                ובפעם הראשונה בחיי הרגשתי:
                <br />
                <strong className="text-foreground font-semibold text-xl">"רגע… זה כל כך קל. למה שלא כל בעל עסק יעשה את זה לבד?"</strong>
              </p>
              
              <p className="text-lg">
                אז התחלתי לבנות לעסקים אתרים עם AI.
                <br />
                אחד ועוד אחד.
                <br />
                ואנשים <strong className="text-foreground font-semibold">עפו</strong> על התוצאות.
                <br />
                לא כי אני גאון.
                <br />
                אלא כי AI פשוט מאפשר ליצור דברים מדהימים בזמן קצר.
              </p>
              
              <p className="font-semibold text-xl">וזה הרגע שבו הבנתי את הכל!</p>
            </div>
            
            {/* Woman Copywriter Image */}
            <div className="flex justify-center my-8">
              <img src={womanCopywriter} alt="מאיה - קופירייטרית" className="rounded-2xl max-w-xl w-full shadow-gradient-glow" />
            </div>
            
            {/* Fourth Text Block */}
            <div className="text-right space-y-4 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                <strong className="text-foreground font-semibold text-2xl">וכל זה התחבר ל־SiteMaster AI -</strong>
                <br />
                שיטה שמאפשרת לכל בעל עסק לבנות אתר מעוצב, ממותג וממיר <strong className="text-foreground font-semibold">תוך שעתיים</strong>, בלי קוד ובלי שום ידע מוקדם בפיתוח, או עיצוב.
              </p>
              
              <p className="text-lg">
                זה לא קסם.
                <br />
                זה פשוט שימוש נכון ב-AI.
              </p>
              
              <p className="text-lg">וזה מה שהקורס הזה בא לתת.</p>
            </div>
            
            {/* Course Mockup Image */}
            <div className="flex justify-center my-8">
              <img src={courseMockup} alt="הקורס המקיף SiteMaster AI" className="max-w-xl w-full border-0 rounded-none shadow-none" />
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center mt-12">
              <GradientButton onClick={handleClick} className="px-14 text-black [background-image:none] bg-white">
                אני רוצה להיות בפנים!👇     
              </GradientButton>
            </div>
          </div>
          
          {/* Pain Points Section */}
          <div className="max-w-5xl mx-auto mt-24 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                "אני חייב אתר שנראה מקצועי כדי להביא יותר לקוחות - אבל אין לי כסף, זמן או יכולת לבנות אחד."
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                ולצד זה מגיעים עוד כאבים שמלווים כמעט כל בעל עסק:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <Card className="bg-card/50 backdrop-blur border-border hover:shadow-gradient-glow transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 space-y-4 text-right">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    "אני לא הולך לשלם עוד 5,000–10,000 ₪ על אתר."
                  </h3>
                  <p className="text-muted-foreground">
                    במיוחד כשאין שום הבטחה שהוא באמת יעבוד.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="bg-card/50 backdrop-blur border-border hover:shadow-gradient-glow transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 space-y-4 text-right">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    "טכנולוגיה זה לא בשבילי."
                  </h3>
                  <p className="text-muted-foreground">
                    וורדפרס, תוספים, עיצובים, הגדרות, דומיין… מרגיש כמו שפה זרה.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="bg-card/50 backdrop-blur border-border hover:shadow-gradient-glow transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 space-y-4 text-right">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <RefreshCw className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    "גם אם אקבל אתר – אני ארצה לעדכן אותו."
                  </h3>
                  <p className="text-muted-foreground">
                    לבקש מעצב לשנות כפתור כל פעם? יקר ומתסכל.
                  </p>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="bg-card/50 backdrop-blur border-border hover:shadow-gradient-glow transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 space-y-4 text-right">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    "אני צריך אתר שמביא לקוחות – לא סתם אתר יפה."
                  </h3>
                  <p className="text-muted-foreground">
                    רוב האתרים נראים בסדר… אבל לא מוכרים.
                  </p>
                </CardContent>
              </Card>

              {/* Card 5 */}
              <Card className="bg-card/50 backdrop-blur border-border hover:shadow-gradient-glow transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6 space-y-4 text-right">
                  <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    "אני רוצה להיראות כמו עסק אמיתי, לא חלטורה."
                  </h3>
                  <p className="text-muted-foreground">
                    היום לקוח נותן מבט אחד באתר ומחליט אם אתה מקצוען או לא.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;