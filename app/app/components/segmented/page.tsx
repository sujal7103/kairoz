import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function SegmentedPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Connected button group · 24px height · 1px border · is-active fills one segment."
          tokens={["--bg-raised", "--border-default", "--h-input"]}
          dos={["Use for 2–4 exclusive mode choices", "Keep labels to one word"]}
          donts={["Don't use for 5+ options — switch to a dropdown"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-segmented"
        title="Segmented"
        meta={[".kairoz-segmented", ".kairoz-segmented-item", ".is-active"]}
        subtitle="Connected button group for exclusive mode selection. Use for 2-4 mutually exclusive options like day/week/month or grid/list."
      />
      <Section title="Default">
        <Example
          html={`<div class="kairoz-segmented">
  <button class="kairoz-segmented-item is-active">Day</button>
  <button class="kairoz-segmented-item">Week</button>
  <button class="kairoz-segmented-item">Month</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
