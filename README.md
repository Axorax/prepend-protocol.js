<h1 align="center"><code>prepend-protocol.js</code></h1>

<p align="center">Add protocols to URLs</p>

## ⚙️ Installation

```js
npm i prepend-protocol
```

**CDN Links:**
- https://cdn.jsdelivr.net/npm/prepend-protocol@1.0.0/prepend-protocol.js
- https://www.unpkg.com/prepend-protocol@1.0.0/prepend-protocol.js

## 📖 Usage

#### ◎ Import

```js
// ES6
import prependProtocol from "prepend-protocol";

// commonjs
const prependProtocol = require("prepend-protocol");
```

#### ◎ Prepend protocol

```js
prependProtocol("www.example.com");            // "https://www.example.com"
prependProtocol("localhost")                   // "https://localhost"

// default protocol is always set to "https"
prependProtocol("ftp://www.example.com");      // "https://www.example.com"

prependProtocol("example.com", "ftp");         // "ftp://example.com"
prependProtocol("https://example.com", "ftp"); // "ftp://example.com"
```

---

[Support me on Patreon](https://www.patreon.com/axorax) - 
[Check out my socials](https://github.com/axorax/socials)