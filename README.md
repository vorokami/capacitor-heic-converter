# capacitor-heic-converter

Capacitor plugin for converting uri of heic files to base64

## Install

```bash
npm install capacitor-heic-converter
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`convert(...)`](#convert)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### convert(...)

```typescript
convert(options: { uri: string; }) => Promise<{ base64String: string; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ uri: string; }</code> |

**Returns:** <code>Promise&lt;{ base64String: string; }&gt;</code>

--------------------

</docgen-api>
