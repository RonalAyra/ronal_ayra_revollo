import { Mail, MessageCircle, User, Zap } from "lucide-react";
import ContactInfoItem from "../components/contact/ContactInfoItem";
import { contactInfoData, socialLinkData } from "../data/contactsdata";
import SocialLinkItem from "../components/contact/SocialLinkItem";
import DataCuriousItem from "../components/contact/DataCuriousItem";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700/10 to-slate-900/10 dark:from-slate-100/10 dark:to-gray-400/10 rounded-full px-6 py-3 mb-6 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <MessageCircle
              size={20}
              className="text-gray-600 dark:text-gray-400"
            />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              ¡Hablemos!
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-6">
            Trabajemos{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-gray-700 to-slate-900 dark:from-slate-100 dark:to-gray-400 bg-clip-text text-transparent">
                Juntos
              </span>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 to-slate-900 dark:from-slate-100 dark:to-gray-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
            ayudarte a hacerlas realidad.
            <span className="block text-lg text-gray-500 dark:text-gray-400 mt-2">
              Colaboremos para crear algo extraordinario
            </span>
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        <User
                          size={24}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-2 border-white dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-full h-full bg-white/30 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                      Información de Contacto
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {contactInfoData.map((info) => (
                      <ContactInfoItem key={info.label} item={info} />
                    ))}
                  </div>
                </div>
              </div>

              <DataCuriousItem
                item={{
                  title: "Respuesta Rápida Garantizada",
                  description:
                    "Respondo todos los mensajes dentro de las primeras 24 horas. ¡Me encanta conectar con personas apasionadas por la tecnología y nuevos proyectos! Tu idea merece atención inmediata.",
                }}
              />
            </div>
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        <Zap
                          size={24}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-white dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-full h-full bg-white/30 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                      Sígueme en
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {socialLinkData.map((item) => (
                      <SocialLinkItem key={item.label} item={item} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r  rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                        <Mail
                          size={24}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      Contacto Directo
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    ¿Listo para empezar tu proyecto? Contáctame directamente a
                    través de WhatsApp o email para una comunicación más rápida
                    y personalizada.
                  </p>
                  <div className="flex flex-col gap-3">
                    <a
                      href="https://wa.me/59176441883"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span>💬 Escribir por WhatsApp</span>
                    </a>
                    <a
                      href="mailto:ronal.ayra.revollo@email.com"
                      className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <span>📧 Enviar Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
