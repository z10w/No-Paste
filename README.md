<div align="center">

<br>

# No Paste

**A VS Code extension that blocks paste to make you a better developer.**

<br>

[![Version](https://img.shields.io/visual-studio-marketplace/v/DilerOmar.no-paste?color=black&label=version)](https://marketplace.visualstudio.com/items?itemName=DilerOmar.no-paste)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/DilerOmar.no-paste?color=black&label=installs)](https://marketplace.visualstudio.com/items?itemName=DilerOmar.no-paste)
[![License](https://img.shields.io/badge/license-MIT-black)](./LICENSE)
[![VS Code](https://img.shields.io/badge/VS%20Code-1.70%2B-black)](https://code.visualstudio.com)

<br>

</div>

---

## What is this

No Paste is a small, focused VS Code extension that intercepts the paste shortcut inside the editor. When you press `Ctrl+V`, instead of pasting, it shows you a short message and does nothing else.

The idea is simple: most beginners learn by reading code and pasting it. That feels productive but produces very little actual understanding. The moment you are forced to type something yourself, you slow down, you think, and you remember.

This extension creates that friction on purpose.

---

## How it works

- Intercepts `Ctrl+V` / `Cmd+V` inside the editor
- Intercepts right-click Paste from the context menu
- Displays a short motivational message when paste is attempted
- Adds a status bar indicator showing whether blocking is active
- Remembers the on/off state between sessions

Nothing is collected. Nothing is sent anywhere. The extension does exactly one thing locally.

---

## Installation

**From the VS Code Marketplace**

Open VS Code, go to the Extensions panel, search for **No Paste**, and click Install.

**From source**

```bash
git clone https://github.com/z10w/No-Paste.git
cd no-paste
npm install
npx @vscode/vsce package
```

Then in VS Code: Extensions panel → `...` menu → Install from VSIX → select the generated `.vsix` file.

---

## Usage

The extension activates automatically on startup. No configuration required.

**Toggle on/off**

| Method | Action |
|---|---|
| Status bar | Click the `No Paste` item at the bottom right |
| Command Palette | `No Paste: Toggle On/Off` |
| Keyboard shortcut | `Ctrl+Shift+Alt+P` / `Cmd+Shift+Alt+P` on Mac |

The toggle is useful when you genuinely need to paste something — a config value, an API key, a license header. Disable it, paste, re-enable it.

---

## Why this exists

There is a pattern that repeats itself with nearly every beginner coder. They follow a tutorial, copy the code, run it, and move on. The output works so it feels like learning happened. But ask them to reproduce the same code two days later without looking and most cannot.

Copy-pasting bypasses the part of learning that actually builds skill. Typing forces your brain to process each character, each keyword, each bracket. Mistakes appear. You fix them. That process — struggle, correction, understanding — is what builds a developer.

No Paste exists to make that process the default.

---

## Contributing

Issues and pull requests are welcome.

If you find a shortcut conflict, a case where paste slips through, or have an idea for a feature, open an issue and describe it clearly.

```bash
git clone https://github.com/DilerOmar/no-paste.git
cd no-paste
code .
# Press F5 to open a VS Code Extension Development Host for testing
```

---

## Roadmap

- Session stats showing how many paste attempts were blocked
- Whitelist specific file types where paste is always allowed
- Configurable motivational messages
- JetBrains plugin port

---

## License

MIT. See [LICENSE](./LICENSE) for details.

---

<div align="center">

Built by [Diler Omar](https://github.com/DilerOmar)

</div>
