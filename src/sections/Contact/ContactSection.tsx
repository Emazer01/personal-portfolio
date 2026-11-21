import React, { useState } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Send
} from 'lucide-react';
import { EditableBadge } from '../../components/common/EditableBadge';
import { SectionHeader } from '../../components/common/SectionHeader';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { siteConfig } from '../../config/site';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'sent' | 'error'>('idle');
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const configuredEmail = siteConfig.contact.email.trim();
  const configuredFormEndpoint = siteConfig.contact.formEndpoint.trim();

  const handleCopyEmail = async () => {
    if (!configuredEmail) return;
    try {
      await navigator.clipboard.writeText(configuredEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!configuredFormEndpoint) return;

    setFormState('submitting');
    try {
      const response = await fetch(configuredFormEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({ name, email: senderEmail, message })
      });
      if (!response.ok) throw new Error('Submission failed');
      setFormState('sent');
      setName('');
      setSenderEmail('');
      setMessage('');
    } catch {
      setFormState('error');
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      className="border-t border-[var(--border-subtle)] py-20 outline-none"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="08 / CONTACT"
          title="Let's Connect and Build Something."
          description="Open to software engineering, full-stack web development, IT infrastructure, network engineering, and applied AI collaborations."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1">
            {/* LinkedIn Card */}
            <Card interactive className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-500/30 bg-sky-500/10 text-[var(--accent-blue)]">
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                      Professional Network
                    </div>
                    <h3 className="mt-1 font-editorial text-lg font-bold text-[var(--text-primary)]">
                      LinkedIn
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[var(--accent-blue)]">
                      {siteConfig.linkedin.handle}
                    </p>
                  </div>
                </div>
                <Button
                  href={siteConfig.linkedin.url}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  Connect
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </Card>

            {/* GitHub Card */}
            <Card interactive className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--accent-gold)]/35 bg-[var(--accent-gold-soft)] text-[var(--accent-gold)]">
                    <Github className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                      Source Code &amp; Repositories
                    </div>
                    <h3 className="mt-1 font-editorial text-lg font-bold text-[var(--text-primary)]">
                      GitHub
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[var(--accent-gold)]">
                      @{siteConfig.github.username}
                    </p>
                  </div>
                </div>
                <Button
                  href={siteConfig.github.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  Follow
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </Button>
              </div>
            </Card>

            {/* Email Card (Never fabricates unconfirmed email) */}
            <Card className="p-6 sm:col-span-2 lg:col-span-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-primary)] text-[var(--text-primary)]">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-[var(--text-secondary)]">
                        Direct Email
                      </span>
                      {!configuredEmail && (
                        <EditableBadge label="Configure in src/config/site.ts" />
                      )}
                    </div>
                    <h3 className="mt-1 font-editorial text-lg font-bold text-[var(--text-primary)]">
                      {configuredEmail || 'Public Email Pending Configuration'}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--text-secondary)]">
                      {configuredEmail
                        ? 'Reach out directly via email or copy address below.'
                        : 'Set siteConfig.contact.email in src/config/site.ts to enable mailto and one-click copy.'}
                    </p>
                  </div>
                </div>

                {configuredEmail && (
                  <div className="flex items-center gap-2">
                    <Button href={`mailto:${configuredEmail}`} variant="primary" size="sm">
                      Send Email
                    </Button>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-1.5 font-mono text-xs text-[var(--text-primary)] hover:border-[var(--accent-gold)]"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Right Panel: Configured Contact Form OR Direct Availability Card */}
          <Card className="flex flex-col justify-between p-6 lg:col-span-5">
            {configuredFormEndpoint ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-editorial text-lg font-bold text-[var(--text-primary)]">
                    Send a Direct Message
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    Messages are delivered via configured static form endpoint.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1 block font-mono text-xs text-[var(--text-secondary)]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-2 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1 block font-mono text-xs text-[var(--text-secondary)]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-2 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1 block font-mono text-xs text-[var(--text-secondary)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-primary)] px-3 py-2 text-sm text-[var(--text-primary)] focus:border-[var(--accent-gold)] focus:outline-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  disabled={formState === 'submitting'}
                  className="w-full"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>

                {formState === 'sent' && (
                  <p className="font-mono text-xs text-emerald-400">
                    Message sent successfully.
                  </p>
                )}
                {formState === 'error' && (
                  <p className="font-mono text-xs text-rose-400">
                    Unable to send message right now. Please connect via LinkedIn.
                  </p>
                )}
              </form>
            ) : (
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--accent-gold)]">
                    Collaboration Focus
                  </div>
                  <h3 className="mt-2 font-editorial text-xl font-bold text-[var(--text-primary)]">
                    Ready for Technical Roles &amp; Engineering Projects
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    If you are looking for a Computer Science graduate combining full-stack development, IT infrastructure, network engineering, and computer vision capabilities, let&rsquo;s connect directly on LinkedIn or inspect my codebases on GitHub.
                  </p>
                </div>

                <div className="mt-6 space-y-2.5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] p-4 font-mono text-xs text-[var(--text-secondary)]">
                  <div className="flex items-center justify-between">
                    <span>Location</span>
                    <span className="text-[var(--text-primary)]">Indonesia</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Primary Focus</span>
                    <span className="text-[var(--accent-gold)]">Full-Stack • Infra • AI</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Contact Form</span>
                    <span className="text-[var(--text-secondary)]">
                      Optional (set formEndpoint)
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={siteConfig.linkedin.url}
                    target="_blank"
                    rel="noreferrer"
                    variant="primary"
                    className="flex-1"
                  >
                    Message on LinkedIn
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};
