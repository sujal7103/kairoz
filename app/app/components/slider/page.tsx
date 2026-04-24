import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function SliderPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="4px track · 12px thumb · blue range fill · thumb snaps on focus."
          tokens={["--accent-highlight", "--bg-raised"]}
          dos={["Pair with a numeric readout", "Use for continuous values only"]}
          donts={["Don't use for discrete options — use segmented"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-slider"
        title="Slider"
        meta={[".kairoz-slider", ".kairoz-slider-track", ".kairoz-slider-range", ".kairoz-slider-thumb"]}
        subtitle="Continuous value control. Blue range fill tracks the position, square thumb snaps to focus for precise adjustment."
      />
      <Section title="Default">
        <Example
          block
          html={`<div style="display:flex;align-items:center;gap:12px;width:360px">
  <div class="kairoz-slider" style="position:relative;flex:1;height:16px">
    <div class="kairoz-slider-track" style="position:absolute;top:50%;transform:translateY(-50%);left:0;right:0;height:4px;background:var(--bg-raised);border-radius:2px;border:1px solid var(--border-default)">
      <div class="kairoz-slider-range" style="width:60%;height:100%;background:var(--accent-highlight);border-radius:2px"></div>
    </div>
    <div class="kairoz-slider-thumb" style="position:absolute;left:60%;top:50%;transform:translate(-50%,-50%);width:12px;height:12px;background:var(--text-primary);border-radius:2px;border:1px solid var(--accent-highlight);box-shadow:0 0 0 2px rgba(0,112,243,0.2)"></div>
  </div>
  <span style="font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary);width:40px;text-align:right">60</span>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
