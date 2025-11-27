import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import { ShieldCheckIcon, PlusIcon } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BorderTrail } from "@/components/ui/border-trail";
import { toast } from "@/hooks/use-toast";

const Pricing = () => {
  const handleClick = () => {
    toast({
      title: "שכרגע אני לא בונה דפי נחיתה",
    });
  };
  return <section className="relative min-h-screen overflow-hidden py-24">
      <div id="pricing" className="mx-auto w-full max-w-6xl space-y-5 px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.1,
        ease: [0.16, 1, 0.3, 1]
      }} viewport={{
        once: true
      }} className="mx-auto max-w-xl space-y-5">
          <div className="flex justify-center">
            <div className="rounded-lg border px-4 py-1 font-mono">מחירים</div>
          </div>
          <h2 className="mt-5 text-center text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-white">
            מחיר מיוחד לזמן מוגבל
          </h2>
          <p className="text-muted-foreground mt-5 text-center text-sm md:text-base">
            מחיר אחד קבוע לכל השירותים. בניית דף נחיתה מקצועי ומותאם במחיר שלא יאומן.
          </p>
        </motion.div>

        <div className="relative">
          <div className={cn('z--10 pointer-events-none absolute inset-0 size-full', 'bg-[linear-gradient(to_right,--theme(--color-foreground/.2)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-foreground/.2)_1px,transparent_1px)]', 'bg-[size:32px_32px]', '[mask-image:radial-gradient(ellipse_at_center,var(--background)_10%,transparent)]')} />

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1]
        }} viewport={{
          once: true
        }} className="mx-auto w-full max-w-3xl space-y-4">	
            <div className="bg-background relative border p-8 md:p-12">
              <PlusIcon className="absolute -top-3 -left-3 size-5.5" />
              <PlusIcon className="absolute -top-3 -right-3 size-5.5" />
              <PlusIcon className="absolute -bottom-3 -left-3 size-5.5" />
              <PlusIcon className="absolute -right-3 -bottom-3 size-5.5" />

              <div className="relative w-full rounded-lg border px-8 pt-8 pb-8 md:px-12 md:pt-12 md:pb-12">
                <BorderTrail style={{
                boxShadow: '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)'
              }} size={100} />
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold text-xl md:text-2xl">דף נחיתה מלא - תשלום חד פעמי</h3>
                    <div className="flex items-center gap-x-1">
                      <span className="text-muted-foreground text-base md:text-lg line-through">997 ₪</span>
                      <Badge className="text-sm md:text-base px-3 py-1 bg-neutral-500">75% הנחה</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg">מעוצב ומותאם בדיוק לעסק שלך</p>
                </div>
                <div className="mt-12 md:mt-16 space-y-6">
                  <div className="text-muted-foreground flex items-end text-2xl md:text-3xl justify-start">
                    <span className="text-3xl md:text-4xl">₪</span>
                    <span className="text-foreground -mb-0.5 text-6xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl">400</span>
                  </div>
                  <GradientButton className="w-full text-base md:text-lg h-12 md:h-14" variant="variant" onClick={handleClick}>
                    בואו נתחיל עכשיו
                  </GradientButton>
                  <p className="text-center text-sm md:text-base text-muted-foreground font-medium">
                    ⚡ נותרו רק <span className="text-foreground font-bold">6 מקומות</span> לפני שהמחיר עולה
                  </p>
                </div>
              </div>
            </div>

            <div className="text-muted-foreground flex items-center justify-center gap-x-2 text-sm">
              <ShieldCheckIcon className="size-4" />
              <span>גישה לכל התכונות ללא עלויות נסתרות</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Pricing;