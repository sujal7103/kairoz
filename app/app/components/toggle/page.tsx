import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function TogglePage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px button · border + fill flip on is-on · compact icon button size."
          tokens={["--bg-hover", "--bg-selected", "--border-default"]}
          dos={["Use for a single binary state with an icon", "Pair with tooltip for affordance"]}
          donts={["Don't use for multi-state — use segmented"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-toggle"
        title="Toggle"
        meta={[".kairoz-toggle", ".is-on"]}
        subtitle="A pressable state button, distinct from switch. Designed to frame an icon rather than a label."
      />
      <Section title="States">
        <Example
          html={`<button class="kairoz-toggle" aria-pressed="false">Off</button>
<button class="kairoz-toggle is-on" aria-pressed="true">On</button>`}
        />
      </Section>
    </PageBody>
  );
}
