# Aistock

> Codex、Claude Code、Gemini CLI、OpenCode 和 MCP 的配置管理工具，一键切换 API 服务商配置和管理 MCP 服务器。

---

## ✨ 核心特性

- 🔄 **一键切换**：一条命令切换服务商，自动修改配置文件
- 📦 **内置预设**：提供常用预设（Claude: 1 个，Gemini: 2 个，Codex: 2 个，OpenCode: 1 个，MCP: 多个），只需填写 API Key
- 🛠️ **自定义配置**：支持添加任意第三方服务商
- 🔐 **零破坏性**：只修改管理的字段，写入前备份，失败回滚
- 🎯 **多工具支持**：同时管理 Codex、Claude Code、Gemini CLI、OpenCode 和 MCP 服务器
- 📱 **双界面**：提供 CLI（命令行）和 Desktop（图形界面）
- 🔁 **克隆功能**：快速复制配置，管理多个 API Key
- ☁️ **WebDAV 同步**（可选）：同步配置到你自己的 WebDAV 服务器（iCloud/Dropbox）
- 🔒 **无第三方上传**：不会上传到我们的服务器，配置权限 `0600`
- 🎨 **交互式菜单**：无需记忆命令，跟随提示操作

---

## 也许你不需要 Aistock

Aistock 的核心功能是自动化配置文件的切换：

- **Codex**：自动修改 `~/.codex/config.toml`
- **Claude Code**：自动修改 `~/.claude/settings.json`
- **Gemini CLI**：自动修改 `~/.gemini/settings.json` 和 `~/.gemini/.env`
- **OpenCode**：自动修改 `~/.config/opencode/opencode.json`
- **MCP**：管理 MCP 服务器配置，并同步到 Claude Code 和 Gemini CLI
- **备份机制**：写入前自动备份，失败时自动回滚

如果你更喜欢手动编辑配置文件，或者只使用一个服务商从不切换，可能不需要这个工具。

