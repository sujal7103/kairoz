import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function PaginationPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="28×28 squares · 1px border · blue fill on is-active · ellipsis as tertiary text."
          tokens={["--h-button", "--accent-highlight", "--border-default"]}
          dos={["Show prev/next arrows", "Collapse middle pages with ellipsis"]}
          donts={["Don't use for < 20 items — use a single scrollable list"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-pagination"
        title="Pagination"
        meta={[".kairoz-pagination", ".kairoz-pagination-item", ".kairoz-pagination-ellipsis"]}
        subtitle="Page-by-page navigator. Chevron arrows bracket the range, ellipsis collapses the middle when the set is large."
      />
      <Section title="Default">
        <Example
          html={`<nav class="kairoz-pagination">
  <button class="kairoz-pagination-item">‹</button>
  <button class="kairoz-pagination-item is-active">1</button>
  <button class="kairoz-pagination-item">2</button>
  <button class="kairoz-pagination-item">3</button>
  <span class="kairoz-pagination-ellipsis">…</span>
  <button class="kairoz-pagination-item">9</button>
  <button class="kairoz-pagination-item">›</button>
</nav>`}
        />
      </Section>
    </PageBody>
  );
}
