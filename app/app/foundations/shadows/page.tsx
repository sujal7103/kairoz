import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { ShadowGrid } from "@/components/showcase/scale-row";

const shadows = [
  { token: "--shadow-sm", value: "0 1px 2px rgba(0,0,0,0.6)" },
  { token: "--shadow-md", value: "0 4px 12px rgba(0,0,0,0.8)" },
  { token: "--shadow-lg", value: "0 8px 24px rgba(0,0,0,0.9)" },
  { token: "--shadow-overlay", value: "0 16px 48px rgba(0,0,0,0.95)" },
];

export default function ShadowsPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Shadows exist for overlays only. Cards and panels rely on borders."
          dos={["--shadow-md for popovers and dropdowns", "--shadow-lg for dialogs", "--shadow-overlay for full-screen modals"]}
          donts={["Don't shadow cards or panels — borders define them", "Don't combine shadow and border on the same element"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Shadows"
        subtitle="Components use borders by default. Shadows are only applied to floating overlays: popovers, dialogs, toasts, and tooltips."
      />
      <Section title="Scale">
        <ShadowGrid items={shadows} />
      </Section>
    </PageBody>
  );
}
