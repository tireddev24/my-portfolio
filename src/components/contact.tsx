import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { contactSchema, ContactValues } from '@/lib/zodschema';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from './ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

function ContactForm({ email }: { email: string }) {
  const EMAIL = email || 'michaelamao442@gmail.com';
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  function onSubmit(values: ContactValues) {
    const subject = values.subject.trim()
      ? values.subject.trim()
      : `Portfolio enquiry from ${values.name.trim()}`;
    const body = `${values.message}\n\n— ${values.name.trim()}\n${values.email}`;

    const link = document.createElement('a');
    link.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    link.rel = 'noopener';
    document.body.appendChild(link);
    link.click();
    link.remove();

    toast.success('Opening your email app', {
      description: 'Your message is filled in — just press send.',
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-display text-xs font-bold uppercase tracking-widest">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    autoComplete="name"
                    className="rounded-xl border-sand-400/25 bg-sand-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-display text-xs font-bold uppercase tracking-widest">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@studio.com"
                    autoComplete="email"
                    className="rounded-xl border-sand-400/25 bg-sand-100"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-display text-xs font-bold uppercase tracking-widest">
                Subject
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="What's this about?"
                  className="rounded-xl border-sand-400/25 bg-sand-100"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-display text-xs font-bold uppercase tracking-widest">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Tell me about the project, the timeline, and what you need."
                  className="rounded-xl border-sand-400/25 bg-sand-100"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-11 rounded-xl bg-sand-800 px-7 text-sand-50 shadow-[var(--shadow-tactile)] transition-shadow duration-500 hover:bg-sand-900 hover:shadow-[var(--shadow-tactile-hover)]"
        >
          Send message
        </Button>
      </form>
    </Form>
  );
}

export default ContactForm;
