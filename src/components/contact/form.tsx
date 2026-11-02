import { useState, type FC, type FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

const field =
  "mt-1 w-full border border-rule bg-surface px-4 py-3 text-ink placeholder:text-muted focus:border-accent";

const ContactForm: FC = () => {
  const [sending, setSending] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        form.reset();
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Message not sent. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <Toaster toastOptions={{ style: { borderRadius: 0 } }} />
      <form onSubmit={submit} className="flex flex-col gap-4">
        <label className="block">
          <span className="text-muted">Your email</span>
          <input required name="email" type="email" autoComplete="email" maxLength={500} className={field} />
        </label>
        <label className="block">
          <span className="text-muted">Message</span>
          <textarea required name="message" rows={7} maxLength={5000} className={field} />
        </label>
        <button
          type="submit"
          disabled={sending}
          className="self-start bg-ink px-5 py-3 font-semibold text-paper hover:bg-accent disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send message"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
