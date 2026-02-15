"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.scss";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name ist erforderlich";
    }

    if (!formData.age.trim()) {
      newErrors.age = "Alter ist erforderlich";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 18) {
      newErrors.age = "Sie müssen mindestens 18 Jahre alt sein";
    }

    if (!formData.city.trim()) {
      newErrors.city = "Stadt ist erforderlich";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefonnummer ist erforderlich";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-Mail-Adresse ist erforderlich";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Bitte geben Sie eine gültige E-Mail-Adresse ein";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Nachricht ist erforderlich";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this with your actual form submission logic
      // For example, sending to an API endpoint:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For now, just log the data
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({
        name: "",
        age: "",
        city: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name">
          Name <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? styles.error : ""}
          placeholder="Ihr vollständiger Name"
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="age">
          Alter <span className={styles.required}>*</span>
        </label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className={errors.age ? styles.error : ""}
          placeholder="Ihr Alter"
          min="18"
        />
        {errors.age && <span className={styles.errorMessage}>{errors.age}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="city">
          Stadt <span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={errors.city ? styles.error : ""}
          placeholder="Ihre Stadt"
        />
        {errors.city && <span className={styles.errorMessage}>{errors.city}</span>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="phone">
          Telefonnummer <span className={styles.required}>*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? styles.error : ""}
          placeholder="+49 123 456789"
        />
        {errors.phone && (
          <span className={styles.errorMessage}>{errors.phone}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">
          E-Mail-Adresse <span className={styles.required}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? styles.error : ""}
          placeholder="ihre.email@beispiel.de"
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email}</span>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message">
          Ihre Nachricht <span className={styles.required}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={errors.message ? styles.error : ""}
          placeholder="Schreiben Sie uns Ihre Nachricht..."
          rows={6}
        />
        {errors.message && (
          <span className={styles.errorMessage}>{errors.message}</span>
        )}
      </div>

      {submitStatus === "success" && (
        <div className={styles.successMessage}>
          Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns
          in Kürze bei Ihnen melden.
        </div>
      )}

      {submitStatus === "error" && (
        <div className={styles.errorMessageBox}>
          Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut oder
          kontaktieren Sie uns direkt per E-Mail.
        </div>
      )}

      <button
        type="submit"
        className={styles.submitButton}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
      </button>
    </form>
  );
};

export default ContactForm;