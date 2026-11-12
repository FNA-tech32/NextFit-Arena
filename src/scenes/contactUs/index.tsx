import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import Heading from "@/shared/Heading";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    trigger,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Heading>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </Heading>
          <p className="my-5">
            Ready to push your limits and transform your athletic performance? Get in
            touch with the Thunder Athletics team today. Drop by our facility, call
            our membership desk, or send us a message below.
          </p>
        </motion.div>

        {/* Alternative Contact Details Cards */}
        <motion.div
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex items-start gap-4 rounded-xl bg-primary-100 p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
              <MapPinIcon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-sm font-bold text-gray-500">Visit Us</h4>
              <p className="mt-1 text-xs text-gray-500">
                108 Thunder Ridge Blvd, Suite 200, Denver, CO 80202
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl bg-primary-100 p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
              <PhoneIcon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-sm font-bold text-gray-500">Call Us</h4>
              <p className="mt-1 text-xs text-gray-500">+1 (555) 389-2041</p>
              <p className="text-[11px] text-gray-500">Toll Free: 1-800-555-THDR</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl bg-primary-100 p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
              <EnvelopeIcon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-sm font-bold text-gray-500">Email Us</h4>
              <p className="mt-1 text-xs text-gray-500">info@thunderathletics.com</p>
              <p className="text-[11px] text-gray-500">support@thunderathletics.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-xl bg-primary-100 p-4 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500 text-white">
              <ClockIcon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-sm font-bold text-gray-500">Club Hours</h4>
              <p className="mt-1 text-xs text-gray-500">Mon - Fri: 5 AM - 11 PM</p>
              <p className="text-[11px] text-gray-500">Sat - Sun: 7 AM - 9 PM</p>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/7292fa2330e5592bbd1e31ab3925dd21"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required"
                    ? "This field is required"
                    : null}
                  {errors.name.type === "maxLength"
                    ? "Max length is 2000 chars"
                    : null}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required"
                    ? "This field is required"
                    : null}
                  {errors.email.type === "pattern" ? "Invalid email" : null}
                </p>
              )}
              <textarea
                className={inputStyles}
                placeholder="Message"
                rows={4}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required"
                    ? "This field is required"
                    : null}
                  {errors.message.type === "maxLength"
                    ? "Max length is 2000 chars"
                    : null}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="mb:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img
                className="w-full"
                src={ContactUsPageGraphic}
                alt="contact-us-page-graphic"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
