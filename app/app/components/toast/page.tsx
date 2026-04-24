import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function ToastPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="320px wide · 1px border · shadow-md · title + optional desc + close."
          tokens={["--shadow-md", "--z-toast", "--bg-overlay"]}
          dos={["Auto-dismiss after 4s", "Stack from bottom-right by default"]}
          donts={["Don't use toast for critical errors — use a dialog"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-toast"
        title="Toast"
        meta={[".kairoz-toast", ".kairoz-toast-desc", ".kairoz-toast-close"]}
        subtitle="Auto-dismissing notification for non-blocking status updates. Appears, confirms the action, and exits after 4 seconds."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="kairoz-toast" style="width:340px;position:relative">
  Deployment succeeded.
  <div class="kairoz-toast-desc">main.ts built in 1.2s.</div>
  <button class="kairoz-toast-close" aria-label="Dismiss">×</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
