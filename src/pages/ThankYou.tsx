import { GradientButton } from "@/components/ui/gradient-button";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
const ThankYou = () => {
  return <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-primary" />
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            ברוך הבא לקורס
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-primary">
            עשית החלטה חכמה
          </p>
        </div>
        
        {/* Opening Text */}
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto">
          בעוד זמן קצר יהיה לך אתר או דף נחיתה מקצועי, בנוי נכון, כזה שבאמת משרת את העסק שלך – גם בלי ידע טכני ובלי כאבי ראש.
        </p>
        
        {/* What Happens Now Section */}
        <div className="space-y-6 text-right">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
            מה קורה עכשיו
          </h2>
          
          <ul className="space-y-4 text-lg text-foreground/90" dir="rtl">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span>הגישה לקורס זמינה לך כבר עכשיו ונשלח לך גם קישור לכניסה במייל</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span>כל התוכן נמצא במקום אחד, מסודר לפי שלבים</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
              <span>מומלץ לעבור לפי הסדר ולא לדלג</span>
            </li>
          </ul>
        </div>
        
        {/* First Step Section */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            השלב הראשון שלך
          </h2>
          
          <div className="space-y-2 text-lg md:text-xl text-muted-foreground">
            <p>אל תדחה את זה.</p>
            <p>כנס עכשיו לשיעור הראשון והתחל לבנות את אתר החלומות לעסק שלך!</p>
          </div>
          
          {/* Main CTA Button */}
          <div className="pt-4">
            <a href="https://sitemaster-fullcourse.yuvalsiti.com/" target="_blank" rel="noopener noreferrer">
              <GradientButton className="px-12 py-5 text-lg">
                כניסה לקורס עכשיו
              </GradientButton>
            </a>
          </div>
        </div>
        
        {/* Support Section */}
        <div className="pt-8 border-t border-border space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            צריך עזרה או משהו לא ברור?
          </h3>
          
          <p className="text-muted-foreground text-lg leading-relaxed">
            אם יש שאלה, תקלה, או משהו שלא מסתדר –
            <br />
            אפשר לפנות אליי ישירות בוואטסאפ ואני עונה.
          </p>
          
          {/* WhatsApp Button */}
          <a href="https://wa.link/b5rmx5" target="_blank" rel="noopener noreferrer">
            <Button variant="whatsapp" className="gap-2 px-8 py-6 text-lg">
              <MessageCircle className="w-5 h-5" />
              לתמיכה בוואטסאפ
            </Button>
          </a>
        </div>
        
      </div>
    </div>;
};
export default ThankYou;