## <a name="LessMixins"></a>Less Mixins

In order to export fonts, variables and mixins to each style files, each `.module.less` and `.less`
files contains as reference the same file:

```less
@import (reference) "src/references.less";
```

This file import "as reference" variables and mixins files who come from
[src/fonts](src/fonts), [src/atoms](src/atoms) and [src/mixins](src/mixins). If a new mixin file is create,
it will be added in [src/references](src/references).