import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function BreadcrumbPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="12px text · tertiary color · forward slash separators · current is stronger weight."
          tokens={["--text-tertiary", "--text-primary"]}
          dos={["Keep to 2–4 levels", "Make all but the current item clickable"]}
          donts={["Don't use ›, →, or emoji separators — use a plain /"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-breadcrumb"
        title="Breadcrumb"
        meta={[".kairoz-breadcrumb", ".kairoz-breadcrumb-sep", ".kairoz-breadcrumb-current"]}
        subtitle="12px path trail with forward-slash separators. Ancestor links render in tertiary color; the current page uses primary."
      />
      <Section title="Default">
        <Example
          html={`<nav class="kairoz-breadcrumb">
  <a href="#">Projects</a>
  <span class="kairoz-breadcrumb-sep">/</span>
  <a href="#">kairoz</a>
  <span class="kairoz-breadcrumb-sep">/</span>
  <span class="kairoz-breadcrumb-current">Overview</span>
</nav>`}
        />
      </Section>
    </PageBody>
  );
}
