const vscode = require('vscode');

let isBlocking = true;
let statusBarItem;

const messages = [
  "✋ No Paste! Type it yourself — that's how real coders learn.",
  "💪 Hands on the keyboard! You got this.",
  "🧠 Your brain grows when you type it, not paste it.",
  "🚫 Paste blocked! Every character you type builds muscle memory.",
  "⌨️ Type it out. You'll remember it 10x better.",
  "🔥 No shortcuts in learning. Type. It. Out.",
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function updateStatusBar() {
  if (isBlocking) {
    statusBarItem.text = '$(circle-slash) No Paste';
    statusBarItem.tooltip = 'No Paste is ON — paste is blocked. Click to disable.';
    statusBarItem.backgroundColor = new vscode.ThemeColor(
      'statusBarItem.warningBackground'
    );
  } else {
    statusBarItem.text = '$(check) Paste Allowed';
    statusBarItem.tooltip = 'No Paste is OFF — paste is allowed. Click to enable.';
    statusBarItem.backgroundColor = undefined;
  }
}

function activate(context) {

  // Load saved state
  isBlocking = context.globalState.get('noPaste.isBlocking', true);

  // Status bar
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  statusBarItem.command = 'noPaste.toggle';
  statusBarItem.show();

  updateStatusBar();

  // Main paste interceptor
  const pasteInterceptor = vscode.commands.registerCommand(
    'noPaste.blockPaste',
    async () => {

      if (isBlocking) {
        vscode.window.showWarningMessage(getRandomMessage());
        return;
      }

      // Temporarily disable interceptor loop
      await vscode.commands.executeCommand('editor.action.clipboardPasteAction');
    }
  );

  // Toggle ON/OFF
  const toggleCommand = vscode.commands.registerCommand(
    'noPaste.toggle',
    async () => {

      isBlocking = !isBlocking;

      await context.globalState.update(
        'noPaste.isBlocking',
        isBlocking
      );

      updateStatusBar();

      if (isBlocking) {
        vscode.window.showInformationMessage(
          '🚫 No Paste enabled — paste is now blocked.'
        );
      } else {
        vscode.window.showInformationMessage(
          '✅ Paste allowed temporarily.'
        );
      }
    }
  );

  // Override right-click paste + command palette paste
  const overridePaste = vscode.commands.registerCommand(
    'editor.action.clipboardPasteAction',
    async () => {

      if (isBlocking) {
        vscode.window.showWarningMessage(getRandomMessage());
        return;
      }

      // Execute native VS Code paste
      await vscode.commands.executeCommand(
        'default:paste'
      );
    }
  );

  context.subscriptions.push(
    pasteInterceptor,
    toggleCommand,
    overridePaste,
    statusBarItem
  );

  // Welcome message
  const hasSeenWelcome = context.globalState.get(
    'noPaste.welcomed',
    false
  );

  if (!hasSeenWelcome) {
    vscode.window.showInformationMessage(
      '🎓 No Paste is active! Toggle anytime from the status bar.',
      'Got it!'
    );

    context.globalState.update(
      'noPaste.welcomed',
      true
    );
  }
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};