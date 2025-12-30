import { useState, useRef } from "react";
import { motion, PanInfo } from "framer-motion";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
interface VideoItem {
  id: number;
  url: string;
  thumbnail?: string;
}
const videos: VideoItem[] = [{
  id: 0,
  url: "https://iframe.mediadelivery.net/embed/572361/5a57ab00-cd8d-4dec-beda-603fd4f2b73e?autoplay=false&loop=true&muted=true&preload=true&responsive=true"
}, {
  id: 1,
  url: "https://iframe.mediadelivery.net/embed/572361/1f632b53-ad10-4e14-bd60-51e91bd4f047?autoplay=false&loop=true&muted=true&preload=true&responsive=true"
}, {
  id: 2,
  url: "https://iframe.mediadelivery.net/embed/572361/d8989589-3ccf-482a-b5af-1b4e0940b620?autoplay=false&loop=true&muted=true&preload=true&responsive=true"
}];
const PhoneCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (info.offset.x < -threshold && activeIndex < videos.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };
  const handlePhoneClick = (index: number, url: string) => {
    if (index === activeIndex) {
      setModalVideoUrl(url);
      setModalOpen(true);
    } else {
      setActiveIndex(index);
    }
  };
  const getPhoneStyle = (index: number) => {
    const diff = index - activeIndex;
    if (diff === 0) {
      return {
        x: 0,
        scale: 1,
        zIndex: 30,
        opacity: 1,
        rotateY: 0
      };
    } else if (diff === -1) {
      return {
        x: -120,
        scale: 0.75,
        zIndex: 20,
        opacity: 0.7,
        rotateY: 15
      };
    } else if (diff === 1) {
      return {
        x: 120,
        scale: 0.75,
        zIndex: 20,
        opacity: 0.7,
        rotateY: -15
      };
    } else {
      return {
        x: diff > 0 ? 200 : -200,
        scale: 0.5,
        zIndex: 10,
        opacity: 0,
        rotateY: 0
      };
    }
  };
  return <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Carousel Container */}
        <div ref={containerRef} className="relative h-[500px] md:h-[600px] flex items-center justify-center" style={{
        perspective: "1000px"
      }}>
          <motion.div drag="x" dragConstraints={{
          left: 0,
          right: 0
        }} dragElastic={0.2} onDragEnd={handleDragEnd} className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing py-px">
            {videos.map((video, index) => {
            const style = getPhoneStyle(index);
            return <motion.div key={video.id} className="absolute" initial={false} animate={{
              x: style.x,
              scale: style.scale,
              zIndex: style.zIndex,
              opacity: style.opacity,
              rotateY: style.rotateY
            }} transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }} onClick={() => handlePhoneClick(index, video.url)} style={{
              transformStyle: "preserve-3d"
            }}>
                  {/* Phone Frame */}
                  <div className="relative">
                    {/* Phone Body */}
                    <div className="relative w-[220px] md:w-[280px] h-[450px] md:h-[570px] bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[40px] md:rounded-[50px] p-2 shadow-2xl shadow-black/50">
                      {/* Phone Inner Bezel */}
                      <div className="absolute inset-2 bg-black rounded-[32px] md:rounded-[42px] overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-6 md:h-7 bg-black rounded-b-2xl z-10" />
                        
                        {/* Video Container */}
                        <div className="w-full h-full relative bg-black">
                          <iframe src={video.url} className="w-full h-full" loading="lazy" style={{
                        border: 0
                      }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture" allowFullScreen />
                        </div>
                      </div>
                      
                      {/* Side Buttons */}
                      <div className="absolute top-24 -right-1 w-1 h-12 bg-zinc-700 rounded-l-sm" />
                      <div className="absolute top-20 -left-1 w-1 h-8 bg-zinc-700 rounded-r-sm" />
                      <div className="absolute top-32 -left-1 w-1 h-16 bg-zinc-700 rounded-r-sm" />
                    </div>
                    
                    {/* Phone Glow Effect for Active */}
                    {index === activeIndex && <div className="absolute inset-0 -z-10 bg-primary/20 blur-3xl rounded-full scale-75" />}
                  </div>
                </motion.div>;
          })}
          </motion.div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} />)}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-4xl w-[95vw] h-[80vh] p-0 bg-black border-none">
          <button onClick={() => setModalOpen(false)} className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <X className="w-5 h-5 text-white" />
          </button>
          {modalVideoUrl && <iframe src={modalVideoUrl} className="w-full h-full rounded-lg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />}
        </DialogContent>
      </Dialog>
    </section>;
};
export default PhoneCarousel;