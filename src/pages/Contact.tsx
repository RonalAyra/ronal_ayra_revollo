import React, { useState } from "react";
import {
  Mail,
  MessageCircle,
  User,
  Send,
  CheckCircle2,
  RotateCcw,
  Share2,
  PhoneCall,
} from "lucide-react";
import type { ContactFormData } from "../types";
import ContactInfoItem from "../components/contact/ContactInfoItem";
import { contactInfoData, socialLinkData } from "../data/contactsdata";
import SocialLinkItem from "../components/contact/SocialLinkItem";
import DataCuriousItem from "../components/contact/DataCuriousItem";
import InputField from "../components/contact/inputs/InputField";
import InputTextArea from "../components/contact/inputs/inputTextArea";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const SUBJECT_PRESETS = [
  "Desarrollo de Sistema Web / ERP",
  "Integración de Facturación SIAT",
  "Consultoría Backend / APIs",
  "Oportunidad Laboral",
];

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(
    null
  );

  const validateForm = (data: ContactFormData): FormErrors => {
    const newErrors: FormErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "Ingresa tu nombre completo.";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Ingresa tu correo electrónico.";
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = "Ingresa un correo electrónico válido (ej. nombre@dominio.com).";
    }

    if (!data.subject.trim()) {
      newErrors.subject = "Indica el asunto o motivo del mensaje.";
    }

    if (!data.message.trim()) {
      newErrors.message = "Escribe los detalles de tu consulta o proyecto.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "El mensaje debe contener al menos 10 caracteres.";
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmittedData(formData);
    setIsSubmitting(false);
  };

  const handleResetForm = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setErrors({});
    setSubmittedData(null);
  };

  const buildWhatsAppUrl = (data: ContactFormData) => {
    const text = `Hola Ronal, soy *${data.name}* (${data.email}).\n*Asunto:* ${data.subject}\n\n${data.message}`;
    return `https://wa.me/59176441883?text=${encodeURIComponent(text)}`;
  };

  const buildMailtoUrl = (data: ContactFormData) => {
    const body = `Nombre: ${data.name}\nEmail: ${data.email}\n\nMensaje:\n${data.message}`;
    return `mailto:ronal.ayra.revollo@gmail.com?subject=${encodeURIComponent(
      data.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200/70 dark:border-slate-800/80 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800/70 mb-4">
            <MessageCircle size={14} />
            <span>Contacto Profesional</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Trabajemos{" "}
            <span className="text-blue-600 dark:text-blue-400">Juntos</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente o necesitas fortalecer tu equipo de
            desarrollo? Conversemos sobre cómo puedo ayudarte.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Columna izquierda: Datos de contacto, redes y acceso directo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Información de Contacto
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Canales directos disponibles
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {contactInfoData.map((info) => (
                  <ContactInfoItem key={info.label} item={info} />
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                  Comunicación inmediata
                </p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  <a
                    href="https://wa.me/59176441883?text=Hola%20Ronal,%20te%20contacto%20desde%20tu%20portafolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                  >
                    <PhoneCall size={15} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="mailto:ronal.ayra.revollo@gmail.com"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-colors shadow-sm"
                  >
                    <Mail size={15} />
                    <span>Enviar Email</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-800 dark:bg-slate-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <Share2 size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Perfiles y Repositorios
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Código fuente y red profesional
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {socialLinkData.map((item) => (
                  <SocialLinkItem key={item.label} item={item} />
                ))}
              </div>
            </div>

            <DataCuriousItem
              item={{
                title: "Respuesta Rápida Garantizada",
                description:
                  "Respondo todos los mensajes dentro de las primeras 24 horas. Disponible para proyectos freelance, consultoría técnica e integración de sistemas.",
              }}
            />
          </div>

          {/* Columna derecha: Formulario de contacto validado */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm">
              <div className="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Envíame un Mensaje
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Completa el formulario. Los campos marcados con{" "}
                  <span className="text-red-500 font-semibold">*</span> son
                  obligatorios.
                </p>
              </div>

              {submittedData ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="p-6 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/80 space-y-5 animate-fadeInUp"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        ¡Mensaje preparado correctamente!
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                        Gracias,{" "}
                        <strong className="font-semibold">
                          {submittedData.name}
                        </strong>
                        . Elige por qué medio prefieres enviar tu consulta ahora
                        mismo:
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                    <p>
                      <strong className="text-slate-900 dark:text-white">
                        Asunto:
                      </strong>{" "}
                      {submittedData.subject}
                    </p>
                    <p>
                      <strong className="text-slate-900 dark:text-white">
                        Correo de respuesta:
                      </strong>{" "}
                      {submittedData.email}
                    </p>
                    <p className="pt-1 text-slate-600 dark:text-slate-400 whitespace-pre-line">
                      {submittedData.message}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <a
                      href={buildWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
                    >
                      <PhoneCall size={16} />
                      <span>Enviar por WhatsApp</span>
                    </a>
                    <a
                      href={buildMailtoUrl(submittedData)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm"
                    >
                      <Mail size={16} />
                      <span>Abrir en Cliente de Correo</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
                    >
                      <RotateCcw size={15} />
                      <span>Redactar otro mensaje</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      id="name"
                      name="name"
                      label="Nombre completo"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      error={errors.name}
                      onChange={handleChange}
                    />

                    <InputField
                      id="email"
                      name="email"
                      label="Correo electrónico"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="nombre@empresa.com"
                      value={formData.email}
                      error={errors.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <InputField
                      id="subject"
                      name="subject"
                      label="Asunto o tipo de proyecto"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="¿En qué puedo ayudarte?"
                      value={formData.subject}
                      error={errors.subject}
                      onChange={handleChange}
                    />
                    <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                      <span className="text-xs text-slate-500 dark:text-slate-400 mr-1">
                        Sugerencias:
                      </span>
                      {SUBJECT_PRESETS.map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              subject: preset,
                            }));
                            setErrors((prev) => ({
                              ...prev,
                              subject: undefined,
                            }));
                          }}
                          className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors ${
                            formData.subject === preset
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-blue-400"
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>

                  <InputTextArea
                    id="message"
                    name="message"
                    label="Mensaje"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    placeholder="Describe brevemente el alcance del proyecto, tecnologías o requerimientos..."
                    value={formData.message}
                    error={errors.message}
                    helperText="Mínimo 10 caracteres."
                    onChange={handleChange}
                  />

                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <button
                      type="button"
                      disabled={
                        isSubmitting ||
                        (!formData.name &&
                          !formData.email &&
                          !formData.subject &&
                          !formData.message)
                      }
                      onClick={handleResetForm}
                      className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Limpiar campos
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Procesando...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Preparar y Enviar Mensaje</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
