---
"@quartz-community/remove-draft": patch
---

The manifest declares that the plugin needs parsed frontmatter (`quartz.capabilities`): without it, pages marked `draft: true` would be published. Quartz 5.1+ reports this at build time; older versions ignore the field. On Quartz 5.1+ draft removal is built in (`configuration.drafts`); the README explains the migration.
