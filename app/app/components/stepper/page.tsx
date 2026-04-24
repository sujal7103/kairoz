import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function StepperPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Dot (12px) · label · 1px connector. is-active = blue. is-done = filled."
          tokens={["--accent-highlight", "--border-default"]}
          dos={["Number 3–6 steps max", "Make each step reversible if state allows"]}
          donts={["Don't use for branching flows — use a tab-based wizard"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-stepper"
        title="Stepper"
        meta={[".kairoz-stepper", ".kairoz-stepper-step", ".kairoz-stepper-dot", ".kairoz-stepper-label", ".is-active", ".is-done"]}
        subtitle="Linear workflow tracker. Blue marks the current step, filled dots confirm completion, connectors link the sequence."
      />
      <Section title="Default">
        <Example
          html={`<ol class="kairoz-stepper" style="list-style:none;padding:0;margin:0;display:flex;align-items:center;gap:8px">
  <li class="kairoz-stepper-step is-done" style="display:flex;align-items:center;gap:6px"><span class="kairoz-stepper-dot"></span><span class="kairoz-stepper-label">Account</span></li>
  <li class="kairoz-stepper-sep" style="width:32px;height:1px;background:var(--border-default)"></li>
  <li class="kairoz-stepper-step is-active" style="display:flex;align-items:center;gap:6px"><span class="kairoz-stepper-dot"></span><span class="kairoz-stepper-label">Plan</span></li>
  <li class="kairoz-stepper-sep" style="width:32px;height:1px;background:var(--border-default)"></li>
  <li class="kairoz-stepper-step" style="display:flex;align-items:center;gap:6px"><span class="kairoz-stepper-dot"></span><span class="kairoz-stepper-label">Payment</span></li>
  <li class="kairoz-stepper-sep" style="width:32px;height:1px;background:var(--border-default)"></li>
  <li class="kairoz-stepper-step" style="display:flex;align-items:center;gap:6px"><span class="kairoz-stepper-dot"></span><span class="kairoz-stepper-label">Confirm</span></li>
</ol>`}
        />
      </Section>
    </PageBody>
  );
}
