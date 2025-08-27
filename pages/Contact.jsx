import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, X } from 'lucide-react'
export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    
      const [errors, setErrors] = useState({})
      const [toast, setToast] = useState({ show: false, message: '', type: '' })
    
      // Toast notification function
      const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type })
        setTimeout(() => {
          setToast({ show: false, message: '', type: '' })
        }, 4000)
      }
    
      const validateEmail = email => {
        // Trim whitespace
        email = email.trim()
    
        // Check if email is empty
        if (!email) return false
    
        // More comprehensive email regex
        const emailRegex =
          /^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    
        // Basic format check
        if (!emailRegex.test(email)) return false
    
        // Additional checks
        const parts = email.split('@')
        if (parts.length !== 2) return false
    
        const [localPart, domainPart] = parts
    
        // Check local part (before @)
        if (localPart.length === 0 || localPart.length > 64) return false
        if (localPart.startsWith('.') || localPart.endsWith('.')) return false
        if (localPart.includes('..')) return false
    
        // Check domain part (after @)
        if (domainPart.length === 0 || domainPart.length > 253) return false
        if (domainPart.startsWith('.') || domainPart.endsWith('.')) return false
        if (domainPart.includes('..')) return false
    
        // Check for valid TLD (at least 2 characters)
        const domainParts = domainPart.split('.')
        const tld = domainParts[domainParts.length - 1]
        if (tld.length < 2) return false
    
        // Check for common invalid patterns
        const invalidPatterns = [
          /^test@test\./,
          /^admin@admin\./,
          /^user@user\./,
          /^demo@demo\./,
          /^sample@sample\./,
          /^example@example\./,
          /@test\./,
          /@example\./,
          /@sample\./,
          /@demo\./
        ]
    
        if (invalidPatterns.some(pattern => pattern.test(email.toLowerCase()))) {
          return false
        }
    
        return true
      }
    
      const validatePhone = phone => {
        // Remove all non-digit characters for validation
        const cleanPhone = phone.replace(/\D/g, '')
    
        // Check if it's a dummy number (like 1234567890, 0000000000, etc.)
        const dummyPatterns = [
          /^1234567890$/,
          /^0{10}$/,
          /^1{10}$/,
          /^2{10}$/,
          /^3{10}$/,
          /^4{10}$/,
          /^5{10}$/,
          /^6{10}$/,
          /^7{10}$/,
          /^8{10}$/,
          /^9{10}$/,
          /^0123456789$/,
          /^9876543210$/
        ]
    
        // Check if phone matches any dummy pattern
        if (dummyPatterns.some(pattern => pattern.test(cleanPhone))) {
          return false
        }
    
        // Check if phone has valid length (10 digits for Indian numbers)
        if (cleanPhone.length !== 10) {
          return false
        }
    
        // Check if phone starts with valid digits (Indian mobile numbers start with 6-9)
        if (!/^[6-9]/.test(cleanPhone)) {
          return false
        }
    
        return true
      }
    
      const handleChange = e => {
        const { name, value } = e.target
        setFormData({
          ...formData,
          [name]: value
        })
    
        // Clear error when user starts typing
        if (errors[name]) {
          setErrors({
            ...errors,
            [name]: ''
          })
        }
      }
    
      const handleSubmit = e => {
        e.preventDefault()
    
        const newErrors = {}
    
        // Validate email
        if (!formData.email) {
          newErrors.email = 'Email is required'
        } else if (!validateEmail(formData.email)) {
          const email = formData.email.trim()
          if (!email.includes('@')) {
            newErrors.email = 'Email must contain @ symbol (e.g., user@example.com)'
          } else if (!email.includes('.')) {
            newErrors.email =
              'Email must contain a domain with extension (e.g., user@example.com)'
          } else if (
            email.startsWith('.') ||
            email.endsWith('.') ||
            email.includes('..')
          ) {
            newErrors.email = 'Email format is invalid - check for extra dots'
          } else if (email.split('@').length !== 2) {
            newErrors.email = 'Email must contain exactly one @ symbol'
          } else {
            newErrors.email =
              'Please enter a valid email address (e.g., user@example.com)'
          }
        }
    
        // Validate phone
        if (!formData.phone) {
          newErrors.phone = 'Phone number is required'
        } else if (!validatePhone(formData.phone)) {
          const cleanPhone = formData.phone.replace(/\D/g, '')
          if (cleanPhone.length !== 10) {
            newErrors.phone = 'Please enter a valid 10-digit phone number'
          } else if (!/^[6-9]/.test(cleanPhone)) {
            newErrors.phone = 'Phone number should start with 6, 7, 8, or 9'
          } else {
            newErrors.phone =
              'Please enter a valid phone number (dummy numbers like 1234567890 are not allowed)'
          }
        }
    
        // Validate other required fields
        if (!formData.name.trim()) {
          newErrors.name = 'Name is required'
        }
    
        if (!formData.subject.trim()) {
          newErrors.subject = 'Subject is required'
        }
    
        if (!formData.message.trim()) {
          newErrors.message = 'Message is required'
        }
    
        setErrors(newErrors)
    
        // If no errors, submit the form
        if (Object.keys(newErrors).length === 0) {
          console.log('Form submitted:', formData)
          // Reset form
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          })
          showToast(
            "Message sent successfully! We'll get back to you soon.",
            'success'
          )
        }
      }
    
      const contactInfo = [
        {
          icon: <Mail className='w-6 h-6' />,
          title: 'Email',
          details: 'ayushiparmar9997@gmail.com',
          link: 'mailto:ayushiparmar9997@gmail.com'
        },
        {
          icon: <Phone className='w-6 h-6' />,
          title: 'Phone',
          details: '+91 6353292499',
          link: 'tel:+916353292499'
        },
        {
          icon: <MapPin className='w-6 h-6' />,
          title: 'Address',
          details:
            '95,darshan society ,near mini virpur temple,palanpur jakatnaka,surat-395009',
          link: '#'
        }
      ]

      return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
      className='min-h-screen relative'
    >
      {/* Toast Notification */}
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`absolute top-14 right-0 p-4 rounded-lg shadow-lg flex space-x-4 z-50 ${
            toast.type === 'success'
              ? 'bg-green-500 text-white'
              : 'bg-red-500 text-white'
          }`}
        >
          <CheckCircle className='w-6 h-6' />
          <span>{toast.message}</span>
          <button onClick={() => setToast({ ...toast, show: false })}>
            <X className='w-5 h-5' />
          </button>
        </motion.div>
      )}

      {/* Hero Section */}
      <section
        className='py-12 sm:py-16 lg:py-20'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <motion.h1
              className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get In <span className='text-blue-600'>Touch</span>
            </motion.h1>
            <motion.p
              className='text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Ready to start your next project? We'd love to hear from you. Send
              us a message and we'll respond as soon as possible.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className='py-12 sm:py-16 lg:py-20 bg-gray-50'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12'>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className='bg-white p-6 sm:p-8 rounded-xl shadow-lg'
            >
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8'>
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='Your Name'
                    />
                    {errors.name && (
                      <p className='mt-1 text-sm text-red-600'>{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder='your@example.com'
                    />
                    {errors.email && (
                      <p className='mt-1 text-sm text-red-600'>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Phone Number *
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder='Enter 10-digit phone number'
                  />
                  {errors.phone && (
                    <p className='mt-1 text-sm text-red-600'>{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.subject}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-vertical ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder='Tell us about your project...'
                  />
                  {errors.message && (
                    <p className='mt-1 text-sm text-red-600'>
                      {errors.message}
                    </p>
                  )}
                </div>
                <motion.button
                  type='submit'
                  className='w-full bg-blue-600 text-white py-3 sm:py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className='w-5 h-5' />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className='space-y-6 sm:space-y-8'
            >
              <div>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6'>
                  Contact Information
                </h2>
                <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                  We're here to help and answer any question you might have. We
                  look forward to hearing from you.
                </p>
              </div>

              <div className='space-y-4 sm:space-y-6'>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className='flex items-start space-x-4 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{ y: -2 }}
                  >
                    <div className='flex-shrink-0 text-blue-600'>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-1'>
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className='text-sm sm:text-base text-gray-600 hover:text-blue-600 transition-colors duration-200'
                      >
                        {info.details}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                className='p-4 sm:p-6 bg-blue-50 rounded-xl'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className='text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4'>
                  Business Hours
                </h3>
                <div className='space-y-2 text-sm sm:text-base text-gray-600'>
                  <div className='flex justify-between'>
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div> */}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}