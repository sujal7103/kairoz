import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function AvatarPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px circle · 11px bold initials · pill radius · border on stacked group members."
          tokens={["--radius-full", "--text-xs", "--bg-raised"]}
          dos={["Use initials for text avatars", "Cap avatar groups at 3–4 with +N overflow"]}
          donts={["Don't pad to > 32px — Kairoz stays compact"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-avatar"
        title="Avatar"
        meta={[".kairoz-avatar", ".kairoz-avatar-group"]}
        subtitle="24px circular identity marker with bold initials. Overlap them into groups to show collaborators at a glance."
      />
      <Section title="Variants">
        <Variants
          items={[
            { label: "Initials", html: `<div class="kairoz-avatar">AB</div>` },
            { label: "Group", html: `<div class="kairoz-avatar-group" style="display:inline-flex"><div class="kairoz-avatar" style="border:1px solid var(--bg-base);margin-right:-6px">AB</div><div class="kairoz-avatar" style="border:1px solid var(--bg-base);margin-right:-6px">CD</div><div class="kairoz-avatar" style="border:1px solid var(--bg-base);margin-right:-6px">EF</div><div class="kairoz-avatar" style="border:1px solid var(--bg-base)">+3</div></div>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
