import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { LuUser, LuMail, LuMessageCircle } from "react-icons/lu";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_ID = "service_gmh90bk";
const TEMPLATE_ID = "template_14c0kxx";
const PUBLIC_KEY = "BeJvWL2q4ytEa1qHI";
const RECAPTCHA_SITE_KEY = "6LcOXl8rAAAAAO0YzMu22gZt9R9TXClI8CQAIzt0";

export default function Contact() {
  const recaptchaRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El email no es válido.";
    }
    if (!formData.message.trim())
      newErrors.message = "El mensaje es obligatorio.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    if (!recaptchaRef.current) {
      alert("reCAPTCHA no está disponible");
      return;
    }
    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    if (!token) {
      alert("No se pudo verificar reCAPTCHA");
      return;
    }

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al enviar el mensaje:", err);
        setLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Contacto</h2>

      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-green-600 text-center"
          >
            ¡Gracias! Tu mensaje fue enviado correctamente.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <div className="relative z-[1]">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                size="invisible"
              />
            </div>
            <div className="relative">
              <LuUser className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Tu nombre"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="relative">
              <LuMail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Tu email"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="relative">
              <LuMessageCircle
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <textarea
                name="message"
                placeholder="Tu mensaje"
                rows="5"
                className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 disabled:opacity-50 transition-colors duration-300"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
