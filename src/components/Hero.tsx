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
import testimonialScreenshot1 from "@/assets/testimonial-screenshot-1.png";
import testimonialScreenshot2 from "@/assets/testimonial-screenshot-2.png";
import testimonialScreenshot3 from "@/assets/testimonial-screenshot-3.png";
import testimonialScreenshot4 from "@/assets/testimonial-screenshot-4.png";
import testimonialScreenshot5 from "@/assets/testimonial-screenshot-5.png";
import { toast } from "@/hooks/use-toast";
import { DollarSign, Settings, RefreshCw, Target, Award, Star, Play } from "lucide-react";
import PhoneCarousel from "@/components/PhoneCarousel";
import PurchaseForm from "@/components/PurchaseForm";
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
          
          {/* Phone Carousel */}
          <div className="mt-8 fade-in-delay-2">
            <PhoneCarousel className="pt-[30px] py-px" />
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
            <div className="flex flex-col items-center mt-12 space-y-6">
              <GradientButton onClick={handleClick} className="px-14">
                אני רוצה להיות בפנים!👇     
              </GradientButton>
              
              {/* Gold Stars Badge */}
              <div className="flex flex-col items-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border-2 border-amber-400/60 rounded-xl backdrop-blur-sm shadow-lg">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-lg md:text-xl font-bold text-amber-300 text-center">
                  50+ אתרים כבר נבנו עם השיטה של Site Master AI
                </p>
              </div>
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
          
          {/* Who Is This Course For Section */}
          <div className="max-w-4xl mx-auto space-y-12 mt-24">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                למי הקורס הזה מתאים
              </h2>
            </div>
            
            {/* For Who - Positive */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-foreground text-center">
                הוא מתאים ל־
              </h3>
              
              <div className="grid gap-4 max-w-3xl mx-auto">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-foreground/90 text-lg text-right">בעלי עסקים שרוצים לבנות לעצמם אתר מקצועי בלי תלות בבונה אתרים</p>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-foreground/90 text-lg text-right">יזמים בתחילת הדרך שרוצים להרים אתר או דף נחיתה מהר ולצאת לשוק</p>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-foreground/90 text-lg text-right">פרילנסרים ונותני שירות שרוצים שליטה מלאה על האתר שלהם</p>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-foreground/90 text-lg text-right">מעצבים ובוני אתרים שרוצים ללמוד על עולם הבנייה עם AI כדי להתכונן לעתיד ולא להישאר מאחור</p>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-foreground/90 text-lg text-right">אנשים שרוצים ללמוד AI בצורה פרקטית ויישומית</p>
                </div>
              </div>
            </div>
            
            {/* Not For Who - Negative */}
            <div className="space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground text-center">
                ולמי זה פחות מתאים
              </h3>
              
              <div className="grid gap-4 max-w-3xl mx-auto">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-muted-foreground text-lg">✕</span>
                  </div>
                  <p className="text-muted-foreground text-lg text-right">מי שלא רוצה לעבוד יותר מ2 דקות על אתר</p>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-muted-foreground text-lg">✕</span>
                  </div>
                  <p className="text-muted-foreground text-lg text-right">מי שלא מוכן ליישם</p>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-muted-foreground text-lg">✕</span>
                  </div>
                  <p className="text-muted-foreground text-lg text-right">מי שמחפש ללמוד קוד לעומק או רוצה לבנות אתרים בדרך מסורתית וישנה</p>
                </div>
              </div>
            </div>
            
            {/* Closing Statement */}
            <div className="text-center pt-8">
              <p className="text-xl md:text-2xl font-medium text-foreground max-w-2xl mx-auto leading-relaxed">
                אם אתה מחפש שליטה, עצמאות וסקיל שיישאר איתך לאורך זמן –
                <br />
                <span className="text-primary font-bold">זה בדיוק המקום.</span>
              </p>
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
                      <span className="text-right">SEO בסיסי - בקרוב</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-right">מעקב אנליטיקות - בקרוב</span>
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
              <p className="text-3xl md:text-4xl font-bold text-foreground">כל הבונוסים כלולים בחינם עם הקורס ויחסכו לך עשרות שעות</p>
              <p className="text-xl md:text-2xl text-foreground/80">הבונוסים יישלחו אליך למייל תוך 5 שניות לאחר הרכישה של הקורס</p>
            </div>
          </div>
          
          {/* Pricing Section */}
          <div dir="rtl" className="max-w-4xl mx-auto mt-[130px]">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                אז בוא נדבר רגע על המחיר
              </h2>
              <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                אני יכול לכתוב פה שזה שווה אלפי שקלים אבל רק היום יש 90% הנחה...<br />
                ואני יכול לעשות לך פומו ולספר שנשארו רק 3 מקומות אחרונים.
              </p>
            </div>
            
            {/* The Real Talk Card */}
            <div className="bg-card/40 backdrop-blur border border-border/50 rounded-2xl p-8 md:p-10 mb-12">
              <div className="text-center space-y-6">
                <p className="text-2xl md:text-3xl font-bold text-foreground">אבל האמת?</p>
                <p className="text-xl text-foreground/70">אני לא מאמין בכל הטריקים הזולים האלה.</p>
                
                <div className="h-px bg-border/50 max-w-md mx-auto my-8" />
                
                <p className="text-lg md:text-xl text-primary font-semibold">מה שכן חשוב לי שתדע:</p>
                
                <div className="text-lg md:text-xl text-foreground/80 space-y-3 max-w-2xl mx-auto text-right">
                  <p>הקורס הזה נבנה כדי שתצא ממנו עם אתר אמיתי לעסק שלך, וגם עם סקיל – היכולת לבנות אתרים עם AI לבד.</p>
                  <p>סקיל שתוכל להשתמש בו שוב ושוב, בכל פרויקט, בכל מיזם, ובעולם שהולך חזק לכיוון AI.</p>
                </div>
              </div>
            </div>
            
            {/* What You Get */}
            <div className="text-center mb-16">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-6">
                אם אחרי הקורס יש לך:
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3 text-lg text-foreground">
                  אתר שנראה מקצועי
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3 text-lg text-foreground">
                  הידע כדי לבנות אתר ממיר בשעה עבודה       
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3 text-lg text-foreground">יכולת לבנות אינסוף אתרים</div>
              </div>
              
              <p className="text-xl text-foreground/80">מבחינתי – <strong className="text-foreground">זה עשה את העבודה.</strong></p>
            </div>
            
            {/* Price Section */}
            <div id="final-price-section" className="text-center mb-16">
              <p className="text-xl md:text-2xl text-foreground/80 mb-4">המחיר של הקורס כרגע הוא:</p>
              
              {/* Price Display */}
              <div className="relative inline-block mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-150" />
                <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur border-2 border-primary/40 rounded-2xl px-16 py-8">
                  <p className="text-5xl md:text-6xl lg:text-7xl font-black text-foreground">169 ₪</p>
                </div>
              </div>
              
              {/* Terms */}
              <div className="flex flex-wrap justify-center gap-6 text-lg text-foreground/70 mb-8">
                <span>גישה בחינם לתכנים עתידיים שיצאו</span>
                <span>•</span>
                <span>אחריות 24 שעות</span>
                <span>•</span>
                <span>גישה לכל החיים</span>
              </div>
              
              <div className="max-w-xl mx-auto space-y-3 text-lg text-foreground/70">
                <p><strong className="text-foreground">זה מחיר השקה.</strong> הוא לא הולך להישאר ככה.</p>
                <p>בהמשך, כשהקורס יתעדכן ויתווספו אליו תכנים – המחיר יעלה.</p>
              </div>
            </div>
            
            {/* Final Message */}
            <div className="bg-card/30 backdrop-blur border border-border/30 rounded-2xl p-8 text-center mb-12">
              <p className="text-lg text-foreground/70 mb-4">אם 169 ₪ מרגיש לך יקר בשביל משהו שיכול לחסוך לך זמן, כסף ותלות בעתיד – אולי זה לא הזמן הנכון עבורך.</p>
              <p className="text-lg text-foreground/70 mb-4">
                אבל אם אתה רוצה לבנות אתר לעסק שלך ולצאת עם סקיל שיישאר איתך גם הרבה אחרי הקורס –
              </p>
              <p className="text-xl md:text-2xl font-bold text-primary">זה בדיוק המקום.</p>
            </div>
            
            {/* CTA Section with Lead Form */}
            <div id="purchase-section" className="max-w-xl mx-auto text-center">
              <PurchaseForm />
            </div>
          </div>

          {/* Money-Back Guarantee Section */}
          <div dir="rtl" className="px-0 py-[40px]">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                  {/* Visual - Shield Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-2xl scale-150" />
                      
                      {/* Main shield container */}
                      <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-primary/20 to-accent/10 rounded-full flex items-center justify-center border border-primary/30">
                        {/* Inner shield */}
                        <div className="w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center border border-primary/40">
                          <svg className="w-12 h-12 md:w-16 md:h-16 text-primary drop-shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="hsl(var(--primary) / 0.2)" />
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" className="text-accent" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Floating badge */}
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-accent to-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        100%
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-right space-y-6">
                    {/* Headline */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                      אתר שנראה מיליון דולר – או החזר כספי
                    </h3>
                    
                    {/* Description */}
                    <div className="space-y-4 text-lg md:text-xl text-foreground/80 leading-relaxed">
                      <p>
                        הדבר שהכי חשוב לי זה שתהיה מרוצה מהקורס.
                      </p>
                      <p>
                        אם תוך 24 שעות הרגשת שזה לא בשבילך – תקבל החזר כספי מלא. 
                        <span className="font-semibold text-foreground"> בלי שאלות. בלי סיבוכים.</span>
                      </p>
                    </div>
                    
                    {/* Trust Points */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-2">
                      <div className="flex items-center gap-2 text-foreground/90">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-sm md:text-base font-medium">ניסיון בלי סיכון</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-foreground/90">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-sm md:text-base font-medium">החזר כספי מלא</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-foreground/90">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-sm md:text-base font-medium">תמיכה טכנית מלאה בוואטסאפ</span>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <button onClick={() => {
                      document.getElementById('final-price-section')?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }} className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-bold text-foreground bg-transparent border-2 border-primary/50 rounded-xl hover:bg-primary/10 hover:border-primary transition-all duration-300">
                        <span>אני רוצה אתר של מיליון דולר בלי סיכון!</span>
                        <svg className="w-5 h-5 rotate-180 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 19V5" />
                          <path d="M5 12l7-7 7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Students & Clients Testimonials Section */}
          <div dir="rtl" className="py-24 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
              {/* Section Title */}
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                  לקוחות ותלמידים מספרים
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  הנה מה שתלמידים ולקוחות אומרים על הקורס והשיטה
                </p>
              </div>

              {/* WhatsApp Screenshots Grid */}
              <div className="space-y-6">
                <h3 className="text-xl md:text-2xl font-semibold text-center text-foreground/90">
                  💬 הודעות מתלמידי הקורס
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                  {[
                    testimonialScreenshot1,
                    testimonialScreenshot2,
                    testimonialScreenshot3,
                    testimonialScreenshot4,
                    testimonialScreenshot5
                  ].map((screenshot, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:scale-105 hover:shadow-gradient-glow transition-all duration-300"
                    >
                      <img
                        src={screenshot}
                        alt={`ביקורת תלמיד ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>



          {/* Price Comparison Section */}
          <div dir="rtl" className="px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent py-[60px]">
            <div className="max-w-5xl mx-auto space-y-16">
              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-foreground leading-tight">
                אתה עומד ללמוד סקיל שיכול לחסוך לך אלפי שקלים כיזם
                <br />
                וללוות אותך שנים קדימה
              </h2>

              {/* Price */}
              <div className="text-center">
                <p className="text-6xl md:text-7xl lg:text-8xl font-black text-primary">ב-169 ₪ בלבד.</p>
              </div>


              {/* Motivational Block */}
              <div className="max-w-3xl mx-auto space-y-6 text-center pt-12">
                <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                  אתה יכול להמשיך עוד חודשים בלי אתר שאתה גאה בו -<br />
                  או ללחוץ עכשיו,
                </p>

                <div className="space-y-2 text-xl md:text-2xl text-foreground leading-relaxed">
                  <p>להצטרף ל־SiteMaster AI</p>
                  <p className="font-bold">ולבנות אתר מקצועי שנראה 10,000 ₪ - כבר השבוע.</p>
                </div>
              </div>

              {/* CTA Block */}
              <div className="max-w-2xl mx-auto space-y-6 pt-12">
                <div className="relative group">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Email Input */}
                  <div className="relative mb-6">
                    
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