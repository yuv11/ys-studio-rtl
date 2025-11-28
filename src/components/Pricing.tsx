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
      title: "שכרגע אני לא בונה דפי נחיתה"
    });
  };
  return <section className="relative min-h-screen overflow-hidden py-24">
      
    </section>;
};
export default Pricing;