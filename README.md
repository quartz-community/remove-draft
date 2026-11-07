# @quartz-community/remove-draft

Filters out pages with draft: true in their frontmatter.

> [!IMPORTANT]
> **Built into Quartz 5.1+.** Draft handling is part of Quartz core now, configured under
> `configuration.drafts` in `quartz.config.yaml` — you don't need this plugin anymore.
> Existing config entries for it keep working (Quartz applies their options to the built-in and
> doesn't load this package); run `npx quartz plugin doctor --fix` to update your config.
> See [Built-in processing](https://quartz.jzhao.xyz/features/built-in-processing).
> This package is kept for Quartz versions before 5.1.

## Installation

```bash
npx quartz plugin add github:quartz-community/remove-draft
```

## Usage

```yaml title="quartz.config.yaml"
plugins:
  - source: github:quartz-community/remove-draft
    enabled: true
```

## Configuration

This plugin has no configuration options.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/plugins/RemoveDrafts) for more information.

## License

MIT
