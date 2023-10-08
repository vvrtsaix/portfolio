import { useRef, type FC, type FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm: FC = () => {
  const form = useRef<HTMLFormElement>(null)

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/send-email", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (response.ok) {
      toast.success(data.message)
      form.current?.reset()
    } else {
      toast.error(data.message)
    }
  }

  return (
    <>
      <Toaster />
      <form ref={form} onSubmit={submit} className="mt-10 flex flex-col dark:text-black">
        <input
          required
          name="email"
          type="email"
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg border border-black/10 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:focus:outline-none focus:outline-black"
        />
        <textarea
          required
          name="message"
          className="h-52 my-3 rounded-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:focus:outline-none focus:outline-black"
          maxLength={5000}
        >
        </textarea>
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
          Submit
          <svg
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-xs opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-1 lucide lucide-send"
          >
            <path d="m22 2-7 20-4-9-9-4Zm0 0L11 13"></path>
          </svg>
        </button>
      </form>
    </>
  );
};

export default ContactForm;