📖 更多信息：[GitHub 仓库](https://github.com/Yho0/ccman-openclaw-version) - 包含手动配置方式和详细对比分析

---

## 安装

```bash
npm install -g aistock
```

**要求**：Node.js >= 18.0.0

**Desktop 版本**：如果你更喜欢图形界面，可以从 [GitHub Releases](https://github.com/Yho0/ccman-openclaw-version/releases) 下载 Desktop 应用（macOS/Windows/Linux）。

---

## 快速开始

### 查看帮助

```bash
$ aistock --help

Usage: aistock [options] [command]

Codex/Claude Code/Gemini/OpenCode API 服务商配置管理工具

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  cx              管理 Codex 服务商
  cc              管理 Claude 服务商
  gm              管理 Gemini CLI 服务商
  oc              管理 OpenCode 服务商
  mcp             管理 MCP 服务器
  sync            WebDAV 同步配置
  export [dir]    导出配置
  import [dir]    导入配置
  help [command]  display help for command
```

### 管理 Codex 服务商

```bash
aistock cx           # 进入交互式菜单
aistock cx add       # 添加服务商
aistock cx use       # 切换服务商
aistock cx list      # 查看所有服务商
```

**示例输出**：

```bash
$ aistock cx list

📋 Codex 服务商 (2 个)

  ●  OpenAI Official [当前]
     https://api.openai.com/v1

  ○  GMN
     https://gmn.chuangzuoli.cn/openai
```

```bash
$ aistock cx current

📍 当前 Codex 服务商

  OpenAI Official
  ID: codex-1760178741529-hbgbad
  URL: https://api.openai.com/v1
  最后使用: 2025/10/11 18:32:25
```

### 管理 Claude Code 服务商

```bash
aistock cc           # 进入交互式菜单
aistock cc add       # 添加服务商
aistock cc use       # 切换服务商
aistock cc list      # 查看所有服务商
```

**示例输出**：

```bash
$ aistock cc list

📋 Claude Code 服务商 (1 个)

  ●  Anthropic Official [当前]
     https://api.anthropic.com
```

```bash
$ aistock cc current

📍 当前 Claude Code 服务商

  Anthropic Official
  ID: claude-1760182672751-unh2bp
  URL: https://api.anthropic.com
  最后使用: 2025/10/11 20:14:08
```

### 管理 Gemini CLI 服务商

```bash
aistock gm           # 进入交互式菜单
aistock gm add       # 添加服务商
aistock gm use       # 切换服务商
aistock gm list      # 查看所有服务商
```

### 管理 OpenCode 服务商

```bash
aistock oc           # 进入交互式菜单
aistock oc add       # 添加服务商
aistock oc use       # 切换服务商
aistock oc list      # 查看所有服务商
```

### 管理 MCP 服务器

```bash
aistock mcp add      # 添加 MCP 服务器
aistock mcp list     # 查看所有 MCP 服务器
aistock mcp edit     # 编辑 MCP 服务器
aistock mcp remove   # 删除 MCP 服务器
```

---

## 完整命令

| 命令 | 说明 |
|------|------|
| `aistock` | 主菜单（选择 Codex、Claude Code、Gemini CLI 或 OpenCode） |
| **Codex 管理** | |
| `aistock cx` | Codex 交互式菜单 |
| `aistock cx add` | 添加 Codex 服务商（支持预设模板和自定义） |
| `aistock cx list` | 列出所有 Codex 服务商 |
| `aistock cx use [name]` | 切换 Codex 服务商 |
| `aistock cx current` | 查看当前 Codex 服务商 |
| `aistock cx edit [name]` | 编辑 Codex 服务商 |
| `aistock cx remove [name]` | 删除 Codex 服务商 |
| `aistock cx clone [source]` | 克隆 Codex 服务商 |
| **Claude Code 管理** | |
| `aistock cc` | Claude Code 交互式菜单 |
| `aistock cc add` | 添加 Claude Code 服务商 |
| `aistock cc list` | 列出所有 Claude Code 服务商 |
| `aistock cc use [name]` | 切换 Claude Code 服务商 |
| `aistock cc current` | 查看当前 Claude Code 服务商 |
| `aistock cc edit [name]` | 编辑 Claude Code 服务商 |
| `aistock cc remove [name]` | 删除 Claude Code 服务商 |
| `aistock cc clone [source]` | 克隆 Claude Code 服务商 |
| **Gemini CLI 管理** | |
| `aistock gm` | Gemini CLI 交互式菜单 |
| `aistock gm add` | 添加 Gemini CLI 服务商 |
| `aistock gm list` | 列出所有 Gemini CLI 服务商 |
| `aistock gm use [name]` | 切换 Gemini CLI 服务商 |
| `aistock gm current` | 查看当前 Gemini CLI 服务商 |
| `aistock gm edit [name]` | 编辑 Gemini CLI 服务商 |
| `aistock gm remove [name]` | 删除 Gemini CLI 服务商 |
| `aistock gm clone [source]` | 克隆 Gemini CLI 服务商 |
| **OpenCode 管理** | |
| `aistock oc` | OpenCode 交互式菜单 |
| `aistock oc add` | 添加 OpenCode 服务商 |
| `aistock oc list` | 列出所有 OpenCode 服务商 |
| `aistock oc use [name]` | 切换 OpenCode 服务商 |
| `aistock oc current` | 查看当前 OpenCode 服务商 |
| `aistock oc edit [name]` | 编辑 OpenCode 服务商 |
| `aistock oc remove [name]` | 删除 OpenCode 服务商 |
| `aistock oc clone [source]` | 克隆 OpenCode 服务商 |
| **MCP 服务器管理** | |
| `aistock mcp add` | 添加 MCP 服务器 |
| `aistock mcp list` | 列出所有 MCP 服务器 |
| `aistock mcp edit [name]` | 编辑 MCP 服务器 |
| `aistock mcp remove [name]` | 删除 MCP 服务器 |
| **配置同步和导入导出** | |
| `aistock sync` | WebDAV 同步配置（备份/恢复/合并） |
| `aistock export [dir]` | 导出配置到本地目录 |
| `aistock import [dir]` | 从本地目录导入配置 |

---

## 内置预设

添加服务商时可以选择"使用预设模板"，只需填写 API Key：

### Claude Code 预设（2 个）

| 预设名称 | Base URL |
|---------|----------|
| Anthropic Official | `https://api.anthropic.com` |
| GMN | `https://gmn.chuangzuoli.cn/api` |

### Gemini CLI 预设（2 个）

| 预设名称 | Base URL |
|---------|----------|
| Google Gemini (API Key) | 官方默认 |
| GMN | `https://gmn.chuangzuoli.cn/gemini` |

### Codex 预设（3 个）

| 预设名称 | Base URL |
|---------|----------|
| OpenAI Official | `https://api.openai.com/v1` |
| GMN | `https://gmn.chuangzuoli.cn/openai` |
| GMN (COM) | `https://gmn.chuangzuoli.com` |

### OpenCode 预设（2 个）

| 预设名称 | Base URL |
|---------|----------|
| GMN | `https://gmn.chuangzuoli.cn/openai` |
| GMN (COM) | `https://gmn.chuangzuoli.com` |

### MCP 预设（多个）

MCP 服务器预设包括：filesystem、github、postgres、brave-search、fetch、memory 等多个常用 MCP 服务器模板。

也可以选择"自定义配置"，手动填写 Base URL。

---

## 完整使用示例

### 场景 1：添加并切换服务商

```bash
# 1. 查看当前列表
$ aistock cx list

📋 Codex 服务商 (1 个)

  ●  OpenAI Official [当前]
     https://api.openai.com/v1

# 2. 添加 GMN（交互式）
$ aistock cx add
? 选择配置方式 › 使用预设模板
? 选择预设 › GMN
? 服务商名称 › GMN
? API Key › ••••••••••••••••••••
✅ 添加成功！
💡 切换到此服务商: aistock cx use GMN

# 3. 切换到 GMN
$ aistock cx use GMN
✅ 已切换到: GMN

# 4. 确认当前服务商
$ aistock cx current

📍 当前 Codex 服务商

  GMN
  ID: codex-1760178741529-abc123
  URL: https://gmn.chuangzuoli.cn/openai
  最后使用: 2025/10/11 18:32:25
```

### 场景 2：克隆服务商（管理多个 Key）

```bash
# 1. 添加生产配置
$ aistock cc add
? 选择配置方式 › 自定义配置
? 服务商名称 › Claude Production
? Base URL › https://api.anthropic.com
? API Key › ••••••••••••••••••••
✅ 添加成功！

# 2. 克隆创建测试配置
$ aistock cc clone
? 选择要克隆的服务商 › Claude Production
? 新服务商名称 › Claude Test
? API Key › ••••••••••••••••••••
✅ 克隆成功！
💡 切换到此服务商: aistock cc use "Claude Test"

# 3. 查看列表
$ aistock cc list

📋 Claude Code 服务商 (2 个)

  ●  Claude Production [当前]
     https://api.anthropic.com

  ○  Claude Test
     https://api.anthropic.com

# 4. 快速切换
$ aistock cc use "Claude Test"
✅ 已切换到: Claude Test
```

---

## 配置文件

**Aistock 配置**：
- `~/.ccman/codex.json` - Codex 服务商配置
- `~/.ccman/claude.json` - Claude Code 服务商配置
- `~/.ccman/gemini.json` - Gemini CLI 服务商配置
- `~/.ccman/opencode.json` - OpenCode 服务商配置
- `~/.ccman/mcp.json` - MCP 服务器配置

**工具配置**（Aistock 会自动修改）：
- **Codex**: `~/.codex/config.toml`
- **Claude Code**: `~/.claude/settings.json`
- **Gemini CLI**: `~/.gemini/settings.json` 和 `~/.gemini/.env`
- **OpenCode**: `~/.config/opencode/opencode.json`

**零破坏性承诺**：
- 只修改管理的字段，保留其他所有配置
- 写入前备份，失败时自动回滚
- API Key 存储在本地，权限 `0600`

---

## 常见问题

**Q: 支持配置导入/导出吗？**
A: 当前版本不支持。如需备份，手动复制 `~/.ccman/` 目录。

**Q: WebDAV 同步是什么？**
A: 将 Aistock 配置同步到 WebDAV 服务器（如 iCloud/Dropbox），多设备共享配置。详见 `aistock sync --help`。

---

## 许可证

MIT

---

## 相关链接

- [GitHub 仓库](https://github.com/Yho0/ccman-openclaw-version)
- [问题反馈](https://github.com/Yho0/ccman-openclaw-version/issues)
- [更新日志](https://github.com/Yho0/ccman-openclaw-version/blob/main/CHANGELOG.md)
- [Desktop 版本](https://github.com/Yho0/ccman-openclaw-version/releases)（图形界面）
