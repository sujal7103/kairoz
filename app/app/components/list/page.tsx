import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function ListPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px item height · 12px text · blue left-border on is-selected · background-color on hover."
          tokens={["--h-row", "--bg-hover", "--bg-selected", "--accent-highlight"]}
          dos={["Pair with a dot or icon for visual scanning", "Keep items to one line"]}
          donts={["Don't pad list items past 32px — use a card instead"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-list"
        title="List"
        meta={[".kairoz-list", ".kairoz-list-item", ".is-selected"]}
        subtitle="Tight vertical stack with hover highlight and a left-edge accent on the selected item."
      />
      <Section title="Default">
        <Example
          block
          html={`<ul class="kairoz-list" style="list-style:none;padding:0;margin:0;width:280px;border:1px solid var(--border-default);border-radius:6px">
  <li class="kairoz-list-item is-selected">main.ts</li>
  <li class="kairoz-list-item">index.tsx</li>
  <li class="kairoz-list-item">layout.tsx</li>
  <li class="kairoz-list-item">README.md</li>
  <li class="kairoz-list-item">package.json</li>
</ul>`}
        />
      </Section>
      <Section title="With status dots and timestamps">
        <Example
          block
          html={`<ul class="kairoz-list" style="list-style:none;padding:0;margin:0;width:320px;border:1px solid var(--border-default);border-radius:6px">
  <li class="kairoz-list-item" style="display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:8px"><span class="kairoz-dot kairoz-dot-success"></span>kairoz-core</span><span style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">2m ago</span></li>
  <li class="kairoz-list-item" style="display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:8px"><span class="kairoz-dot kairoz-dot-warning"></span>kairoz-edge</span><span style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">5m ago</span></li>
  <li class="kairoz-list-item" style="display:flex;align-items:center;justify-content:space-between"><span style="display:flex;align-items:center;gap:8px"><span class="kairoz-dot kairoz-dot-error"></span>kairoz-api</span><span style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">12m ago</span></li>
</ul>`}
        />
      </Section>
    </PageBody>
  );
}
