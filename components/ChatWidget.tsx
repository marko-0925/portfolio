'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, X, User, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../lib/emailjs-config'

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const { serviceId, templateId, publicKey } = emailjsConfig

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || `New message from ${formData.name} via Portfolio`,
        message: formData.message,
        to_email: 'markodjkl@gmail.com',
        reply_to: formData.email
      }

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)

      setSubmitStatus('success')
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setSubmitStatus(null)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setIsOpen(false)
      }, 3000)

    } catch (error) {
      console.error('Failed to send email:', error)
      setSubmitStatus('error')

      // Fallback to Gmail compose if EmailJS fails
      const subject = formData.subject || `New message from ${formData.name} via Portfolio`
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent via Portfolio Contact Form
Time: ${new Date().toLocaleString()}
      `

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=markodjkl@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      window.open(gmailUrl, '_blank')

      // Show error message briefly then close
      setTimeout(() => {
        setSubmitStatus(null)
        setIsOpen(false)
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Contact Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
      >
        <Mail size={24} />
      </motion.button>

      {/* Contact Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden outline-none focus:outline-none"
            initial={{ scale: 0, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <div>
                  <h3 className="font-semibold">Contact Me</h3>
                  <p className="text-xs opacity-90">Send message to Gmail</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {isSubmitted ? (
              /* Success/Error Message */
              <div className="p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    submitStatus === 'success'
                      ? 'bg-green-100'
                      : submitStatus === 'error'
                      ? 'bg-red-100'
                      : 'bg-green-100'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  ) : submitStatus === 'error' ? (
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  ) : (
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  )}
                </motion.div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {submitStatus === 'success'
                    ? 'Message Sent!'
                    : submitStatus === 'error'
                    ? 'Sending Failed'
                    : 'Message Sent!'
                  }
                </h4>
                <p className="text-sm text-gray-600">
                  {submitStatus === 'success'
                    ? "Your message has been sent successfully! I'll get back to you soon."
                    : submitStatus === 'error'
                    ? 'Failed to send automatically. Gmail compose opened as fallback.'
                    : "Your message has been sent! I'll get back to you soon."
                  }
                </p>
              </div>
            ) : (
              /* Contact Form */
              <div className="p-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                    />
                  </div>

                  <input
                    type="text"
                    placeholder="Subject (optional)"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />

                  <textarea
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                  />

                  <motion.button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.message || isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed border-0 outline-none focus:outline-none focus:ring-0 flex items-center justify-center gap-2"
                    whileHover={{ scale: (!formData.name || !formData.email || !formData.message || isSubmitting) ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ContactWidget
