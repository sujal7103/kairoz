import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function SkeletonPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Grey block · 3px radius · subtle shimmer via background-color transition."
          tokens={["--bg-raised", "--border-subtle"]}
          dos={["Match the shape of the content that's loading", "Use for > 300ms loads only"]}
          donts={["Don't use for < 300ms — just show the data"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-skeleton"
        title="Skeleton"
        meta={[".kairoz-skeleton"]}
        subtitle="Animated placeholder that mirrors the shape of incoming content. Size it inline; the shimmer handles the rest."
      />
      <Section title="Default">
        <Example
          block
          html={`<div style="display:flex;flex-direction:column;gap:8px;width:360px">
  <div class="kairoz-skeleton" style="height:12px;width:40%"></div>
  <div class="kairoz-skeleton" style="height:12px;width:80%"></div>
  <div class="kairoz-skeleton" style="height:12px;width:65%"></div>
  <div class="kairoz-skeleton" style="height:12px;width:90%"></div>
</div>`}
        />
      </Section>
      <Section title="Card loading state">
        <Example
          block
          html={`<div class="kairoz-card" style="width:280px">
  <div class="kairoz-card-header"><div class="kairoz-skeleton" style="height:10px;width:80px"></div></div>
  <div class="kairoz-card-body">
    <div class="kairoz-skeleton" style="height:24px;width:60%;margin-bottom:8px"></div>
    <div class="kairoz-skeleton" style="height:10px;width:40%"></div>
  </div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
