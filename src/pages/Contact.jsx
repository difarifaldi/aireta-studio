import React from "react";
import { Camera, Mail, MapPin } from "lucide-react";

const contactDetails = [
  {
    label: "INSTAGRAM",
    value: "Konvesi By Aireta",
    href: "https://www.instagram.com/konveksibyaireta/",
    icon: Camera,
  },
  {
    label: "EMAIL",
    value: "hello@aireta.com",
    href: "mailto:hello@aireta.com",
    icon: Mail,
  },
  {
    label: "LOCATION",
    value: "Bandung, West Java, Indonesia",
    href: "https://maps.google.com/?q=Bandung,Indonesia",
    icon: MapPin,
  },
];

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Halo Admin Aireta, saya ingin konsultasi project.",
      "",
      `Nama: ${data.get("name")}`,
      `Brand / Company: ${data.get("brand") || "-"}`,
      `Email: ${data.get("email")}`,
      `Nomor WhatsApp: ${data.get("whatsapp")}`,
      `Layanan: ${data.get("service") || "Belum dipilih"}`,
      `Estimasi Jumlah: ${data.get("quantity") || "Belum ditentukan"}`,
      "",
      "Detail Project:",
      data.get("message"),
    ].join("\n");

    window.open(
      `https://wa.me/6281295050880?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 sm:py-24">
          <p className="section-kicker">CONTACT US</p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h1 className="max-w-3xl font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
              Let&apos;s Create Something
              <span className="text-gold"> Extraordinary</span>
            </h1>
            <p className="max-w-lg text-sm leading-7 text-stone-600 md:justify-self-end md:text-base">
              Punya ide koleksi atau ingin mengembangkan brand Anda? Ceritakan
              visi Anda dan mari mulai percakapan yang berarti.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <aside>
            <p className="section-kicker">GET IN TOUCH</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight">
              We&apos;d Love to Hear About Your Vision
            </h2>
            <p className="mt-5 text-sm leading-7 text-stone-600">
              Hubungi kami secara langsung atau isi formulir. Tim kami akan
              merespons dan membantu menemukan solusi terbaik untuk kebutuhan
              Anda.
            </p>

            <div className="mt-9 space-y-3">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <a
                    key={detail.label}
                    href={detail.href}
                    target={detail.label === "EMAIL" ? undefined : "_blank"}
                    rel="noreferrer"
                    className="contact-detail"
                  >
                    <span className="contact-detail-icon" aria-hidden="true">
                      <Icon
                        size={detail.label === "LOCATION" ? 22 : 19}
                        strokeWidth={1.5}
                      />
                    </span>
                    <span>
                      <span className="block text-[10px] tracking-[0.16em] text-stone-400">
                        {detail.label}
                      </span>
                      <span className="mt-1 block text-sm text-stone-800">
                        {detail.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="contact-hours mt-9">
              <p className="text-[10px] tracking-[0.16em] text-gold">
                BUSINESS HOURS
              </p>
              <div className="mt-4 flex justify-between gap-4 text-sm">
                <span className="text-stone-500">Monday — Friday</span>
                <span>09:00 — 17:00</span>
              </div>
              <div className="mt-3 flex justify-between gap-4 text-sm">
                <span className="text-stone-500">Saturday</span>
                <span>By Appointment</span>
              </div>
            </div>
          </aside>

          <div className="contact-form-wrap">
            <form onSubmit={handleSubmit}>
              <div className="flex items-center justify-between gap-4 border-b border-stone-200 pb-6">
                <div>
                  <p className="section-kicker">PROJECT INQUIRY</p>
                  <h2 className="mt-2 font-serif text-2xl">
                    Tell Us About Your Project
                  </h2>
                </div>
                <span className="hidden font-serif text-4xl text-[#d2b98f] sm:block">
                  01
                </span>
              </div>

              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <label className="form-field">
                  <span>FULL NAME *</span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>BRAND / COMPANY</span>
                  <input name="brand" type="text" placeholder="Brand name" />
                </label>
                <label className="form-field">
                  <span>EMAIL ADDRESS *</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="name@email.com"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>WHATSAPP NUMBER *</span>
                  <input
                    name="whatsapp"
                    type="tel"
                    placeholder="+62"
                    required
                  />
                </label>
                <label className="form-field">
                  <span>SERVICE INTERESTED IN</span>
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option>Custom Design Consultation</option>
                    <option>Custom Pattern Design</option>
                    <option>Custom Embroidery</option>
                    <option>Production</option>
                    <option>Photoshoot Handling</option>
                    <option>Video Campaign Handling</option>
                    <option>Custom Website</option>
                    <option>Brand Identity & Creative Direction</option>
                    <option>Packaging & Label Design</option>
                  </select>
                </label>
                <label className="form-field">
                  <span>ESTIMATED QUANTITY</span>
                  <input
                    name="quantity"
                    type="number"
                    min="1"
                    placeholder="Number of pieces"
                  />
                </label>
                <label className="form-field sm:col-span-2">
                  <span>TELL US ABOUT YOUR PROJECT *</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Share your vision, timeline, and requirements..."
                    required
                  />
                </label>
              </div>

              <button type="submit" className="contact-submit mt-8">
                CONTINUE TO WHATSAPP <span aria-hidden="true">→</span>
              </button>
              <p className="mt-4 text-[11px] leading-5 text-stone-400">
                Data tidak disimpan di website. Setelah klik tombol, Anda akan
                diarahkan ke WhatsApp untuk memeriksa dan mengirim pesan.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-20">
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-kicker">VISIT OUR STUDIO</p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                Find Us in Bandung
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-stone-600">
                Kunjungan ke studio tersedia dengan membuat janji terlebih
                dahulu. Kami siap menyambut dan mendiskusikan kebutuhan project
                Anda.
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Bandung,West+Java,Indonesia"
              target="_blank"
              rel="noreferrer"
              className="gold-link inline-flex self-start sm:self-auto"
            >
              OPEN IN GOOGLE MAPS <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="contact-map-wrap">
            <iframe
              title="Aireta Studio location in Bandung"
              src="https://www.google.com/maps?q=Bandung,West%20Java,Indonesia&z=13&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="contact-map-card">
              <span className="contact-map-pin" aria-hidden="true">
                ⌖
              </span>
              <div>
                <p className="text-[10px] tracking-[0.16em] text-gold">
                  AIRETA STUDIO
                </p>
                <p className="mt-2 font-serif text-xl">Bandung, West Java</p>
                <p className="mt-1 text-xs text-stone-500">Indonesia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
