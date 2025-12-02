import { useState } from 'react';
import { apiUrl } from '../config/api';

const services = [
  { value: 'video-editing', label: 'Video Editing' },
  { value: 'graphic-design', label: 'Graphic Design' },
  { value: 'animation', label: 'Animation' },
];

export const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    serviceType: services[0].value,
    message: '',
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch(apiUrl('/api/contact'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Message failed');
      }

      setStatus({ type: 'success', message: 'Your message is on its way to the nest!' });
      setForm({
        name: '',
        email: '',
        serviceType: services[0].value,
        message: '',
      });
    } catch (error) {
      setStatus({ type: 'error', message: 'Something went wrong. Try again in a beat.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white via-sunshine/10 to-transparent" />
      <div className="relative mx-auto max-w-5xl rounded-[48px] border border-white/60 bg-white/90 px-6 py-12 shadow-2xl shadow-hotPink/10 backdrop-blur-2xl md:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.7em] text-ink/50">Contact</p>
          <h2 className="heading-gradient font-script text-5xl">Drop Us a Line</h2>
          <p className="mt-3 text-ink/70">
            Tell us about your storyboard, brief, or wild idea. The parrot is listening.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <label className="text-sm uppercase tracking-[0.4em] text-ink/50">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 w-full border-b-2 border-ink/20 bg-transparent pb-2 text-lg font-semibold text-ink focus:border-hotPink focus:outline-none"
              />
            </label>

            <label className="text-sm uppercase tracking-[0.4em] text-ink/50">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-2 w-full border-b-2 border-ink/20 bg-transparent pb-2 text-lg font-semibold text-ink focus:border-hotPink focus:outline-none"
              />
            </label>
          </div>

          <label className="text-sm uppercase tracking-[0.4em] text-ink/50">
            Service Type
            <select
              name="serviceType"
              value={form.serviceType}
              onChange={handleChange}
              className="mt-2 w-full border-b-2 border-ink/20 bg-transparent pb-2 text-lg font-semibold text-ink focus:border-lime focus:outline-none"
            >
              {services.map((option) => (
                <option key={option.value} value={option.value} className="text-ink">
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="text-sm uppercase tracking-[0.4em] text-ink/50">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="mt-2 w-full border-b-2 border-ink/20 bg-transparent pb-2 text-lg font-semibold text-ink focus:border-surf focus:outline-none"
            />
          </label>

          {status.message && (
            <div
              className={`rounded-3xl px-4 py-3 text-sm ${
                status.type === 'success'
                  ? 'border border-lime/40 bg-lime/10 text-lime'
                  : 'border border-hotPink/40 bg-hotPink/10 text-hotPink'
              }`}
            >
              {status.message}
            </div>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-gradient-to-r from-hotPink via-sunshine to-surf px-12 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-2xl shadow-hotPink/30 transition hover:scale-[1.01] disabled:opacity-60"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

