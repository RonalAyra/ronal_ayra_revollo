import { ChevronDown, Download, Sparkles } from "lucide-react";
import TechnologiesItem from "../components/hero/TechnologiesItem";
import { useNavigation } from "../context/NavigationContext";
import SocialIconItem from "../components/hero/SocialIconItem";
import { socialIconData } from "../data/herodata";
import profileImage from "../assets/image/profile.jpg";
import cvPdf from "../assets/Ronal Ayra Revollo.pdf";
import bannerImage from "../assets/baner.png";

const Hero = () => {
  const { scrollToSection } = useNavigation();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#F4F7FA] text-[#1E293B] dark:bg-[#0F172A] dark:text-[#F8FAFC]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2  items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Ronal Ayra"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full animate-bounce">
                  <Sparkles className="text-white" size={16} />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Ronal
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-2xl md:text-4xl font-bold text-slate-100">
                  Desarrollador{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    Full Stack
                  </span>
                </p>

                <p className="text-lg md:text-xl max-w-2xl leading-relaxed">
                  Creo experiencias digitales innovadoras con las últimas
                  tecnologías y mejores prácticas de desarrollo.
                </p>
              </div>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {["React", "Vue.js", "Node.js", "TypeScript", "Laravel"].map(
                  (tech, index) => (
                    <div
                      key={tech}
                      className="animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <TechnologiesItem item={tech} />
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={() => scrollToSection("experience")}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex items-center gap-3 shadow-lg"
              >
                <span>Explorar Proyectos</span>
                <ChevronDown
                  className="group-hover:translate-y-1 transition-transform duration-300"
                  size={20}
                />
              </button>

              <button
                className="group px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center gap-3 hover:shadow-lg"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = cvPdf; 
                  link.download = "Ronal-Ayra-Revollo-cv.pdf"; 
                  link.click();
                }}
              >
                <Download size={20} />
                <span>Descargar CV</span>
              </button>
            </div>
            <div className="flex justify-start space-x-6">
              {socialIconData.map((item) => (
                <SocialIconItem key={item.label} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <ChevronDown className="text-slate-400" size={24} />
          <span className="text-sm text-slate-500 dark:text-slate-400">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;