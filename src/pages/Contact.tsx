import React, { useState } from "react";
import { Send, Mail, MessageCircle, User, Zap } from "lucide-react";
import type { ContactFormData } from "../types";
import ContactInfoItem from "../components/contact/ContactInfoItem";
import { contactInfoData, socialLinkData } from "../data/contactsdata";
import SocialLinkItem from "../components/contact/SocialLinkItem";
import InputField from "../components/contact/inputs/InputField";
import InputTextArea from "../components/contact/inputs/inputTextArea";
import DataCuriousItem from "../components/contact/DataCuriousItem";

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormFocused, setIsFormFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("🎉 Mensaje enviado correctamente. Te contactaré pronto!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormFocus = () => setIsFormFocused(true);
  const handleFormBlur = () => setIsFormFocused(false);

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

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

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
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
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
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
            <DataCuriousItem
              item={{
                title: "Respuesta Rápida Garantizada",
                description:
                  "Respondo todos los emails dentro de las primeras 24 horas. ¡Me encanta conectar con personas apasionadas por la tecnología y nuevos proyectos! Tu idea merece atención inmediata.",
              }}
            />
          </div>
          <div
            className="relative group"
            onFocus={handleFormFocus}
            onBlur={handleFormBlur}
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-r from-gray-700 to-slate-900 rounded-2xl blur transition-all duration-1000 ${
                isFormFocused ? "opacity-30" : "opacity-20"
              }`}
            ></div>

            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-700 to-slate-900 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-r from-gray-700 to-slate-900 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Mail
                      size={24}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-gray-700 to-slate-900 rounded-full border-2 border-white dark:border-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-full bg-white/30 rounded-full animate-ping"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:translate-x-1 transition-transform duration-300">
                    Envíame un Mensaje
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 group-hover:translate-x-1 transition-transform duration-300 delay-100">
                    Completa el formulario y me pondré en contacto contigo
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    id="name"
                    name="name"
                    label="Nombre"
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <InputField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <InputField
                  id="subject"
                  name="subject"
                  label="Asunto"
                  type="text"
                  required
                  placeholder="¿En qué puedo ayudarte?"
                  value={formData.subject}
                  onChange={handleChange}
                />

                <InputTextArea
                  id="message"
                  name="message"
                  label="Mensaje"
                  rows={6}
                  required
                  placeholder="Cuéntame sobre tu proyecto, ideas o cualquier cosa en la que podamos colaborar..."
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full bg-gradient-to-r from-gray-700 to-slate-900 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group/btn overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-slate-900 group-hover/btn:from-blue-600 group-hover/btn:to-cyan-600 transition-all duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000"></div>
                  {!isSubmitting && (
                    <>
                      <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full opacity-0 group-hover/btn:opacity-60 group-hover/btn:animate-ping"></div>
                      <div className="absolute bottom-2 right-4 w-2 h-2 bg-white rounded-full opacity-0 group-hover/btn:opacity-40 group-hover/btn:animate-pulse delay-300"></div>
                    </>
                  )}
                  <div className="relative z-10 flex items-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="relative w-5 h-5">
                          <div className="absolute inset-0 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div>
                        <span className="text-white font-semibold">
                          Enviando...
                        </span>
                      </>
                    ) : (
                      <>
                        <div className="relative">
                          <Send 
                            size={20} 
                            className="text-white group-hover/btn:scale-110 group-hover/btn:-translate-y-0.5 transition-transform duration-300" 
                          />
                        </div>
                        <span className="text-white font-semibold group-hover/btn:scale-105 transition-transform duration-300">
                          Enviar Mensaje
                        </span>
                      </>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white to-cyan-200 rounded-full transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500"></div>
                  {!isSubmitting && (
                    <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              </form>
              <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-6">
                📍 Tu información está segura con nosotros. No compartimos datos
                personales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;