import { GradientButton } from "@/components/ui/gradient-button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImage from "@/assets/hero-gradient.jpg";
import codingPerson from "@/assets/coding-person.png";
import phonesMockup from "@/assets/phones-mockup.png";
import womanCopywriter from "@/assets/woman-copywriter.png";
import courseMockup from "@/assets/course-mockup.png";
import websiteResult from "@/assets/website-result.png";
import restaurantMeal from "@/assets/restaurant-meal.jpg";
import logoGraphic from "@/assets/logo-graphic.jpg";
import { toast } from "@/hooks/use-toast";
import { DollarSign, Settings, RefreshCw, Target, Award } from "lucide-react";
const Hero = () => {
  const handleClick = () => {
    const purchaseSection = document.getElementById('purchase-section');
    if (purchaseSection) {
      purchaseSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">{/* Removed bg-background to show shader */}
      
      <div className="container relative z-10 px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <p className="text-base md:text-xl fade-in font-medium text-primary/90 tracking-wide">מה אם הייתי אומר לך ש...</p>
            <h1 className="text-4xl md:text-6xl leading-tight fade-in text-white font-bold lg:text-5xl">יש דרך לבנות אתר שנראה מקצועי וממותג - בלי לשבור את הראש ובלי לשלם אלפי שקלים</h1>
          </div>
          
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
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-2 pb-[50px] pt-[30px]">
            <GradientButton className="px-14" onClick={handleClick}>
              ​אני חייב כזה גם בעסק שלי!                
            </GradientButton>
          </div>
          
          {/* Story Section */}
          <div className="max-w-4xl mx-auto mt-32 space-y-16 my-[70px]">
            {/* First Text Block */}
            <div className="text-center space-y-6 text-foreground/90 leading-relaxed">
              <p className="text-2xl md:text-3xl font-medium">כשהתחלתי את הדרך שלי,</p>
              
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                רציתי להיות <strong className="text-foreground font-bold">בונה דפי נחיתה לעסקים</strong>.
                <br />
                חשבתי שזה מקצוע שמאפשר לי לעזור, ליצור, לבנות - וגם להרוויח.
              </p>
              
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                אבל מהר מאוד גיליתי את המציאות והבנתי שבניית אתר טוב לוקחת שבועות,
                <br />
                ואין בשוק שום פתרון טוב ופשוט לזה...
              </p>
              
              <div className="pt-8">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-relaxed">
                  "אם רק בעלי העסקים היו יכולים לבנות אתר בעצמם בקלות… זה היה משנה את כל התמונה!"
                </p>
              </div>
              
              <p className="text-xl md:text-2xl max-w-3xl mx-auto pt-6">
                באותו זמן התחלתי להתעניין עמוק בעולם ה-AI.
                <br />
                חקרתי, ניסיתי כלים, בדקתי מה אפשר לעשות.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-primary pt-4">ואז גיליתי את עולם התכנות עם AI.</p>
            </div>
            
            {/* Image */}
            <div className="flex justify-center">
              <img src={codingPerson} alt="תכנות עם AI" className="rounded-2xl max-w-lg w-full shadow-gradient-glow" />
            </div>
            
            {/* Second Text Block */}
            <div className="text-center space-y-6 text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl">
                בהתחלה זלזלתי - באמת.
                <br />
                חשבתי שזה צעצוע, סתם דרך לייצר אתרים בסיסיים ובינוניים.
              </p>
              
              <div className="space-y-3 text-lg md:text-xl text-muted-foreground">
                <p>ואז זה קרה.</p>
                <p>נכנסתי לזה קצת יותר עמוק.</p>
                <p>ניסיתי פרומפטים.</p>
                <p>שיחקתי עם המבנה.</p>
                <p>פיתחתי שיטות עבודה מתוחכמות.</p>
                <p>בדקתי הגדרות.</p>
              </div>
              
              <div className="pt-6">
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  ופתאום - זה נפתח.
                </p>
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground pt-4 leading-relaxed">
                  הבנתי שאפשר לבנות ככה דברים מטורפים.
                </p>
                <p className="text-xl md:text-2xl pt-4">
                  אתרים שנראים כאילו עלו 10,000 ₪.
                  <br />
                  אתרים מקצועיים, נקיים, ממותגים.
                </p>
              </div>
            </div>
            
            {/* Phones Image */}
            <div className="flex justify-center">
              <img src={phonesMockup} alt="דוגמאות אתרים בנייד" className="max-w-2xl w-full shadow-none rounded-none object-fill" />
            </div>
            
            {/* Third Text Block */}
            <div className="text-center space-y-6 text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed">
                "רגע… זה כל כך קל. למה שלא כל בעל עסק יעשה את זה לבד?"
              </p>
              
              <p className="text-xl md:text-2xl pt-4">
                אז התחלתי לבנות לעסקים אתרים עם AI.
                <br />
                אחד ועוד אחד.
              </p>
              
              <p className="text-xl md:text-2xl">
                ואנשים <strong className="text-foreground font-bold">עפו</strong> על התוצאות.
                <br />
                לא כי אני גאון.
                <br />
                אלא כי AI פשוט מאפשר ליצור דברים מדהימים בזמן קצר.
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-primary pt-6">וזה הרגע שבו הבנתי את הכל!</p>
            </div>
            
            {/* Woman Copywriter Image */}
            <div className="flex justify-center">
              
            </div>
            
            {/* Fourth Text Block */}
            <div className="text-center space-y-6 text-foreground/90 leading-relaxed max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                וכל זה התחבר ל־SiteMaster AI
              </p>
              
              <p className="text-xl md:text-2xl">
                שיטה שמאפשרת לכל בעל עסק לבנות אתר מעוצב, ממותג וממיר <strong className="text-foreground font-bold">תוך שעתיים</strong>, בלי קוד ובלי שום ידע מוקדם בפיתוח, או עיצוב.
              </p>
              
              <div className="space-y-3 text-xl md:text-2xl text-muted-foreground pt-4">
                <p>זה לא קסם.</p>
                <p>זה פשוט שימוש נכון ב-AI.</p>
              </div>
              
              <p className="text-xl md:text-2xl font-semibold text-foreground pt-4">וזה מה שהקורס הזה בא לתת.</p>
            </div>
            
            {/* Course Mockup Image */}
            <div className="flex justify-center">
              <img src={courseMockup} alt="הקורס המקיף SiteMaster AI" className="max-w-xl w-full border-0 rounded-none shadow-none" />
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center mt-12">
            <GradientButton onClick={handleClick} className="px-14">
                אני רוצה להיות בפנים!👇     
              </GradientButton>
            </div>
          </div>
          
          {/* Pain Points Section */}
          <div className="max-w-5xl mx-auto mt-24 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight pt-0 mt-[90px]">
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
          
          {/* What You'll Get Section */}
          <div className="max-w-4xl mx-auto space-y-12 pt-[70px] mt-[60px]">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                מה תקבלו בתוך השיטה של SiteMaster AI
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                כל מה שאתם צריכים כדי לבנות אתר מקצועי, ממיר ומעוצב – אפילו אם אין לכם ניסיון.
              </p>
            </div>
            
            {/* Main Content Card - Different style from pain points */}
            <Card className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-primary/20 shadow-xl">
              <CardContent className="p-8 md:p-12 space-y-6 text-right py-[20px] pt-0 mb-0">
                
                
                <ul className="space-y-4 text-lg text-foreground/90" dir="rtl">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-right">איך לגרום ל־AI לכתוב עבורך קופי מקצועי וממיר</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-right">איך לגרום ל־AI לבנות עבורך אתר שנראה כמו 10,000 ₪</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-right">איך לבנות מותג ויזואלי ברור ומקצועי</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-right">איך למפות את האתר שלך בצורה נכונה כדי שיהיה ברור ויוביל אנשים לפעולה</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-right">איך לייצר בקלות ובמהירות אתרים איכותיים תוך שעות</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-right">איך להעלות את האתר שלך לאוויר ולשלוט בו בעצמך בקלות</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            {/* Pills Section */}
            <div className="space-y-8 mb-[130px]">
              <p className="text-center text-xl font-semibold text-foreground mt-[20px]">
                השיטה בנויה כך שגם מי שאין לו:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-primary/30 bg-card/30 backdrop-blur justify-center hover:border-primary/50 transition-colors">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-foreground font-medium">חוש עיצובי</span>
                </div>
                
                <div className="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-primary/30 bg-card/30 backdrop-blur justify-center hover:border-primary/50 transition-colors">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-foreground font-medium">ניסיון בכתיבה</span>
                </div>
                
                <div className="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-primary/30 bg-card/30 backdrop-blur justify-center hover:border-primary/50 transition-colors">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-foreground font-medium">ידע טכני</span>
                </div>
                
                <div className="flex items-center gap-3 px-6 py-4 rounded-full border-2 border-primary/30 bg-card/30 backdrop-blur justify-center hover:border-primary/50 transition-colors">
                  <span className="text-primary text-xl">✔</span>
                  <span className="text-foreground font-medium">ניסיון בבניית אתרים</span>
                </div>
              </div>
              
              <p className="text-center text-xl md:text-2xl font-bold text-foreground leading-relaxed max-w-3xl mx-auto">
                ועדיין תוכלו להקים אתר מקצועי שנראה כמו מותג של מיליון דולר – תוך שעתיים.
              </p>
            </div>
          </div>
          
          {/* Course Modules Section */}
          <div className="max-w-4xl mx-auto space-y-12 mt-[120px]">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                מה תלמד בתוך SiteMaster AI
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                הקורס בנוי כך שגם אדם בלי טיפת ניסיון יוכל להרים אתר מקצועי — מהר, ברור ובלי פחד טכני.
              </p>
            </div>
            
            <Accordion type="single" collapsible dir="rtl" className="w-full space-y-4 mb-[100px]">
              <AccordionItem value="module-1" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold text-foreground hover:no-underline">
                  מודול 1: בסיס – להרגיש את הקרקע
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-foreground/90 pr-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">ברוך הבא! מה הולכים לעשות וללמוד לאורך הקורס</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">ההבדל בין אתר לדף נחיתה - ומה העסק שלך באמת צריך</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">איך AI מאפשר לבנות אתרים שנראים מקצועיים ברמה גבוהה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">היכרות עם כל הכלים שבהם נשתמש (כולל ספריית לינקים מלאה)</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="module-2" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold text-foreground hover:no-underline">
                  מודול 2: מיתוג – ליצור מראה מקצועי ואחיד גם בלי להיות מעצב
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-foreground/90 pr-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">איך לבחור צבעים מקצועיים לעסק</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">איך ליצור שפה עיצובית אחידה שכל אתר טוב חייב</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">בחירת פונט שמתאים למותג</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">ההבדל בין אתר שנראה "זול" לאתר שנראה יוקרתי</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="module-3" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold text-foreground hover:no-underline">
                  מודול 3: כתיבה שיווקית + מיפוי האתר – ליצור אתר שמוכר
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-foreground/90 pr-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">הקדמה למודול והבנת התהליך</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">מיפוי כל הסקשנים באתר עם AI</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">הגדרת קהל, מסר, מטרה</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">איך לכתוב את כל הטקסטים עם סוכנת הקופי מאיה (כולל פרומפטים ודוגמאות)</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="module-4" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold text-foreground hover:no-underline">
                  מודול 4: בנייה ב־Lovable + קייס סטאדי
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-foreground/90 pr-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">פתיחת פרויקט והסבר על המערכת</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">מציאת השראה + שימוש בספריות קוד</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">עבודה עם MIRO</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">שימוש בסוכן הפרומפטים ליאו</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">בנייה מלאה של אתר אמיתי בלייב</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">הכנה לאוטומציות, טפסים, תשלום וכו…</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="module-5" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold text-foreground hover:no-underline">
                  מודול 5: הצד הטכני – דברים קריטיים שאף אחד לא מסביר
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-foreground/90 pr-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">חיבור טפסים ואוטומציות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">תשלום באתר</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">אחסון אתר</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">העלאה לגיטהב וחיבור לאחסון</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">חיבור דומיין</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">הוספת נגישות, עוגיות, מדיניות</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">SEO בסיסי</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">מעקב אנליטיקות</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bonus" className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-primary/20 rounded-lg px-6">
                <AccordionTrigger className="text-right text-lg md:text-xl font-semibold text-foreground hover:no-underline">
                  בונוסים שישפרו לכם את החיים
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-3 text-foreground/90 pr-4">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">מאגר כל האתרים והמשאבים</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">סוכנת AI לכתיבה שיווקית</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">סוכן AI לאפיון אתר + פרומפטים</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">מאגר הפרומפטים הסודי</span>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          {/* Final Result Section */}
          <div className="max-w-4xl mx-auto mt-24 space-y-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mt-0">
              בסוף התהליך - יש לך אתר מקצועי אמיתי. כזה שמביא לקוחות.
            </h2>
            
            <div className="space-y-3 text-xl md:text-2xl text-foreground/80">
              <p>לא אתר 'נחמד'.</p>
              <p>לא אתר 'בסדר'.</p>
              <p>לא אתר שאתה מתבייש לשלוח לאנשים.</p>
              <p className="font-semibold text-foreground">אלא אתר שנראה כאילו עלה 10,000 ₪ לבנות!</p>
            </div>
            
            <div className="w-full mt-12">
              <img src={websiteResult} alt="תוצאה סופית - אתרים מקצועיים על מכשירים שונים" className="w-full h-auto rounded-lg" />
            </div>
          </div>
          
          {/* Bonuses Section */}
          <div className="max-w-6xl mx-auto mt-32 space-y-12" dir="rtl">
            <div className="text-center space-y-4 mt-[60px]">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                הבונוסים שהופכים את הקורס לשווה פי 3
              </h2>
              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                וכל אחד מהם הופעל גם בבניית הדף שאתה קורא עכשיו<br />
                אלה לא סתם 'תוספות' — אלה כלים אמיתיים שעבדו בפועל תוך כדי בניית הדף הזה.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Bonus 1 */}
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-primary/20 rounded-xl p-8 space-y-4 hover:border-primary/40 transition-all duration-300 py-[10px]">
                <div className="flex items-start justify-between gap-4">
                  <div className="text-right flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">סוכנת הקופי – מאיה</h3>
                    <p className="text-xl font-semibold text-primary mb-3">
                      שווי: 1,400 ₪
                    </p>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      מאיה שואלת אותך שאלות, מבינה את העסק שלך, ומייצרת עבורך קופי מקצועי לכל האתר. היא כתבה גם את התוכן שאתה קורא עכשיו.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                </div>
              </div>
              
              {/* Bonus 2 */}
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-primary/30 rounded-xl p-8 space-y-4 hover:border-primary/50 transition-all duration-300 relative overflow-hidden py-[10px]">
                
                <div className="flex items-start justify-between gap-4">
                  <div className="text-right flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">סוכן הפרומפטים – ליאו</h3>
                    <p className="text-xl font-semibold text-primary mb-3">
                      שווי: 900 ₪
                    </p>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      ליאו בונה עבורך פרומפטים מדויקים ללאבאבול — מבנה, עיצוב, סקשנים, הכול. גם המבנה והפרומטים של הדף הזה נבנו איתו.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                </div>
              </div>
              
              {/* Bonus 3 */}
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-primary/30 rounded-xl p-8 space-y-4 hover:border-primary/50 transition-all duration-300 relative overflow-hidden py-[10px]">
                
                <div className="flex items-start justify-between gap-4 my-[8px]">
                  <div className="text-right flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      בונוס 3: מאגר פרומפטים מוכן
                    </h3>
                    <p className="text-xl font-semibold text-primary mb-3">
                      שווי: 600 ₪
                    </p>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      פרומפטים מוכנים לבניית אתרים, כתיבה שיווקית, מיתוג, עיצוב והתנהלות עם ה-AI.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                </div>
              </div>
              
              {/* Bonus 4 */}
              <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-primary/30 rounded-xl p-8 space-y-4 hover:border-primary/50 transition-all duration-300 relative overflow-hidden py-[10px]">
                
                <div className="flex items-start justify-between gap-4">
                  <div className="text-right flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      בונוס 4: מאגר משאבים + אתרי השראה
                    </h3>
                    <p className="text-xl font-semibold text-primary mb-3">
                      שווי: 250 ₪
                    </p>
                    <p className="text-foreground/80 text-lg leading-relaxed">
                      קובץ מסודר של כל הכלים המקצועיים שבהם אני משתמש — במקום לבזבז שעות בגוגל.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">4</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Total Value Highlight */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary rounded-2xl p-10 text-center space-y-3 mt-12 py-[25px] mb-0">
              <p className="text-3xl md:text-4xl font-bold text-foreground">
                שווי כולל הבונוסים: 3,150 ₪
              </p>
              <p className="text-xl md:text-2xl text-foreground/80">
                וכל זה נכלל בתוך הקורס — ללא תוספת תשלום.
              </p>
            </div>
          </div>
          
          {/* Pricing Section */}
          <div dir="rtl" className="max-w-4xl mx-auto space-y-12 text-center mt-[130px]">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              הגיע הזמן לדבר על מחיר - וזה הולך להפתיע אותך
            </h2>
            
            {/* Intro Text */}
            <div className="space-y-4 text-xl md:text-2xl text-foreground/80">
              <p className="font-semibold">בוא נתחיל מהאמת:</p>
              <p>אם הייתי מתמחר את SiteMaster AI לפי הערך האמיתי שהוא נותן…</p>
            </div>
            
            {/* First Dramatic Price */}
            <div className="bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-lg border-2 border-border rounded-2xl p-8 md:p-12 space-y-6">
              <p className="text-3xl md:text-4xl font-bold text-foreground lg:text-4xl">המחיר היה צריך להיות לפחות: 10,450 ₪</p>
              
              {/* Breakdown */}
              <ul className="space-y-3 text-right text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-right">בניית אתר מקצועי אצל בונה אתרים: 5,000–10,000 ₪</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-right">כתיבה שיווקית אצל קופירייטר: 800–2,000 ₪</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-right">מיתוג בסיסי: 1,000–3,000 ₪</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-right">תמיכה טכנית + חיבורים ואוטומציות: עוד 500–1,500 ₪</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-right">והבונוסים לבד שווים 3,150 ₪</span>
                </li>
              </ul>
              
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed pt-4">
                ואתה מרוויח את היכולת ליצור כמה אתרים שתרצה בקלות, לכל מוצר או שירות שאי פעם יהיה לך, בלי תלות באף אחד
              </p>
            </div>
            
            {/* Divider */}
            <div className="flex items-center gap-4 max-w-xl mx-auto my-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            
            {/* First Price Drop */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                🤯 אבל מחיר ההשקה לא יכול להיות 10,450 ₪.
              </p>
              
              <div className="text-lg md:text-xl text-foreground/80 space-y-3 max-w-2xl mx-auto">
                <p className="font-semibold text-foreground">למה?</p>
                <p>כי אני רוצה שבעלי עסקים יוכלו להיכנס לעולם בניית האתרים עם AI - בלי להירתע ובלי לפספס את ההזדמנות המטורפת הזאת.</p>
                <p>אז הורדתי.</p>
              </div>
              
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                מחיר חדש: 7,500 ₪
              </p>
              
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                אבל גם זה… עדיין גבוה מדי למי שרק מתחיל.
              </p>
            </div>
            
            {/* Divider */}
            <div className="flex items-center gap-4 max-w-xl mx-auto my-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            
            {/* Second Price Drop */}
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                😳 אז הורדתי שוב.
              </p>
              
              <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                כי אני רוצה שתוכל להתחיל עכשיו, ולא 'כשיהיה כסף'. (וגם תכלס אין לי סיבה להיות גרידי…)
              </p>
              
              <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                מחיר השקה אחרון: 4,997 ₪
              </p>
              
              <div className="text-lg md:text-xl text-foreground/80 space-y-3 max-w-2xl mx-auto">
                <p>זה כבר מחיר שנראה לי די הגיוני ופייר.</p>
                <p>אבל… ראיתי איזה שינוי זה עושה לעסקים.</p>
                <p>ראיתי איך זה משנה אנשים.</p>
                <p>ואני רוצה שזה יהיה נגיש לכולם, בלי שיחשבו בכלל על המחיר (וגם אם זה אומר לשבור את השוק!)</p>
                <p className="font-semibold text-foreground">אז לקחתי החלטה:</p>
              </div>
            </div>
            
            {/* Divider */}
            <div className="flex items-center gap-4 max-w-xl mx-auto my-12">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
            
            {/* Final Price Reveal */}
            <div className="relative space-y-8">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                🚀 מחיר השקה מיוחד ומשוגע לגמרי: (לזמן מוגבל!)
              </p>
              
              {/* Hero Price with Glow */}
              <div className="relative inline-block mx-auto">
                <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-150" />
                <div className="relative bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-xl border-4 border-primary rounded-3xl px-12 md:px-20 py-8 shadow-[0_0_80px_rgba(var(--primary-rgb),0.4)] md:py-[30px]">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground drop-shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)]">
                    297 ₪ בלבד
                  </p>
                </div>
              </div>
              
              {/* Reassurance */}
              <div className="space-y-2 text-xl md:text-2xl text-foreground/80 font-medium">
                <p>גישה לכל החיים</p>
                <p>תשלום חד פעמי</p>
                <p>בלי אותיות קטנות</p>
              </div>
              
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground pt-4">
                297 ₪ — ואתה יוצא עם אתר מקצועי שנראה מיליון דולר!
              </p>
            </div>
            
            {/* CTA Section */}
            <div id="purchase-section" className="max-w-xl mx-auto mt-16 space-y-8">
              {/* Email Input with Premium Styling */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-2xl" />
                <input type="email" placeholder="הכנס/י את המייל שלך" className="relative w-full px-8 py-5 text-xl rounded-2xl border-4 border-white/30 bg-white/10 backdrop-blur-xl text-white placeholder:text-white/60 focus:outline-none focus:border-white/60 focus:bg-white/15 focus:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 text-center font-semibold hover:border-white/50 hover:bg-white/12 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]" />
              </div>
              
              {/* Premium CTA Button */}
              <button onClick={handleClick} className="group relative w-full px-10 py-6 text-2xl font-black text-primary-foreground rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_60px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_80px_rgba(var(--primary-rgb),0.7)]">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-primary" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                {/* Pulse effect on hover */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
                
                {/* Button content */}
                <span className="relative z-10 flex items-center justify-center gap-3">
                  
                  <span>לרכישה ב-97% הנחה</span>
                  
                </span>
              </button>
              
              {/* Trust indicators */}
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground/80">
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>גישה מיידית</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>תשלום מאובטח</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>​גישה לכל החיים    </span>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional Reinforcement Section */}
          <div dir="rtl" className="py-32 px-6">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Main Headline */}
              <h2 className="text-5xl md:text-6xl font-black text-center text-foreground leading-tight lg:text-5xl">
                זה הרגע שלך - ואתה יודע את זה.
              </h2>

              {/* Emotional Intro */}
              <div className="max-w-3xl mx-auto space-y-6 text-center">
                <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed">
                  אם הגעת עד כאן, אתה מרגיש את זה בבטן:<br />
                  העסק שלך צריך אתר טוב יותר.
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  לא 'יום אחד', לא 'כשיהיה זמן', לא 'כשהמעצב יתפנה'.
                </p>
                <p className="text-3xl md:text-4xl font-bold text-foreground">
                  היום.<br />
                  עכשיו.
                </p>
              </div>

              {/* Sub-headline */}
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  כי כל יום בלי אתר מקצועי הוא יום שבו אתה מפסיד לקוחות.
                </h3>
              </div>

              {/* Supporting Paragraph */}
              <div className="max-w-3xl mx-auto space-y-6 text-center">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  לקוח נכנס, לא מתרשם, יוצא – ואתה אפילו לא יודע שהוא היה שם.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground/80 leading-relaxed">
                  השאלה היא לא 'האם זה קורה?'<br />
                  השאלה היא כמה פעמים זה כבר קרה בלי ששמת לב.
                </p>
              </div>

              {/* Mid-section Headline */}
              <div className="max-w-3xl mx-auto text-center pt-8">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">תחשוב על זה רגע.
 איך ייראה העסק שלך כשהאתר שלך סוף־סוף ייראה:

              </h3>
              </div>

              {/* Creative Mini-Card Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto pt-4 md:pt-8">
                {[{
                icon: "✨",
                text: "מקצועי"
              }, {
                icon: "🎨",
                text: "ממותג"
              }, {
                icon: "✓",
                text: "נקי"
              }, {
                icon: "🛡️",
                text: "אמין"
              }, {
                icon: "💬",
                text: "מסביר מי אתה"
              }, {
                icon: "🎯",
                text: "מוביל אנשים להשאיר פרטים או לקנות"
              }].map((feature, index) => <div key={index} className="group relative p-3 md:p-6 rounded-xl md:rounded-2xl bg-card/40 backdrop-blur border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] hover:-translate-y-1 text-center">
                    <div className="text-2xl md:text-4xl mb-1 md:mb-3">{feature.icon}</div>
                    <p className="text-sm md:text-lg font-semibold text-foreground">{feature.text}</p>
                  </div>)}
              </div>

              {/* Reflection Questions */}
              <div className="max-w-3xl mx-auto space-y-6 text-center pt-8">
                <div className="space-y-3 text-2xl md:text-3xl text-foreground/90 font-medium leading-relaxed">
                  <p>מה יקרה למכירות שלך?</p>
                  <p>לביטחון שלך?</p>
                  <p>למחירים שאתה גובה?</p>
                  <p>לרושם שאתה משאיר?</p>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed pt-6">
                  לקוח שפוגש אתר טוב — מרגיש שאתה עסק טוב.<br />
                  זה עד כדי כך פשוט.
                </p>
              </div>

              {/* Final Motivational Block */}
              <div className="max-w-3xl mx-auto space-y-8 text-center pt-12">
                <p className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                  ועכשיו, יש לך הזדמנות יוצאת דופן:
                </p>
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                  להיכנס לקורס שייתן לך יכולת לכל החיים —<br />
                  לבנות אתר מקצועי תוך שעתיים, לבד, בלי תלות באף אחד.
                </p>
                
                <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed pt-6">
                  <p>לא עוד המתנה למעצב.</p>
                  <p>לא עוד תשלום נוסף על שינוי קטן.</p>
                  <p>לא עוד תחושות של 'זה לא מספיק טוב'.</p>
                </div>

                <div className="space-y-4 text-xl md:text-2xl font-bold text-foreground leading-relaxed pt-8">
                  <p>אתה שולט באתר שלך.</p>
                  <p>אתה בונה. אתה משנה. אתה מרים דפים חדשים.</p>
                </div>

                <div className="relative pt-8">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <p className="relative text-2xl md:text-3xl font-black text-foreground leading-relaxed">
                    ברגע שאתה לומד את השיטה — זה שלך לנצח<br />
                    ואף אחד לא ייקח ממך את זה.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Comparison Section */}
          <div dir="rtl" className="px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent py-[60px]">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground leading-tight">
                והכול במחיר שאפילו לא מתקרב לשווי האמיתי:
              </h2>

              {/* Price */}
              <div className="text-center">
                <p className="text-6xl md:text-7xl lg:text-8xl font-black text-primary">
                  297 ₪ בלבד.
                </p>
              </div>

              {/* Visual Comparisons */}
              <div className="max-w-3xl mx-auto space-y-16 pt-8">
                {/* Restaurant Comparison */}
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl text-center text-foreground/90 font-medium">
                    זה פחות מארוחה זוגית במסעדה.
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img src={restaurantMeal} alt="ארוחה במסעדה" className="w-full h-auto object-cover" />
                  </div>
                </div>

                {/* Logo Comparison */}
                <div className="space-y-6">
                  <p className="text-2xl md:text-3xl text-center text-foreground/90 font-medium">
                    פחות מהעלות של לוגו ממוצע.
                  </p>
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img src={logoGraphic} alt="עיצוב לוגו" className="w-full h-auto object-cover" />
                  </div>
                </div>
              </div>

              {/* Motivational Block */}
              <div className="max-w-3xl mx-auto space-y-8 text-center pt-12">
                <p className="text-3xl md:text-4xl font-bold text-foreground leading-relaxed">
                  עכשיו זה עליך.
                </p>
                
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                  אתה יכול להמשיך עוד חודש, עוד חצי שנה, עוד שנה –<br />
                  בלי אתר שאתה גאה בו (או בלי אתר בכלל).
                </p>

                <div className="space-y-4 text-xl md:text-2xl text-muted-foreground leading-relaxed pt-6">
                  <p>או שאתה יכול ללחוץ על הכפתור,</p>
                  <p>להצטרף ל־SiteMaster AI,</p>
                  <p className="font-bold text-foreground">ולבנות אתר מקצועי שנראה 10,000 ₪ – כבר השבוע.</p>
                </div>

                <div className="relative pt-8">
                  <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                  <p className="relative text-2xl md:text-3xl font-black text-foreground">
                    זו הזדמנות שאין סיבה לפספס.
                  </p>
                </div>
              </div>

              {/* CTA Block */}
              <div className="max-w-2xl mx-auto space-y-6 pt-12">
                <div className="relative group">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Email Input */}
                  <div className="relative mb-6">
                    <input type="email" placeholder="הכנס/י את המייל שלך" className="w-full px-8 py-6 text-xl text-white placeholder:text-white/60 bg-white/10 backdrop-blur-xl border-4 border-white/30 rounded-2xl focus:outline-none focus:border-white/50 focus:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:border-white/40 transition-all duration-300 shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] font-semibold" dir="rtl" />
                  </div>

                  {/* CTA Button */}
                  <button onClick={handleClick} className="relative w-full group/btn overflow-hidden px-12 py-8 text-3xl font-black text-white bg-gradient-to-r from-primary via-primary to-primary rounded-2xl shadow-[0_0_60px_rgba(var(--primary-rgb),0.5)] hover:shadow-[0_0_80px_rgba(var(--primary-rgb),0.7)] hover:scale-105 active:scale-95 transition-all duration-300">
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                    
                    {/* Button text */}
                    <span className="relative flex items-center justify-center gap-3 text-2xl">
                      
                      שמעתי מספיק — אני בפנים
                      
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;