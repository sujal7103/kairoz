import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function TooltipPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="22–28px tall · 11px text · shadow-md · opposite-theme variant (dark tooltip on light surface)."
          tokens={["--shadow-md", "--text-xxs", "--z-tooltip"]}
          dos={["Keep to 1 line", "Show on hover with 400ms delay, hide instantly"]}
          donts={["Don't put actions in tooltips — they're unreachable"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-tooltip"
        title="Tooltip"
        meta={[".kairoz-tooltip", ".kairoz-tooltip-dark"]}
        subtitle="Brief, single-line contextual hint. Default variant follows the theme; dark variant stays dark regardless."
      />
      <Section title="Variants">
        <Variants
          items={[
            { label: "Default", html: `<div class="kairoz-tooltip">Save · ⌘S</div>` },
            { label: "Dark", html: `<div class="kairoz-tooltip kairoz-tooltip-dark">Dark always</div>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
