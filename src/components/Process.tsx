import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
const Process = () => {
  const [checkedSteps, setCheckedSteps] = useState<boolean[]>([false, false, false, false]);
  const steps = [{
    number: 1,
    title: "ממלאים שאלון קצר",
    description: "אני לומד להכיר את העסק שלכם, הסגנון והיעדים.",
    day: "יום ראשון"
  }, {
    number: 2,
    title: "אני יוצר סקיצה ראשונית",
    description: "כדי לוודא שאנחנו באותו כיוון מבחינת עיצוב ומסרים.",
    day: "יום שביעי"
  }, {
    number: 3,
    title: "עושים סבב תיקונים",
    description: "ומעדכנים את כל מה שחשוב כדי שהכול יהיה מושלם.",
    day: "עד יום עשירי"
  }, {
    number: 4,
    title: "האתר מוכן",
    description: "ועכשיו רק נשאר לפרסם 🚀",
    day: ""
  }];
  const toggleStep = (index: number) => {
    setCheckedSteps(prev => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };
  return <section id="process" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl font-medium lg:text-5xl text-white">איך זה עובד</h2>
          <p className="text-lg text-muted-foreground">כל התהליך פשוט, מסודר וברור — בלי כאב ראש.</p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => <Card key={index} className={`cursor-pointer transition-all duration-300 hover:scale-[1.01] relative ${checkedSteps[index] ? 'bg-card/50' : ''}`} onClick={() => toggleStep(index)}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Checkbox checked={checkedSteps[index]} onCheckedChange={() => toggleStep(index)} className={`mt-1 transition-all duration-300 ${checkedSteps[index] ? 'scale-110' : ''}`} />
                  
                  <div className="flex-1 text-right">
                    <h3 className={`text-xl font-medium transition-all duration-300 ${checkedSteps[index] ? 'line-through opacity-60' : ''}`}>
                      {step.title}
                    </h3>
                    <p className={`text-muted-foreground mt-2 transition-all duration-300 ${checkedSteps[index] ? 'opacity-50' : ''}`}>
                      {step.description}
                    </p>
                  </div>
                  
                  <div className={`text-4xl font-bold transition-all duration-300 ${checkedSteps[index] ? 'opacity-30' : ''}`}>
                    {step.number}
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Process;