# @quartz-community/remove-draft

Filters out pages with draft: true in their frontmatter.

## Installation

```bash
npx quartz plugin add github:quartz-community/remove-draft
```

## Usage

```ts
// quartz.config.ts
import * as ExternalPlugin from "./.quartz/plugins";

const config: QuartzConfig = {
  plugins: {
    filters: [ExternalPlugin.RemoveDrafts()],
  },
};
```

## Configuration

This plugin has no configuration options.

## Documentation

See the [Quartz documentation](https://quartz.jzhao.xyz/) for more information.

## License

MIT
