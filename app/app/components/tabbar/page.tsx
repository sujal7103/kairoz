import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function TabbarPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="34px height · 12px text · 1px bottom border · #171717 active tab fill."
          tokens={["--h-tabbar", "--bg-tab-active", "--bg-tab-inactive", "--border-default"]}
          dos={["Use .is-active on the currently selected tab", "Keep tab labels to 1–2 words"]}
          donts={["Don't use tabs for < 2 items", "Don't exceed ~6 tabs — switch to a sidebar"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-tabbar"
        title="Tabs"
        meta={[".kairoz-tabbar", ".kairoz-tab", ".is-active"]}
        subtitle="34px horizontal tab strip for switching between views. The active tab has a filled background and blue underline."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="kairoz-tabbar">
  <button class="kairoz-tab is-active">Overview</button>
  <button class="kairoz-tab">Metrics</button>
  <button class="kairoz-tab">Logs</button>
  <button class="kairoz-tab">Settings</button>
</div>`}
        />
      </Section>
      <Section title="Count-annotated">
        <Example
          block
          html={`<div class="kairoz-tabbar">
  <button class="kairoz-tab is-active">Pull requests <span style="margin-left:6px;color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">12</span></button>
  <button class="kairoz-tab">Issues <span style="margin-left:6px;color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">3</span></button>
  <button class="kairoz-tab">Discussions</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
