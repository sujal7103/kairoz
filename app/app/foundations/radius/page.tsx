import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { RadiusGrid } from "@/components/showcase/scale-row";

const radii = [
  { token: "--radius-sm", value: "3px", radius: 3 },
  { token: "--radius-md", value: "4px", radius: 4 },
  { token: "--radius-lg", value: "6px", radius: 6 },
  { token: "--radius-full", value: "9999px", radius: 9999 },
];

export default function RadiusPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Three subtle radii plus pill. No hero radii. Inputs 4px, cards 6px, pills 9999px."
          dos={["--radius-md for buttons and inputs", "--radius-lg for cards and panels", "--radius-full only for pills and avatars"]}
          donts={["Don't fabricate radii like 12px or 16px", "Don't mix radii within a single component"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Radius"
        subtitle="Three radii (3 / 4 / 6) plus a pill. Subtle everywhere except pill tokens and avatars. No hero radii."
      />
      <Section title="Scale">
        <RadiusGrid items={radii} />
      </Section>
    </PageBody>
  );
}
