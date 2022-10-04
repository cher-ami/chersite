# <a name="CssWorkflow"></a>CSS workflow

[Less](http://lesscss.org/) is used as css preprocessor. It can be set as `.less` file or `.module.less` for css module;
Both works by default.

[BEM methodology](http://getbem.com) is used to organize the integration of our templates and components
but have some differences depend on the use-case:

### <a name="BemForModuleLess"></a>BEM for `.module.less`

```less
/**
 * BEM block is always "root" className
 */
.root {
}
/**
 * BEM element (.camelCase)
 */
.myButton {
  /**
   * BEM modifier (&_camelCase)
   * sep with "_" allows to target it from template like this: "css.myButton_myModifier"
   */
  &_red {
  }
}
```

### <a name="BemForLess"></a>BEM for `.less`

```less
/**
 * BEM block (.PascalCase)
 */
.Component {
  /**
 * BEM element (.camelCase)
 usage: "Component_myElement"
 */
  &_myElement {
    /**
     * BEM modifier (&_camelCase)
     * sep with "_" allows to target it from template
     * usage: "Component_myElement-myModifier"
     */
    &-red {
    }
  }
}
```
