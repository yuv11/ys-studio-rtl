import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Star } from "lucide-react";
const PurchaseForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast({
        title: "שגיאה",
        description: "נא להזין שם",
        variant: "destructive"
      });
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      toast({
        title: "שגיאה",
        description: "נא להזין כתובת מייל תקינה",
        variant: "destructive"
      });
      return;
    }
    if (!consent) {
      toast({
        title: "שגיאה",
        description: "נא לאשר את הדיוור כדי להמשיך",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      // Send to webhook
      await fetch("https://hook.eu2.make.com/3ynsoagxhowdr9rap4gbmphm65atj3am", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        mode: "no-cors",
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          timestamp: new Date().toISOString(),
          source: window.location.origin
        })
      });

      // Track Facebook Pixel
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout');
      }

      // Redirect to payment page
      window.location.href = "https://pay.grow.link/7f405a5f9744123473b208a02b368179-MjkwMjI5Mw";
    } catch (error) {
      console.error("Error sending to webhook:", error);
      // Even if webhook fails, redirect to payment
      window.location.href = "https://pay.grow.link/7f405a5f9744123473b208a02b368179-MjkwMjI5Mw";
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="space-y-6">
      {/* Form Container */}
      <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-primary/15 via-card/80 to-primary/10 backdrop-blur-xl border-2 border-primary/40 rounded-3xl p-8 md:p-10 space-y-6 shadow-[0_0_60px_rgba(var(--primary-rgb),0.25)] overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 blur-3xl rounded-full pointer-events-none" />
        
        {/* Heading */}
        <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-center text-foreground" dir="rtl">
          לגישה לקורס וכל הבונוסים במחיר השקה - <span className="text-primary">169₪</span> בלבד!
        </h3>
        
        {/* Name Input */}
        <div className="space-y-2">
          <input type="text" placeholder="השם שלך" value={name} onChange={e => setName(e.target.value)} className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-right" dir="rtl" />
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <input type="email" placeholder="כתובת המייל שלך" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-5 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-right" dir="rtl" />
        </div>

        {/* Consent Checkbox */}
        <label className="flex items-start gap-3 cursor-pointer group" dir="rtl">
          <div className="relative flex-shrink-0 mt-1">
            <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="sr-only" />
            <div className={`w-5 h-5 rounded border-2 transition-all flex items-center justify-center ${consent ? 'bg-primary border-primary' : 'bg-background/50 border-border/70 group-hover:border-primary/50'}`}>
              {consent && <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
            </div>
          </div>
          <span className="text-sm text-foreground/70 leading-relaxed">
            אני מאשר/ת דיוור (ניתן להסיר בכל עת ואני מבטיח שלא יהיו חפירות)
          </span>
        </label>

        {/* Submit Button */}
        <button type="submit" disabled={isLoading} className="group relative w-full px-10 py-6 text-xl md:text-2xl font-bold text-primary-foreground rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed">
          <div className="absolute inset-0 bg-gradient-primary" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <span className="relative z-10">
            {isLoading ? "מעבד..." : "אני רוצה גישה לקורס עוד היום!"}
          </span>
        </button>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>גישה מיידית</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>אחריות החזר 24 שעות</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">✓</span>
            <span>גישה בחינם לתכנים עתידיים שיצאו</span>
          </div>
        </div>
      </form>

      {/* Social Proof with Gold Stars */}
      <div className="bg-gradient-to-r from-amber-500/10 via-yellow-500/15 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 backdrop-blur">
        <div className="flex items-center justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />)}
        </div>
        <p className="text-lg md:text-xl font-bold text-center" dir="rtl">
          <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
            עשרות אתרים כבר נבנו עם השיטה של SITE MASTER AI
          </span>
        </p>
      </div>
    </div>;
};
export default PurchaseForm;