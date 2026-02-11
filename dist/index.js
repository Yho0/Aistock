#!/usr/bin/env node
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../core/package.json
var package_default;
var init_package = __esm({
  "../core/package.json"() {
    package_default = {
      name: "@ccman/core",
      version: "3.3.4",
      type: "module",
      description: "Core business logic for ccman - Manage Codex, Claude Code, Gemini CLI, and MCP configurations",
      main: "./dist/index.js",
      types: "./dist/index.d.ts",
      files: [
        "dist",
        "templates"
      ],
      scripts: {
        build: "tsc",
        test: "vitest run",
        "test:watch": "vitest",
        clean: "rm -rf dist"
      },
      keywords: [
        "codex",
        "claude",
        "claude-code",
        "gemini",
        "gemini-cli",
        "mcp",
        "model-context-protocol",
        "ai",
        "api",
        "config",
        "manager"
      ],
      author: "2ue",
      license: "MIT",
      repository: {
        type: "git",
        url: "https://github.com/2ue/ccman.git",
        directory: "packages/core"
      },
      homepage: "https://github.com/2ue/ccman#readme",
      bugs: {
        url: "https://github.com/2ue/ccman/issues"
      },
      dependencies: {
        "@ccman/types": "workspace:*",
        "@iarna/toml": "^2.2.5",
        "proper-lockfile": "^4.1.2",
        webdav: "^5.8.0"
      },
      devDependencies: {
        vitest: "^1.0.0"
      },
      engines: {
        node: ">=18.0.0"
      }
    };
  }
});

// ../types/dist/index.js
var TOOL_TYPES, MAIN_TOOL_TYPES, TOOL_CONFIG;
var init_dist = __esm({
  "../types/dist/index.js"() {
    "use strict";
    TOOL_TYPES = {
      CODEX: "codex",
      CLAUDE: "claude",
      MCP: "mcp",
      GEMINI: "gemini",
      OPENCODE: "opencode",
      OPENCLAW: "openclaw"
    };
    MAIN_TOOL_TYPES = {
      CODEX: TOOL_TYPES.CODEX,
      CLAUDE: TOOL_TYPES.CLAUDE,
      GEMINI: TOOL_TYPES.GEMINI
    };
    TOOL_CONFIG = {
      [TOOL_TYPES.CODEX]: {
        displayName: "Codex",
        color: "blue",
        textColorClass: "text-blue-600",
        bgColorClass: "bg-blue-50",
        hoverBgColorClass: "hover:bg-blue-100",
        description: "Codex AI \u52A9\u624B"
      },
      [TOOL_TYPES.CLAUDE]: {
        displayName: "Claude Code",
        color: "purple",
        textColorClass: "text-purple-600",
        bgColorClass: "bg-purple-50",
        hoverBgColorClass: "hover:bg-purple-100",
        description: "Claude Code AI \u52A9\u624B"
      },
      [TOOL_TYPES.MCP]: {
        displayName: "MCP",
        color: "gray",
        textColorClass: "text-gray-600",
        bgColorClass: "bg-gray-50",
        hoverBgColorClass: "hover:bg-gray-100",
        description: "MCP \u670D\u52A1"
      },
      [TOOL_TYPES.GEMINI]: {
        displayName: "Gemini CLI",
        color: "green",
        textColorClass: "text-green-600",
        bgColorClass: "bg-green-50",
        hoverBgColorClass: "hover:bg-green-100",
        description: "Gemini CLI AI \u52A9\u624B"
      },
      [TOOL_TYPES.OPENCODE]: {
        displayName: "OpenCode",
        color: "amber",
        textColorClass: "text-amber-600",
        bgColorClass: "bg-amber-50",
        hoverBgColorClass: "hover:bg-amber-100",
        description: "OpenCode \u914D\u7F6E"
      },
      [TOOL_TYPES.OPENCLAW]: {
        displayName: "OpenClaw",
        color: "cyan",
        textColorClass: "text-cyan-600",
        bgColorClass: "bg-cyan-50",
        hoverBgColorClass: "hover:bg-cyan-100",
        description: "OpenClaw \u914D\u7F6E"
      }
    };
  }
});

// ../core/dist/constants.js
var init_constants = __esm({
  "../core/dist/constants.js"() {
    "use strict";
    init_dist();
    init_dist();
  }
});

// ../core/dist/paths.js
import * as os from "os";
import * as path from "path";
function getCcmanDir() {
  return ccmanDir;
}
function getCodexDir() {
  return codexDir;
}
function getClaudeDir() {
  return claudeDir;
}
function getGeminiDir() {
  return geminiDir;
}
function getOpenCodeDir() {
  return opencodeDir;
}
function getOpenClawDir() {
  return openClawDir;
}
function getConfigPath() {
  return path.join(ccmanDir, "config.json");
}
function getCodexConfigPath() {
  return path.join(codexDir, "config.toml");
}
function getCodexAuthPath() {
  return path.join(codexDir, "auth.json");
}
function getClaudeConfigPath() {
  return path.join(claudeDir, "settings.json");
}
function getClaudeJsonPath() {
  return path.join(rootDir, ".claude.json");
}
function getGeminiSettingsPath() {
  return path.join(geminiDir, "settings.json");
}
function getGeminiEnvPath() {
  return path.join(geminiDir, ".env");
}
function getOpenCodeConfigPath() {
  return path.join(opencodeDir, "opencode.json");
}
function getOpenClawConfigPath() {
  return path.join(openClawDir, "openclaw.json");
}
var isDev, isTest, rootDir, ccmanDir, codexDir, claudeDir, geminiDir, opencodeDir, openClawDir;
var init_paths = __esm({
  "../core/dist/paths.js"() {
    "use strict";
    isDev = process.env.NODE_ENV === "development";
    isTest = process.env.NODE_ENV === "test";
    if (isTest) {
      rootDir = path.join("/tmp", "ccman-test");
    } else if (isDev) {
      rootDir = path.join(os.tmpdir(), "ccman-dev");
    } else {
      rootDir = os.homedir();
    }
    ccmanDir = path.join(rootDir, ".ccman");
    codexDir = path.join(rootDir, ".codex");
    claudeDir = path.join(rootDir, ".claude");
    geminiDir = path.join(rootDir, ".gemini");
    opencodeDir = path.join(rootDir, ".config", "opencode");
    openClawDir = path.join(rootDir, ".openclaw");
  }
});

// ../core/dist/utils/file.js
import * as fs from "fs";
import * as path2 from "path";
function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}
function readJSON(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content);
}
function writeJSON(filePath, data) {
  const dir = path2.dirname(filePath);
  ensureDir(dir);
  const tmpPath = `${filePath}.tmp`;
  fs.writeFileSync(tmpPath, JSON.stringify(data, null, 2), { mode: 384 });
  fs.renameSync(tmpPath, filePath);
}
function fileExists(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}
var init_file = __esm({
  "../core/dist/utils/file.js"() {
    "use strict";
  }
});

// ../core/dist/utils/template.js
function replaceVariables(template, variables) {
  const jsonStr = JSON.stringify(template);
  let result = jsonStr;
  for (const [key, value] of Object.entries(variables)) {
    const escapedValue = value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    result = result.replace(new RegExp(`{{${key}}}`, "g"), escapedValue);
  }
  return JSON.parse(result);
}
function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    const sourceValue = source[key];
    const targetValue = result[key];
    if (sourceValue && typeof sourceValue === "object" && !Array.isArray(sourceValue) && targetValue && typeof targetValue === "object" && !Array.isArray(targetValue)) {
      result[key] = deepMerge(targetValue, sourceValue);
    } else {
      result[key] = sourceValue;
    }
  }
  return result;
}
var init_template = __esm({
  "../core/dist/utils/template.js"() {
    "use strict";
  }
});

// ../core/dist/writers/codex.js
import * as fs2 from "fs";
import * as path3 from "path";
import { fileURLToPath } from "url";
import { parse as parseToml, stringify as stringifyToml } from "@iarna/toml";
function loadCodexTemplateConfig() {
  try {
    const templatePath = path3.resolve(__dirname, "../../templates/codex/config.toml");
    if (fs2.existsSync(templatePath)) {
      const content = fs2.readFileSync(templatePath, "utf-8");
      return parseToml(content);
    }
  } catch {
  }
  return CODEX_DEFAULT_CONFIG;
}
function writeCodexConfig(provider) {
  ensureDir(getCodexDir());
  const configPath = getCodexConfigPath();
  let userConfig = {};
  if (fileExists(configPath)) {
    const content = fs2.readFileSync(configPath, "utf-8");
    userConfig = parseToml(content);
  }
  const templateConfig = loadCodexTemplateConfig();
  const mergedConfig = deepMerge(templateConfig, userConfig);
  mergedConfig.model_provider = provider.name;
  mergedConfig.model = provider.model || mergedConfig.model || "gpt-5-codex";
  mergedConfig.model_providers = mergedConfig.model_providers || {};
  mergedConfig.model_providers[provider.name] = {
    name: provider.name,
    base_url: provider.baseUrl,
    wire_api: "responses",
    requires_openai_auth: true
  };
  fs2.writeFileSync(configPath, stringifyToml(mergedConfig), { mode: 384 });
  const authPath = getCodexAuthPath();
  let auth;
  if (fileExists(authPath)) {
    const content = fs2.readFileSync(authPath, "utf-8");
    auth = JSON.parse(content);
  } else {
    auth = { OPENAI_API_KEY: "" };
  }
  auth.OPENAI_API_KEY = provider.apiKey;
  fs2.writeFileSync(authPath, JSON.stringify(auth, null, 2), { mode: 384 });
}
var __filename, __dirname, CODEX_DEFAULT_CONFIG;
var init_codex = __esm({
  "../core/dist/writers/codex.js"() {
    "use strict";
    init_paths();
    init_file();
    init_template();
    __filename = fileURLToPath(import.meta.url);
    __dirname = path3.dirname(__filename);
    CODEX_DEFAULT_CONFIG = {
      model: "gpt-5.1",
      model_reasoning_effort: "high",
      disable_response_storage: true,
      sandbox_mode: "workspace-write",
      windows_wsl_setup_acknowledged: true,
      approval_policy: "never",
      profile: "auto-max",
      file_opener: "vscode",
      history: {
        persistence: "save-all"
      },
      tui: {
        notifications: true
      },
      shell_environment_policy: {
        inherit: "all",
        ignore_default_excludes: false
      },
      features: {
        plan_tool: true,
        apply_patch_freeform: true,
        view_image_tool: true,
        web_search_request: true,
        unified_exec: false,
        streamable_shell: false,
        rmcp_client: true
      },
      sandbox_workspace_write: {
        network_access: true
      },
      profiles: {
        "auto-max": {
          approval_policy: "never",
          sandbox_mode: "workspace-write"
        },
        "review": {
          approval_policy: "on-request",
          sandbox_mode: "workspace-write"
        }
      },
      notice: {
        hide_gpt5_1_migration_prompt: true
      }
    };
  }
});

// ../core/dist/writers/claude.js
import * as fs3 from "fs";
import * as path4 from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
function loadClaudeTemplateConfig() {
  try {
    const templatePath = path4.resolve(__dirname2, "../../templates/claude/settings.json");
    if (fs3.existsSync(templatePath)) {
      const content = fs3.readFileSync(templatePath, "utf-8");
      return JSON.parse(content);
    }
  } catch {
  }
  return CLAUDE_CONFIG_TEMPLATE;
}
function writeClaudeConfig(provider) {
  ensureDir(getClaudeDir());
  const configPath = getClaudeConfigPath();
  let userConfig = {};
  if (fileExists(configPath)) {
    const content = fs3.readFileSync(configPath, "utf-8");
    userConfig = JSON.parse(content);
  }
  const defaultTemplate = loadClaudeTemplateConfig();
  const defaultConfig = replaceVariables(defaultTemplate, {
    apiKey: provider.apiKey,
    baseUrl: provider.baseUrl
  });
  const mergedConfig = deepMerge(defaultConfig, userConfig);
  mergedConfig.env = mergedConfig.env || {};
  mergedConfig.env.ANTHROPIC_AUTH_TOKEN = provider.apiKey;
  mergedConfig.env.ANTHROPIC_BASE_URL = provider.baseUrl;
  fs3.writeFileSync(configPath, JSON.stringify(mergedConfig, null, 2), { mode: 384 });
}
var __filename2, __dirname2, CLAUDE_CONFIG_TEMPLATE;
var init_claude = __esm({
  "../core/dist/writers/claude.js"() {
    "use strict";
    init_paths();
    init_file();
    init_template();
    __filename2 = fileURLToPath2(import.meta.url);
    __dirname2 = path4.dirname(__filename2);
    CLAUDE_CONFIG_TEMPLATE = {
      env: {
        ANTHROPIC_AUTH_TOKEN: "{{apiKey}}",
        ANTHROPIC_BASE_URL: "{{baseUrl}}",
        CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: 1,
        CLAUDE_CODE_MAX_OUTPUT_TOKENS: 32e3
      },
      permissions: {
        allow: [],
        deny: []
      }
    };
  }
});

// ../core/dist/writers/mcp.js
import * as fs4 from "fs";
import * as path5 from "path";
function getMCPConfigPath() {
  return path5.join(getCcmanDir(), "mcp.json");
}
function migrateMCPConfig(config) {
  if (Array.isArray(config.managedServerNames)) {
    config.managedServerNames = {
      claude: config.managedServerNames,
      codex: [],
      gemini: []
    };
  } else if (!config.managedServerNames) {
    config.managedServerNames = {
      claude: [],
      codex: [],
      gemini: []
    };
  }
  if (config.servers) {
    for (const server of config.servers) {
      if (!server.enabledApps) {
        server.enabledApps = ["claude"];
      }
    }
  } else {
    config.servers = [];
  }
  return config;
}
function loadMCPConfig() {
  const configPath = getMCPConfigPath();
  if (!fileExists(configPath)) {
    return {
      servers: [],
      managedServerNames: {
        claude: [],
        codex: [],
        gemini: []
      }
    };
  }
  const config = readJSON(configPath);
  return migrateMCPConfig(config);
}
function saveMCPConfig(config) {
  const configPath = getMCPConfigPath();
  writeJSON(configPath, config);
}
function providerToMCPServer(provider) {
  let env;
  let description;
  if (provider.model) {
    try {
      const modelData = JSON.parse(provider.model);
      env = modelData.env;
      description = modelData.description;
    } catch (error) {
      env = JSON.parse(provider.model);
    }
  }
  return {
    id: provider.id,
    name: provider.name,
    command: provider.baseUrl,
    args: provider.apiKey.split(" ").filter((arg) => arg.length > 0),
    env,
    description,
    createdAt: provider.createdAt,
    lastModified: provider.lastModified,
    enabledApps: ["claude"]
    // 新创建的 MCP 默认启用 Claude
  };
}
function mcpServerToProvider(server) {
  let model;
  if (server.env || server.description) {
    model = JSON.stringify({
      env: server.env,
      description: server.description
    });
  }
  return {
    id: server.id,
    name: server.name,
    baseUrl: server.command,
    apiKey: server.args.join(" "),
    model,
    createdAt: server.createdAt,
    lastModified: server.lastModified
  };
}
function writeMCPConfigForApp(app, _provider) {
  const mcpConfig = loadMCPConfig();
  const enabledServers = mcpConfig.servers.filter((server) => server.enabledApps.includes(app));
  let configPath;
  let configDir;
  switch (app) {
    case "claude":
      configPath = getClaudeConfigPath();
      configDir = getClaudeDir();
      break;
    case "codex":
      return;
    case "gemini":
      configPath = getGeminiSettingsPath();
      configDir = getGeminiDir();
      break;
  }
  ensureDir(configDir);
  let appConfig = {};
  if (fileExists(configPath)) {
    try {
      const content = fs4.readFileSync(configPath, "utf-8");
      appConfig = JSON.parse(content);
    } catch (error) {
      throw new Error(`\u65E0\u6CD5\u8BFB\u53D6 ${app} \u914D\u7F6E\u6587\u4EF6: ${error.message}`);
    }
  }
  const existingMCPs = appConfig.mcpServers || {};
  const userMCPs = {};
  const managedNames = mcpConfig.managedServerNames[app] || [];
  for (const [name, config] of Object.entries(existingMCPs)) {
    if (!managedNames.includes(name)) {
      userMCPs[name] = config;
    }
  }
  const ccmanMCPs = {};
  for (const server of enabledServers) {
    ccmanMCPs[server.name] = {
      command: server.command,
      args: server.args,
      env: server.env
    };
  }
  appConfig.mcpServers = {
    ...ccmanMCPs,
    // ccman 管理的
    ...userMCPs
    // 用户手动配置的（优先级更高）
  };
  const tempPath = `${configPath}.tmp`;
  fs4.writeFileSync(tempPath, JSON.stringify(appConfig, null, 2), {
    mode: 384
  });
  fs4.renameSync(tempPath, configPath);
}
function writeMCPConfig(_provider) {
  writeMCPConfigForApp("claude", _provider);
}
var init_mcp = __esm({
  "../core/dist/writers/mcp.js"() {
    "use strict";
    init_paths();
    init_file();
  }
});

// ../core/dist/presets/codex.js
var CODEX_PRESETS;
var init_codex2 = __esm({
  "../core/dist/presets/codex.js"() {
    "use strict";
    CODEX_PRESETS = [
      {
        name: "OpenAI Official",
        baseUrl: "https://api.openai.com/v1",
        description: "OpenAI \u5B98\u65B9 API"
      },
      {
        name: "GMN",
        baseUrl: "https://gmn.chuangzuoli.cn/openai",
        description: "GMN \u670D\u52A1 (OpenAI/Codex \u517C\u5BB9)"
      },
      {
        name: "GMN (COM)",
        baseUrl: "https://gmn.chuangzuoli.com",
        description: "GMN \u670D\u52A1 (OpenAI/Codex \u517C\u5BB9)"
      }
    ];
  }
});

// ../core/dist/presets/claude.js
var CC_PRESETS;
var init_claude2 = __esm({
  "../core/dist/presets/claude.js"() {
    "use strict";
    CC_PRESETS = [
      {
        name: "Anthropic Official",
        baseUrl: "https://api.anthropic.com",
        description: "Anthropic \u5B98\u65B9 API"
      },
      {
        name: "GMN",
        baseUrl: "https://gmn.chuangzuoli.cn/api",
        description: "GMN \u670D\u52A1 (Claude \u517C\u5BB9)"
      }
    ];
  }
});

// ../core/dist/presets/mcp.js
var MCP_PRESETS_DETAIL, MCP_PRESETS;
var init_mcp2 = __esm({
  "../core/dist/presets/mcp.js"() {
    "use strict";
    MCP_PRESETS_DETAIL = [
      {
        name: "filesystem",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"],
        description: "\u6587\u4EF6\u7CFB\u7EDF\u8BBF\u95EE",
        argsPlaceholder: "\u9700\u8981\u4FEE\u6539\u7B2C3\u4E2A\u53C2\u6570\u4E3A\u5141\u8BB8\u8BBF\u95EE\u7684\u76EE\u5F55\u8DEF\u5F84"
      },
      {
        name: "github",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-github"],
        description: "GitHub \u96C6\u6210",
        envRequired: ["GITHUB_PERSONAL_ACCESS_TOKEN"]
      },
      {
        name: "postgres",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"],
        description: "PostgreSQL \u6570\u636E\u5E93",
        argsPlaceholder: "\u9700\u8981\u4FEE\u6539\u7B2C3\u4E2A\u53C2\u6570\u4E3A\u6570\u636E\u5E93\u8FDE\u63A5\u5B57\u7B26\u4E32"
      },
      {
        name: "brave-search",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-brave-search"],
        description: "Brave \u641C\u7D22",
        envRequired: ["BRAVE_API_KEY"]
      },
      {
        name: "google-maps",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-google-maps"],
        description: "Google Maps",
        envRequired: ["GOOGLE_MAPS_API_KEY"]
      },
      {
        name: "puppeteer",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-puppeteer"],
        description: "\u6D4F\u89C8\u5668\u81EA\u52A8\u5316"
      },
      {
        name: "sqlite",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-sqlite", "/path/to/database.db"],
        description: "SQLite \u6570\u636E\u5E93",
        argsPlaceholder: "\u9700\u8981\u4FEE\u6539\u7B2C3\u4E2A\u53C2\u6570\u4E3A\u6570\u636E\u5E93\u6587\u4EF6\u8DEF\u5F84"
      },
      {
        name: "sequential-thinking",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-sequential-thinking"],
        description: "\u5E8F\u5217\u601D\u8003\u589E\u5F3A"
      }
    ];
    MCP_PRESETS = MCP_PRESETS_DETAIL.map((preset) => ({
      name: preset.name,
      baseUrl: preset.command,
      // 字段映射：command → baseUrl
      description: preset.description
    }));
  }
});

// ../core/dist/presets/gemini.js
var GEMINI_PRESETS;
var init_gemini = __esm({
  "../core/dist/presets/gemini.js"() {
    "use strict";
    GEMINI_PRESETS = [
      {
        name: "Google Gemini (API Key)",
        baseUrl: "",
        description: "\u4F7F\u7528\u5B98\u65B9 Gemini API\uFF08\u901A\u8FC7 GEMINI_API_KEY \u6216 GOOGLE_API_KEY \u8BA4\u8BC1\uFF09"
      },
      {
        name: "GMN",
        baseUrl: "https://gmn.chuangzuoli.cn/gemini",
        description: "GMN \u670D\u52A1 (Gemini \u517C\u5BB9)"
      }
    ];
  }
});

// ../core/dist/presets/opencode.js
var OPENCODE_PRESETS;
var init_opencode = __esm({
  "../core/dist/presets/opencode.js"() {
    "use strict";
    OPENCODE_PRESETS = [
      {
        name: "GMN",
        baseUrl: "https://gmn.chuangzuoli.cn/openai",
        description: "GMN \u670D\u52A1 (OpenCode \u517C\u5BB9)"
      },
      {
        name: "GMN (COM)",
        baseUrl: "https://gmn.chuangzuoli.com",
        description: "GMN \u670D\u52A1 (OpenCode \u517C\u5BB9)"
      }
    ];
  }
});

// ../core/dist/presets/openclaw.js
var OPENCLAW_PRESETS;
var init_openclaw = __esm({
  "../core/dist/presets/openclaw.js"() {
    "use strict";
    OPENCLAW_PRESETS = [
      {
        name: "GMN",
        baseUrl: "https://gmn.chuangzuoli.cn/openai",
        description: "GMN \u670D\u52A1 (OpenClaw \u517C\u5BB9)"
      },
      {
        name: "GMN (COM)",
        baseUrl: "https://gmn.chuangzuoli.com",
        description: "GMN \u670D\u52A1 (OpenClaw \u517C\u5BB9)"
      }
    ];
  }
});

// ../core/dist/writers/gemini.js
import * as fs5 from "fs";
function loadEnvFile(envPath) {
  if (!fileExists(envPath))
    return {};
  const content = fs5.readFileSync(envPath, "utf-8");
  const result = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#"))
      continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1)
      continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    if (!key)
      continue;
    result[key] = value;
  }
  return result;
}
function saveEnvFile(envPath, env) {
  const lines = [];
  const keys = Object.keys(env).sort();
  for (const key of keys) {
    lines.push(`${key}=${String(env[key])}`);
  }
  const content = lines.join("\n") + (lines.length ? "\n" : "");
  fs5.writeFileSync(envPath, content, { mode: 384 });
}
function writeGeminiConfig(provider) {
  const settingsPath = getGeminiSettingsPath();
  const envPath = getGeminiEnvPath();
  const dir = getGeminiDir();
  ensureDir(dir);
  let settings = {};
  if (fileExists(settingsPath)) {
    try {
      const content = fs5.readFileSync(settingsPath, "utf-8");
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === "object") {
        settings = parsed;
      }
    } catch (error) {
      throw new Error(`\u65E0\u6CD5\u8BFB\u53D6 Gemini settings.json: ${error.message}`);
    }
  }
  if (!settings.ide || typeof settings.ide !== "object") {
    settings.ide = {};
  }
  if (settings.ide.enabled === void 0) {
    settings.ide.enabled = true;
  }
  if (!settings.security || typeof settings.security !== "object") {
    settings.security = {};
  }
  if (!settings.security.auth || typeof settings.security.auth !== "object") {
    settings.security.auth = {};
  }
  if (settings.security.auth.selectedType === void 0) {
    settings.security.auth.selectedType = "gemini-api-key";
  }
  try {
    const tempPath = `${settingsPath}.tmp`;
    fs5.writeFileSync(tempPath, JSON.stringify(settings, null, 2), {
      mode: 384
    });
    fs5.renameSync(tempPath, settingsPath);
  } catch (error) {
    throw new Error(`\u5199\u5165 Gemini settings.json \u5931\u8D25: ${error.message}`);
  }
  const env = loadEnvFile(envPath);
  if (provider.baseUrl && provider.baseUrl.trim().length > 0) {
    env.GOOGLE_GEMINI_BASE_URL = provider.baseUrl;
  } else {
    delete env.GOOGLE_GEMINI_BASE_URL;
  }
  if (provider.apiKey && provider.apiKey.trim().length > 0) {
    env.GEMINI_API_KEY = provider.apiKey;
  } else {
    delete env.GEMINI_API_KEY;
  }
  let modelMeta = null;
  if (provider.model && provider.model.trim().length > 0) {
    try {
      const parsed = JSON.parse(provider.model);
      if (parsed && typeof parsed === "object") {
        modelMeta = parsed;
      }
    } catch {
      env.GEMINI_MODEL = provider.model;
    }
  }
  if (modelMeta) {
    if (modelMeta.env && typeof modelMeta.env === "object") {
      for (const [key, value] of Object.entries(modelMeta.env)) {
        if (typeof value === "string") {
          env[key] = value;
        }
      }
    }
    if (!env.GEMINI_MODEL && modelMeta.defaultModel) {
      env.GEMINI_MODEL = modelMeta.defaultModel;
    }
  }
  saveEnvFile(envPath, env);
}
var init_gemini2 = __esm({
  "../core/dist/writers/gemini.js"() {
    "use strict";
    init_paths();
    init_file();
  }
});

// ../core/dist/writers/opencode.js
function parseProviderMeta(raw) {
  if (!raw || !raw.trim())
    return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
  } catch {
    return { npm: raw };
  }
  return null;
}
function toProviderKey(name) {
  const normalized = name.trim().toLowerCase();
  const collapsed = normalized.replace(/\s+/g, "-");
  const cleaned = collapsed.replace(/[^a-z0-9-_]/g, "");
  return cleaned || "provider";
}
function writeOpenCodeConfig(provider) {
  ensureDir(getOpenCodeDir());
  const configPath = getOpenCodeConfigPath();
  const existingConfig = fileExists(configPath) ? readJSON(configPath) : {};
  const meta = parseProviderMeta(provider.model);
  const npmPackage = meta?.npm || DEFAULT_NPM_PACKAGE;
  const providerKey = toProviderKey(provider.name);
  const existingProvider = existingConfig.provider?.[providerKey];
  const models = meta?.models || existingProvider?.models || DEFAULT_MODELS;
  const providerConfig = {
    ...existingProvider,
    npm: npmPackage,
    name: provider.name,
    options: {
      ...existingProvider?.options || {},
      baseURL: provider.baseUrl,
      apiKey: provider.apiKey
    },
    models
  };
  const existingProviders = existingConfig.provider && typeof existingConfig.provider === "object" ? { ...existingConfig.provider } : {};
  const nextConfig = {
    ...existingConfig,
    $schema: OPENCODE_SCHEMA,
    provider: {
      ...existingProviders,
      [providerKey]: providerConfig
    }
  };
  writeJSON(configPath, nextConfig);
}
var OPENCODE_SCHEMA, DEFAULT_NPM_PACKAGE, DEFAULT_MODELS;
var init_opencode2 = __esm({
  "../core/dist/writers/opencode.js"() {
    "use strict";
    init_paths();
    init_file();
    OPENCODE_SCHEMA = "https://opencode.ai/config.json";
    DEFAULT_NPM_PACKAGE = "@ai-sdk/openai";
    DEFAULT_MODELS = {
      "gpt-5.2-codex": {
        variants: {
          xhigh: {
            reasoningEffort: "xhigh",
            textVerbosity: "low",
            reasoningSummary: "auto"
          },
          high: {
            reasoningEffort: "high",
            textVerbosity: "low",
            reasoningSummary: "auto"
          },
          medium: {
            reasoningEffort: "medium",
            textVerbosity: "low",
            reasoningSummary: "auto"
          },
          low: {
            reasoningEffort: "low",
            textVerbosity: "low",
            reasoningSummary: "auto"
          }
        }
      }
    };
  }
});

// ../core/dist/writers/openclaw.js
function normalizeOpenClawProviderId(name) {
  const raw = typeof name === "string" ? name.trim().toLowerCase() : "";
  if (!raw) {
    return "openai-proxy";
  }
  const normalized = raw.replace(/[^a-z0-9_-]+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
  return normalized || "openai-proxy";
}
function resolveOpenClawModelSpec(model, providerName) {
  const providerId = normalizeOpenClawProviderId(providerName);
  const rawModel = typeof model === "string" ? model.trim() : "";
  let modelId = rawModel;
  if (rawModel.includes("/")) {
    const pieces = rawModel.split("/").filter(Boolean);
    modelId = pieces.length > 0 ? pieces[pieces.length - 1] : "";
  }
  if (!modelId) {
    modelId = "gpt-4o";
  }
  return {
    providerId,
    modelId,
    modelRef: `${providerId}/${modelId}`
  };
}
function normalizeOpenClawBaseUrl(baseUrl) {
  const raw = typeof baseUrl === "string" ? baseUrl.trim() : "";
  if (!raw) {
    return raw;
  }
  const normalized = raw.replace(/\/+$/, "");
  try {
    const parsed = new URL(normalized);
    const pathname = parsed.pathname.replace(/\/+$/, "");
    if (!pathname || pathname === "/") {
      parsed.pathname = "/v1";
      return parsed.toString().replace(/\/$/, "");
    }
    if (pathname.toLowerCase().endsWith("/openai")) {
      parsed.pathname = `${pathname}/v1`;
      return parsed.toString().replace(/\/$/, "");
    }
    parsed.pathname = pathname;
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return normalized;
  }
}
function prefersOpenClawResponsesApi(modelId) {
  const raw = typeof modelId === "string" ? modelId.trim().toLowerCase() : "";
  if (!raw) {
    return false;
  }
  return raw.includes("codex") || raw.startsWith("gpt-5") || raw.startsWith("o1") || raw.startsWith("o3") || raw.startsWith("o4");
}
function resolveOpenClawApiMode(existingApi, modelId) {
  const current = typeof existingApi === "string" ? existingApi.trim() : "";
  if (current === "openai-responses" || current === "anthropic-messages") {
    return current;
  }
  if (current === "openai-completions") {
    return prefersOpenClawResponsesApi(modelId) ? "openai-responses" : "openai-completions";
  }
  return prefersOpenClawResponsesApi(modelId) ? "openai-responses" : "openai-completions";
}
function resolveOpenClawProviderHeaders(existingHeaders, modelId) {
  const baseHeaders = existingHeaders && typeof existingHeaders === "object" && !Array.isArray(existingHeaders) ? {
    ...existingHeaders
  } : {};
  if (!prefersOpenClawResponsesApi(modelId)) {
    return baseHeaders;
  }
  const compatDefaults = {
    "User-Agent": "codex_cli_rs/0.98.0",
    "x-stainless-lang": "rust",
    "x-stainless-runtime": "rust",
    "x-stainless-runtime-version": "0.98.0",
    "x-stainless-package-version": "0.98.0"
  };
  for (const [key, value] of Object.entries(compatDefaults)) {
    const current = typeof baseHeaders[key] === "string" ? baseHeaders[key].trim() : "";
    if (!current) {
      baseHeaders[key] = value;
    }
  }
  return baseHeaders;
}
function mergeOpenClawProviderModels(existingModels, modelId) {
  const normalizedModelId = typeof modelId === "string" ? modelId.trim() : "";
  const merged = [];
  const seen = /* @__PURE__ */ new Set();
  const pushModel = (entry) => {
    if (!entry || typeof entry !== "object") {
      return;
    }
    const id = typeof entry.id === "string" ? entry.id.trim() : "";
    if (!id || seen.has(id)) {
      return;
    }
    seen.add(id);
    const name = typeof entry.name === "string" && entry.name.trim() ? entry.name.trim() : id;
    merged.push({
      ...entry,
      id,
      name
    });
  };
  if (normalizedModelId) {
    pushModel({ id: normalizedModelId, name: normalizedModelId });
  }
  if (Array.isArray(existingModels)) {
    for (const item of existingModels) {
      pushModel(item);
    }
  }
  return merged;
}
function writeOpenClawConfig(provider) {
  ensureDir(getOpenClawDir());
  const configPath = getOpenClawConfigPath();
  let existingConfig = {};
  if (fileExists(configPath)) {
    existingConfig = readJSON(configPath);
  }
  const existingEnv = existingConfig.env && typeof existingConfig.env === "object" ? existingConfig.env : {};
  const existingDefaults = existingConfig.agents?.defaults || {};
  const existingModel = existingDefaults.model && typeof existingDefaults.model === "object" ? existingDefaults.model : {};
  const {
    provider: _legacyProvider,
    apiKey: _legacyApiKey,
    baseURL: _legacyBaseURL,
    name: _legacyName,
    ...sanitizedModel
  } = existingModel;
  const resolvedModel = resolveOpenClawModelSpec(provider.model || sanitizedModel.primary, provider.name);
  const existingDefaultModels = existingDefaults.models && typeof existingDefaults.models === "object" ? existingDefaults.models : {};
  const existingModelsConfig = existingConfig.models && typeof existingConfig.models === "object" ? existingConfig.models : {};
  const existingProvidersConfig = existingModelsConfig.providers && typeof existingModelsConfig.providers === "object" ? existingModelsConfig.providers : {};
  const currentProviderConfig = existingProvidersConfig[resolvedModel.providerId] && typeof existingProvidersConfig[resolvedModel.providerId] === "object" ? existingProvidersConfig[resolvedModel.providerId] : {};
  const selectedModelConfig = existingDefaultModels[resolvedModel.modelRef] && typeof existingDefaultModels[resolvedModel.modelRef] === "object" ? existingDefaultModels[resolvedModel.modelRef] : {};
  const normalizedBaseUrl = normalizeOpenClawBaseUrl(provider.baseUrl);
  const resolvedApiMode = resolveOpenClawApiMode(currentProviderConfig.api, resolvedModel.modelId);
  const nextConfig = {
    ...existingConfig,
    env: {
      ...existingEnv,
      OPENAI_API_KEY: provider.apiKey,
      OPENAI_BASE_URL: normalizedBaseUrl
    },
    agents: {
      ...(existingConfig.agents || {}),
      defaults: {
        ...existingDefaults,
        model: {
          ...sanitizedModel,
          primary: resolvedModel.modelRef
        },
        models: {
          ...existingDefaultModels,
          [resolvedModel.modelRef]: selectedModelConfig
        }
      }
    },
    models: {
      ...existingModelsConfig,
      mode: existingModelsConfig.mode || "merge",
      providers: {
        ...existingProvidersConfig,
        [resolvedModel.providerId]: {
          ...currentProviderConfig,
          baseUrl: normalizedBaseUrl,
          apiKey: provider.apiKey,
          api: resolvedApiMode,
          headers: resolveOpenClawProviderHeaders(currentProviderConfig.headers, resolvedModel.modelId),
          models: mergeOpenClawProviderModels(currentProviderConfig.models, resolvedModel.modelId)
        }
      }
    }
  };
  writeJSON(configPath, nextConfig);
}
var init_openclaw2 = __esm({
  "../core/dist/writers/openclaw.js"() {
    "use strict";
    init_paths();
    init_file();
  }
});

// ../core/dist/tool-manager.types.js
var ProviderNotFoundError, ProviderNameConflictError, PresetNameConflictError;
var init_tool_manager_types = __esm({
  "../core/dist/tool-manager.types.js"() {
    "use strict";
    ProviderNotFoundError = class extends Error {
      constructor(id) {
        super(`\u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${id}`);
        this.name = "ProviderNotFoundError";
      }
    };
    ProviderNameConflictError = class extends Error {
      constructor(name) {
        super(`\u670D\u52A1\u5546\u540D\u79F0\u5DF2\u5B58\u5728: ${name}`);
        this.name = "ProviderNameConflictError";
      }
    };
    PresetNameConflictError = class extends Error {
      constructor(name) {
        super(`\u9884\u7F6E\u540D\u79F0\u5DF2\u5B58\u5728: ${name}`);
        this.name = "PresetNameConflictError";
      }
    };
  }
});

// ../core/dist/tool-manager.js
import * as path6 from "path";
function createToolManager(tool) {
  const toolConfig = TOOL_CONFIGS[tool];
  const configPath = toolConfig.configPath;
  function generateId() {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 8);
    return `${tool}-${timestamp}-${random}`;
  }
  function loadConfig2() {
    if (toolConfig.customLoader) {
      return toolConfig.customLoader();
    }
    if (!fileExists(configPath)) {
      ensureDir(getCcmanDir());
      const initialConfig = {
        providers: [],
        presets: []
      };
      writeJSON(configPath, initialConfig);
      return initialConfig;
    }
    return readJSON(configPath);
  }
  function saveConfig2(config) {
    if (toolConfig.customSaver) {
      toolConfig.customSaver(config);
      return;
    }
    writeJSON(configPath, config);
  }
  return {
    add(input) {
      const config = loadConfig2();
      const nameExists = config.providers.some((p) => p.name === input.name);
      if (nameExists) {
        throw new ProviderNameConflictError(input.name);
      }
      const timestamp = Date.now();
      const provider = {
        id: generateId(),
        name: input.name,
        desc: input.desc,
        baseUrl: input.baseUrl,
        apiKey: input.apiKey,
        model: input.model,
        createdAt: timestamp,
        lastModified: timestamp
      };
      config.providers.push(provider);
      saveConfig2(config);
      if (toolConfig.autoSync) {
        toolConfig.writer(provider);
      }
      return provider;
    },
    list() {
      const config = loadConfig2();
      return config.providers;
    },
    get(id) {
      const config = loadConfig2();
      const provider = config.providers.find((p) => p.id === id);
      if (!provider) {
        throw new ProviderNotFoundError(id);
      }
      return provider;
    },
    findByName(name) {
      const config = loadConfig2();
      const lowerName = name.toLowerCase();
      return config.providers.find((p) => p.name.toLowerCase() === lowerName);
    },
    switch(id) {
      const config = loadConfig2();
      const provider = config.providers.find((p) => p.id === id);
      if (!provider) {
        throw new ProviderNotFoundError(id);
      }
      config.currentProviderId = id;
      provider.lastUsedAt = Date.now();
      saveConfig2(config);
      toolConfig.writer(provider);
    },
    getCurrent() {
      const config = loadConfig2();
      if (!config.currentProviderId) {
        return null;
      }
      const provider = config.providers.find((p) => p.id === config.currentProviderId);
      return provider || null;
    },
    // 注：edit 方法的"复杂度"来自必要的业务逻辑（检查存在性、名称冲突、更新 4 个可选字段、同步配置）
    // 每个 if 都不可避免，没有特殊情况或嵌套逻辑，因此禁用 complexity 检查
    // eslint-disable-next-line complexity
    edit(id, updates) {
      const config = loadConfig2();
      const provider = config.providers.find((p) => p.id === id);
      if (!provider) {
        throw new ProviderNotFoundError(id);
      }
      if (updates.name !== void 0 && updates.name !== provider.name) {
        const nameConflict = config.providers.some((p) => p.id !== id && p.name === updates.name);
        if (nameConflict) {
          throw new ProviderNameConflictError(updates.name);
        }
      }
      if (updates.name !== void 0)
        provider.name = updates.name;
      if (updates.desc !== void 0)
        provider.desc = updates.desc;
      if (updates.baseUrl !== void 0)
        provider.baseUrl = updates.baseUrl;
      if (updates.apiKey !== void 0)
        provider.apiKey = updates.apiKey;
      if (updates.model !== void 0)
        provider.model = updates.model;
      provider.lastModified = Date.now();
      saveConfig2(config);
      if (config.currentProviderId === id) {
        toolConfig.writer(provider);
      }
      if (toolConfig.autoSync) {
        toolConfig.writer(provider);
      }
      return provider;
    },
    remove(id) {
      const config = loadConfig2();
      const index = config.providers.findIndex((p) => p.id === id);
      if (index === -1) {
        throw new ProviderNotFoundError(id);
      }
      if (config.currentProviderId === id) {
        config.currentProviderId = void 0;
      }
      config.providers.splice(index, 1);
      saveConfig2(config);
      if (toolConfig.autoSync) {
        toolConfig.writer({});
      }
    },
    clone(sourceId, newName) {
      const source = this.get(sourceId);
      const config = loadConfig2();
      const nameExists = config.providers.some((p) => p.name === newName);
      if (nameExists) {
        throw new ProviderNameConflictError(newName);
      }
      const timestamp = Date.now();
      const newProvider = {
        ...source,
        id: generateId(),
        name: newName,
        desc: void 0,
        createdAt: timestamp,
        lastModified: timestamp,
        lastUsedAt: void 0
      };
      config.providers.push(newProvider);
      saveConfig2(config);
      return newProvider;
    },
    addPreset(input) {
      const config = loadConfig2();
      if (!config.presets) {
        config.presets = [];
      }
      const allPresets = [...toolConfig.builtinPresets, ...config.presets];
      const nameExists = allPresets.some((p) => p.name === input.name);
      if (nameExists) {
        throw new PresetNameConflictError(input.name);
      }
      const preset = {
        name: input.name,
        baseUrl: input.baseUrl,
        description: input.description
      };
      config.presets.push(preset);
      saveConfig2(config);
      return {
        ...preset,
        isBuiltIn: false
      };
    },
    listPresets() {
      const config = loadConfig2();
      const userPresets = config.presets || [];
      const builtinWithFlag = toolConfig.builtinPresets.map((p) => ({
        ...p,
        isBuiltIn: true
      }));
      const userWithFlag = userPresets.map((p) => ({
        ...p,
        isBuiltIn: false
      }));
      return [...builtinWithFlag, ...userWithFlag];
    },
    editPreset(name, updates) {
      const config = loadConfig2();
      if (!config.presets) {
        config.presets = [];
      }
      const preset = config.presets.find((p) => p.name === name);
      if (!preset) {
        throw new Error(`\u9884\u7F6E\u4E0D\u5B58\u5728: ${name}`);
      }
      if (updates.name !== void 0 && updates.name !== preset.name) {
        const allPresets = [...toolConfig.builtinPresets, ...config.presets];
        const nameConflict = allPresets.some((p) => p.name !== name && p.name === updates.name);
        if (nameConflict) {
          throw new PresetNameConflictError(updates.name);
        }
      }
      if (updates.name !== void 0)
        preset.name = updates.name;
      if (updates.baseUrl !== void 0)
        preset.baseUrl = updates.baseUrl;
      if (updates.description !== void 0)
        preset.description = updates.description;
      saveConfig2(config);
      return {
        ...preset,
        isBuiltIn: false
      };
    },
    removePreset(name) {
      const config = loadConfig2();
      if (!config.presets) {
        return;
      }
      const index = config.presets.findIndex((p) => p.name === name);
      if (index === -1) {
        throw new Error(`Preset not found: ${name}`);
      }
      config.presets.splice(index, 1);
      saveConfig2(config);
    }
  };
}
function createCodexManager() {
  return createToolManager("codex");
}
function createClaudeManager() {
  return createToolManager("claude");
}
function createMCPManager() {
  return createToolManager("mcp");
}
function createGeminiManager() {
  return createToolManager("gemini");
}
function createOpenCodeManager() {
  return createToolManager("opencode");
}
function createOpenClawManager() {
  return createToolManager("openclaw");
}
var TOOL_CONFIGS;
var init_tool_manager = __esm({
  "../core/dist/tool-manager.js"() {
    "use strict";
    init_paths();
    init_file();
    init_codex();
    init_claude();
    init_mcp();
    init_codex2();
    init_claude2();
    init_mcp2();
    init_gemini();
    init_opencode();
    init_openclaw();
    init_gemini2();
    init_opencode2();
    init_openclaw2();
    init_tool_manager_types();
    TOOL_CONFIGS = {
      codex: {
        configPath: path6.join(getCcmanDir(), "codex.json"),
        builtinPresets: CODEX_PRESETS,
        writer: writeCodexConfig
      },
      claude: {
        configPath: path6.join(getCcmanDir(), "claude.json"),
        builtinPresets: CC_PRESETS,
        writer: writeClaudeConfig
      },
      mcp: {
        configPath: path6.join(getCcmanDir(), "mcp.json"),
        builtinPresets: MCP_PRESETS,
        writer: writeMCPConfig,
        autoSync: true,
        // MCP 需要在每个操作后自动同步到 ~/.claude.json
        // MCP 使用特殊的配置格式（MCPConfig），需要自定义 loader/saver
        customLoader: () => {
          const mcpConfig = loadMCPConfig();
          return {
            providers: mcpConfig.servers.map(mcpServerToProvider),
            presets: []
          };
        },
        customSaver: (config) => {
          const mcpConfig = loadMCPConfig();
          mcpConfig.servers = config.providers.map((provider) => {
            const existingServer = mcpConfig.servers.find((s) => s.id === provider.id);
            const mcpServer = providerToMCPServer(provider);
            if (existingServer) {
              mcpServer.enabledApps = existingServer.enabledApps;
            }
            return mcpServer;
          });
          for (const app of ["claude", "codex", "gemini"]) {
            mcpConfig.managedServerNames[app] = mcpConfig.servers.filter((s) => s.enabledApps.includes(app)).map((s) => s.name);
          }
          saveMCPConfig(mcpConfig);
        }
      },
      gemini: {
        configPath: path6.join(getCcmanDir(), "gemini.json"),
        builtinPresets: GEMINI_PRESETS,
        writer: writeGeminiConfig
      },
      opencode: {
        configPath: path6.join(getCcmanDir(), "opencode.json"),
        builtinPresets: OPENCODE_PRESETS,
        writer: writeOpenCodeConfig
      },
      openclaw: {
        configPath: path6.join(getCcmanDir(), "openclaw.json"),
        builtinPresets: OPENCLAW_PRESETS,
        writer: writeOpenClawConfig
      }
    };
  }
});

// ../core/dist/migrate.js
var init_migrate = __esm({
  "../core/dist/migrate.js"() {
    "use strict";
    init_paths();
  }
});

// ../core/dist/config.js
import * as fs6 from "fs";
function ensureConfigDir() {
  const dir = getCcmanDir();
  if (!fs6.existsSync(dir)) {
    fs6.mkdirSync(dir, { recursive: true, mode: 448 });
  }
}
function loadConfig() {
  const configPath = getConfigPath();
  if (!fs6.existsSync(configPath)) {
    return {};
  }
  try {
    const content = fs6.readFileSync(configPath, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to load config: ${error.message}`);
  }
}
function saveConfig(config) {
  ensureConfigDir();
  const configPath = getConfigPath();
  try {
    const tempPath = `${configPath}.tmp`;
    fs6.writeFileSync(tempPath, JSON.stringify(config, null, 2), {
      mode: 384
    });
    fs6.renameSync(tempPath, configPath);
  } catch (error) {
    throw new Error(`Failed to save config: ${error.message}`);
  }
}
function getSyncConfig() {
  const config = loadConfig();
  return config.sync || null;
}
function saveSyncConfig(syncConfig) {
  const config = loadConfig();
  config.sync = syncConfig;
  saveConfig(config);
}
function updateLastSyncTime() {
  const config = loadConfig();
  if (config.sync) {
    config.sync.lastSync = Date.now();
    saveConfig(config);
  }
}
var init_config = __esm({
  "../core/dist/config.js"() {
    "use strict";
    init_paths();
  }
});

// ../core/dist/sync/webdav-client.js
import { createClient } from "webdav";
function normalizePath(dir) {
  if (!dir || dir === "/") {
    return "/";
  }
  const normalized = dir.trim().replace(/^\/+/, "").replace(/\/+$/, "");
  return `/${normalized}`;
}
function joinPath(baseDir, filename) {
  const normalizedBase = normalizePath(baseDir);
  const normalizedFile = filename.replace(/^\/+/, "");
  if (normalizedBase === "/") {
    return `/${normalizedFile}`;
  }
  return `${normalizedBase}/${normalizedFile}`;
}
function createWebDAVClient(config) {
  const client = createClient(config.webdavUrl, {
    username: config.username,
    password: config.password,
    authType: config.authType || "password",
    // 默认使用 Basic Auth
    maxBodyLength: 100 * 1024 * 1024,
    // 100MB
    maxContentLength: 100 * 1024 * 1024
    // 100MB
  });
  return client;
}
async function testWebDAVConnection(config) {
  const remoteDir = normalizePath(config.remoteDir || "/");
  try {
    const client = createWebDAVClient(config);
    await client.getDirectoryContents(remoteDir);
    return true;
  } catch (error) {
    return false;
  }
}
async function ensureDirectory(config, dirPath) {
  const client = createWebDAVClient(config);
  const normalizedPath = normalizePath(dirPath);
  if (normalizedPath === "/") {
    return true;
  }
  try {
    const exists = await client.exists(normalizedPath);
    if (exists) {
      return true;
    }
    const parentPath = normalizedPath.substring(0, normalizedPath.lastIndexOf("/"));
    if (parentPath && parentPath !== "/") {
      await ensureDirectory(config, parentPath);
    }
    await client.createDirectory(normalizedPath);
    return true;
  } catch (error) {
    console.warn(`\u521B\u5EFA\u76EE\u5F55 ${normalizedPath} \u5931\u8D25\uFF0C\u5C06\u5C1D\u8BD5\u76F4\u63A5\u4E0A\u4F20\u6587\u4EF6:`, error.message);
    return false;
  }
}
function isPathNotFoundError(error) {
  const msg = error.message.toLowerCase();
  return msg.includes("404") || msg.includes("409") || msg.includes("not found") || msg.includes("conflict");
}
async function uploadToWebDAV(config, filename, data) {
  const client = createWebDAVClient(config);
  const remoteDir = normalizePath(config.remoteDir || "/");
  const fullPath = joinPath(remoteDir, filename);
  try {
    await client.putFileContents(fullPath, data, { overwrite: true });
  } catch (firstError) {
    if (isPathNotFoundError(firstError)) {
      const dirPath = fullPath.substring(0, fullPath.lastIndexOf("/"));
      if (dirPath && dirPath !== "/") {
        await ensureDirectory(config, dirPath);
        await client.putFileContents(fullPath, data, { overwrite: true });
      } else {
        throw firstError;
      }
    } else {
      throw firstError;
    }
  }
  try {
    const exists = await client.exists(fullPath);
    if (!exists) {
      throw new Error(`\u6587\u4EF6\u4E0A\u4F20\u540E\u672A\u5728\u670D\u52A1\u5668\u4E0A\u627E\u5230: ${fullPath}`);
    }
  } catch (verifyError) {
    const errorMsg = verifyError.message;
    if (errorMsg.includes("multistatus") || errorMsg.includes("Invalid response")) {
      throw new Error(`WebDAV \u914D\u7F6E\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\uFF1A
1. URL \u662F\u5426\u4E3A WebDAV \u7AEF\u70B9\uFF08\u4E0D\u662F\u7F51\u9875\u5730\u5740\uFF09
2. \u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u5426\u6B63\u786E
3. \u8BA4\u8BC1\u7C7B\u578B\u662F\u5426\u5339\u914D

\u8BE6\u7EC6\uFF1A${errorMsg}`);
    }
    throw verifyError;
  }
}
async function downloadFromWebDAV(config, filename) {
  const client = createWebDAVClient(config);
  const remoteDir = normalizePath(config.remoteDir || "/");
  const fullPath = joinPath(remoteDir, filename);
  try {
    const contents = await client.getFileContents(fullPath, { format: "text" });
    return contents;
  } catch (error) {
    throw new Error(`\u4E0B\u8F7D\u5931\u8D25: ${error.message}`);
  }
}
async function existsOnWebDAV(config, filename) {
  const client = createWebDAVClient(config);
  const remoteDir = normalizePath(config.remoteDir || "/");
  const fullPath = joinPath(remoteDir, filename);
  try {
    return await client.exists(fullPath);
  } catch (error) {
    return false;
  }
}
var init_webdav_client = __esm({
  "../core/dist/sync/webdav-client.js"() {
    "use strict";
  }
});

// ../core/dist/sync/crypto.js
import * as crypto from "crypto";
function deriveKey(password, salt) {
  return crypto.pbkdf2Sync(password, salt, PBKDF2_ITERATIONS, KEY_LENGTH, "sha256");
}
function encryptApiKey(apiKey, password) {
  if (typeof apiKey !== "string") {
    throw new Error("API Key \u7F3A\u5931\u6216\u7C7B\u578B\u9519\u8BEF\uFF0C\u65E0\u6CD5\u52A0\u5BC6");
  }
  if (!password) {
    throw new Error("\u540C\u6B65\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");
  }
  const salt = crypto.randomBytes(SALT_LENGTH);
  const iv = crypto.randomBytes(IV_LENGTH);
  const key = deriveKey(password, salt);
  const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
  let encrypted = cipher.update(apiKey, "utf8");
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  const tag = cipher.getAuthTag();
  const result = Buffer.concat([salt, iv, tag, encrypted]);
  return result.toString("base64");
}
function decryptApiKey(encryptedApiKey, password) {
  try {
    const data = Buffer.from(encryptedApiKey, "base64");
    const salt = data.subarray(0, SALT_LENGTH);
    const iv = data.subarray(SALT_LENGTH, SALT_LENGTH + IV_LENGTH);
    const tag = data.subarray(SALT_LENGTH + IV_LENGTH, SALT_LENGTH + IV_LENGTH + TAG_LENGTH);
    const encrypted = data.subarray(SALT_LENGTH + IV_LENGTH + TAG_LENGTH);
    const key = deriveKey(password, salt);
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    decipher.setAuthTag(tag);
    let decrypted = decipher.update(encrypted);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString("utf8");
  } catch (error) {
    throw new Error("\u89E3\u5BC6\u5931\u8D25\uFF1A\u5BC6\u7801\u9519\u8BEF\u6216\u6570\u636E\u635F\u574F");
  }
}
function encryptProviders(providers, password) {
  return providers.map((provider) => {
    if (typeof provider.apiKey !== "string" || provider.apiKey.length === 0) {
      throw new Error(`\u670D\u52A1\u5546 "${provider.name}" \u7684 API Key \u4E3A\u7A7A\u6216\u7F3A\u5931\uFF0C\u8BF7\u5148\u5728 ccman \u4E2D\u8865\u5168\u540E\u518D\u8FDB\u884C\u540C\u6B65`);
    }
    return {
      ...provider,
      apiKey: encryptApiKey(provider.apiKey, password)
    };
  });
}
function decryptProviders(encryptedProviders, password) {
  return encryptedProviders.map((provider) => ({
    ...provider,
    apiKey: decryptApiKey(provider.apiKey, password)
  }));
}
var ALGORITHM, KEY_LENGTH, IV_LENGTH, SALT_LENGTH, TAG_LENGTH, PBKDF2_ITERATIONS;
var init_crypto = __esm({
  "../core/dist/sync/crypto.js"() {
    "use strict";
    ALGORITHM = "aes-256-gcm";
    KEY_LENGTH = 32;
    IV_LENGTH = 16;
    SALT_LENGTH = 32;
    TAG_LENGTH = 16;
    PBKDF2_ITERATIONS = 1e5;
  }
});

// ../core/dist/sync/merge-advanced.js
function isSameConfig(a, b) {
  return a.baseUrl === b.baseUrl && a.apiKey === b.apiKey;
}
function isProviderEqual(a, b) {
  return a.id === b.id && a.name === b.name && a.baseUrl === b.baseUrl && a.apiKey === b.apiKey;
}
function resolveNameConflict(existingProviders, newProvider) {
  const existingNames = new Set(existingProviders.map((p) => p.name));
  if (!existingNames.has(newProvider.name)) {
    return newProvider;
  }
  let suffix = 2;
  let newName = `${newProvider.name}_${suffix}`;
  while (existingNames.has(newName)) {
    suffix++;
    newName = `${newProvider.name}_${suffix}`;
  }
  console.log(`name \u51B2\u7A81\uFF1A\u5C06 "${newProvider.name}" \u91CD\u547D\u540D\u4E3A "${newName}"`);
  return {
    ...newProvider,
    name: newName
  };
}
function mergeProviders(local, remote) {
  const mergedMap = /* @__PURE__ */ new Map();
  let hasChanges = false;
  for (const localProvider of local) {
    mergedMap.set(localProvider.id, localProvider);
  }
  for (const remoteProvider of remote) {
    const existingLocal = Array.from(mergedMap.values()).find((p) => isSameConfig(p, remoteProvider));
    if (existingLocal) {
      mergedMap.delete(existingLocal.id);
      mergedMap.set(remoteProvider.id, remoteProvider);
      if (!isProviderEqual(existingLocal, remoteProvider)) {
        hasChanges = true;
        console.log(`\u76F8\u540C\u914D\u7F6E (${remoteProvider.baseUrl})\uFF0C\u4F7F\u7528\u4E91\u7AEF\u6570\u636E`);
      }
    } else {
      const existingProviders = Array.from(mergedMap.values());
      const resolvedProvider = resolveNameConflict(existingProviders, remoteProvider);
      mergedMap.set(resolvedProvider.id, resolvedProvider);
      hasChanges = true;
      console.log(`\u65B0 provider ${resolvedProvider.name}\uFF0C\u6DFB\u52A0\u5230\u5408\u5E76\u5217\u8868`);
    }
  }
  const merged = Array.from(mergedMap.values());
  return {
    merged,
    hasChanges
  };
}
function resolvePresetNameConflict(existingPresets, newPreset) {
  const existingNames = new Set(existingPresets.map((p) => p.name));
  if (!existingNames.has(newPreset.name)) {
    return newPreset;
  }
  let suffix = 2;
  let newName = `${newPreset.name}_${suffix}`;
  while (existingNames.has(newName)) {
    suffix++;
    newName = `${newPreset.name}_${suffix}`;
  }
  console.log(`preset name \u51B2\u7A81\uFF1A\u5C06 "${newPreset.name}" \u91CD\u547D\u540D\u4E3A "${newName}"`);
  return {
    ...newPreset,
    name: newName
  };
}
function mergePresets(local, remote) {
  const localPresets = local || [];
  const remotePresets = remote || [];
  const mergedMap = /* @__PURE__ */ new Map();
  for (const preset of localPresets) {
    mergedMap.set(preset.baseUrl, preset);
  }
  for (const remotePreset of remotePresets) {
    const existingLocal = mergedMap.get(remotePreset.baseUrl);
    if (existingLocal) {
      mergedMap.set(remotePreset.baseUrl, remotePreset);
      console.log(`preset ${remotePreset.name} (${remotePreset.baseUrl})\uFF0C\u4F7F\u7528\u4E91\u7AEF\u6570\u636E`);
    } else {
      const existingPresets = Array.from(mergedMap.values());
      const resolvedPreset = resolvePresetNameConflict(existingPresets, remotePreset);
      mergedMap.set(resolvedPreset.baseUrl, resolvedPreset);
    }
  }
  return Array.from(mergedMap.values());
}
var init_merge_advanced = __esm({
  "../core/dist/sync/merge-advanced.js"() {
    "use strict";
  }
});

// ../core/dist/sync/merge.js
import fs7 from "fs";
import path7 from "path";
function backupConfig(configPath, keepCount = 3) {
  if (!fs7.existsSync(configPath)) {
    throw new Error(`\u914D\u7F6E\u6587\u4EF6\u4E0D\u5B58\u5728: ${configPath}`);
  }
  const timestamp = Date.now();
  const backupPath = `${configPath}.backup.${timestamp}`;
  fs7.copyFileSync(configPath, backupPath);
  cleanupOldBackups(configPath, keepCount);
  return backupPath;
}
function cleanupOldBackups(configPath, keepCount) {
  const dir = path7.dirname(configPath);
  const basename = path7.basename(configPath);
  const backupPrefix = `${basename}.backup.`;
  try {
    const files = fs7.readdirSync(dir);
    const backups = files.filter((f) => f.startsWith(backupPrefix)).map((f) => {
      const timestampStr = f.substring(backupPrefix.length);
      const timestamp = parseInt(timestampStr, 10);
      if (isNaN(timestamp)) {
        return null;
      }
      return {
        name: f,
        path: path7.join(dir, f),
        timestamp
      };
    }).filter((backup) => backup !== null).sort((a, b) => b.timestamp - a.timestamp);
    const toDelete = backups.slice(keepCount);
    for (const backup of toDelete) {
      try {
        fs7.unlinkSync(backup.path);
      } catch (error) {
        console.warn(`\u65E0\u6CD5\u5220\u9664\u65E7\u5907\u4EFD\u6587\u4EF6 ${backup.name}: ${error.message}`);
      }
    }
  } catch (error) {
    console.warn(`\u6E05\u7406\u65E7\u5907\u4EFD\u65F6\u51FA\u9519: ${error.message}`);
  }
}
var init_merge = __esm({
  "../core/dist/sync/merge.js"() {
    "use strict";
  }
});

// ../core/dist/sync/sync-v2.js
import fs8 from "fs";
import path8 from "path";
async function uploadToCloud(config, password) {
  const ccmanDir2 = getCcmanDir();
  const toolKeys = Object.keys(TOOL_SYNC_CONFIG);
  for (const tool of toolKeys) {
    const { remotePath, configFilename } = TOOL_SYNC_CONFIG[tool];
    const configPath = path8.join(ccmanDir2, configFilename);
    const localConfig = readJSON(configPath);
    const encryptedProviders = encryptProviders(localConfig.providers, password);
    const encryptedConfig = {
      ...localConfig,
      // 保留所有字段
      providers: encryptedProviders
      // 只替换 providers（加密后的）
    };
    const jsonContent = JSON.stringify(encryptedConfig, null, 2);
    await uploadToWebDAV(config, remotePath, jsonContent);
  }
  updateLastSyncTime();
  console.log("\u2705 \u914D\u7F6E\u5DF2\u4E0A\u4F20\u5230\u4E91\u7AEF");
}
async function downloadFromCloud(config, password) {
  const ccmanDir2 = getCcmanDir();
  const toolKeys = Object.keys(TOOL_SYNC_CONFIG);
  const existsChecks = await Promise.all(toolKeys.map(async (tool) => {
    const { remotePath } = TOOL_SYNC_CONFIG[tool];
    return existsOnWebDAV(config, remotePath);
  }));
  if (!existsChecks.some((exists) => exists)) {
    throw new Error("\u8FDC\u7A0B\u914D\u7F6E\u4E0D\u5B58\u5728\uFF0C\u8BF7\u5148\u4E0A\u4F20\u914D\u7F6E");
  }
  const remoteConfigs = [];
  for (let i = 0; i < toolKeys.length; i++) {
    const tool = toolKeys[i];
    const { remotePath } = TOOL_SYNC_CONFIG[tool];
    if (existsChecks[i]) {
      const jsonContent = await downloadFromWebDAV(config, remotePath);
      const remoteConfig = JSON.parse(jsonContent);
      try {
        const decryptedProviders = decryptProviders(remoteConfig.providers, password);
        remoteConfigs.push({ tool, config: remoteConfig, decryptedProviders });
      } catch (error) {
        throw new Error("\u89E3\u5BC6\u5931\u8D25\uFF1A\u5BC6\u7801\u9519\u8BEF\u6216\u6570\u636E\u635F\u574F");
      }
    } else {
      remoteConfigs.push({ tool, config: null, decryptedProviders: null });
    }
  }
  const backupPaths = [];
  try {
    for (const tool of toolKeys) {
      const { configFilename } = TOOL_SYNC_CONFIG[tool];
      const configPath = path8.join(ccmanDir2, configFilename);
      if (fs8.existsSync(configPath)) {
        backupPaths.push(backupConfig(configPath));
      }
    }
  } catch (error) {
    throw new Error(`\u5907\u4EFD\u5931\u8D25: ${error.message}`);
  }
  try {
    for (const { tool, config: remoteConfig, decryptedProviders } of remoteConfigs) {
      if (!remoteConfig || !decryptedProviders)
        continue;
      const { configFilename } = TOOL_SYNC_CONFIG[tool];
      const configPath = path8.join(ccmanDir2, configFilename);
      const newConfig = {
        ...remoteConfig,
        // 使用云端配置的所有字段
        providers: decryptedProviders
        // 只替换 providers（解密后的）
      };
      writeJSON(configPath, newConfig);
      applyCurrentProvider(tool, newConfig);
    }
    updateLastSyncTime();
    console.log("\u2705 \u914D\u7F6E\u5DF2\u4ECE\u4E91\u7AEF\u4E0B\u8F7D\u5E76\u5E94\u7528");
    return backupPaths;
  } catch (error) {
    for (const backupPath of backupPaths) {
      const originalPath = backupPath.replace(/\.backup\.\d+$/, "");
      if (fs8.existsSync(backupPath)) {
        fs8.copyFileSync(backupPath, originalPath);
      }
    }
    throw new Error(`\u8986\u76D6\u914D\u7F6E\u5931\u8D25\uFF0C\u5DF2\u6062\u590D\u5907\u4EFD: ${error.message}`);
  }
}
async function mergeSync(config, password) {
  const ccmanDir2 = getCcmanDir();
  const toolKeys = Object.keys(TOOL_SYNC_CONFIG);
  const existsChecks = await Promise.all(toolKeys.map(async (tool) => {
    const { remotePath } = TOOL_SYNC_CONFIG[tool];
    return existsOnWebDAV(config, remotePath);
  }));
  if (!existsChecks.some((exists) => exists)) {
    console.log("\u8FDC\u7A0B\u914D\u7F6E\u4E0D\u5B58\u5728\uFF0C\u6267\u884C\u4E0A\u4F20\u64CD\u4F5C");
    await uploadToCloud(config, password);
    return {
      hasChanges: true,
      backupPaths: []
    };
  }
  const mergeDataList = [];
  for (let i = 0; i < toolKeys.length; i++) {
    const tool = toolKeys[i];
    const { remotePath, configFilename } = TOOL_SYNC_CONFIG[tool];
    const configPath = path8.join(ccmanDir2, configFilename);
    const localConfig = readJSON(configPath);
    let remoteProviders = [];
    if (existsChecks[i]) {
      try {
        const jsonContent = await downloadFromWebDAV(config, remotePath);
        const remoteConfig = JSON.parse(jsonContent);
        remoteProviders = decryptProviders(remoteConfig.providers, password);
      } catch (error) {
        throw new Error("\u89E3\u5BC6\u5931\u8D25\uFF1A\u5BC6\u7801\u9519\u8BEF\u6216\u6570\u636E\u635F\u574F");
      }
    }
    const mergeResult = mergeProviders(localConfig.providers, remoteProviders);
    mergeDataList.push({
      tool,
      localConfig,
      remoteProviders,
      mergeResult
    });
  }
  const hasChanges = mergeDataList.some((data) => data.mergeResult.hasChanges);
  if (!hasChanges) {
    console.log("\u2139\uFE0F \u914D\u7F6E\u5DF2\u540C\u6B65\uFF0C\u65E0\u9700\u64CD\u4F5C");
    return {
      hasChanges: false,
      backupPaths: []
    };
  }
  const backupPaths = [];
  try {
    for (const tool of toolKeys) {
      const { configFilename } = TOOL_SYNC_CONFIG[tool];
      const configPath = path8.join(ccmanDir2, configFilename);
      if (fs8.existsSync(configPath)) {
        backupPaths.push(backupConfig(configPath));
      }
    }
  } catch (error) {
    throw new Error(`\u5907\u4EFD\u5931\u8D25: ${error.message}`);
  }
  try {
    for (let i = 0; i < mergeDataList.length; i++) {
      const { tool, localConfig, mergeResult } = mergeDataList[i];
      const { remotePath, configFilename } = TOOL_SYNC_CONFIG[tool];
      const configPath = path8.join(ccmanDir2, configFilename);
      let remoteConfig = null;
      if (existsChecks[i]) {
        const jsonContent2 = await downloadFromWebDAV(config, remotePath);
        remoteConfig = JSON.parse(jsonContent2);
      }
      const mergedPresets = mergePresets(localConfig.presets, remoteConfig?.presets);
      const mergedConfig = {
        ...localConfig,
        // 保留本地配置的所有字段
        providers: mergeResult.merged,
        // 替换为合并后的 providers
        presets: mergedPresets
        // 替换为合并后的 presets
      };
      writeJSON(configPath, mergedConfig);
      applyCurrentProvider(tool, mergedConfig);
      const encryptedProviders = encryptProviders(mergeResult.merged, password);
      const encryptedConfig = {
        ...mergedConfig,
        // 保留合并后配置的所有字段
        providers: encryptedProviders
        // 只替换 providers（加密后的）
      };
      const jsonContent = JSON.stringify(encryptedConfig, null, 2);
      await uploadToWebDAV(config, remotePath, jsonContent);
    }
    updateLastSyncTime();
    console.log("\u2705 \u914D\u7F6E\u5DF2\u5408\u5E76\u5E76\u540C\u6B65\u5230\u4E91\u7AEF");
    return {
      hasChanges: true,
      backupPaths
    };
  } catch (error) {
    for (const backupPath of backupPaths) {
      const originalPath = backupPath.replace(/\.backup\.\d+$/, "");
      if (fs8.existsSync(backupPath)) {
        fs8.copyFileSync(backupPath, originalPath);
      }
    }
    throw new Error(`\u5408\u5E76\u914D\u7F6E\u5931\u8D25\uFF0C\u5DF2\u6062\u590D\u5907\u4EFD: ${error.message}`);
  }
}
function applyCurrentProvider(tool, config) {
  if (!config.currentProviderId) {
    return;
  }
  const provider = config.providers.find((p) => p.id === config.currentProviderId);
  if (!provider) {
    return;
  }
  const { writerFunc } = TOOL_SYNC_CONFIG[tool];
  writerFunc(provider);
}
var TOOL_SYNC_CONFIG;
var init_sync_v2 = __esm({
  "../core/dist/sync/sync-v2.js"() {
    "use strict";
    init_config();
    init_webdav_client();
    init_crypto();
    init_merge_advanced();
    init_merge();
    init_paths();
    init_file();
    init_codex();
    init_claude();
    init_gemini2();
    init_constants();
    TOOL_SYNC_CONFIG = {
      [MAIN_TOOL_TYPES.CODEX]: {
        remotePath: ".ccman/codex.json",
        configFilename: "codex.json",
        writerFunc: writeCodexConfig
      },
      [MAIN_TOOL_TYPES.CLAUDE]: {
        remotePath: ".ccman/claude.json",
        configFilename: "claude.json",
        writerFunc: writeClaudeConfig
      },
      [MAIN_TOOL_TYPES.GEMINI]: {
        remotePath: ".ccman/gemini.json",
        configFilename: "gemini.json",
        writerFunc: writeGeminiConfig
      }
    };
  }
});

// ../core/dist/export.js
import * as fs9 from "fs";
import * as path9 from "path";
function validateExport() {
  const ccmanDir2 = getCcmanDir();
  const codexPath = path9.join(ccmanDir2, CODEX_CONFIG_FILE);
  const claudePath = path9.join(ccmanDir2, CLAUDE_CONFIG_FILE);
  const missingFiles = [];
  if (!fileExists(codexPath)) {
    missingFiles.push(CODEX_CONFIG_FILE);
  }
  if (!fileExists(claudePath)) {
    missingFiles.push(CLAUDE_CONFIG_FILE);
  }
  if (missingFiles.length > 0) {
    return {
      valid: false,
      message: `\u914D\u7F6E\u6587\u4EF6\u4E0D\u5B58\u5728: ${missingFiles.join(", ")}`,
      missingFiles
    };
  }
  return { valid: true };
}
function validateImportDir(sourceDir) {
  if (!fileExists(sourceDir)) {
    return {
      valid: false,
      message: `\u76EE\u5F55\u4E0D\u5B58\u5728: ${sourceDir}`,
      foundFiles: []
    };
  }
  const stats = fs9.statSync(sourceDir);
  if (!stats.isDirectory()) {
    return {
      valid: false,
      message: `\u4E0D\u662F\u6709\u6548\u7684\u76EE\u5F55: ${sourceDir}`,
      foundFiles: []
    };
  }
  const codexPath = path9.join(sourceDir, CODEX_CONFIG_FILE);
  const claudePath = path9.join(sourceDir, CLAUDE_CONFIG_FILE);
  const foundFiles = [];
  if (fileExists(codexPath)) {
    foundFiles.push(CODEX_CONFIG_FILE);
  }
  if (fileExists(claudePath)) {
    foundFiles.push(CLAUDE_CONFIG_FILE);
  }
  if (foundFiles.length === 0) {
    return {
      valid: false,
      message: `\u672A\u627E\u5230\u914D\u7F6E\u6587\u4EF6 (${CODEX_CONFIG_FILE} \u6216 ${CLAUDE_CONFIG_FILE})`,
      foundFiles: []
    };
  }
  return {
    valid: true,
    foundFiles
  };
}
function exportConfig(targetDir) {
  const validation = validateExport();
  if (!validation.valid) {
    throw new Error(validation.message);
  }
  ensureDir(targetDir);
  const ccmanDir2 = getCcmanDir();
  const exportedFiles = [];
  const codexSrc = path9.join(ccmanDir2, CODEX_CONFIG_FILE);
  const codexDst = path9.join(targetDir, CODEX_CONFIG_FILE);
  if (fileExists(codexSrc)) {
    fs9.copyFileSync(codexSrc, codexDst);
    exportedFiles.push(CODEX_CONFIG_FILE);
  }
  const claudeSrc = path9.join(ccmanDir2, CLAUDE_CONFIG_FILE);
  const claudeDst = path9.join(targetDir, CLAUDE_CONFIG_FILE);
  if (fileExists(claudeSrc)) {
    fs9.copyFileSync(claudeSrc, claudeDst);
    exportedFiles.push(CLAUDE_CONFIG_FILE);
  }
  return {
    success: true,
    targetDir,
    exportedFiles
  };
}
function importConfig(sourceDir) {
  const validation = validateImportDir(sourceDir);
  if (!validation.valid) {
    throw new Error(validation.message);
  }
  const ccmanDir2 = getCcmanDir();
  const backupPaths = [];
  const importedFiles = [];
  ensureDir(ccmanDir2);
  try {
    if (validation.foundFiles.includes(CODEX_CONFIG_FILE)) {
      const codexDst = path9.join(ccmanDir2, CODEX_CONFIG_FILE);
      if (fileExists(codexDst)) {
        const backupPath = backupConfig(codexDst);
        backupPaths.push(backupPath);
      }
      const codexSrc = path9.join(sourceDir, CODEX_CONFIG_FILE);
      fs9.copyFileSync(codexSrc, codexDst);
      importedFiles.push(CODEX_CONFIG_FILE);
    }
    if (validation.foundFiles.includes(CLAUDE_CONFIG_FILE)) {
      const claudeDst = path9.join(ccmanDir2, CLAUDE_CONFIG_FILE);
      if (fileExists(claudeDst)) {
        const backupPath = backupConfig(claudeDst);
        backupPaths.push(backupPath);
      }
      const claudeSrc = path9.join(sourceDir, CLAUDE_CONFIG_FILE);
      fs9.copyFileSync(claudeSrc, claudeDst);
      importedFiles.push(CLAUDE_CONFIG_FILE);
    }
    return {
      success: true,
      backupPaths,
      importedFiles
    };
  } catch (error) {
    for (const backupPath of backupPaths) {
      const originalPath = backupPath.replace(/\.backup\.\d+$/, "");
      if (fileExists(backupPath)) {
        fs9.copyFileSync(backupPath, originalPath);
      }
    }
    throw new Error(`\u5BFC\u5165\u5931\u8D25\uFF0C\u5DF2\u6062\u590D\u5907\u4EFD: ${error.message}`);
  }
}
var CODEX_CONFIG_FILE, CLAUDE_CONFIG_FILE;
var init_export = __esm({
  "../core/dist/export.js"() {
    "use strict";
    init_paths();
    init_file();
    init_merge();
    CODEX_CONFIG_FILE = "codex.json";
    CLAUDE_CONFIG_FILE = "claude.json";
  }
});

// ../core/dist/claude-clean.js
import * as fs10 from "fs";
function formatBytes(bytes) {
  if (bytes < 1024)
    return `${bytes} B`;
  if (bytes < 1024 * 1024)
    return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function getFileSize(filePath) {
  try {
    const stats = fs10.statSync(filePath);
    return stats.size;
  } catch {
    return 0;
  }
}
function backupFile(filePath) {
  const timestamp = (/* @__PURE__ */ new Date()).toISOString().replace(/:/g, "-").split(".")[0];
  const backupPath = `${filePath}.backup-${timestamp}`;
  fs10.copyFileSync(filePath, backupPath);
  return backupPath;
}
function saveJsonAtomic(filePath, data) {
  const tempPath = `${filePath}.tmp`;
  const content = JSON.stringify(data, null, 2);
  fs10.writeFileSync(tempPath, content, { mode: 384 });
  fs10.renameSync(tempPath, filePath);
}
function analyzeClaudeJson() {
  const filePath = getClaudeJsonPath();
  if (!fs10.existsSync(filePath)) {
    return {
      fileSize: 0,
      fileSizeFormatted: "0 B",
      projectCount: 0,
      totalHistoryCount: 0,
      projectHistory: [],
      cacheSize: 0,
      estimatedSavings: {
        conservative: 0,
        moderate: 0,
        aggressive: 0
      }
    };
  }
  const fileSize = getFileSize(filePath);
  const content = fs10.readFileSync(filePath, "utf-8");
  const config = JSON.parse(content);
  const projects = config.projects || {};
  const projectHistory = [];
  let totalHistoryCount = 0;
  for (const [projectPath, projectData] of Object.entries(projects)) {
    const historyCount = projectData.history?.length || 0;
    totalHistoryCount += historyCount;
    projectHistory.push({
      path: projectPath,
      count: historyCount
    });
  }
  projectHistory.sort((a, b) => b.count - a.count);
  const cacheSize = config.cachedChangelog?.length || 0;
  const historySize = fileSize - cacheSize - 2e4;
  const avgHistorySize = totalHistoryCount > 0 ? historySize / totalHistoryCount : 0;
  const estimatedSavings = {
    conservative: Math.floor(avgHistorySize * Math.max(0, totalHistoryCount - projectHistory.length * 10)) + cacheSize,
    moderate: Math.floor(avgHistorySize * Math.max(0, totalHistoryCount - projectHistory.length * 5)) + cacheSize,
    aggressive: Math.floor(historySize) + cacheSize
  };
  return {
    fileSize,
    fileSizeFormatted: formatBytes(fileSize),
    projectCount: projectHistory.length,
    totalHistoryCount,
    projectHistory,
    cacheSize,
    estimatedSavings
  };
}
function cleanClaudeJson(options = {}) {
  const filePath = getClaudeJsonPath();
  if (!fs10.existsSync(filePath)) {
    throw new Error(`${filePath} \u6587\u4EF6\u4E0D\u5B58\u5728`);
  }
  const backupPath = backupFile(filePath);
  const sizeBefore = getFileSize(filePath);
  const content = fs10.readFileSync(filePath, "utf-8");
  const config = JSON.parse(content);
  const cleanedItems = applyCleanOptions(config, options);
  saveJsonAtomic(filePath, config);
  const sizeAfter = getFileSize(filePath);
  return {
    sizeBefore,
    sizeAfter,
    saved: sizeBefore - sizeAfter,
    cleanedItems,
    backupPath
  };
}
function applyCleanOptions(config, options) {
  let projectHistoryCount = 0;
  if (options.cleanProjectHistory && config.projects) {
    const keepCount = options.keepRecentCount ?? 10;
    const targetProjects = options.projectPaths || [];
    for (const [projectPath, projectData] of Object.entries(config.projects)) {
      if (targetProjects.length > 0 && !targetProjects.includes(projectPath)) {
        continue;
      }
      if (projectData.history && Array.isArray(projectData.history)) {
        const originalCount = projectData.history.length;
        projectData.history = projectData.history.slice(-keepCount);
        projectHistoryCount += originalCount - projectData.history.length;
      }
    }
  }
  if (options.cleanCache) {
    delete config.cachedChangelog;
    config.changelogLastFetched = 0;
  }
  if (options.cleanStats) {
    config.numStartups = 0;
    config.promptQueueUseCount = 0;
    config.tipsHistory = {};
  }
  return {
    projectHistory: projectHistoryCount,
    cache: options.cleanCache || false,
    stats: options.cleanStats || false
  };
}
var CleanPresets;
var init_claude_clean = __esm({
  "../core/dist/claude-clean.js"() {
    "use strict";
    init_paths();
    CleanPresets = {
      /** 保守清理：保留最近10条记录，清理缓存 */
      conservative: () => ({
        cleanProjectHistory: true,
        keepRecentCount: 10,
        cleanCache: true,
        cleanStats: false
      }),
      /** 中等清理：保留最近5条记录，清理缓存和统计 */
      moderate: () => ({
        cleanProjectHistory: true,
        keepRecentCount: 5,
        cleanCache: true,
        cleanStats: true
      }),
      /** 激进清理：清空历史记录，清理缓存和统计 */
      aggressive: () => ({
        cleanProjectHistory: true,
        keepRecentCount: 0,
        cleanCache: true,
        cleanStats: true
      })
    };
  }
});

// ../core/dist/index.js
var VERSION;
var init_dist2 = __esm({
  "../core/dist/index.js"() {
    "use strict";
    init_package();
    init_constants();
    init_tool_manager();
    init_codex2();
    init_claude2();
    init_mcp2();
    init_gemini();
    init_opencode();
    init_mcp();
    init_migrate();
    init_paths();
    init_config();
    init_webdav_client();
    init_sync_v2();
    init_crypto();
    init_merge_advanced();
    init_export();
    init_claude_clean();
    VERSION = package_default.version;
  }
});

// src/utils/sync-config.ts
function loadSyncConfig() {
  try {
    const config = getSyncConfig();
    if (!config) {
      return null;
    }
    return config;
  } catch (error) {
    throw new Error(`\u8BFB\u53D6\u540C\u6B65\u914D\u7F6E\u5931\u8D25: ${error.message}`);
  }
}
function saveSyncConfig2(config) {
  try {
    const configToSave = { ...config };
    if (!configToSave.rememberSyncPassword) {
      delete configToSave.syncPassword;
    }
    saveSyncConfig(configToSave);
  } catch (error) {
    throw new Error(`\u4FDD\u5B58\u540C\u6B65\u914D\u7F6E\u5931\u8D25: ${error.message}`);
  }
}
function getSyncConfigPath() {
  return getConfigPath();
}
var init_sync_config = __esm({
  "src/utils/sync-config.ts"() {
    "use strict";
    init_dist2();
  }
});

// src/commands/sync/config.ts
var config_exports = {};
__export(config_exports, {
  configCommand: () => configCommand
});
import chalk3 from "chalk";
import inquirer from "inquirer";
function configCommand(program2) {
  program2.command("config").description("\u914D\u7F6E WebDAV \u8FDE\u63A5").action(async () => {
    try {
      console.log(chalk3.bold("\n\u2699\uFE0F  \u914D\u7F6E WebDAV \u540C\u6B65\n"));
      const existingConfig = loadSyncConfig();
      if (existingConfig) {
        console.log(chalk3.blue("\u2139\uFE0F  \u68C0\u6D4B\u5230\u5DF2\u6709\u914D\u7F6E\uFF0C\u53EF\u4EE5\u66F4\u65B0 WebDAV \u5B57\u6BB5"));
        console.log(chalk3.gray("   \u7559\u7A7A\u8868\u793A\u4E0D\u66F4\u65B0\u8BE5\u5B57\u6BB5\n"));
      }
      const answers = await inquirer.prompt([
        {
          type: "input",
          name: "webdavUrl",
          message: existingConfig ? `WebDAV \u670D\u52A1\u5668\u5730\u5740 (\u5F53\u524D: ${existingConfig.webdavUrl}):` : "WebDAV \u670D\u52A1\u5668\u5730\u5740:",
          validate: (value) => {
            if (!value && existingConfig) return true;
            if (!value) return "WebDAV \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A";
            if (!value.startsWith("http://") && !value.startsWith("https://")) {
              return "WebDAV \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
            }
            return true;
          }
        },
        {
          type: "input",
          name: "username",
          message: existingConfig ? `\u7528\u6237\u540D (\u5F53\u524D: ${existingConfig.username}):` : "\u7528\u6237\u540D:",
          validate: (value) => {
            if (!value && existingConfig) return true;
            if (!value) return "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A";
            return true;
          }
        },
        {
          type: "password",
          name: "password",
          message: existingConfig ? "WebDAV \u5BC6\u7801 (\u7559\u7A7A\u4E0D\u66F4\u65B0):" : "WebDAV \u5BC6\u7801:",
          mask: "*"
        },
        {
          type: "list",
          name: "authType",
          message: "\u8BA4\u8BC1\u7C7B\u578B:",
          choices: [
            { name: "Basic Auth\uFF08\u57FA\u7840\u8BA4\u8BC1\uFF09", value: "password" },
            { name: "Digest Auth\uFF08\u6458\u8981\u8BA4\u8BC1\uFF09", value: "digest" }
          ],
          default: existingConfig?.authType || "password"
        },
        {
          type: "input",
          name: "remoteDir",
          message: existingConfig ? `\u8FDC\u7A0B\u540C\u6B65\u76EE\u5F55 (\u5F53\u524D: ${existingConfig.remoteDir || "/"}):` : "\u8FDC\u7A0B\u540C\u6B65\u76EE\u5F55:",
          default: !existingConfig ? "/" : void 0
        },
        {
          type: "password",
          name: "syncPassword",
          message: existingConfig ? "\u540C\u6B65\u5BC6\u7801\uFF08\u7528\u4E8E\u52A0\u5BC6 API Key\uFF0C\u7559\u7A7A\u4E0D\u66F4\u65B0\uFF09:" : "\u540C\u6B65\u5BC6\u7801\uFF08\u7528\u4E8E\u52A0\u5BC6 API Key\uFF09:",
          mask: "*"
        },
        {
          type: "confirm",
          name: "rememberSyncPassword",
          message: "\u8BB0\u4F4F\u540C\u6B65\u5BC6\u7801?",
          default: existingConfig?.rememberSyncPassword ?? true
        }
      ]);
      const trimmedAnswers = {
        webdavUrl: answers.webdavUrl?.trim(),
        username: answers.username?.trim(),
        password: answers.password?.trim(),
        authType: answers.authType,
        remoteDir: answers.remoteDir?.trim(),
        syncPassword: answers.syncPassword?.trim(),
        rememberSyncPassword: answers.rememberSyncPassword
      };
      if (existingConfig) {
        const hasTextInput = trimmedAnswers.webdavUrl || trimmedAnswers.username || trimmedAnswers.password || trimmedAnswers.remoteDir || trimmedAnswers.syncPassword;
        const hasSelectChange = trimmedAnswers.authType !== existingConfig.authType || trimmedAnswers.rememberSyncPassword !== existingConfig.rememberSyncPassword;
        if (!hasTextInput && !hasSelectChange) {
          console.log();
          console.log(chalk3.yellow("\u2139\uFE0F  \u672A\u68C0\u6D4B\u5230\u914D\u7F6E\u53D8\u66F4\uFF0C\u4E0D\u9700\u8981\u66F4\u65B0"));
          console.log();
          return;
        }
      }
      let newConfig;
      if (existingConfig) {
        newConfig = { ...existingConfig };
      } else {
        if (!trimmedAnswers.webdavUrl) {
          throw new Error("WebDAV \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A");
        }
        if (!trimmedAnswers.username) {
          throw new Error("\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A");
        }
        if (!trimmedAnswers.password) {
          throw new Error("\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");
        }
        if (!trimmedAnswers.syncPassword) {
          throw new Error("\u540C\u6B65\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A");
        }
        newConfig = {
          webdavUrl: trimmedAnswers.webdavUrl,
          username: trimmedAnswers.username,
          password: trimmedAnswers.password,
          authType: trimmedAnswers.authType,
          remoteDir: trimmedAnswers.remoteDir || "/",
          syncPassword: trimmedAnswers.syncPassword,
          rememberSyncPassword: trimmedAnswers.rememberSyncPassword,
          lastSync: void 0
        };
      }
      let hasChanges = false;
      if (existingConfig) {
        if (trimmedAnswers.webdavUrl && trimmedAnswers.webdavUrl !== existingConfig.webdavUrl) {
          newConfig.webdavUrl = trimmedAnswers.webdavUrl;
          hasChanges = true;
        }
        if (trimmedAnswers.username && trimmedAnswers.username !== existingConfig.username) {
          newConfig.username = trimmedAnswers.username;
          hasChanges = true;
        }
        if (trimmedAnswers.password && trimmedAnswers.password !== existingConfig.password) {
          newConfig.password = trimmedAnswers.password;
          hasChanges = true;
        }
        if (trimmedAnswers.authType !== existingConfig.authType) {
          newConfig.authType = trimmedAnswers.authType;
          hasChanges = true;
        }
        if (trimmedAnswers.remoteDir && trimmedAnswers.remoteDir !== existingConfig.remoteDir) {
          newConfig.remoteDir = trimmedAnswers.remoteDir;
          hasChanges = true;
        }
        if (trimmedAnswers.syncPassword && trimmedAnswers.syncPassword !== existingConfig.syncPassword) {
          newConfig.syncPassword = trimmedAnswers.syncPassword;
          hasChanges = true;
        }
        if (trimmedAnswers.rememberSyncPassword !== existingConfig.rememberSyncPassword) {
          newConfig.rememberSyncPassword = trimmedAnswers.rememberSyncPassword;
          hasChanges = true;
        }
      }
      if (!hasChanges && existingConfig) {
        console.log();
        console.log(chalk3.yellow("\u2139\uFE0F  \u672A\u68C0\u6D4B\u5230\u914D\u7F6E\u53D8\u66F4\uFF0C\u4E0D\u9700\u8981\u66F4\u65B0"));
        console.log();
        return;
      }
      saveSyncConfig2(newConfig);
      console.log();
      console.log(chalk3.green("\u2705 \u914D\u7F6E\u4FDD\u5B58\u6210\u529F"));
      console.log();
      console.log(chalk3.gray("\u914D\u7F6E\u6587\u4EF6:"), getSyncConfigPath());
      console.log();
      const { testNow } = await inquirer.prompt([
        {
          type: "confirm",
          name: "testNow",
          message: "\u662F\u5426\u7ACB\u5373\u6D4B\u8BD5\u8FDE\u63A5?",
          default: true
        }
      ]);
      if (testNow) {
        console.log(chalk3.bold("\n\u{1F50D} \u6D4B\u8BD5 WebDAV \u8FDE\u63A5...\n"));
        const success = await testWebDAVConnection(newConfig);
        if (success) {
          console.log(chalk3.green("\u2705 \u8FDE\u63A5\u6210\u529F"));
          console.log();
          console.log("  ", chalk3.gray("URL:"), newConfig.webdavUrl);
          console.log("  ", chalk3.gray("\u7528\u6237:"), newConfig.username);
          console.log("  ", chalk3.gray("\u8FDC\u7A0B\u76EE\u5F55:"), newConfig.remoteDir || "/");
          console.log("  ", chalk3.gray("\u8BA4\u8BC1\u7C7B\u578B:"), newConfig.authType === "password" ? "Basic Auth" : "Digest Auth");
          console.log();
        } else {
          console.log(chalk3.red("\u274C \u8FDE\u63A5\u5931\u8D25"));
          console.log();
          console.log(chalk3.yellow("\u8BF7\u68C0\u67E5:"));
          console.log("  1. WebDAV \u670D\u52A1\u5668\u5730\u5740\u662F\u5426\u6B63\u786E");
          console.log("  2. \u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u5426\u6B63\u786E");
          console.log("  3. \u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38");
          console.log();
        }
      }
    } catch (error) {
      console.error(chalk3.red(`
\u274C ${error.message}
`));
    }
  });
}
var init_config2 = __esm({
  "src/commands/sync/config.ts"() {
    "use strict";
    init_sync_config();
    init_dist2();
  }
});

// src/commands/sync/helpers.ts
import inquirer2 from "inquirer";
import chalk4 from "chalk";
import { Command } from "commander";
async function ensureConfigExists() {
  const config = loadSyncConfig();
  if (config) {
    return config;
  }
  console.log(chalk4.yellow("\n\u26A0\uFE0F  \u672A\u627E\u5230 WebDAV \u914D\u7F6E\n"));
  const { shouldConfig } = await inquirer2.prompt([
    {
      type: "confirm",
      name: "shouldConfig",
      message: "\u662F\u5426\u73B0\u5728\u914D\u7F6E WebDAV?",
      default: true
    }
  ]);
  if (!shouldConfig) {
    return null;
  }
  const { configCommand: configCommand2 } = await Promise.resolve().then(() => (init_config2(), config_exports));
  const cmd = new Command();
  configCommand2(cmd);
  await cmd.parseAsync(["node", "ccman", "config"]);
  return loadSyncConfig();
}
var init_helpers = __esm({
  "src/commands/sync/helpers.ts"() {
    "use strict";
    init_sync_config();
  }
});

// src/commands/sync/test.ts
var test_exports = {};
__export(test_exports, {
  testCommand: () => testCommand
});
import chalk5 from "chalk";
function testCommand(program2) {
  program2.command("test").description("\u6D4B\u8BD5 WebDAV \u8FDE\u63A5").action(async () => {
    try {
      const config = await ensureConfigExists();
      if (!config) {
        console.log(chalk5.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      console.log(chalk5.bold("\n\u{1F50D} \u6D4B\u8BD5 WebDAV \u8FDE\u63A5...\n"));
      const success = await testWebDAVConnection(config);
      if (success) {
        console.log(chalk5.green("\u2705 \u8FDE\u63A5\u6210\u529F"));
        console.log();
        console.log("  ", chalk5.gray("URL:"), config.webdavUrl);
        console.log("  ", chalk5.gray("\u7528\u6237:"), config.username);
        console.log("  ", chalk5.gray("\u8FDC\u7A0B\u76EE\u5F55:"), config.remoteDir);
        console.log("  ", chalk5.gray("\u8BA4\u8BC1\u7C7B\u578B:"), config.authType === "password" ? "Basic Auth" : "Digest Auth");
        console.log();
      } else {
        console.log(chalk5.red("\u274C \u8FDE\u63A5\u5931\u8D25"));
        console.log();
        console.log(chalk5.yellow("\u8BF7\u68C0\u67E5:"));
        console.log("  1. WebDAV \u670D\u52A1\u5668\u5730\u5740\u662F\u5426\u6B63\u786E");
        console.log("  2. \u7528\u6237\u540D\u548C\u5BC6\u7801\u662F\u5426\u6B63\u786E");
        console.log("  3. \u7F51\u7EDC\u8FDE\u63A5\u662F\u5426\u6B63\u5E38");
        console.log();
      }
    } catch (error) {
      console.error(chalk5.red(`
\u274C ${error.message}
`));
    }
  });
}
var init_test = __esm({
  "src/commands/sync/test.ts"() {
    "use strict";
    init_dist2();
    init_helpers();
  }
});

// src/commands/sync/upload.ts
var upload_exports = {};
__export(upload_exports, {
  uploadCommand: () => uploadCommand
});
import chalk6 from "chalk";
import inquirer3 from "inquirer";
function uploadCommand(program2) {
  program2.command("upload").description("\u4E0A\u4F20\u672C\u5730\u914D\u7F6E\u5230\u4E91\u7AEF").action(async () => {
    try {
      const config = await ensureConfigExists();
      if (!config) {
        console.log(chalk6.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      let syncPassword = config.syncPassword || "";
      if (!syncPassword) {
        const { password } = await inquirer3.prompt([
          {
            type: "password",
            name: "password",
            message: "\u8BF7\u8F93\u5165\u540C\u6B65\u5BC6\u7801:",
            mask: "*",
            validate: (value) => value ? true : "\u540C\u6B65\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"
          }
        ]);
        syncPassword = password;
      }
      const codexManager = createCodexManager();
      const claudeManager = createClaudeManager();
      const codexProviders = codexManager.list();
      const claudeProviders = claudeManager.list();
      console.log(chalk6.bold("\n\u{1F4E4} \u4E0A\u4F20\u914D\u7F6E\u5230\u4E91\u7AEF\n"));
      console.log("\u914D\u7F6E\u4FE1\u606F:");
      console.log(`  Codex \u670D\u52A1\u5546: ${chalk6.cyan(codexProviders.length)} \u4E2A`);
      console.log(`  Claude \u670D\u52A1\u5546: ${chalk6.cyan(claudeProviders.length)} \u4E2A`);
      console.log();
      console.log(chalk6.yellow("\u26A0\uFE0F  \u4E91\u7AEF\u73B0\u6709\u914D\u7F6E\u5C06\u88AB\u8986\u76D6"));
      console.log();
      const { confirm } = await inquirer3.prompt([
        {
          type: "confirm",
          name: "confirm",
          message: "\u786E\u8BA4\u4E0A\u4F20?",
          default: false
        }
      ]);
      if (!confirm) {
        console.log(chalk6.gray("\n\u274C \u5DF2\u53D6\u6D88\n"));
        return;
      }
      console.log();
      console.log(chalk6.gray("\u{1F510} \u52A0\u5BC6 API Key..."));
      console.log(chalk6.gray("\u{1F4E4} \u4E0A\u4F20\u5230 WebDAV..."));
      await uploadToCloud(config, syncPassword);
      console.log();
      console.log(chalk6.green("\u2705 \u4E0A\u4F20\u6210\u529F"));
      console.log();
      console.log(chalk6.gray("\u8FDC\u7A0B\u6587\u4EF6:"));
      console.log(chalk6.gray(`  ${config.webdavUrl}${config.remoteDir}/.ccman/codex.json`));
      console.log(chalk6.gray(`  ${config.webdavUrl}${config.remoteDir}/.ccman/claude.json`));
      console.log();
      console.log(chalk6.blue("\u{1F4A1} \u5176\u4ED6\u8BBE\u5907\u53EF\u901A\u8FC7 'ccman sync download' \u83B7\u53D6\u914D\u7F6E\n"));
    } catch (error) {
      console.error(chalk6.red(`
\u274C ${error.message}
`));
    }
  });
}
var init_upload = __esm({
  "src/commands/sync/upload.ts"() {
    "use strict";
    init_dist2();
    init_helpers();
  }
});

// src/commands/sync/download.ts
var download_exports = {};
__export(download_exports, {
  downloadCommand: () => downloadCommand
});
import chalk7 from "chalk";
import inquirer4 from "inquirer";
function downloadCommand(program2) {
  program2.command("download").description("\u4ECE\u4E91\u7AEF\u4E0B\u8F7D\u914D\u7F6E\u5230\u672C\u5730").action(async () => {
    try {
      const config = await ensureConfigExists();
      if (!config) {
        console.log(chalk7.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      let syncPassword = config.syncPassword || "";
      if (!syncPassword) {
        const { password } = await inquirer4.prompt([
          {
            type: "password",
            name: "password",
            message: "\u8BF7\u8F93\u5165\u540C\u6B65\u5BC6\u7801:",
            mask: "*",
            validate: (value) => value ? true : "\u540C\u6B65\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"
          }
        ]);
        syncPassword = password;
      }
      console.log(chalk7.bold("\n\u{1F4E5} \u4ECE\u4E91\u7AEF\u4E0B\u8F7D\u914D\u7F6E\n"));
      console.log(chalk7.yellow("\u26A0\uFE0F  \u5C06\u8986\u76D6\u672C\u5730\u914D\u7F6E\uFF08\u81EA\u52A8\u5907\u4EFD\uFF09"));
      console.log();
      const { confirm } = await inquirer4.prompt([
        {
          type: "confirm",
          name: "confirm",
          message: "\u786E\u8BA4\u4E0B\u8F7D?",
          default: false
        }
      ]);
      if (!confirm) {
        console.log(chalk7.gray("\n\u274C \u5DF2\u53D6\u6D88\n"));
        return;
      }
      console.log();
      console.log(chalk7.gray("\u{1F4BE} \u5907\u4EFD\u672C\u5730\u914D\u7F6E..."));
      console.log(chalk7.gray("\u{1F4E5} \u4E0B\u8F7D\u8FDC\u7A0B\u914D\u7F6E..."));
      console.log(chalk7.gray("\u{1F513} \u89E3\u5BC6 API Key..."));
      const backupPaths = await downloadFromCloud(config, syncPassword);
      console.log();
      console.log(chalk7.green("\u2705 \u4E0B\u8F7D\u6210\u529F"));
      console.log();
      if (backupPaths.length > 0) {
        console.log(chalk7.gray("\u672C\u5730\u5907\u4EFD:"));
        backupPaths.forEach((path12) => {
          console.log(chalk7.gray(`  ${path12}`));
        });
        console.log();
      }
      console.log(chalk7.blue("\u{1F4A1} \u914D\u7F6E\u5DF2\u66F4\u65B0\uFF0C\u91CD\u65B0\u52A0\u8F7D\u751F\u6548\n"));
    } catch (error) {
      console.error(chalk7.red(`
\u274C ${error.message}
`));
    }
  });
}
var init_download = __esm({
  "src/commands/sync/download.ts"() {
    "use strict";
    init_dist2();
    init_helpers();
  }
});

// src/commands/sync/merge.ts
var merge_exports = {};
__export(merge_exports, {
  mergeCommand: () => mergeCommand
});
import chalk8 from "chalk";
import inquirer5 from "inquirer";
function mergeCommand(program2) {
  program2.command("merge").description("\u667A\u80FD\u5408\u5E76\u672C\u5730\u548C\u4E91\u7AEF\u914D\u7F6E").action(async () => {
    try {
      const config = await ensureConfigExists();
      if (!config) {
        console.log(chalk8.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      let syncPassword = config.syncPassword || "";
      if (!syncPassword) {
        const { password } = await inquirer5.prompt([
          {
            type: "password",
            name: "password",
            message: "\u8BF7\u8F93\u5165\u540C\u6B65\u5BC6\u7801:",
            mask: "*",
            validate: (value) => value ? true : "\u540C\u6B65\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A"
          }
        ]);
        syncPassword = password;
      }
      console.log(chalk8.bold("\n\u{1F504} \u667A\u80FD\u5408\u5E76\u914D\u7F6E\n"));
      console.log(chalk8.gray("\u5206\u6790\u672C\u5730\u548C\u4E91\u7AEF\u914D\u7F6E..."));
      const result = await mergeSync(config, syncPassword);
      if (!result.hasChanges) {
        console.log();
        console.log(chalk8.blue("\u2139\uFE0F  \u914D\u7F6E\u5DF2\u540C\u6B65\uFF0C\u65E0\u9700\u64CD\u4F5C\n"));
        return;
      }
      console.log();
      console.log(chalk8.green("\u2705 \u914D\u7F6E\u5DF2\u667A\u80FD\u5408\u5E76\u5E76\u540C\u6B65"));
      console.log();
      if (result.backupPaths.length > 0) {
        console.log(chalk8.gray("\u5907\u4EFD:"));
        result.backupPaths.forEach((path12) => {
          console.log(chalk8.gray(`  ${path12}`));
        });
        console.log();
      }
      console.log(chalk8.blue("\u5408\u5E76\u89C4\u5219:"));
      console.log(chalk8.gray("  \u2022 \u76F8\u540C ID\uFF1A\u4FDD\u7559\u6700\u65B0\u4FEE\u6539"));
      console.log(chalk8.gray("  \u2022 \u76F8\u540C\u914D\u7F6E\uFF08URL+Key\uFF09\uFF1A\u4FDD\u7559\u6700\u65B0\u4FEE\u6539"));
      console.log(chalk8.gray("  \u2022 \u4E0D\u540C\u914D\u7F6E\uFF1A\u5168\u90E8\u4FDD\u7559\uFF0C\u81EA\u52A8\u5904\u7406 name \u51B2\u7A81"));
      console.log();
    } catch (error) {
      console.error(chalk8.red(`
\u274C ${error.message}
`));
    }
  });
}
var init_merge2 = __esm({
  "src/commands/sync/merge.ts"() {
    "use strict";
    init_dist2();
    init_helpers();
  }
});

// src/commands/sync/status.ts
var status_exports = {};
__export(status_exports, {
  statusCommand: () => statusCommand
});
import chalk9 from "chalk";
function statusCommand(program2) {
  program2.command("status").description("\u67E5\u770B\u540C\u6B65\u72B6\u6001").action(async () => {
    try {
      const config = loadSyncConfig();
      console.log(chalk9.bold("\n\u{1F4CA} \u540C\u6B65\u72B6\u6001\n"));
      if (!config) {
        console.log(chalk9.yellow("\u26A0\uFE0F  \u672A\u914D\u7F6E WebDAV \u540C\u6B65"));
        console.log();
        console.log(chalk9.blue("\u{1F4A1} \u5F00\u59CB\u914D\u7F6E: ccman sync config\n"));
        return;
      }
      console.log(chalk9.bold("WebDAV \u914D\u7F6E:"));
      console.log(`  URL: ${chalk9.gray(config.webdavUrl)}`);
      console.log(`  \u7528\u6237: ${chalk9.gray(config.username)}`);
      console.log(`  \u8FDC\u7A0B\u76EE\u5F55: ${chalk9.gray(config.remoteDir)}`);
      console.log(`  \u8BA4\u8BC1: ${chalk9.gray(config.authType === "password" ? "Basic Auth" : "Digest Auth")}`);
      console.log(`  \u540C\u6B65\u5BC6\u7801: ${config.syncPassword ? chalk9.green("\u2713 \u5DF2\u4FDD\u5B58") : chalk9.yellow("\u2717 \u672A\u4FDD\u5B58")}`);
      console.log();
      const codexManager = createCodexManager();
      const claudeManager = createClaudeManager();
      const codexProviders = codexManager.list();
      const claudeProviders = claudeManager.list();
      console.log(chalk9.bold("\u672C\u5730\u914D\u7F6E:"));
      console.log(`  Codex: ${chalk9.cyan(codexProviders.length)} \u4E2A\u670D\u52A1\u5546`);
      console.log(`  Claude: ${chalk9.cyan(claudeProviders.length)} \u4E2A\u670D\u52A1\u5546`);
      if (config.lastSync) {
        const date = new Date(config.lastSync).toLocaleString("zh-CN");
        console.log(`  \u6700\u540E\u540C\u6B65: ${chalk9.gray(date)}`);
      }
      console.log();
      console.log(chalk9.bold("\u540C\u6B65\u5EFA\u8BAE:"));
      console.log(chalk9.blue("  \u{1F4A1} \u4E0A\u4F20\u5230\u4E91\u7AEF: ccman sync upload"));
      console.log(chalk9.blue("  \u{1F4A1} \u4ECE\u4E91\u7AEF\u4E0B\u8F7D: ccman sync download"));
      console.log(chalk9.blue("  \u{1F4A1} \u667A\u80FD\u5408\u5E76: ccman sync merge"));
      console.log();
    } catch (error) {
      console.error(chalk9.red(`
\u274C ${error.message}
`));
    }
  });
}
var init_status = __esm({
  "src/commands/sync/status.ts"() {
    "use strict";
    init_dist2();
    init_sync_config();
  }
});

// src/commands/sync/index.ts
var sync_exports = {};
__export(sync_exports, {
  createSyncCommands: () => createSyncCommands,
  startSyncMenu: () => startSyncMenu
});
import { Command as Command2 } from "commander";
import inquirer6 from "inquirer";
import chalk10 from "chalk";
function createSyncCommands(program2) {
  configCommand(program2);
  testCommand(program2);
  uploadCommand(program2);
  downloadCommand(program2);
  mergeCommand(program2);
  statusCommand(program2);
}
async function startSyncMenu() {
  while (true) {
    console.log();
    const { action } = await inquirer6.prompt([
      {
        type: "list",
        name: "action",
        message: "\u{1F504} \u540C\u6B65\u64CD\u4F5C:",
        choices: [
          { name: "\u2699\uFE0F  \u914D\u7F6E WebDAV \u8FDE\u63A5", value: "config" },
          { name: "\u{1F50D} \u6D4B\u8BD5\u8FDE\u63A5", value: "test" },
          { name: "\u{1F4E4} \u4E0A\u4F20\u5230\u4E91\u7AEF", value: "upload" },
          { name: "\u{1F4E5} \u4ECE\u4E91\u7AEF\u4E0B\u8F7D", value: "download" },
          { name: "\u{1F504} \u667A\u80FD\u5408\u5E76", value: "merge" },
          { name: "\u{1F4CA} \u67E5\u770B\u540C\u6B65\u72B6\u6001", value: "status" },
          { name: "\u2B05\uFE0F  \u8FD4\u56DE\u4E0A\u4E00\u7EA7", value: "back" }
        ]
      }
    ]);
    if (action === "back") {
      break;
    }
    try {
      switch (action) {
        case "config": {
          const { configCommand: configCommand2 } = await Promise.resolve().then(() => (init_config2(), config_exports));
          const cmd = new Command2();
          configCommand2(cmd);
          await cmd.parseAsync(["node", "ccman", "config"]);
          break;
        }
        case "test": {
          const { testCommand: testCommand2 } = await Promise.resolve().then(() => (init_test(), test_exports));
          const cmd = new Command2();
          testCommand2(cmd);
          await cmd.parseAsync(["node", "ccman", "test"]);
          break;
        }
        case "upload": {
          const { uploadCommand: uploadCommand2 } = await Promise.resolve().then(() => (init_upload(), upload_exports));
          const cmd = new Command2();
          uploadCommand2(cmd);
          await cmd.parseAsync(["node", "ccman", "upload"]);
          break;
        }
        case "download": {
          const { downloadCommand: downloadCommand2 } = await Promise.resolve().then(() => (init_download(), download_exports));
          const cmd = new Command2();
          downloadCommand2(cmd);
          await cmd.parseAsync(["node", "ccman", "download"]);
          break;
        }
        case "merge": {
          const { mergeCommand: mergeCommand2 } = await Promise.resolve().then(() => (init_merge2(), merge_exports));
          const cmd = new Command2();
          mergeCommand2(cmd);
          await cmd.parseAsync(["node", "ccman", "merge"]);
          break;
        }
        case "status": {
          const { statusCommand: statusCommand2 } = await Promise.resolve().then(() => (init_status(), status_exports));
          const cmd = new Command2();
          statusCommand2(cmd);
          await cmd.parseAsync(["node", "ccman", "status"]);
          break;
        }
      }
    } catch (error) {
      console.error(chalk10.red(`
\u274C ${error.message}
`));
    }
    await inquirer6.prompt([
      {
        type: "input",
        name: "continue",
        message: "\u6309\u56DE\u8F66\u7EE7\u7EED..."
      }
    ]);
  }
}
var init_sync = __esm({
  "src/commands/sync/index.ts"() {
    "use strict";
    init_config2();
    init_test();
    init_upload();
    init_download();
    init_merge2();
    init_status();
  }
});

// src/index.ts
import { Command as Command3 } from "commander";
import chalk48 from "chalk";

// src/utils/logo.ts
init_dist2();
import chalk from "chalk";
function printLogo() {
  console.log(
    chalk.bold(
      `
   \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2557
  \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551
  \u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551
  \u2588\u2588\u2551     \u2588\u2588\u2551     \u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551
  \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551
   \u255A\u2550\u2550\u2550\u2550\u2550\u255D \u255A\u2550\u2550\u2550\u2550\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D
`
    )
  );
  console.log(chalk.gray("  \u591A\u5DE5\u5177 AI \u670D\u52A1\u5546\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177"));
  console.log(chalk.gray(`  \u7248\u672C ${VERSION}
`));
}

// src/commands/codex/add.ts
init_dist2();
import chalk12 from "chalk";
import inquirer8 from "inquirer";

// src/interactive.ts
init_dist2();
import inquirer7 from "inquirer";
import chalk11 from "chalk";

// src/utils/format.ts
import chalk2 from "chalk";
function formatProviderTable(providers, currentId) {
  const lines = [];
  lines.push("");
  providers.forEach((p, index) => {
    const isCurrent = p.id === currentId;
    const marker = isCurrent ? chalk2.green("\u25CF") : chalk2.gray("\u25CB");
    const name = isCurrent ? chalk2.green.bold(p.name) : chalk2.white(p.name);
    const tag = isCurrent ? chalk2.green(" [\u5F53\u524D]") : "";
    lines.push(`  ${marker}  ${name}${tag}`);
    const url = isCurrent ? chalk2.green(p.baseUrl) : chalk2.gray(p.baseUrl);
    lines.push(`     ${url}`);
    if (p.desc) {
      const desc = isCurrent ? chalk2.green(p.desc) : chalk2.gray(p.desc);
      lines.push(`     ${desc}`);
    }
    if (index < providers.length - 1) {
      lines.push("");
    }
  });
  lines.push("");
  return lines.join("\n");
}

// src/utils/opencode.ts
var DEFAULT_OPENCODE_NPM = "@ai-sdk/openai";
function parseOpenCodeMeta(raw) {
  if (!raw || !raw.trim()) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      return parsed;
    }
  } catch {
    return { npm: raw };
  }
  return null;
}
function buildOpenCodeModel(meta) {
  const payload = {};
  if (meta.npm) payload.npm = meta.npm;
  if (meta.models) payload.models = meta.models;
  return JSON.stringify(payload);
}

// src/interactive.ts
var CLI_TOOL_CONFIG = {
  [TOOL_TYPES.CODEX]: { name: "Codex", emoji: "\u{1F536}", cmd: "cx" },
  [TOOL_TYPES.CLAUDE]: { name: "Claude", emoji: "\u{1F537}", cmd: "cc" },
  [TOOL_TYPES.GEMINI]: { name: "Gemini", emoji: "\u{1F48E}", cmd: "gm" },
  [TOOL_TYPES.OPENCODE]: { name: "OpenCode", emoji: "\u{1F9E9}", cmd: "oc" },
  [TOOL_TYPES.OPENCLAW]: { name: "OpenClaw", emoji: "\u{1F98E}", cmd: "claw" }
};
function getManager(tool) {
  switch (tool) {
    case TOOL_TYPES.CODEX:
      return createCodexManager();
    case TOOL_TYPES.CLAUDE:
      return createClaudeManager();
    case TOOL_TYPES.GEMINI:
      return createGeminiManager();
    case TOOL_TYPES.OPENCODE:
      return createOpenCodeManager();
    case TOOL_TYPES.OPENCLAW:
      return createOpenClawManager();
  }
}
async function promptProviderForm(defaults) {
  const answers = await inquirer7.prompt([
    {
      type: "input",
      name: "name",
      message: "\u670D\u52A1\u5546\u540D\u79F0:",
      default: defaults?.name || void 0,
      validate: (value) => {
        if (!value) return "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";
        return true;
      }
    },
    {
      type: "input",
      name: "desc",
      message: "\u63CF\u8FF0(\u53EF\u9009):",
      default: defaults?.desc || void 0
    },
    {
      type: "input",
      name: "baseUrl",
      message: "API \u5730\u5740:",
      default: defaults?.baseUrl || void 0,
      validate: (value) => {
        if (!value) return "API \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A";
        if (!value.startsWith("http://") && !value.startsWith("https://")) {
          return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
        }
        return true;
      }
    },
    {
      type: "password",
      name: "apiKey",
      message: "API \u5BC6\u94A5:",
      default: defaults?.apiKey || void 0,
      mask: "*",
      validate: (value) => {
        if (!value) return "API \u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A";
        return true;
      }
    }
  ]);
  return {
    name: answers.name,
    desc: answers.desc || void 0,
    baseUrl: answers.baseUrl,
    apiKey: answers.apiKey
  };
}
async function startMainMenu() {
  while (true) {
    console.log();
    const { choice } = await inquirer7.prompt([
      {
        type: "list",
        name: "choice",
        message: "\u8BF7\u9009\u62E9\u64CD\u4F5C:",
        choices: [
          { name: "\u{1F537} Claude \u7BA1\u7406", value: "claude" },
          { name: "\u{1F536} Codex \u7BA1\u7406", value: "codex" },
          { name: "\u{1F48E} Gemini \u7BA1\u7406", value: "gemini" },
          { name: "\u{1F9E9} OpenCode \u7BA1\u7406", value: "opencode" },
          { name: "\u{1F98E} OpenClaw \u7BA1\u7406", value: "openclaw" },
          { name: "\u{1F504} WebDAV \u540C\u6B65", value: "sync" },
          { name: "\u{1F4E6} \u9884\u7F6E\u670D\u52A1\u5546\u7BA1\u7406", value: "presets" },
          { name: "\u274C \u9000\u51FA", value: "exit" }
        ]
      }
    ]);
    if (choice === "exit") {
      console.log(chalk11.gray("\n\u{1F44B} \u518D\u89C1!\n"));
      break;
    }
    if (choice === "claude") {
      await startClaudeMenu();
    } else if (choice === "codex") {
      await startCodexMenu();
    } else if (choice === "gemini") {
      await startGeminiMenu();
    } else if (choice === "opencode") {
      await startOpenCodeMenu();
    } else if (choice === "openclaw") {
      await startOpenClawMenu();
    } else if (choice === "sync") {
      const { startSyncMenu: startSyncMenu2 } = await Promise.resolve().then(() => (init_sync(), sync_exports));
      await startSyncMenu2();
    } else if (choice === "presets") {
      await showPresetsMenu();
    }
  }
}
async function startClaudeMenu() {
  await showToolMenu(TOOL_TYPES.CLAUDE);
}
async function startCodexMenu() {
  await showToolMenu(TOOL_TYPES.CODEX);
}
async function startGeminiMenu() {
  await showToolMenu(TOOL_TYPES.GEMINI);
}
async function startOpenCodeMenu() {
  await showToolMenu(TOOL_TYPES.OPENCODE);
}
async function startOpenClawMenu() {
  await showToolMenu(TOOL_TYPES.OPENCLAW);
}
async function showToolMenu(tool) {
  const { name: toolName, emoji: toolEmoji } = CLI_TOOL_CONFIG[tool];
  while (true) {
    console.log();
    const { action } = await inquirer7.prompt([
      {
        type: "list",
        name: "action",
        message: `${toolEmoji} ${toolName} \u64CD\u4F5C:`,
        choices: [
          { name: "\u2795 \u6DFB\u52A0\u670D\u52A1\u5546", value: "add" },
          { name: "\u{1F504} \u5207\u6362\u670D\u52A1\u5546", value: "switch" },
          { name: "\u{1F4CB} \u5217\u51FA\u6240\u6709\u670D\u52A1\u5546", value: "list" },
          { name: "\u{1F441}\uFE0F  \u67E5\u770B\u5F53\u524D\u670D\u52A1\u5546", value: "current" },
          { name: "\u270F\uFE0F  \u7F16\u8F91\u670D\u52A1\u5546", value: "edit" },
          { name: "\u{1F501} \u514B\u9686\u670D\u52A1\u5546", value: "clone" },
          { name: "\u{1F5D1}\uFE0F  \u5220\u9664\u670D\u52A1\u5546", value: "remove" },
          { name: "\u2B05\uFE0F  \u8FD4\u56DE\u4E0A\u7EA7", value: "back" }
        ]
      }
    ]);
    if (action === "back") {
      break;
    }
    try {
      switch (action) {
        case "add":
          await handleAdd(tool);
          break;
        case "switch":
          await handleSwitch(tool);
          break;
        case "list":
          await handleList(tool);
          break;
        case "current":
          await handleCurrent(tool);
          break;
        case "edit":
          await handleEdit(tool);
          break;
        case "clone":
          await handleClone(tool);
          break;
        case "remove":
          await handleRemove(tool);
          break;
      }
    } catch (error) {
      console.error(chalk11.red(`
\u274C ${error.message}
`));
    }
    await inquirer7.prompt([
      {
        type: "input",
        name: "continue",
        message: "\u6309\u56DE\u8F66\u7EE7\u7EED..."
      }
    ]);
  }
}
async function showPresetsMenu() {
  console.log(chalk11.yellow("\n\u26A0\uFE0F  \u9884\u7F6E\u670D\u52A1\u5546\u7BA1\u7406\u529F\u80FD\u5373\u5C06\u63A8\u51FA\n"));
}
async function handleAdd(tool) {
  const manager = getManager(tool);
  const { name: toolName, cmd } = CLI_TOOL_CONFIG[tool];
  const presets = manager.listPresets();
  console.log(chalk11.bold(`
\u{1F4DD} \u6DFB\u52A0 ${toolName} \u670D\u52A1\u5546
`));
  const { usePreset } = await inquirer7.prompt([
    {
      type: "list",
      name: "usePreset",
      message: "\u9009\u62E9\u914D\u7F6E\u6765\u6E90:",
      choices: [
        { name: "\u{1F4E6} \u4F7F\u7528\u9884\u7F6E\u670D\u52A1\u5546", value: true },
        { name: "\u270F\uFE0F  \u81EA\u5B9A\u4E49\u914D\u7F6E", value: false }
      ]
    }
  ]);
  let name;
  let desc;
  let baseUrl;
  let apiKey;
  if (usePreset) {
    const { presetName } = await inquirer7.prompt([
      {
        type: "list",
        name: "presetName",
        message: "\u9009\u62E9\u9884\u7F6E\u670D\u52A1\u5546:",
        choices: presets.map((p) => ({
          name: `${p.name} - ${p.description}`,
          value: p.name
        }))
      }
    ]);
    const preset = presets.find((p) => p.name === presetName);
    console.log(chalk11.blue(`
\u4F7F\u7528\u9884\u8BBE: ${preset.name} - ${preset.description}
`));
    const input = await promptProviderForm({
      name: preset.name,
      desc: "",
      baseUrl: preset.baseUrl,
      apiKey: ""
    });
    name = input.name;
    desc = input.desc;
    baseUrl = input.baseUrl;
    apiKey = input.apiKey;
  } else {
    const answers = await inquirer7.prompt([
      {
        type: "input",
        name: "name",
        message: "\u670D\u52A1\u5546\u540D\u79F0:",
        validate: (value) => value ? true : "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"
      },
      {
        type: "input",
        name: "baseUrl",
        message: "API \u5730\u5740:",
        validate: (value) => {
          if (!value) return "API \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A";
          if (!value.startsWith("http://") && !value.startsWith("https://")) {
            return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
          }
          return true;
        }
      },
      {
        type: "password",
        name: "apiKey",
        message: "API \u5BC6\u94A5:",
        mask: "*",
        validate: (value) => value ? true : "API \u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A"
      }
    ]);
    name = answers.name;
    desc = void 0;
    baseUrl = answers.baseUrl;
    apiKey = answers.apiKey;
  }
  let model;
  if (tool === TOOL_TYPES.OPENCODE) {
    const { npmPackage } = await inquirer7.prompt([
      {
        type: "input",
        name: "npmPackage",
        message: "\u517C\u5BB9\u5305 (npm):",
        default: DEFAULT_OPENCODE_NPM,
        validate: (value) => value ? true : "npm \u5305\u4E0D\u80FD\u4E3A\u7A7A"
      }
    ]);
    model = buildOpenCodeModel({ npm: npmPackage });
  }
  if (tool === TOOL_TYPES.OPENCLAW) {
    const { defaultModel } = await inquirer7.prompt([
      {
        type: "input",
        name: "defaultModel",
        message: "\u9ED8\u8BA4\u6A21\u578B ID (\u4F8B: gpt-5.3-codex):",
        default: "gpt-4o",
        validate: (value) => value ? true : "\u6A21\u578B ID \u4E0D\u80FD\u4E3A\u7A7A"
      }
    ]);
    model = defaultModel;
  }
  const provider = manager.add({ name, desc, baseUrl, apiKey, model });
  console.log();
  console.log(chalk11.green("\u2705 \u6DFB\u52A0\u6210\u529F"));
  console.log();
  console.log(`  ${chalk11.bold(provider.name)} ${chalk11.blue(`[${toolName}]`)}`);
  console.log(`  ${chalk11.gray(provider.baseUrl)}`);
  console.log();
  const { switchNow } = await inquirer7.prompt([
    {
      type: "confirm",
      name: "switchNow",
      message: "\u662F\u5426\u7ACB\u5373\u5207\u6362\u5230\u6B64\u670D\u52A1\u5546?",
      default: true
    }
  ]);
  if (switchNow) {
    manager.switch(provider.id);
    console.log(chalk11.green("\u2705 \u5DF2\u5207\u6362\u5230\u65B0\u670D\u52A1\u5546\n"));
  } else {
    console.log(chalk11.blue("\u{1F4A1} \u7A0D\u540E\u5207\u6362:") + chalk11.white(` ccman ${cmd} use "${provider.name}"
`));
  }
}
async function handleSwitch(tool) {
  const manager = getManager(tool);
  const providers = manager.list();
  const current = manager.getCurrent();
  if (providers.length === 0) {
    console.log(chalk11.yellow("\n\u26A0\uFE0F  \u6682\u65E0\u670D\u52A1\u5546\n"));
    return;
  }
  const { providerId } = await inquirer7.prompt([
    {
      type: "list",
      name: "providerId",
      message: "\u9009\u62E9\u8981\u5207\u6362\u7684\u670D\u52A1\u5546:",
      choices: providers.map((p) => ({
        name: `${p.name}${current?.id === p.id ? chalk11.green(" (\u5F53\u524D)") : ""}`,
        value: p.id
      }))
    }
  ]);
  manager.switch(providerId);
  const provider = providers.find((p) => p.id === providerId);
  console.log(chalk11.green(`
\u2705 \u5DF2\u5207\u6362\u5230: ${provider.name}
`));
}
async function handleList(tool) {
  const manager = getManager(tool);
  const providers = manager.list();
  const current = manager.getCurrent();
  const { name: toolName } = CLI_TOOL_CONFIG[tool];
  if (providers.length === 0) {
    console.log(chalk11.yellow(`
\u26A0\uFE0F  \u6682\u65E0 ${toolName} \u670D\u52A1\u5546
`));
    return;
  }
  console.log(chalk11.bold(`
\u{1F4CB} ${toolName} \u670D\u52A1\u5546 (${providers.length} \u4E2A)`));
  console.log(formatProviderTable(providers, current?.id));
}
async function handleCurrent(tool) {
  const manager = getManager(tool);
  const current = manager.getCurrent();
  const { name: toolName } = CLI_TOOL_CONFIG[tool];
  if (!current) {
    console.log(chalk11.yellow(`
\u26A0\uFE0F  \u672A\u9009\u62E9\u4EFB\u4F55 ${toolName} \u670D\u52A1\u5546
`));
    return;
  }
  console.log(chalk11.bold(`
\u{1F441}\uFE0F  \u5F53\u524D ${toolName} \u670D\u52A1\u5546
`));
  console.log(`  ${chalk11.green.bold(current.name)}`);
  console.log(`  ${chalk11.gray(current.baseUrl)}`);
  if (current.lastUsedAt) {
    const date = new Date(current.lastUsedAt).toLocaleString("zh-CN");
    console.log(`  ${chalk11.gray(`\u6700\u540E\u4F7F\u7528: ${date}`)}`);
  }
  console.log();
}
async function handleEdit(tool) {
  const manager = getManager(tool);
  const providers = manager.list();
  if (providers.length === 0) {
    console.log(chalk11.yellow("\n\u26A0\uFE0F  \u6682\u65E0\u670D\u52A1\u5546\n"));
    return;
  }
  const { providerId } = await inquirer7.prompt([
    {
      type: "list",
      name: "providerId",
      message: "\u9009\u62E9\u8981\u7F16\u8F91\u7684\u670D\u52A1\u5546:",
      choices: providers.map((p) => ({
        name: p.name,
        value: p.id
      }))
    }
  ]);
  const provider = providers.find((p) => p.id === providerId);
  const meta = tool === TOOL_TYPES.OPENCODE ? parseOpenCodeMeta(provider.model) : null;
  const currentNpm = meta?.npm || DEFAULT_OPENCODE_NPM;
  const answers = await inquirer7.prompt([
    {
      type: "input",
      name: "name",
      message: "\u670D\u52A1\u5546\u540D\u79F0:",
      default: provider.name,
      validate: (value) => value ? true : "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"
    },
    {
      type: "input",
      name: "baseUrl",
      message: "API \u5730\u5740:",
      default: provider.baseUrl,
      validate: (value) => {
        if (!value) return "API \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A";
        if (!value.startsWith("http://") && !value.startsWith("https://")) {
          return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
        }
        return true;
      }
    },
    {
      type: "input",
      name: "desc",
      message: "\u63CF\u8FF0(\u53EF\u9009):",
      default: provider.desc || ""
    },
    {
      type: "password",
      name: "apiKey",
      message: "API \u5BC6\u94A5 (\u7559\u7A7A\u4E0D\u4FEE\u6539):",
      mask: "*"
    }
  ]);
  let model;
  if (tool === TOOL_TYPES.OPENCODE) {
    const { npmPackage } = await inquirer7.prompt([
      {
        type: "input",
        name: "npmPackage",
        message: "\u517C\u5BB9\u5305 (npm):",
        default: currentNpm,
        validate: (value) => value ? true : "npm \u5305\u4E0D\u80FD\u4E3A\u7A7A"
      }
    ]);
    model = buildOpenCodeModel({ npm: npmPackage, models: meta?.models });
  }
  if (tool === TOOL_TYPES.OPENCLAW) {
    const { defaultModel } = await inquirer7.prompt([
      {
        type: "input",
        name: "defaultModel",
        message: "\u9ED8\u8BA4\u6A21\u578B ID (\u4F8B: gpt-5.3-codex):",
        default: provider.model || "gpt-4o",
        validate: (value) => value ? true : "\u6A21\u578B ID \u4E0D\u80FD\u4E3A\u7A7A"
      }
    ]);
    model = defaultModel;
  }
  manager.edit(providerId, {
    name: answers.name,
    desc: answers.desc || void 0,
    baseUrl: answers.baseUrl,
    apiKey: answers.apiKey || void 0,
    model
  });
  console.log(chalk11.green("\n\u2705 \u7F16\u8F91\u6210\u529F\n"));
}
async function handleClone(tool) {
  const manager = getManager(tool);
  const providers = manager.list();
  if (providers.length === 0) {
    console.log(chalk11.yellow("\n\u26A0\uFE0F  \u6682\u65E0\u670D\u52A1\u5546\n"));
    return;
  }
  const { providerId } = await inquirer7.prompt([
    {
      type: "list",
      name: "providerId",
      message: "\u9009\u62E9\u8981\u514B\u9686\u7684\u670D\u52A1\u5546:",
      choices: providers.map((p) => ({
        name: p.name,
        value: p.id
      }))
    }
  ]);
  const provider = providers.find((p) => p.id === providerId);
  const meta = tool === TOOL_TYPES.OPENCODE ? parseOpenCodeMeta(provider.model) : null;
  const currentNpm = meta?.npm || DEFAULT_OPENCODE_NPM;
  const answers = await inquirer7.prompt([
    {
      type: "input",
      name: "name",
      message: "\u65B0\u670D\u52A1\u5546\u540D\u79F0:",
      default: `${provider.name}\uFF08\u526F\u672C\uFF09`,
      validate: (value) => value ? true : "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"
    },
    {
      type: "password",
      name: "apiKey",
      message: "API \u5BC6\u94A5:",
      mask: "*",
      validate: (value) => value ? true : "API \u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A"
    }
  ]);
  let model;
  if (tool === TOOL_TYPES.OPENCODE) {
    const { npmPackage } = await inquirer7.prompt([
      {
        type: "input",
        name: "npmPackage",
        message: "\u517C\u5BB9\u5305 (npm):",
        default: currentNpm,
        validate: (value) => value ? true : "npm \u5305\u4E0D\u80FD\u4E3A\u7A7A"
      }
    ]);
    model = buildOpenCodeModel({ npm: npmPackage, models: meta?.models });
  }
  if (tool === TOOL_TYPES.OPENCLAW) {
    const { defaultModel } = await inquirer7.prompt([
      {
        type: "input",
        name: "defaultModel",
        message: "\u9ED8\u8BA4\u6A21\u578B ID (\u4F8B: gpt-5.3-codex):",
        default: provider.model || "gpt-4o",
        validate: (value) => value ? true : "\u6A21\u578B ID \u4E0D\u80FD\u4E3A\u7A7A"
      }
    ]);
    model = defaultModel;
  }
  const newProvider = manager.add({
    name: answers.name,
    // 克隆时不继承描述,留空让用户后续编辑
    desc: void 0,
    baseUrl: provider.baseUrl,
    apiKey: answers.apiKey,
    model
  });
  console.log(chalk11.green("\n\u2705 \u514B\u9686\u6210\u529F\n"));
  console.log(`  ${chalk11.bold(newProvider.name)}`);
  console.log(`  ${chalk11.gray(newProvider.baseUrl)}`);
  console.log();
}
async function handleRemove(tool) {
  const manager = getManager(tool);
  const providers = manager.list();
  if (providers.length === 0) {
    console.log(chalk11.yellow("\n\u26A0\uFE0F  \u6682\u65E0\u670D\u52A1\u5546\n"));
    return;
  }
  const { providerId } = await inquirer7.prompt([
    {
      type: "list",
      name: "providerId",
      message: "\u9009\u62E9\u8981\u5220\u9664\u7684\u670D\u52A1\u5546:",
      choices: providers.map((p) => ({
        name: p.name,
        value: p.id
      }))
    }
  ]);
  const provider = providers.find((p) => p.id === providerId);
  const { confirm } = await inquirer7.prompt([
    {
      type: "confirm",
      name: "confirm",
      message: `\u786E\u5B9A\u8981\u5220\u9664 "${provider.name}" \u5417?`,
      default: false
    }
  ]);
  if (confirm) {
    manager.remove(providerId);
    console.log(chalk11.green(`
\u2705 \u5DF2\u5220\u9664: ${provider.name}
`));
  } else {
    console.log(chalk11.gray("\n\u274C \u5DF2\u53D6\u6D88\n"));
  }
}

// src/commands/codex/add.ts
function addCommand(program2) {
  program2.command("add").description("\u6DFB\u52A0\u65B0\u7684 Codex \u670D\u52A1\u5546(\u4EA4\u4E92\u5F0F)").action(async () => {
    try {
      const manager = createCodexManager();
      console.log(chalk12.bold("\n\u{1F4DD} \u6DFB\u52A0 Codex \u670D\u52A1\u5546\n"));
      const { usePreset } = await inquirer8.prompt([
        {
          type: "list",
          name: "usePreset",
          message: "\u9009\u62E9\u914D\u7F6E\u6765\u6E90:",
          choices: [
            { name: "\u{1F4E6} \u4F7F\u7528\u9884\u7F6E\u670D\u52A1\u5546", value: true },
            { name: "\u270F\uFE0F  \u81EA\u5B9A\u4E49\u914D\u7F6E", value: false }
          ]
        }
      ]);
      let name;
      let desc;
      let baseUrl;
      let apiKey;
      if (usePreset) {
        const { presetName } = await inquirer8.prompt([
          {
            type: "list",
            name: "presetName",
            message: "\u9009\u62E9\u9884\u7F6E\u670D\u52A1\u5546:",
            choices: CODEX_PRESETS.map((p) => ({
              name: `${p.name} - ${p.description}`,
              value: p.name
            }))
          }
        ]);
        const preset = CODEX_PRESETS.find((p) => p.name === presetName);
        console.log(chalk12.blue(`
\u4F7F\u7528\u9884\u8BBE: ${preset.name} - ${preset.description}
`));
        const input = await promptProviderForm({
          name: preset.name,
          desc: "",
          baseUrl: preset.baseUrl,
          apiKey: ""
        });
        name = input.name;
        desc = input.desc;
        baseUrl = input.baseUrl;
        apiKey = input.apiKey;
      } else {
        const answers = await inquirer8.prompt([
          {
            type: "input",
            name: "name",
            message: "\u670D\u52A1\u5546\u540D\u79F0:",
            validate: (value) => {
              if (!value) return "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "baseUrl",
            message: "API \u5730\u5740:",
            validate: (value) => {
              if (!value) return "API \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A";
              if (!value.startsWith("http://") && !value.startsWith("https://")) {
                return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
              }
              return true;
            }
          },
          {
            type: "password",
            name: "apiKey",
            message: "API \u5BC6\u94A5:",
            mask: "*",
            validate: (value) => {
              if (!value) return "API \u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          }
        ]);
        name = answers.name;
        desc = void 0;
        baseUrl = answers.baseUrl;
        apiKey = answers.apiKey;
      }
      const provider = manager.add({ name, desc, baseUrl, apiKey });
      console.log();
      console.log(chalk12.green("\u2705 \u6DFB\u52A0\u6210\u529F"));
      console.log();
      console.log(`  ${chalk12.bold(provider.name)} ${chalk12.blue("[Codex]")}`);
      console.log(`  ${chalk12.gray(provider.baseUrl)}`);
      console.log();
      const { switchNow } = await inquirer8.prompt([
        {
          type: "confirm",
          name: "switchNow",
          message: "\u662F\u5426\u7ACB\u5373\u5207\u6362\u5230\u6B64\u670D\u52A1\u5546?",
          default: true
        }
      ]);
      if (switchNow) {
        manager.switch(provider.id);
        console.log(chalk12.green("\u2705 \u5DF2\u5207\u6362\u5230\u65B0\u670D\u52A1\u5546"));
        console.log();
        console.log(chalk12.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
        console.log(chalk12.gray(`  - ${getCodexConfigPath()}`));
        console.log(chalk12.gray(`  - ${getCodexAuthPath()}`));
      } else {
        console.log(chalk12.blue("\u{1F4A1} \u7A0D\u540E\u5207\u6362:") + chalk12.white(` ccman cx use "${provider.name}"`));
      }
    } catch (error) {
      console.error(chalk12.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/codex/list.ts
init_dist2();
import chalk13 from "chalk";
function listCommand(program2) {
  program2.command("list").alias("ls").description("\u5217\u51FA\u6240\u6709 Codex \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createCodexManager();
      const providers = manager.list();
      const current = manager.getCurrent();
      if (providers.length === 0) {
        console.log(chalk13.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Codex \u670D\u52A1\u5546\n"));
        console.log(chalk13.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk13.white(" ccman cx add\n"));
        return;
      }
      console.log(chalk13.bold(`
\u{1F4CB} Codex \u670D\u52A1\u5546 (${providers.length} \u4E2A)`));
      console.log(formatProviderTable(providers, current?.id));
    } catch (error) {
      console.error(chalk13.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/codex/use.ts
init_dist2();
import chalk14 from "chalk";
import inquirer9 from "inquirer";
function useCommand(program2) {
  program2.command("use [name]").description("\u5207\u6362 Codex \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createCodexManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk14.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Codex \u670D\u52A1\u5546\n"));
        console.log(chalk14.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk14.white(" ccman cx add\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer9.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5207\u6362\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      manager.switch(targetId);
      const provider = manager.get(targetId);
      console.log();
      console.log(chalk14.green("\u2705 \u5207\u6362\u6210\u529F"));
      console.log();
      console.log(`  ${chalk14.bold(provider.name)} ${chalk14.blue("[Codex]")}`);
      console.log(`  ${chalk14.gray(`URL: ${provider.baseUrl}`)}`);
      console.log();
      console.log(chalk14.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
      console.log(chalk14.gray(`  - ${getCodexConfigPath()}`));
      console.log(chalk14.gray(`  - ${getCodexAuthPath()}`));
      console.log();
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk14.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${error.message}
`));
        console.log(chalk14.blue("\u{1F4A1} \u67E5\u770B\u6240\u6709\u670D\u52A1\u5546:") + chalk14.white(" ccman cx list\n"));
      } else {
        console.error(chalk14.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/codex/current.ts
init_dist2();
import chalk15 from "chalk";
function currentCommand(program2) {
  program2.command("current").description("\u663E\u793A\u5F53\u524D\u4F7F\u7528\u7684 Codex \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createCodexManager();
      const current = manager.getCurrent();
      if (!current) {
        console.log(chalk15.yellow("\n\u26A0\uFE0F  \u672A\u9009\u62E9\u4EFB\u4F55 Codex \u670D\u52A1\u5546\n"));
        console.log(chalk15.blue("\u{1F4A1} \u9009\u62E9\u670D\u52A1\u5546:") + chalk15.white(" ccman cx use\n"));
        return;
      }
      console.log(chalk15.bold("\n\u{1F4CD} \u5F53\u524D Codex \u670D\u52A1\u5546\n"));
      console.log(`  ${chalk15.green.bold(current.name)}`);
      console.log(`  ${chalk15.gray(`ID: ${current.id}`)}`);
      console.log(`  ${chalk15.gray(`URL: ${current.baseUrl}`)}`);
      if (current.lastUsedAt) {
        const date = new Date(current.lastUsedAt).toLocaleString("zh-CN");
        console.log(`  ${chalk15.gray(`\u6700\u540E\u4F7F\u7528: ${date}`)}`);
      }
      console.log();
    } catch (error) {
      console.error(chalk15.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/codex/remove.ts
init_dist2();
import chalk16 from "chalk";
import inquirer10 from "inquirer";
function removeCommand(program2) {
  program2.command("remove [name]").alias("rm").description("\u5220\u9664 Codex \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createCodexManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk16.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Codex \u670D\u52A1\u5546\n"));
        return;
      }
      let targetId;
      let targetName;
      if (name) {
        const provider = manager.findByName(name);
        if (!provider) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider.id;
        targetName = provider.name;
      } else {
        const { selectedId } = await inquirer10.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5220\u9664\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        const provider = manager.get(selectedId);
        targetId = selectedId;
        targetName = provider.name;
      }
      const { confirmed } = await inquirer10.prompt([
        {
          type: "confirm",
          name: "confirmed",
          message: `\u786E\u5B9A\u5220\u9664 "${targetName}"?`,
          default: false
        }
      ]);
      if (!confirmed) {
        console.log(chalk16.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      manager.remove(targetId);
      console.log();
      console.log(chalk16.green(`\u2705 \u5DF2\u5220\u9664: ${targetName}`));
      console.log();
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk16.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728
`));
        console.log(chalk16.blue("\u{1F4A1} \u67E5\u770B\u6240\u6709\u670D\u52A1\u5546:") + chalk16.white(" ccman cx list\n"));
      } else {
        console.error(chalk16.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/codex/edit.ts
init_dist2();
import chalk17 from "chalk";
import inquirer11 from "inquirer";
function editCommand(program2) {
  program2.command("edit [name]").description("\u7F16\u8F91 Codex \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createCodexManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk17.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Codex \u670D\u52A1\u5546\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer11.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u7F16\u8F91\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      const provider = manager.get(targetId);
      console.log(chalk17.bold("\n\u270F\uFE0F  \u7F16\u8F91\u670D\u52A1\u5546\n"));
      console.log(chalk17.gray("\u63D0\u793A: \u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C\n"));
      const answers = await inquirer11.prompt([
        {
          type: "input",
          name: "name",
          message: "\u670D\u52A1\u5546\u540D\u79F0:",
          default: provider.name
        },
        {
          type: "input",
          name: "baseUrl",
          message: "API \u5730\u5740:",
          default: provider.baseUrl,
          validate: (value) => {
            if (value && !value.startsWith("http://") && !value.startsWith("https://")) {
              return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
            }
            return true;
          }
        },
        {
          type: "password",
          name: "apiKey",
          message: "API \u5BC6\u94A5 (\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8):",
          mask: "*"
        }
      ]);
      const updates = {};
      if (answers.name && answers.name !== provider.name) updates.name = answers.name;
      if (answers.baseUrl && answers.baseUrl !== provider.baseUrl) updates.baseUrl = answers.baseUrl;
      if (answers.apiKey) updates.apiKey = answers.apiKey;
      if (Object.keys(updates).length === 0) {
        console.log(chalk17.gray("\n\u672A\u505A\u4EFB\u4F55\u4FEE\u6539\n"));
        return;
      }
      const updated = manager.edit(targetId, updates);
      console.log();
      console.log(chalk17.green("\u2705 \u7F16\u8F91\u6210\u529F"));
      console.log();
      console.log(`  ${chalk17.bold(updated.name)} ${chalk17.blue("[Codex]")}`);
      console.log(`  ${chalk17.gray(`ID: ${updated.id}`)}`);
      console.log(`  ${chalk17.gray(`URL: ${updated.baseUrl}`)}`);
      console.log();
    } catch (error) {
      console.error(chalk17.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/codex/clone.ts
init_dist2();
import chalk18 from "chalk";
import inquirer12 from "inquirer";
function cloneCommand(program2) {
  program2.command("clone [source-name] [new-name]").description("\u514B\u9686 Codex \u670D\u52A1\u5546").action(async (sourceName, newName) => {
    try {
      const manager = createCodexManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk18.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Codex \u670D\u52A1\u5546\n"));
        return;
      }
      let sourceId;
      if (sourceName) {
        const provider = manager.findByName(sourceName);
        if (!provider) {
          throw new ProviderNotFoundError(sourceName);
        }
        sourceId = provider.id;
      } else {
        const { selectedId } = await inquirer12.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u514B\u9686\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        sourceId = selectedId;
      }
      const source = manager.get(sourceId);
      let cloned;
      if (newName) {
        cloned = manager.clone(sourceId, newName);
      } else {
        console.log(chalk18.blue(`
\u514B\u9686\u81EA: ${source.name}
`));
        const input = await promptProviderForm({
          name: `${source.name}\uFF08\u526F\u672C\uFF09`,
          // 克隆时不继承描述
          desc: "",
          baseUrl: source.baseUrl,
          apiKey: source.apiKey
        });
        cloned = manager.add(input);
      }
      console.log();
      console.log(chalk18.green("\u2705 \u514B\u9686\u6210\u529F"));
      console.log();
      console.log(`  ${chalk18.bold(cloned.name)} ${chalk18.blue("[Codex]")}`);
      console.log(`  ${chalk18.gray(`ID: ${cloned.id}`)}`);
      console.log(`  ${chalk18.gray(`URL: ${cloned.baseUrl}`)}`);
      console.log();
    } catch (error) {
      console.error(chalk18.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/codex/index.ts
function createCodexCommands(program2) {
  addCommand(program2);
  listCommand(program2);
  useCommand(program2);
  currentCommand(program2);
  removeCommand(program2);
  editCommand(program2);
  cloneCommand(program2);
}

// src/commands/claude/add.ts
init_dist2();
import chalk19 from "chalk";
import inquirer13 from "inquirer";
function addCommand2(program2) {
  program2.command("add").description("\u6DFB\u52A0\u65B0\u7684 Claude Code \u670D\u52A1\u5546(\u4EA4\u4E92\u5F0F)").action(async () => {
    try {
      const manager = createClaudeManager();
      console.log(chalk19.bold("\n\u{1F4DD} \u6DFB\u52A0 Claude Code \u670D\u52A1\u5546\n"));
      const { usePreset } = await inquirer13.prompt([
        {
          type: "list",
          name: "usePreset",
          message: "\u9009\u62E9\u914D\u7F6E\u6765\u6E90:",
          choices: [
            { name: "\u{1F4E6} \u4F7F\u7528\u9884\u7F6E\u670D\u52A1\u5546", value: true },
            { name: "\u270F\uFE0F  \u81EA\u5B9A\u4E49\u914D\u7F6E", value: false }
          ]
        }
      ]);
      let name;
      let desc;
      let baseUrl;
      let apiKey;
      if (usePreset) {
        const { presetName } = await inquirer13.prompt([
          {
            type: "list",
            name: "presetName",
            message: "\u9009\u62E9\u9884\u7F6E\u670D\u52A1\u5546:",
            choices: CC_PRESETS.map((p) => ({
              name: `${p.name} - ${p.description}`,
              value: p.name
            }))
          }
        ]);
        const preset = CC_PRESETS.find((p) => p.name === presetName);
        console.log(chalk19.blue(`
\u4F7F\u7528\u9884\u8BBE: ${preset.name} - ${preset.description}
`));
        const input = await promptProviderForm({
          name: preset.name,
          desc: "",
          baseUrl: preset.baseUrl,
          apiKey: ""
        });
        name = input.name;
        desc = input.desc;
        baseUrl = input.baseUrl;
        apiKey = input.apiKey;
      } else {
        const answers = await inquirer13.prompt([
          {
            type: "input",
            name: "name",
            message: "\u670D\u52A1\u5546\u540D\u79F0:",
            validate: (value) => {
              if (!value) return "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "baseUrl",
            message: "API \u5730\u5740:",
            validate: (value) => {
              if (!value) return "API \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A";
              if (!value.startsWith("http://") && !value.startsWith("https://")) {
                return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
              }
              return true;
            }
          },
          {
            type: "password",
            name: "apiKey",
            message: "API \u5BC6\u94A5:",
            mask: "*",
            validate: (value) => {
              if (!value) return "API \u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          }
        ]);
        name = answers.name;
        desc = void 0;
        baseUrl = answers.baseUrl;
        apiKey = answers.apiKey;
      }
      const provider = manager.add({ name, desc, baseUrl, apiKey });
      console.log();
      console.log(chalk19.green("\u2705 \u6DFB\u52A0\u6210\u529F"));
      console.log();
      console.log(`  ${chalk19.bold(provider.name)} ${chalk19.blue("[Claude Code]")}`);
      console.log(`  ${chalk19.gray(provider.baseUrl)}`);
      console.log();
      const { switchNow } = await inquirer13.prompt([
        {
          type: "confirm",
          name: "switchNow",
          message: "\u662F\u5426\u7ACB\u5373\u5207\u6362\u5230\u6B64\u670D\u52A1\u5546?",
          default: true
        }
      ]);
      if (switchNow) {
        manager.switch(provider.id);
        console.log(chalk19.green("\u2705 \u5DF2\u5207\u6362\u5230\u65B0\u670D\u52A1\u5546"));
        console.log();
        console.log(chalk19.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
        console.log(chalk19.gray(`  - ${getClaudeConfigPath()}`));
      } else {
        console.log(chalk19.blue("\u{1F4A1} \u7A0D\u540E\u5207\u6362:") + chalk19.white(` ccman cc use "${provider.name}"`));
      }
    } catch (error) {
      console.error(chalk19.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/claude/list.ts
init_dist2();
import chalk20 from "chalk";
function listCommand2(program2) {
  program2.command("list").alias("ls").description("\u5217\u51FA\u6240\u6709 Claude Code \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createClaudeManager();
      const providers = manager.list();
      const current = manager.getCurrent();
      if (providers.length === 0) {
        console.log(chalk20.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Claude Code \u670D\u52A1\u5546\n"));
        console.log(chalk20.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk20.white(" ccman cc add\n"));
        return;
      }
      console.log(chalk20.bold(`
\u{1F4CB} Claude Code \u670D\u52A1\u5546 (${providers.length} \u4E2A)`));
      console.log(formatProviderTable(providers, current?.id));
    } catch (error) {
      console.error(chalk20.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/claude/use.ts
init_dist2();
import chalk21 from "chalk";
import inquirer14 from "inquirer";
function useCommand2(program2) {
  program2.command("use [name]").description("\u5207\u6362 Claude Code \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createClaudeManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk21.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Claude Code \u670D\u52A1\u5546\n"));
        console.log(chalk21.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk21.white(" ccman cc add\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer14.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5207\u6362\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      manager.switch(targetId);
      const provider = manager.get(targetId);
      console.log();
      console.log(chalk21.green("\u2705 \u5207\u6362\u6210\u529F"));
      console.log();
      console.log(`  ${chalk21.bold(provider.name)} ${chalk21.blue("[Claude Code]")}`);
      console.log(`  ${chalk21.gray(`URL: ${provider.baseUrl}`)}`);
      console.log();
      console.log(chalk21.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
      console.log(chalk21.gray(`  - ${getClaudeConfigPath()}`));
      console.log();
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk21.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${error.message}
`));
        console.log(chalk21.blue("\u{1F4A1} \u67E5\u770B\u6240\u6709\u670D\u52A1\u5546:") + chalk21.white(" ccman cc list\n"));
      } else {
        console.error(chalk21.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/claude/current.ts
init_dist2();
import chalk22 from "chalk";
function currentCommand2(program2) {
  program2.command("current").description("\u663E\u793A\u5F53\u524D\u4F7F\u7528\u7684 Claude Code \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createClaudeManager();
      const current = manager.getCurrent();
      if (!current) {
        console.log(chalk22.yellow("\n\u26A0\uFE0F  \u672A\u9009\u62E9\u4EFB\u4F55 Claude Code \u670D\u52A1\u5546\n"));
        console.log(chalk22.blue("\u{1F4A1} \u9009\u62E9\u670D\u52A1\u5546:") + chalk22.white(" ccman cc use\n"));
        return;
      }
      console.log(chalk22.bold("\n\u{1F4CD} \u5F53\u524D Claude Code \u670D\u52A1\u5546\n"));
      console.log(`  ${chalk22.green.bold(current.name)}`);
      console.log(`  ${chalk22.gray(`ID: ${current.id}`)}`);
      console.log(`  ${chalk22.gray(`URL: ${current.baseUrl}`)}`);
      if (current.lastUsedAt) {
        const date = new Date(current.lastUsedAt).toLocaleString("zh-CN");
        console.log(`  ${chalk22.gray(`\u6700\u540E\u4F7F\u7528: ${date}`)}`);
      }
      console.log();
    } catch (error) {
      console.error(chalk22.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/claude/remove.ts
init_dist2();
import chalk23 from "chalk";
import inquirer15 from "inquirer";
function removeCommand2(program2) {
  program2.command("remove [name]").alias("rm").description("\u5220\u9664 Claude Code \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createClaudeManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk23.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Claude Code \u670D\u52A1\u5546\n"));
        return;
      }
      let targetId;
      let targetName;
      if (name) {
        const provider = manager.findByName(name);
        if (!provider) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider.id;
        targetName = provider.name;
      } else {
        const { selectedId } = await inquirer15.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5220\u9664\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        const provider = manager.get(selectedId);
        targetId = selectedId;
        targetName = provider.name;
      }
      const { confirmed } = await inquirer15.prompt([
        {
          type: "confirm",
          name: "confirmed",
          message: `\u786E\u5B9A\u5220\u9664 "${targetName}"?`,
          default: false
        }
      ]);
      if (!confirmed) {
        console.log(chalk23.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      manager.remove(targetId);
      console.log();
      console.log(chalk23.green(`\u2705 \u5DF2\u5220\u9664: ${targetName}`));
      console.log();
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk23.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728
`));
        console.log(chalk23.blue("\u{1F4A1} \u67E5\u770B\u6240\u6709\u670D\u52A1\u5546:") + chalk23.white(" ccman cc list\n"));
      } else {
        console.error(chalk23.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/claude/edit.ts
init_dist2();
import chalk24 from "chalk";
import inquirer16 from "inquirer";
function editCommand2(program2) {
  program2.command("edit [name]").description("\u7F16\u8F91 Claude Code \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createClaudeManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk24.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Claude Code \u670D\u52A1\u5546\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer16.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u7F16\u8F91\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      const provider = manager.get(targetId);
      console.log(chalk24.bold("\n\u270F\uFE0F  \u7F16\u8F91\u670D\u52A1\u5546\n"));
      console.log(chalk24.gray("\u63D0\u793A: \u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C\n"));
      const answers = await inquirer16.prompt([
        {
          type: "input",
          name: "name",
          message: "\u670D\u52A1\u5546\u540D\u79F0:",
          default: provider.name
        },
        {
          type: "input",
          name: "baseUrl",
          message: "API \u5730\u5740:",
          default: provider.baseUrl,
          validate: (value) => {
            if (value && !value.startsWith("http://") && !value.startsWith("https://")) {
              return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
            }
            return true;
          }
        },
        {
          type: "password",
          name: "apiKey",
          message: "API \u5BC6\u94A5 (\u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8):",
          mask: "*"
        }
      ]);
      const updates = {};
      if (answers.name && answers.name !== provider.name) updates.name = answers.name;
      if (answers.baseUrl && answers.baseUrl !== provider.baseUrl) updates.baseUrl = answers.baseUrl;
      if (answers.apiKey) updates.apiKey = answers.apiKey;
      if (Object.keys(updates).length === 0) {
        console.log(chalk24.gray("\n\u672A\u505A\u4EFB\u4F55\u4FEE\u6539\n"));
        return;
      }
      const updated = manager.edit(targetId, updates);
      console.log();
      console.log(chalk24.green("\u2705 \u7F16\u8F91\u6210\u529F"));
      console.log();
      console.log(`  ${chalk24.bold(updated.name)} ${chalk24.blue("[Claude Code]")}`);
      console.log(`  ${chalk24.gray(`ID: ${updated.id}`)}`);
      console.log(`  ${chalk24.gray(`URL: ${updated.baseUrl}`)}`);
      console.log();
    } catch (error) {
      console.error(chalk24.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/claude/clone.ts
init_dist2();
import chalk25 from "chalk";
import inquirer17 from "inquirer";
function cloneCommand2(program2) {
  program2.command("clone [source-name] [new-name]").description("\u514B\u9686 Claude Code \u670D\u52A1\u5546").action(async (sourceName, newName) => {
    try {
      const manager = createClaudeManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk25.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Claude Code \u670D\u52A1\u5546\n"));
        return;
      }
      let sourceId;
      if (sourceName) {
        const provider = manager.findByName(sourceName);
        if (!provider) {
          throw new ProviderNotFoundError(sourceName);
        }
        sourceId = provider.id;
      } else {
        const { selectedId } = await inquirer17.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u514B\u9686\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        sourceId = selectedId;
      }
      const source = manager.get(sourceId);
      let cloned;
      if (newName) {
        cloned = manager.clone(sourceId, newName);
      } else {
        console.log(chalk25.blue(`
\u514B\u9686\u81EA: ${source.name}
`));
        const input = await promptProviderForm({
          name: `${source.name}\uFF08\u526F\u672C\uFF09`,
          // 克隆时不继承描述
          desc: "",
          baseUrl: source.baseUrl,
          apiKey: source.apiKey
        });
        cloned = manager.add(input);
      }
      console.log();
      console.log(chalk25.green("\u2705 \u514B\u9686\u6210\u529F"));
      console.log();
      console.log(`  ${chalk25.bold(cloned.name)} ${chalk25.blue("[Claude Code]")}`);
      console.log(`  ${chalk25.gray(`ID: ${cloned.id}`)}`);
      console.log(`  ${chalk25.gray(`URL: ${cloned.baseUrl}`)}`);
      console.log();
    } catch (error) {
      console.error(chalk25.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/clean.ts
init_dist2();
import chalk26 from "chalk";
import inquirer18 from "inquirer";
function formatBytes2(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function displayAnalysis() {
  try {
    console.log(chalk26.bold("\n\u{1F4CA} \u5206\u6790 ~/.claude.json\n"));
    const analysis = analyzeClaudeJson();
    console.log(chalk26.cyan("\u6587\u4EF6\u5927\u5C0F:"), chalk26.bold(analysis.fileSizeFormatted));
    console.log();
    console.log(chalk26.cyan("\u9879\u76EE\u7EDF\u8BA1:"));
    console.log(`  \u9879\u76EE\u603B\u6570: ${chalk26.bold(analysis.projectCount)}`);
    console.log(`  \u5386\u53F2\u8BB0\u5F55\u603B\u6570: ${chalk26.bold(analysis.totalHistoryCount)} \u6761`);
    console.log();
    console.log(chalk26.cyan("\u5386\u53F2\u8BB0\u5F55\u6700\u591A\u7684\u9879\u76EE:"));
    const top5 = analysis.projectHistory.slice(0, 5);
    for (const project of top5) {
      const displayPath = project.path.length > 50 ? "..." + project.path.slice(-47) : project.path;
      console.log(`  ${chalk26.bold(project.count.toString().padStart(3))} \u6761  ${displayPath}`);
    }
    console.log();
    console.log(chalk26.cyan("\u9884\u8BA1\u53EF\u8282\u7701\u7A7A\u95F4:"));
    console.log(`  ${chalk26.green("\u4FDD\u5B88\u6E05\u7406")} (\u4FDD\u755910\u6761): ${chalk26.bold(formatBytes2(analysis.estimatedSavings.conservative))}`);
    console.log(`  ${chalk26.yellow("\u4E2D\u7B49\u6E05\u7406")} (\u4FDD\u75595\u6761):  ${chalk26.bold(formatBytes2(analysis.estimatedSavings.moderate))}`);
    console.log(`  ${chalk26.red("\u6FC0\u8FDB\u6E05\u7406")} (\u6E05\u7A7A\u5386\u53F2):  ${chalk26.bold(formatBytes2(analysis.estimatedSavings.aggressive))}`);
    console.log();
    console.log(chalk26.blue(`\u{1F4A1} \u6267\u884C\u6E05\u7406: ccman cc clean
`));
  } catch (error) {
    console.error(chalk26.red(`
\u274C ${error.message}
`));
    process.exit(1);
  }
}
function cleanAnalyzeCommand(program2) {
  program2.command("clean:analyze").description("\u5206\u6790 ~/.claude.json \u6587\u4EF6\u5927\u5C0F\u548C\u5360\u7528").action(() => {
    displayAnalysis();
  });
}
function cleanCommand(program2) {
  program2.command("clean").description("\u6E05\u7406 ~/.claude.json \u6587\u4EF6\uFF08\u5386\u53F2\u8BB0\u5F55\u3001\u7F13\u5B58\u7B49\uFF09").option("--preset <type>", "\u4F7F\u7528\u9884\u8BBE\u65B9\u6848 (conservative|moderate|aggressive)").option("--keep <count>", "\u4FDD\u7559\u6700\u8FD1N\u6761\u5386\u53F2\u8BB0\u5F55").option("--cache", "\u6E05\u7406\u7F13\u5B58\u6570\u636E").option("--stats", "\u91CD\u7F6E\u4F7F\u7528\u7EDF\u8BA1").option("--projects <paths>", "\u53EA\u6E05\u7406\u6307\u5B9A\u9879\u76EE\uFF08\u9017\u53F7\u5206\u9694\uFF09").action(async (options) => {
    try {
      console.log(chalk26.bold("\n\u{1F9F9} \u6E05\u7406 ~/.claude.json\n"));
      const analysis = analyzeClaudeJson();
      console.log(`\u5F53\u524D\u6587\u4EF6\u5927\u5C0F: ${chalk26.bold(analysis.fileSizeFormatted)}`);
      console.log(`\u9879\u76EE\u6570: ${analysis.projectCount}, \u5386\u53F2\u8BB0\u5F55: ${analysis.totalHistoryCount} \u6761`);
      console.log();
      let cleanOptions;
      if (options.preset || options.keep || options.cache || options.stats || options.projects) {
        cleanOptions = buildOptionsFromArgs(options);
      } else {
        cleanOptions = await promptForOptions(analysis);
      }
      const { confirmed } = await inquirer18.prompt([
        {
          type: "confirm",
          name: "confirmed",
          message: "\u786E\u8BA4\u6267\u884C\u6E05\u7406\uFF1F\uFF08\u4F1A\u81EA\u52A8\u5907\u4EFD\u539F\u6587\u4EF6\uFF09",
          default: true
        }
      ]);
      if (!confirmed) {
        console.log(chalk26.yellow("\n\u274C \u5DF2\u53D6\u6D88\n"));
        return;
      }
      console.log(chalk26.cyan("\n\u6B63\u5728\u6E05\u7406...\n"));
      const result = cleanClaudeJson(cleanOptions);
      console.log(chalk26.green("\u2705 \u6E05\u7406\u5B8C\u6210\n"));
      console.log(`\u6E05\u7406\u524D: ${chalk26.bold(formatBytes2(result.sizeBefore))}`);
      console.log(`\u6E05\u7406\u540E: ${chalk26.bold(formatBytes2(result.sizeAfter))}`);
      console.log(`\u8282\u7701\u7A7A\u95F4: ${chalk26.green.bold(formatBytes2(result.saved))} (${(result.saved / result.sizeBefore * 100).toFixed(1)}%)`);
      console.log();
      if (result.cleanedItems.projectHistory > 0) {
        console.log(`\u6E05\u7406\u5386\u53F2\u8BB0\u5F55: ${chalk26.bold(result.cleanedItems.projectHistory)} \u6761`);
      }
      if (result.cleanedItems.cache) {
        console.log(`\u6E05\u7406\u7F13\u5B58: ${chalk26.green("\u2713")}`);
      }
      if (result.cleanedItems.stats) {
        console.log(`\u91CD\u7F6E\u7EDF\u8BA1: ${chalk26.green("\u2713")}`);
      }
      console.log();
      console.log(`\u5907\u4EFD\u6587\u4EF6: ${chalk26.cyan(result.backupPath)}`);
      console.log();
    } catch (error) {
      console.error(chalk26.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}
function buildOptionsFromArgs(args) {
  if (args.preset) {
    const preset = args.preset.toLowerCase();
    if (preset === "conservative") {
      return CleanPresets.conservative();
    } else if (preset === "moderate") {
      return CleanPresets.moderate();
    } else if (preset === "aggressive") {
      return CleanPresets.aggressive();
    } else {
      throw new Error(`\u672A\u77E5\u7684\u9884\u8BBE\u65B9\u6848: ${preset}\u3002\u53EF\u7528: conservative, moderate, aggressive`);
    }
  }
  const options = {};
  if (args.keep !== void 0) {
    options.cleanProjectHistory = true;
    options.keepRecentCount = parseInt(args.keep, 10);
    if (isNaN(options.keepRecentCount)) {
      throw new Error("--keep \u53C2\u6570\u5FC5\u987B\u662F\u6570\u5B57");
    }
  }
  if (args.cache) {
    options.cleanCache = true;
  }
  if (args.stats) {
    options.cleanStats = true;
  }
  if (args.projects) {
    options.projectPaths = args.projects.split(",").map((p) => p.trim());
  }
  if (!options.cleanProjectHistory && !options.cleanCache && !options.cleanStats) {
    console.log(chalk26.yellow("\u672A\u6307\u5B9A\u6E05\u7406\u9009\u9879\uFF0C\u4F7F\u7528\u4FDD\u5B88\u9884\u8BBE\n"));
    return CleanPresets.conservative();
  }
  return options;
}
async function promptForOptions(analysis) {
  const answers = await inquirer18.prompt([
    {
      type: "list",
      name: "preset",
      message: "\u9009\u62E9\u6E05\u7406\u65B9\u6848:",
      choices: [
        {
          name: `${chalk26.green("\u4FDD\u5B88\u6E05\u7406")} - \u4FDD\u7559\u6700\u8FD110\u6761\u8BB0\u5F55\uFF0C\u6E05\u7406\u7F13\u5B58 (\u8282\u7701\u7EA6 ${formatBytes2(analysis.estimatedSavings.conservative)})`,
          value: "conservative"
        },
        {
          name: `${chalk26.yellow("\u4E2D\u7B49\u6E05\u7406")} - \u4FDD\u7559\u6700\u8FD15\u6761\u8BB0\u5F55\uFF0C\u6E05\u7406\u7F13\u5B58\u548C\u7EDF\u8BA1 (\u8282\u7701\u7EA6 ${formatBytes2(analysis.estimatedSavings.moderate)})`,
          value: "moderate"
        },
        {
          name: `${chalk26.red("\u6FC0\u8FDB\u6E05\u7406")} - \u6E05\u7A7A\u5386\u53F2\u8BB0\u5F55\uFF0C\u6E05\u7406\u7F13\u5B58\u548C\u7EDF\u8BA1 (\u8282\u7701\u7EA6 ${formatBytes2(analysis.estimatedSavings.aggressive)})`,
          value: "aggressive"
        },
        {
          name: `${chalk26.cyan("\u81EA\u5B9A\u4E49")} - \u81EA\u5B9A\u4E49\u6E05\u7406\u9009\u9879`,
          value: "custom"
        }
      ]
    }
  ]);
  if (answers.preset !== "custom") {
    if (answers.preset === "conservative") {
      return CleanPresets.conservative();
    } else if (answers.preset === "moderate") {
      return CleanPresets.moderate();
    } else {
      return CleanPresets.aggressive();
    }
  }
  const customAnswers = await inquirer18.prompt([
    {
      type: "confirm",
      name: "cleanHistory",
      message: "\u6E05\u7406\u9879\u76EE\u5386\u53F2\u8BB0\u5F55\uFF1F",
      default: true
    },
    {
      type: "number",
      name: "keepCount",
      message: "\u6BCF\u4E2A\u9879\u76EE\u4FDD\u7559\u6700\u8FD1\u591A\u5C11\u6761\u8BB0\u5F55\uFF1F",
      default: 10,
      when: (answers2) => answers2.cleanHistory
    },
    {
      type: "confirm",
      name: "cleanCache",
      message: "\u6E05\u7406\u7F13\u5B58\u6570\u636E\uFF1F",
      default: true
    },
    {
      type: "confirm",
      name: "cleanStats",
      message: "\u91CD\u7F6E\u4F7F\u7528\u7EDF\u8BA1\uFF1F",
      default: false
    }
  ]);
  return {
    cleanProjectHistory: customAnswers.cleanHistory,
    keepRecentCount: customAnswers.keepCount || 0,
    cleanCache: customAnswers.cleanCache,
    cleanStats: customAnswers.cleanStats
  };
}

// src/commands/claude/index.ts
function createClaudeCommands(program2) {
  addCommand2(program2);
  listCommand2(program2);
  useCommand2(program2);
  currentCommand2(program2);
  removeCommand2(program2);
  editCommand2(program2);
  cloneCommand2(program2);
  cleanAnalyzeCommand(program2);
  cleanCommand(program2);
}

// src/commands/mcp/add.ts
init_dist2();
import chalk27 from "chalk";
import inquirer19 from "inquirer";
function addCommand3(program2) {
  program2.command("add").description("\u6DFB\u52A0\u65B0\u7684 MCP \u670D\u52A1\u5668(\u4EA4\u4E92\u5F0F)").action(async () => {
    try {
      const manager = createMCPManager();
      console.log(chalk27.bold("\n\u{1F4DD} \u6DFB\u52A0 MCP \u670D\u52A1\u5668\n"));
      const { usePreset } = await inquirer19.prompt([
        {
          type: "list",
          name: "usePreset",
          message: "\u9009\u62E9\u914D\u7F6E\u6765\u6E90:",
          choices: [
            { name: "\u{1F4E6} \u4F7F\u7528\u9884\u7F6E MCP \u670D\u52A1\u5668", value: true },
            { name: "\u270F\uFE0F  \u81EA\u5B9A\u4E49\u914D\u7F6E", value: false }
          ]
        }
      ]);
      let name;
      let command;
      let args;
      let env;
      if (usePreset) {
        const { presetName } = await inquirer19.prompt([
          {
            type: "list",
            name: "presetName",
            message: "\u9009\u62E9\u9884\u7F6E MCP \u670D\u52A1\u5668:",
            choices: MCP_PRESETS_DETAIL.map((p) => ({
              name: `${p.name} - ${p.description}`,
              value: p.name
            }))
          }
        ]);
        const preset = MCP_PRESETS_DETAIL.find((p) => p.name === presetName);
        console.log(chalk27.blue(`
\u4F7F\u7528\u9884\u8BBE: ${preset.name} - ${preset.description}
`));
        if (preset.argsPlaceholder) {
          console.log(chalk27.yellow(`\u26A0\uFE0F  ${preset.argsPlaceholder}
`));
        }
        if (preset.envRequired && preset.envRequired.length > 0) {
          console.log(chalk27.yellow(`\u26A0\uFE0F  \u9700\u8981\u914D\u7F6E\u73AF\u5883\u53D8\u91CF: ${preset.envRequired.join(", ")}
`));
        }
        const input = await inquirer19.prompt([
          {
            type: "input",
            name: "name",
            message: "MCP \u670D\u52A1\u5668\u540D\u79F0:",
            default: preset.name,
            validate: (value) => {
              if (!value) return "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "command",
            message: "\u542F\u52A8\u547D\u4EE4:",
            default: preset.command,
            validate: (value) => {
              if (!value) return "\u547D\u4EE4\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "args",
            message: "\u547D\u4EE4\u53C2\u6570 (\u7A7A\u683C\u5206\u9694):",
            default: preset.args.join(" "),
            validate: (value) => {
              if (!value) return "\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "env",
            message: '\u73AF\u5883\u53D8\u91CF (JSON \u683C\u5F0F, \u5982 {"API_KEY": "xxx"}, \u53EF\u7559\u7A7A):',
            default: ""
          }
        ]);
        name = input.name;
        command = input.command;
        args = input.args.split(" ").filter((arg) => arg.length > 0);
        env = input.env ? JSON.parse(input.env) : void 0;
      } else {
        const answers = await inquirer19.prompt([
          {
            type: "input",
            name: "name",
            message: "MCP \u670D\u52A1\u5668\u540D\u79F0:",
            validate: (value) => {
              if (!value) return "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "command",
            message: "\u542F\u52A8\u547D\u4EE4 (\u5982 npx, node, python):",
            default: "npx",
            validate: (value) => {
              if (!value) return "\u547D\u4EE4\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "args",
            message: "\u547D\u4EE4\u53C2\u6570 (\u7A7A\u683C\u5206\u9694):",
            validate: (value) => {
              if (!value) return "\u53C2\u6570\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "env",
            message: '\u73AF\u5883\u53D8\u91CF (JSON \u683C\u5F0F, \u5982 {"API_KEY": "xxx"}, \u53EF\u7559\u7A7A):',
            default: ""
          }
        ]);
        name = answers.name;
        command = answers.command;
        args = answers.args.split(" ").filter((arg) => arg.length > 0);
        env = answers.env ? JSON.parse(answers.env) : void 0;
      }
      const provider = manager.add({
        name,
        baseUrl: command,
        apiKey: args.join(" "),
        model: env ? JSON.stringify(env) : void 0
      });
      console.log();
      console.log(chalk27.green("\u2705 MCP \u670D\u52A1\u5668\u6DFB\u52A0\u6210\u529F"));
      console.log();
      console.log(`  ${chalk27.bold(provider.name)} ${chalk27.blue("[MCP]")}`);
      console.log(`  ${chalk27.gray(`${command} ${args.join(" ")}`)}`);
      if (env) {
        console.log(chalk27.gray(`  \u73AF\u5883\u53D8\u91CF: ${Object.keys(env).join(", ")}`));
      }
      console.log();
      console.log(chalk27.green("\u2705 \u914D\u7F6E\u5DF2\u81EA\u52A8\u540C\u6B65\u5230 ~/.claude.json"));
      console.log();
      console.log(chalk27.gray("\u914D\u7F6E\u6587\u4EF6:"));
      console.log(chalk27.gray(`  - ${getClaudeConfigPath()}`));
      console.log();
    } catch (error) {
      console.error(chalk27.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/mcp/list.ts
init_dist2();
import chalk28 from "chalk";
function listCommand3(program2) {
  program2.command("list").alias("ls").description("\u5217\u51FA\u6240\u6709 MCP \u670D\u52A1\u5668").action(async () => {
    try {
      const manager = createMCPManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk28.yellow("\n\u26A0\uFE0F  \u6682\u65E0 MCP \u670D\u52A1\u5668\n"));
        console.log(chalk28.blue("\u{1F4A1} \u6DFB\u52A0 MCP \u670D\u52A1\u5668:") + chalk28.white(" ccman mcp add\n"));
        return;
      }
      console.log(chalk28.bold(`
\u{1F4CB} MCP \u670D\u52A1\u5668 (${providers.length} \u4E2A)
`));
      providers.forEach((provider) => {
        const isActive = false;
        const indicator = isActive ? chalk28.green("\u25CF") : chalk28.gray("\u25CB");
        const nameDisplay = chalk28.bold(provider.name);
        const commandDisplay = chalk28.gray(`${provider.baseUrl} ${provider.apiKey}`);
        console.log(`  ${indicator} ${nameDisplay}`);
        console.log(`    ${commandDisplay}`);
        if (provider.model) {
          try {
            const env = JSON.parse(provider.model);
            const envKeys = Object.keys(env);
            if (envKeys.length > 0) {
              console.log(chalk28.gray(`    \u73AF\u5883\u53D8\u91CF: ${envKeys.join(", ")}`));
            }
          } catch {
          }
        }
        console.log();
      });
      console.log(chalk28.gray("\u63D0\u793A: \u6240\u6709\u914D\u7F6E\u7684 MCP \u670D\u52A1\u5668\u4F1A\u81EA\u52A8\u540C\u6B65\u5230 ~/.claude.json"));
      console.log();
    } catch (error) {
      console.error(chalk28.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/mcp/remove.ts
init_dist2();
import chalk29 from "chalk";
import inquirer20 from "inquirer";
function removeCommand3(program2) {
  program2.command("remove [name]").alias("rm").description("\u5220\u9664 MCP \u670D\u52A1\u5668").action(async (name) => {
    try {
      const manager = createMCPManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk29.yellow("\n\u26A0\uFE0F  \u6682\u65E0 MCP \u670D\u52A1\u5668\n"));
        return;
      }
      let targetId;
      let targetName;
      if (name) {
        const provider = manager.findByName(name);
        if (!provider) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider.id;
        targetName = provider.name;
      } else {
        const { selectedId } = await inquirer20.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5220\u9664\u7684 MCP \u670D\u52A1\u5668:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl} ${p.apiKey}`,
              value: p.id
            }))
          }
        ]);
        const provider = manager.get(selectedId);
        targetId = selectedId;
        targetName = provider.name;
      }
      const { confirmed } = await inquirer20.prompt([
        {
          type: "confirm",
          name: "confirmed",
          message: `\u786E\u5B9A\u5220\u9664 "${targetName}"?`,
          default: false
        }
      ]);
      if (!confirmed) {
        console.log(chalk29.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      manager.remove(targetId);
      console.log();
      console.log(chalk29.green(`\u2705 \u5DF2\u5220\u9664: ${targetName}`));
      console.log();
      console.log(chalk29.green("\u2705 \u914D\u7F6E\u5DF2\u81EA\u52A8\u540C\u6B65\u5230 ~/.claude.json"));
      console.log();
      console.log(chalk29.gray("\u914D\u7F6E\u6587\u4EF6:"));
      console.log(chalk29.gray(`  - ${getClaudeConfigPath()}`));
      console.log();
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk29.red(`
\u274C MCP \u670D\u52A1\u5668\u4E0D\u5B58\u5728
`));
        console.log(chalk29.blue("\u{1F4A1} \u67E5\u770B\u6240\u6709 MCP \u670D\u52A1\u5668:") + chalk29.white(" ccman mcp list\n"));
      } else {
        console.error(chalk29.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/mcp/edit.ts
init_dist2();
import chalk30 from "chalk";
import inquirer21 from "inquirer";
function editCommand3(program2) {
  program2.command("edit [name]").description("\u7F16\u8F91 MCP \u670D\u52A1\u5668").action(async (name) => {
    try {
      const manager = createMCPManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk30.yellow("\n\u26A0\uFE0F  \u6682\u65E0 MCP \u670D\u52A1\u5668\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer21.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u7F16\u8F91\u7684 MCP \u670D\u52A1\u5668:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl} ${p.apiKey}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      const provider = manager.get(targetId);
      const currentCommand5 = provider.baseUrl;
      const currentArgs = provider.apiKey;
      const currentEnv = provider.model;
      console.log(chalk30.bold("\n\u270F\uFE0F  \u7F16\u8F91 MCP \u670D\u52A1\u5668\n"));
      console.log(chalk30.gray("\u63D0\u793A: \u7559\u7A7A\u5219\u4FDD\u6301\u539F\u503C\n"));
      const answers = await inquirer21.prompt([
        {
          type: "input",
          name: "name",
          message: "MCP \u670D\u52A1\u5668\u540D\u79F0:",
          default: provider.name
        },
        {
          type: "input",
          name: "command",
          message: "\u542F\u52A8\u547D\u4EE4:",
          default: currentCommand5
        },
        {
          type: "input",
          name: "args",
          message: "\u547D\u4EE4\u53C2\u6570 (\u7A7A\u683C\u5206\u9694, \u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8):",
          default: currentArgs
        },
        {
          type: "input",
          name: "env",
          message: "\u73AF\u5883\u53D8\u91CF (JSON \u683C\u5F0F, \u7559\u7A7A\u4FDD\u6301\u4E0D\u53D8):",
          default: currentEnv || ""
        }
      ]);
      const updates = {};
      if (answers.name && answers.name !== provider.name) {
        updates.name = answers.name;
      }
      if (answers.command && answers.command !== currentCommand5) {
        updates.baseUrl = answers.command;
      }
      if (answers.args && answers.args !== currentArgs) {
        updates.apiKey = answers.args;
      }
      if (answers.env !== currentEnv) {
        updates.model = answers.env || void 0;
      }
      if (Object.keys(updates).length === 0) {
        console.log(chalk30.gray("\n\u672A\u505A\u4EFB\u4F55\u4FEE\u6539\n"));
        return;
      }
      const updated = manager.edit(targetId, updates);
      console.log();
      console.log(chalk30.green("\u2705 \u7F16\u8F91\u6210\u529F"));
      console.log();
      console.log(`  ${chalk30.bold(updated.name)} ${chalk30.blue("[MCP]")}`);
      console.log(`  ${chalk30.gray(`\u547D\u4EE4: ${updated.baseUrl} ${updated.apiKey}`)}`);
      if (updated.model) {
        try {
          const env = JSON.parse(updated.model);
          console.log(chalk30.gray(`  \u73AF\u5883\u53D8\u91CF: ${Object.keys(env).join(", ")}`));
        } catch {
        }
      }
      console.log();
      console.log(chalk30.green("\u2705 \u914D\u7F6E\u5DF2\u81EA\u52A8\u540C\u6B65\u5230 ~/.claude.json"));
      console.log();
      console.log(chalk30.gray("\u914D\u7F6E\u6587\u4EF6:"));
      console.log(chalk30.gray(`  - ${getClaudeConfigPath()}`));
      console.log();
    } catch (error) {
      console.error(chalk30.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/mcp/index.ts
function createMCPCommands(program2) {
  addCommand3(program2);
  listCommand3(program2);
  removeCommand3(program2);
  editCommand3(program2);
}

// src/commands/gemini/add.ts
init_dist2();
import chalk31 from "chalk";
import inquirer22 from "inquirer";
function addCommand4(program2) {
  program2.command("add").description("\u6DFB\u52A0\u65B0\u7684 Gemini CLI \u670D\u52A1\u5546(\u4EA4\u4E92\u5F0F)").action(async () => {
    try {
      const manager = createGeminiManager();
      console.log(chalk31.bold("\n\u{1F4DD} \u6DFB\u52A0 Gemini CLI \u670D\u52A1\u5546\n"));
      const { usePreset } = await inquirer22.prompt([
        {
          type: "list",
          name: "usePreset",
          message: "\u9009\u62E9\u914D\u7F6E\u6765\u6E90:",
          choices: [
            { name: "\u{1F4E6} \u4F7F\u7528\u9884\u7F6E\u670D\u52A1\u5546", value: true },
            { name: "\u270F\uFE0F  \u81EA\u5B9A\u4E49\u914D\u7F6E", value: false }
          ]
        }
      ]);
      let name;
      let desc;
      let baseUrl;
      let apiKey;
      if (usePreset) {
        const { presetName } = await inquirer22.prompt([
          {
            type: "list",
            name: "presetName",
            message: "\u9009\u62E9\u9884\u7F6E\u670D\u52A1\u5546:",
            choices: GEMINI_PRESETS.map((p) => ({
              name: `${p.name} - ${p.description}`,
              value: p.name
            }))
          }
        ]);
        const preset = GEMINI_PRESETS.find((p) => p.name === presetName);
        console.log(chalk31.blue(`
\u4F7F\u7528\u9884\u8BBE: ${preset.name} - ${preset.description}
`));
        const input = await promptProviderForm({
          name: preset.name,
          desc: "",
          baseUrl: preset.baseUrl,
          apiKey: ""
        });
        name = input.name;
        desc = input.desc;
        baseUrl = input.baseUrl;
        apiKey = input.apiKey;
      } else {
        const answers = await inquirer22.prompt([
          {
            type: "input",
            name: "name",
            message: "\u670D\u52A1\u5546\u540D\u79F0:",
            validate: (value) => {
              if (!value) return "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";
              return true;
            }
          },
          {
            type: "input",
            name: "baseUrl",
            message: "API \u5730\u5740 (\u53EF\u4E3A\u7A7A\uFF0C\u4F7F\u7528\u5B98\u65B9\u9ED8\u8BA4):",
            validate: (value) => {
              if (!value) return true;
              if (!value.startsWith("http://") && !value.startsWith("https://")) {
                return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
              }
              return true;
            }
          },
          {
            type: "password",
            name: "apiKey",
            message: "API \u5BC6\u94A5 (\u53EF\u4E3A\u7A7A\uFF0C\u4F7F\u7528\u73AF\u5883\u5DF2\u914D\u7F6E\u7684 Key):",
            mask: "*"
          }
        ]);
        name = answers.name;
        desc = void 0;
        baseUrl = answers.baseUrl || "";
        apiKey = answers.apiKey || "";
      }
      const provider = manager.add({ name, desc, baseUrl, apiKey });
      console.log();
      console.log(chalk31.green("\u2705 \u6DFB\u52A0\u6210\u529F"));
      console.log();
      console.log(`  ${chalk31.bold(provider.name)} ${chalk31.blue("[Gemini CLI]")}`);
      console.log(`  ${chalk31.gray(provider.baseUrl || "(\u4F7F\u7528\u9ED8\u8BA4\u7AEF\u70B9)")}`);
      console.log();
      const { switchNow } = await inquirer22.prompt([
        {
          type: "confirm",
          name: "switchNow",
          message: "\u662F\u5426\u7ACB\u5373\u5207\u6362\u5230\u6B64\u670D\u52A1\u5546?",
          default: true
        }
      ]);
      if (switchNow) {
        manager.switch(provider.id);
        console.log(chalk31.green("\u2705 \u5DF2\u5207\u6362\u5230\u65B0\u670D\u52A1\u5546"));
        console.log();
        console.log(chalk31.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
        console.log(chalk31.gray(`  - ${getGeminiSettingsPath()}`));
        console.log(chalk31.gray(`  - ${getGeminiEnvPath()}`));
      } else {
        console.log(chalk31.blue("\u{1F4A1} \u7A0D\u540E\u5207\u6362:") + chalk31.white(` ccman gm use "${provider.name}"`));
      }
    } catch (error) {
      console.error(chalk31.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/gemini/list.ts
init_dist2();
import chalk32 from "chalk";
function listCommand4(program2) {
  program2.command("list").alias("ls").description("\u5217\u51FA\u6240\u6709 Gemini CLI \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createGeminiManager();
      const providers = manager.list();
      const current = manager.getCurrent();
      if (providers.length === 0) {
        console.log(chalk32.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Gemini CLI \u670D\u52A1\u5546\n"));
        console.log(chalk32.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk32.white(" ccman gm add\n"));
        return;
      }
      console.log(chalk32.bold(`
\u{1F4CB} Gemini CLI \u670D\u52A1\u5546 (${providers.length} \u4E2A)`));
      console.log(formatProviderTable(providers, current?.id));
    } catch (error) {
      console.error(chalk32.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/gemini/use.ts
init_dist2();
import chalk33 from "chalk";
import inquirer23 from "inquirer";
function useCommand3(program2) {
  program2.command("use [name]").description("\u5207\u6362 Gemini CLI \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createGeminiManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk33.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Gemini CLI \u670D\u52A1\u5546\n"));
        console.log(chalk33.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk33.white(" ccman gm add\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer23.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5207\u6362\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl || "(\u9ED8\u8BA4\u7AEF\u70B9)"}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      manager.switch(targetId);
      const provider = manager.get(targetId);
      console.log();
      console.log(chalk33.green("\u2705 \u5207\u6362\u6210\u529F"));
      console.log();
      console.log(`  ${chalk33.bold(provider.name)} ${chalk33.blue("[Gemini CLI]")}`);
      console.log(`  ${chalk33.gray(`URL: ${provider.baseUrl || "(\u9ED8\u8BA4\u7AEF\u70B9)"}`)}`);
      console.log();
      console.log(chalk33.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
      console.log(chalk33.gray(`  - ${getGeminiSettingsPath()}`));
      console.log(chalk33.gray(`  - ${getGeminiEnvPath()}`));
      console.log();
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk33.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${error.message}
`));
        console.log(chalk33.blue("\u{1F4A1} \u67E5\u770B\u6240\u6709\u670D\u52A1\u5546:") + chalk33.white(" ccman gm list\n"));
      } else {
        console.error(chalk33.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/gemini/current.ts
init_dist2();
import chalk34 from "chalk";
function currentCommand3(program2) {
  program2.command("current").description("\u663E\u793A\u5F53\u524D Gemini CLI \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createGeminiManager();
      const current = manager.getCurrent();
      if (!current) {
        console.log(chalk34.yellow("\n\u26A0\uFE0F  \u5F53\u524D\u6CA1\u6709\u6FC0\u6D3B\u7684 Gemini CLI \u670D\u52A1\u5546\n"));
        console.log(chalk34.blue("\u{1F4A1} \u5217\u51FA\u670D\u52A1\u5546:") + chalk34.white(" ccman gm list\n"));
        return;
      }
      console.log(chalk34.bold("\n\u{1F3AF} \u5F53\u524D Gemini CLI \u670D\u52A1\u5546\n"));
      console.log(`  \u540D\u79F0: ${chalk34.bold(current.name)}`);
      console.log(`  \u5730\u5740: ${chalk34.gray(current.baseUrl || "(\u9ED8\u8BA4\u7AEF\u70B9)")}`);
      console.log();
    } catch (error) {
      console.error(chalk34.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/gemini/remove.ts
init_dist2();
import chalk35 from "chalk";
import inquirer24 from "inquirer";
function removeCommand4(program2) {
  program2.command("remove [name]").alias("rm").description("\u5220\u9664 Gemini CLI \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createGeminiManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk35.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Gemini CLI \u670D\u52A1\u5546\n"));
        console.log(chalk35.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk35.white(" ccman gm add\n"));
        return;
      }
      let targetId;
      let targetName;
      if (name) {
        const provider = manager.findByName(name);
        if (!provider) {
          console.log(chalk35.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
          process.exit(1);
        }
        targetId = provider.id;
        targetName = provider.name;
      } else {
        const { selectedId } = await inquirer24.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5220\u9664\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl || "(\u9ED8\u8BA4\u7AEF\u70B9)"}`,
              value: p.id
            }))
          }
        ]);
        const provider = manager.get(selectedId);
        targetId = provider.id;
        targetName = provider.name;
      }
      const { confirm } = await inquirer24.prompt([
        {
          type: "confirm",
          name: "confirm",
          message: `\u786E\u5B9A\u8981\u5220\u9664\u670D\u52A1\u5546 "${targetName}" \u5417\uFF1F`,
          default: false
        }
      ]);
      if (!confirm) {
        console.log(chalk35.gray("\n\u5DF2\u53D6\u6D88\u5220\u9664\n"));
        return;
      }
      manager.remove(targetId);
      console.log(chalk35.green("\n\u2705 \u5DF2\u5220\u9664\u670D\u52A1\u5546\n"));
    } catch (error) {
      console.error(chalk35.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/gemini/edit.ts
init_dist2();
import chalk36 from "chalk";
import inquirer25 from "inquirer";
function editCommand4(program2) {
  program2.command("edit [name]").description("\u7F16\u8F91 Gemini CLI \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createGeminiManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk36.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Gemini CLI \u670D\u52A1\u5546\n"));
        console.log(chalk36.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk36.white(" ccman gm add\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          console.log(chalk36.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
          process.exit(1);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer25.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u7F16\u8F91\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl || "(\u9ED8\u8BA4\u7AEF\u70B9)"}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      const provider = manager.get(targetId);
      const input = await promptProviderForm({
        name: provider.name,
        desc: provider.desc ?? "",
        baseUrl: provider.baseUrl,
        apiKey: provider.apiKey
      });
      manager.edit(targetId, {
        name: input.name,
        desc: input.desc,
        baseUrl: input.baseUrl,
        apiKey: input.apiKey
      });
      console.log(chalk36.green("\n\u2705 \u7F16\u8F91\u6210\u529F\n"));
    } catch (error) {
      console.error(chalk36.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/gemini/clone.ts
init_dist2();
import chalk37 from "chalk";
import inquirer26 from "inquirer";
function cloneCommand3(program2) {
  program2.command("clone [name]").description("\u514B\u9686 Gemini CLI \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createGeminiManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk37.yellow("\n\u26A0\uFE0F  \u6682\u65E0 Gemini CLI \u670D\u52A1\u5546\n"));
        console.log(chalk37.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk37.white(" ccman gm add\n"));
        return;
      }
      let sourceId;
      if (name) {
        const provider = manager.findByName(name);
        if (!provider) {
          console.log(chalk37.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
          process.exit(1);
        }
        sourceId = provider.id;
      } else {
        const { selectedId } = await inquirer26.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u514B\u9686\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl || "(\u9ED8\u8BA4\u7AEF\u70B9)"}`,
              value: p.id
            }))
          }
        ]);
        sourceId = selectedId;
      }
      const { newName } = await inquirer26.prompt([
        {
          type: "input",
          name: "newName",
          message: "\u8F93\u5165\u65B0\u670D\u52A1\u5546\u540D\u79F0:",
          validate: (value) => {
            if (!value) return "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A";
            return true;
          }
        }
      ]);
      const newProvider = manager.clone(sourceId, newName);
      console.log();
      console.log(chalk37.green("\u2705 \u514B\u9686\u6210\u529F"));
      console.log();
      console.log(`  ${chalk37.bold(newProvider.name)} ${chalk37.blue("[Gemini CLI]")}`);
      console.log(`  ${chalk37.gray(newProvider.baseUrl || "(\u9ED8\u8BA4\u7AEF\u70B9)")}`);
      console.log();
    } catch (error) {
      console.error(chalk37.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/gemini/index.ts
function createGeminiCommands(program2) {
  addCommand4(program2);
  listCommand4(program2);
  useCommand3(program2);
  currentCommand3(program2);
  removeCommand4(program2);
  editCommand4(program2);
  cloneCommand3(program2);
}

// src/commands/opencode/add.ts
init_dist2();
import chalk38 from "chalk";
import inquirer27 from "inquirer";
function addCommand5(program2) {
  program2.command("add").description("\u6DFB\u52A0\u65B0\u7684 OpenCode \u670D\u52A1\u5546(\u4EA4\u4E92\u5F0F)").action(async () => {
    try {
      const manager = createOpenCodeManager();
      console.log(chalk38.bold("\n\u{1F4DD} \u6DFB\u52A0 OpenCode \u670D\u52A1\u5546\n"));
      const { usePreset } = await inquirer27.prompt([
        {
          type: "list",
          name: "usePreset",
          message: "\u9009\u62E9\u914D\u7F6E\u6765\u6E90:",
          choices: [
            { name: "\u{1F4E6} \u4F7F\u7528\u9884\u7F6E\u670D\u52A1\u5546", value: true },
            { name: "\u270F\uFE0F  \u81EA\u5B9A\u4E49\u914D\u7F6E", value: false }
          ]
        }
      ]);
      let name;
      let desc;
      let baseUrl;
      let apiKey;
      if (usePreset) {
        const { presetName } = await inquirer27.prompt([
          {
            type: "list",
            name: "presetName",
            message: "\u9009\u62E9\u9884\u7F6E\u670D\u52A1\u5546:",
            choices: OPENCODE_PRESETS.map((p) => ({
              name: `${p.name} - ${p.description}`,
              value: p.name
            }))
          }
        ]);
        const preset = OPENCODE_PRESETS.find((p) => p.name === presetName);
        console.log(chalk38.blue(`
\u4F7F\u7528\u9884\u8BBE: ${preset.name} - ${preset.description}
`));
        const input = await promptProviderForm({
          name: preset.name,
          desc: "",
          baseUrl: preset.baseUrl,
          apiKey: ""
        });
        name = input.name;
        desc = input.desc;
        baseUrl = input.baseUrl;
        apiKey = input.apiKey;
      } else {
        const answers = await inquirer27.prompt([
          {
            type: "input",
            name: "name",
            message: "\u670D\u52A1\u5546\u540D\u79F0:",
            validate: (value) => value ? true : "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"
          },
          {
            type: "input",
            name: "baseUrl",
            message: "API \u5730\u5740:",
            validate: (value) => {
              if (!value) return "API \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A";
              if (!value.startsWith("http://") && !value.startsWith("https://")) {
                return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
              }
              return true;
            }
          },
          {
            type: "password",
            name: "apiKey",
            message: "API \u5BC6\u94A5:",
            mask: "*",
            validate: (value) => value ? true : "API \u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A"
          }
        ]);
        name = answers.name;
        desc = void 0;
        baseUrl = answers.baseUrl;
        apiKey = answers.apiKey;
      }
      const { npmPackage } = await inquirer27.prompt([
        {
          type: "input",
          name: "npmPackage",
          message: "\u517C\u5BB9\u5305 (npm):",
          default: DEFAULT_OPENCODE_NPM,
          validate: (value) => value ? true : "npm \u5305\u4E0D\u80FD\u4E3A\u7A7A"
        }
      ]);
      const provider = manager.add({
        name,
        desc,
        baseUrl,
        apiKey,
        model: buildOpenCodeModel({ npm: npmPackage })
      });
      console.log();
      console.log(chalk38.green("\u2705 \u6DFB\u52A0\u6210\u529F"));
      console.log();
      console.log(`  ${chalk38.bold(provider.name)} ${chalk38.blue("[OpenCode]")}`);
      console.log(`  ${chalk38.gray(provider.baseUrl)}`);
      console.log();
      const { switchNow } = await inquirer27.prompt([
        {
          type: "confirm",
          name: "switchNow",
          message: "\u662F\u5426\u7ACB\u5373\u5207\u6362\u5230\u6B64\u670D\u52A1\u5546?",
          default: true
        }
      ]);
      if (switchNow) {
        manager.switch(provider.id);
        console.log(chalk38.green("\u2705 \u5DF2\u5207\u6362\u5230\u65B0\u670D\u52A1\u5546"));
        console.log();
        console.log(chalk38.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
        console.log(chalk38.gray(`  - ${getOpenCodeConfigPath()}`));
      } else {
        console.log(chalk38.blue("\u{1F4A1} \u7A0D\u540E\u5207\u6362:") + chalk38.white(` ccman oc use "${provider.name}"`));
      }
    } catch (error) {
      console.error(chalk38.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/opencode/list.ts
init_dist2();
import chalk39 from "chalk";
function listCommand5(program2) {
  program2.command("list").alias("ls").description("\u5217\u51FA\u6240\u6709 OpenCode \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createOpenCodeManager();
      const providers = manager.list();
      const current = manager.getCurrent();
      if (providers.length === 0) {
        console.log(chalk39.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenCode \u670D\u52A1\u5546\n"));
        console.log(chalk39.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk39.white(" ccman oc add\n"));
        return;
      }
      console.log(chalk39.bold(`
\u{1F4CB} OpenCode \u670D\u52A1\u5546 (${providers.length} \u4E2A)`));
      console.log(formatProviderTable(providers, current?.id));
    } catch (error) {
      console.error(chalk39.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/opencode/use.ts
init_dist2();
import chalk40 from "chalk";
import inquirer28 from "inquirer";
function useCommand4(program2) {
  program2.command("use [name]").description("\u5207\u6362 OpenCode \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createOpenCodeManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk40.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenCode \u670D\u52A1\u5546\n"));
        console.log(chalk40.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk40.white(" ccman oc add\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer28.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5207\u6362\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      manager.switch(targetId);
      const provider = manager.get(targetId);
      console.log(chalk40.green("\n\u2705 \u5207\u6362\u6210\u529F\n"));
      console.log(`  ${chalk40.bold(provider.name)} ${chalk40.blue("[OpenCode]")}`);
      console.log(`  ${chalk40.gray(`URL: ${provider.baseUrl}`)}`);
      console.log();
      console.log(chalk40.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
      console.log(chalk40.gray(`  - ${getOpenCodeConfigPath()}`));
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk40.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
      } else {
        console.error(chalk40.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/opencode/current.ts
init_dist2();
import chalk41 from "chalk";
function currentCommand4(program2) {
  program2.command("current").description("\u663E\u793A\u5F53\u524D OpenCode \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createOpenCodeManager();
      const current = manager.getCurrent();
      if (!current) {
        console.log(chalk41.yellow("\n\u26A0\uFE0F  \u5F53\u524D\u6CA1\u6709\u6FC0\u6D3B\u7684 OpenCode \u670D\u52A1\u5546\n"));
        console.log(chalk41.blue("\u{1F4A1} \u5217\u51FA\u670D\u52A1\u5546:") + chalk41.white(" ccman oc list\n"));
        return;
      }
      console.log(chalk41.bold("\n\u{1F3AF} \u5F53\u524D OpenCode \u670D\u52A1\u5546\n"));
      console.log(`  \u540D\u79F0: ${chalk41.bold(current.name)}`);
      console.log(`  \u5730\u5740: ${chalk41.gray(current.baseUrl)}`);
      console.log();
    } catch (error) {
      console.error(chalk41.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/opencode/edit.ts
init_dist2();
import chalk42 from "chalk";
import inquirer29 from "inquirer";
function editCommand5(program2) {
  program2.command("edit [name]").description("\u7F16\u8F91 OpenCode \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createOpenCodeManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk42.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenCode \u670D\u52A1\u5546\n"));
        console.log(chalk42.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk42.white(" ccman oc add\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer29.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u7F16\u8F91\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      const provider = manager.get(targetId);
      const meta = parseOpenCodeMeta(provider.model);
      const currentNpm = meta?.npm || DEFAULT_OPENCODE_NPM;
      const input = await promptProviderForm({
        name: provider.name,
        desc: provider.desc ?? "",
        baseUrl: provider.baseUrl,
        apiKey: provider.apiKey
      });
      const { npmPackage } = await inquirer29.prompt([
        {
          type: "input",
          name: "npmPackage",
          message: "\u517C\u5BB9\u5305 (npm):",
          default: currentNpm,
          validate: (value) => value ? true : "npm \u5305\u4E0D\u80FD\u4E3A\u7A7A"
        }
      ]);
      manager.edit(targetId, {
        name: input.name,
        desc: input.desc,
        baseUrl: input.baseUrl,
        apiKey: input.apiKey,
        model: buildOpenCodeModel({
          npm: npmPackage,
          models: meta?.models
        })
      });
      console.log(chalk42.green("\n\u2705 \u7F16\u8F91\u6210\u529F\n"));
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk42.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
      } else {
        console.error(chalk42.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/opencode/remove.ts
init_dist2();
import chalk43 from "chalk";
import inquirer30 from "inquirer";
function removeCommand5(program2) {
  program2.command("remove [name]").alias("rm").description("\u5220\u9664 OpenCode \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createOpenCodeManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk43.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenCode \u670D\u52A1\u5546\n"));
        return;
      }
      let targetId;
      let targetName;
      if (name) {
        const provider = manager.findByName(name);
        if (!provider) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider.id;
        targetName = provider.name;
      } else {
        const { selectedId } = await inquirer30.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5220\u9664\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        const provider = manager.get(selectedId);
        targetId = selectedId;
        targetName = provider.name;
      }
      const { confirmed } = await inquirer30.prompt([
        {
          type: "confirm",
          name: "confirmed",
          message: `\u786E\u5B9A\u5220\u9664 "${targetName}"?`,
          default: false
        }
      ]);
      if (!confirmed) {
        console.log(chalk43.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      manager.remove(targetId);
      console.log(chalk43.green(`
\u2705 \u5DF2\u5220\u9664: ${targetName}
`));
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk43.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
      } else {
        console.error(chalk43.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

// src/commands/opencode/clone.ts
init_dist2();
import chalk44 from "chalk";
import inquirer31 from "inquirer";
function cloneCommand4(program2) {
  program2.command("clone [source-name] [new-name]").description("\u514B\u9686 OpenCode \u670D\u52A1\u5546").action(async (sourceName, newName) => {
    try {
      const manager = createOpenCodeManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk44.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenCode \u670D\u52A1\u5546\n"));
        return;
      }
      let sourceId;
      if (sourceName) {
        const provider = manager.findByName(sourceName);
        if (!provider) {
          throw new ProviderNotFoundError(sourceName);
        }
        sourceId = provider.id;
      } else {
        const { selectedId } = await inquirer31.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u514B\u9686\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        sourceId = selectedId;
      }
      const source = manager.get(sourceId);
      const meta = parseOpenCodeMeta(source.model);
      const currentNpm = meta?.npm || DEFAULT_OPENCODE_NPM;
      let cloned;
      if (newName) {
        cloned = manager.clone(sourceId, newName);
      } else {
        console.log(chalk44.blue(`
\u514B\u9686\u81EA: ${source.name}
`));
        const input = await promptProviderForm({
          name: `${source.name}\uFF08\u526F\u672C\uFF09`,
          desc: "",
          baseUrl: source.baseUrl,
          apiKey: source.apiKey
        });
        const { npmPackage } = await inquirer31.prompt([
          {
            type: "input",
            name: "npmPackage",
            message: "\u517C\u5BB9\u5305 (npm):",
            default: currentNpm,
            validate: (value) => value ? true : "npm \u5305\u4E0D\u80FD\u4E3A\u7A7A"
          }
        ]);
        cloned = manager.add({
          name: input.name,
          desc: input.desc,
          baseUrl: input.baseUrl,
          apiKey: input.apiKey,
          model: buildOpenCodeModel({
            npm: npmPackage,
            models: meta?.models
          })
        });
      }
      console.log();
      console.log(chalk44.green("\u2705 \u514B\u9686\u6210\u529F"));
      console.log();
      console.log(`  ${chalk44.bold(cloned.name)} ${chalk44.blue("[OpenCode]")}`);
      console.log(`  ${chalk44.gray(`ID: ${cloned.id}`)}`);
      console.log(`  ${chalk44.gray(`URL: ${cloned.baseUrl}`)}`);
      console.log();
    } catch (error) {
      console.error(chalk44.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/opencode/index.ts
function createOpenCodeCommands(program2) {
  addCommand5(program2);
  listCommand5(program2);
  useCommand4(program2);
  currentCommand4(program2);
  editCommand5(program2);
  removeCommand5(program2);
  cloneCommand4(program2);
}

function createOpenClawCommands(program2) {
  addCommand6(program2);
  listCommand6(program2);
  useCommand5(program2);
  currentCommand5(program2);
  editCommand6(program2);
  removeCommand6(program2);
  cloneCommand5(program2);
}

// src/commands/openclaw/add.ts
function addCommand6(program2) {
  program2.command("add").description("\u6DFB\u52A0\u65B0\u7684 OpenClaw \u670D\u52A1\u5546(\u4EA4\u4E92\u5F0F)").action(async () => {
    try {
      const manager = createOpenClawManager();
      console.log(chalk38.bold("\n\u{1F4DD} \u6DFB\u52A0 OpenClaw \u670D\u52A1\u5546\n"));
      const { usePreset } = await inquirer27.prompt([
        {
          type: "list",
          name: "usePreset",
          message: "\u9009\u62E9\u914D\u7F6E\u6765\u6E90:",
          choices: [
            { name: "\u{1F4E6} \u4F7F\u7528\u9884\u7F6E\u670D\u52A1\u5546", value: true },
            { name: "\u270F\uFE0F  \u81EA\u5B9A\u4E49\u914D\u7F6E", value: false }
          ]
        }
      ]);
      let name;
      let desc;
      let baseUrl;
      let apiKey;
      if (usePreset) {
        const { presetName } = await inquirer27.prompt([
          {
            type: "list",
            name: "presetName",
            message: "\u9009\u62E9\u9884\u7F6E\u670D\u52A1\u5546:",
            choices: OPENCLAW_PRESETS.map((p) => ({
              name: `${p.name} - ${p.description}`,
              value: p.name
            }))
          }
        ]);
        const preset = OPENCLAW_PRESETS.find((p) => p.name === presetName);
        console.log(chalk38.blue(`
\u4F7F\u7528\u9884\u8BBE: ${preset.name} - ${preset.description}
`));
        const input = await promptProviderForm({
          name: preset.name,
          desc: "",
          baseUrl: preset.baseUrl,
          apiKey: ""
        });
        name = input.name;
        desc = input.desc;
        baseUrl = input.baseUrl;
        apiKey = input.apiKey;
      } else {
        const answers = await inquirer27.prompt([
          {
            type: "input",
            name: "name",
            message: "\u670D\u52A1\u5546\u540D\u79F0:",
            validate: (value) => value ? true : "\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A"
          },
          {
            type: "input",
            name: "baseUrl",
            message: "API \u5730\u5740:",
            validate: (value) => {
              if (!value) return "API \u5730\u5740\u4E0D\u80FD\u4E3A\u7A7A";
              if (!value.startsWith("http://") && !value.startsWith("https://")) {
                return "API \u5730\u5740\u5FC5\u987B\u4EE5 http:// \u6216 https:// \u5F00\u5934";
              }
              return true;
            }
          },
          {
            type: "password",
            name: "apiKey",
            message: "API \u5BC6\u94A5:",
            mask: "*",
            validate: (value) => value ? true : "API \u5BC6\u94A5\u4E0D\u80FD\u4E3A\u7A7A"
          }
        ]);
        name = answers.name;
        desc = void 0;
        baseUrl = answers.baseUrl;
        apiKey = answers.apiKey;
      }
      const { defaultModel } = await inquirer27.prompt([
        {
          type: "input",
          name: "defaultModel",
          message: "\u9ED8\u8BA4\u6A21\u578B ID (\u4F8B: gpt-5.3-codex):",
          default: "gpt-4o",
          validate: (value) => value ? true : "\u6A21\u578B ID \u4E0D\u80FD\u4E3A\u7A7A"
        }
      ]);
      const provider = manager.add({
        name,
        desc,
        baseUrl,
        apiKey,
        model: defaultModel
      });
      console.log();
      console.log(chalk38.green("\u2705 \u6DFB\u52A0\u6210\u529F"));
      console.log();
      console.log(`  ${chalk38.bold(provider.name)} ${chalk38.blue("[OpenClaw]")}`);
      console.log(`  ${chalk38.gray(provider.baseUrl)}`);
      console.log();
      const { switchNow } = await inquirer27.prompt([
        {
          type: "confirm",
          name: "switchNow",
          message: "\u662F\u5426\u7ACB\u5373\u5207\u6362\u5230\u6B64\u670D\u52A1\u5546?",
          default: true
        }
      ]);
      if (switchNow) {
        manager.switch(provider.id);
        console.log(chalk38.green("\u2705 \u5DF2\u5207\u6362\u5230\u65B0\u670D\u52A1\u5546"));
        console.log();
        console.log(chalk38.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
        console.log(chalk38.gray(`  - ${getOpenClawConfigPath()}`));
      } else {
        console.log(chalk38.blue("\u{1F4A1} \u7A0D\u540E\u5207\u6362:") + chalk38.white(` ccman claw use "${provider.name}"`));
      }
    } catch (error) {
      console.error(chalk38.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

function listCommand6(program2) {
  program2.command("list").alias("ls").description("\u5217\u51FA\u6240\u6709 OpenClaw \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createOpenClawManager();
      const providers = manager.list();
      const current = manager.getCurrent();
      if (providers.length === 0) {
        console.log(chalk38.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenClaw \u670D\u52A1\u5546\n"));
        console.log(chalk38.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk38.white(" ccman claw add\n"));
        return;
      }
      console.log(chalk38.bold(`
\u{1F4CB} OpenClaw \u670D\u52A1\u5546 (${providers.length} \u4E2A)`));
      console.log(formatProviderTable(providers, current?.id));
    } catch (error) {
      console.error(chalk38.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

function useCommand5(program2) {
  program2.command("use [name]").description("\u5207\u6362 OpenClaw \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createOpenClawManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk38.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenClaw \u670D\u52A1\u5546\n"));
        console.log(chalk38.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk38.white(" ccman claw add\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer27.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5207\u6362\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      manager.switch(targetId);
      const provider = manager.get(targetId);
      console.log(chalk38.green("\n\u2705 \u5207\u6362\u6210\u529F\n"));
      console.log(`  ${chalk38.bold(provider.name)} ${chalk38.blue("[OpenClaw]")}`);
      console.log(`  ${chalk38.gray(`URL: ${provider.baseUrl}`)}`);
      console.log();
      console.log(chalk38.gray("\u914D\u7F6E\u5DF2\u66F4\u65B0:"));
      console.log(chalk38.gray(`  - ${getOpenClawConfigPath()}`));
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk38.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
      } else {
        console.error(chalk38.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

function currentCommand5(program2) {
  program2.command("current").description("\u663E\u793A\u5F53\u524D OpenClaw \u670D\u52A1\u5546").action(async () => {
    try {
      const manager = createOpenClawManager();
      const current = manager.getCurrent();
      if (!current) {
        console.log(chalk38.yellow("\n\u26A0\uFE0F  \u5F53\u524D\u6CA1\u6709\u6FC0\u6D3B\u7684 OpenClaw \u670D\u52A1\u5546\n"));
        console.log(chalk38.blue("\u{1F4A1} \u5217\u51FA\u670D\u52A1\u5546:") + chalk38.white(" ccman claw list\n"));
        return;
      }
      console.log(chalk38.bold("\n\u{1F3AF} \u5F53\u524D OpenClaw \u670D\u52A1\u5546\n"));
      console.log(`  \u540D\u79F0: ${chalk38.bold(current.name)}`);
      console.log(`  \u5730\u5740: ${chalk38.gray(current.baseUrl)}`);
      console.log();
    } catch (error) {
      console.error(chalk38.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

function editCommand6(program2) {
  program2.command("edit [name]").description("\u7F16\u8F91 OpenClaw \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createOpenClawManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk38.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenClaw \u670D\u52A1\u5546\n"));
        console.log(chalk38.blue("\u{1F4A1} \u6DFB\u52A0\u670D\u52A1\u5546:") + chalk38.white(" ccman claw add\n"));
        return;
      }
      let targetId;
      if (name) {
        const provider2 = manager.findByName(name);
        if (!provider2) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider2.id;
      } else {
        const { selectedId } = await inquirer27.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u7F16\u8F91\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        targetId = selectedId;
      }
      const provider = manager.get(targetId);
      const input = await promptProviderForm({
        name: provider.name,
        desc: provider.desc ?? "",
        baseUrl: provider.baseUrl,
        apiKey: provider.apiKey
      });
      const { defaultModel } = await inquirer27.prompt([
        {
          type: "input",
          name: "defaultModel",
          message: "\u9ED8\u8BA4\u6A21\u578B ID (\u4F8B: gpt-5.3-codex):",
          default: provider.model || "gpt-4o",
          validate: (value) => value ? true : "\u6A21\u578B ID \u4E0D\u80FD\u4E3A\u7A7A"
        }
      ]);
      manager.edit(targetId, {
        name: input.name,
        desc: input.desc,
        baseUrl: input.baseUrl,
        apiKey: input.apiKey,
        model: defaultModel
      });
      console.log(chalk38.green("\n\u2705 \u7F16\u8F91\u6210\u529F\n"));
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk38.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
      } else {
        console.error(chalk38.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

function removeCommand6(program2) {
  program2.command("remove [name]").alias("rm").description("\u5220\u9664 OpenClaw \u670D\u52A1\u5546").action(async (name) => {
    try {
      const manager = createOpenClawManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk38.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenClaw \u670D\u52A1\u5546\n"));
        return;
      }
      let targetId;
      let targetName;
      if (name) {
        const provider = manager.findByName(name);
        if (!provider) {
          throw new ProviderNotFoundError(name);
        }
        targetId = provider.id;
        targetName = provider.name;
      } else {
        const { selectedId } = await inquirer27.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u5220\u9664\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        const provider = manager.get(selectedId);
        targetId = selectedId;
        targetName = provider.name;
      }
      const { confirmed } = await inquirer27.prompt([
        {
          type: "confirm",
          name: "confirmed",
          message: `\u786E\u5B9A\u5220\u9664 "${targetName}"?`,
          default: false
        }
      ]);
      if (!confirmed) {
        console.log(chalk38.gray("\n\u5DF2\u53D6\u6D88\n"));
        return;
      }
      manager.remove(targetId);
      console.log(chalk38.green(`
\u2705 \u5DF2\u5220\u9664: ${targetName}
`));
    } catch (error) {
      if (error instanceof ProviderNotFoundError) {
        console.error(chalk38.red(`
\u274C \u670D\u52A1\u5546\u4E0D\u5B58\u5728: ${name}
`));
      } else {
        console.error(chalk38.red(`
\u274C ${error.message}
`));
      }
      process.exit(1);
    }
  });
}

function cloneCommand5(program2) {
  program2.command("clone [source-name] [new-name]").description("\u514B\u9686 OpenClaw \u670D\u52A1\u5546").action(async (sourceName, newName) => {
    try {
      const manager = createOpenClawManager();
      const providers = manager.list();
      if (providers.length === 0) {
        console.log(chalk38.yellow("\n\u26A0\uFE0F  \u6682\u65E0 OpenClaw \u670D\u52A1\u5546\n"));
        return;
      }
      let sourceId;
      if (sourceName) {
        const provider = manager.findByName(sourceName);
        if (!provider) {
          throw new ProviderNotFoundError(sourceName);
        }
        sourceId = provider.id;
      } else {
        const { selectedId } = await inquirer27.prompt([
          {
            type: "list",
            name: "selectedId",
            message: "\u9009\u62E9\u8981\u514B\u9686\u7684\u670D\u52A1\u5546:",
            choices: providers.map((p) => ({
              name: `${p.name} - ${p.baseUrl}`,
              value: p.id
            }))
          }
        ]);
        sourceId = selectedId;
      }
      const source = manager.get(sourceId);
      let cloned;
      if (newName) {
        cloned = manager.clone(sourceId, newName);
      } else {
        console.log(chalk38.blue(`
\u514B\u9686\u81EA: ${source.name}
`));
        const input = await promptProviderForm({
          name: `${source.name}\uFF08\u526F\u672C\uFF09`,
          desc: "",
          baseUrl: source.baseUrl,
          apiKey: source.apiKey
        });
        cloned = manager.add({
          name: input.name,
          desc: input.desc,
          baseUrl: input.baseUrl,
          apiKey: input.apiKey,
          model: source.model
        });
      }
      console.log();
      console.log(chalk38.green("\u2705 \u514B\u9686\u6210\u529F"));
      console.log();
      console.log(`  ${chalk38.bold(cloned.name)} ${chalk38.blue("[OpenClaw]")}`);
      console.log(`  ${chalk38.gray(`ID: ${cloned.id}`)}`);
      console.log(`  ${chalk38.gray(`URL: ${cloned.baseUrl}`)}`);
      console.log();
    } catch (error) {
      console.error(chalk38.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/index.ts
init_sync();

// src/commands/export.ts
init_dist2();
import chalk45 from "chalk";
import path10 from "path";
function exportCommand(program2) {
  program2.command("export <\u76EE\u6807\u76EE\u5F55>").description("\u5BFC\u51FA\u914D\u7F6E\u5230\u672C\u5730\u76EE\u5F55\uFF08\u5305\u542B API Key\uFF09").action(async (targetDir) => {
    try {
      console.log(chalk45.bold("\n\u{1F4E6} \u5BFC\u51FA\u914D\u7F6E\n"));
      const validation = validateExport();
      if (!validation.valid) {
        console.log(chalk45.red(`\u274C ${validation.message}
`));
        process.exit(1);
      }
      const resolvedPath = targetDir.startsWith("~") ? path10.join(process.env.HOME || "", targetDir.slice(1)) : path10.resolve(targetDir);
      console.log("\u5BFC\u51FA\u6587\u4EF6:");
      console.log(`  ${chalk45.cyan("codex.json")}  - Codex \u914D\u7F6E`);
      console.log(`  ${chalk45.cyan("claude.json")} - Claude \u914D\u7F6E`);
      console.log();
      console.log(`\u76EE\u6807\u76EE\u5F55: ${chalk45.cyan(resolvedPath)}`);
      console.log();
      console.log(chalk45.yellow("\u26A0\uFE0F  \u5BFC\u51FA\u6587\u4EF6\u5305\u542B API Key\uFF0C\u8BF7\u59A5\u5584\u4FDD\u7BA1"));
      console.log();
      const result = exportConfig(resolvedPath);
      console.log(chalk45.green("\u2705 \u5BFC\u51FA\u6210\u529F"));
      console.log();
      console.log("\u5DF2\u5BFC\u51FA\u6587\u4EF6:");
      for (const file of result.exportedFiles) {
        console.log(`  ${chalk45.cyan("\u2713")} ${file}`);
      }
      console.log();
      console.log(chalk45.blue(`\u{1F4A1} \u5BFC\u5165\u547D\u4EE4: ccman import ${resolvedPath}
`));
    } catch (error) {
      console.error(chalk45.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/import.ts
init_dist2();
import chalk46 from "chalk";
import inquirer32 from "inquirer";
import path11 from "path";
function importCommand(program2) {
  program2.command("import <\u6E90\u76EE\u5F55>").description("\u4ECE\u672C\u5730\u76EE\u5F55\u5BFC\u5165\u914D\u7F6E\uFF08\u4F1A\u8986\u76D6\u5F53\u524D\u914D\u7F6E\uFF09").action(async (sourceDir) => {
    try {
      const resolvedPath = sourceDir.startsWith("~") ? path11.join(process.env.HOME || "", sourceDir.slice(1)) : path11.resolve(sourceDir);
      console.log(chalk46.bold("\n\u{1F4E5} \u5BFC\u5165\u914D\u7F6E\n"));
      const validation = validateImportDir(resolvedPath);
      if (!validation.valid) {
        console.log(chalk46.red(`\u274C ${validation.message}
`));
        process.exit(1);
      }
      console.log(chalk46.yellow("\u26A0\uFE0F  \u8B66\u544A\uFF1A\u5BFC\u5165\u5C06\u8986\u76D6\u5F53\u524D\u914D\u7F6E\n"));
      console.log(`\u6E90\u76EE\u5F55: ${chalk46.cyan(resolvedPath)}`);
      console.log();
      console.log("\u627E\u5230\u914D\u7F6E\u6587\u4EF6:");
      for (const file of validation.foundFiles) {
        console.log(`  ${chalk46.cyan("\u2713")} ${file}`);
      }
      console.log();
      console.log(chalk46.gray("\u5F53\u524D\u914D\u7F6E\u5C06\u88AB\u8986\u76D6\uFF08\u81EA\u52A8\u5907\u4EFD\uFF09"));
      console.log();
      const { confirmFirst } = await inquirer32.prompt([
        {
          type: "confirm",
          name: "confirmFirst",
          message: "\u786E\u8BA4\u5BFC\u5165\uFF1F",
          default: false
        }
      ]);
      if (!confirmFirst) {
        console.log(chalk46.gray("\n\u274C \u5DF2\u53D6\u6D88\n"));
        return;
      }
      console.log();
      console.log(chalk46.red.bold("\u26A0\uFE0F  \u6700\u540E\u786E\u8BA4\uFF1A\u6B64\u64CD\u4F5C\u5C06\u8986\u76D6\u6240\u6709\u5F53\u524D\u914D\u7F6E\uFF01"));
      console.log();
      const { confirmSecond } = await inquirer32.prompt([
        {
          type: "confirm",
          name: "confirmSecond",
          message: "\u771F\u7684\u8981\u7EE7\u7EED\u5417\uFF1F",
          default: false
        }
      ]);
      if (!confirmSecond) {
        console.log(chalk46.gray("\n\u274C \u5DF2\u53D6\u6D88\n"));
        return;
      }
      console.log();
      console.log(chalk46.gray("\u{1F4BE} \u5907\u4EFD\u5F53\u524D\u914D\u7F6E..."));
      console.log(chalk46.gray("\u{1F4E5} \u5BFC\u5165\u65B0\u914D\u7F6E..."));
      const result = importConfig(resolvedPath);
      console.log();
      console.log(chalk46.green("\u2705 \u5BFC\u5165\u6210\u529F"));
      console.log();
      if (result.backupPaths.length > 0) {
        console.log("\u5907\u4EFD\u6587\u4EF6:");
        for (const backupPath of result.backupPaths) {
          console.log(`  ${chalk46.gray(backupPath)}`);
        }
        console.log();
      }
      console.log("\u5DF2\u5BFC\u5165\u6587\u4EF6:");
      for (const file of result.importedFiles) {
        console.log(`  ${chalk46.cyan("\u2713")} ${file}`);
      }
      console.log();
      console.log(chalk46.blue("\u{1F4A1} \u8BF7\u4F7F\u7528 'ccman cx use' \u6216 'ccman cc use' \u5207\u6362\u670D\u52A1\u5546\n"));
    } catch (error) {
      console.error(chalk46.red(`
\u274C ${error.message}
`));
      process.exit(1);
    }
  });
}

// src/commands/gmn.ts
init_dist2();
import chalk47 from "chalk";
import inquirer33 from "inquirer";
var PROVIDER_NAME = "GMN";
var VALID_PLATFORMS = ["claude", "codex", "gemini", "opencode", "openclaw"];
var DEFAULT_PLATFORMS = ["codex", "opencode", "openclaw"];
var GMN_BASE_URLS = {
  claude: "https://gmn.chuangzuoli.cn/api",
  gemini: "https://gmn.chuangzuoli.cn/gemini",
  openclaw: "https://gmn.chuangzuoli.cn/openai"
};
var GMN_OPENAI_BASE_URLS = {
  cn: "https://gmn.chuangzuoli.cn/openai",
  com: "https://gmn.chuangzuoli.com"
};
var TOTAL_STEPS = 4;
function renderStep(current, total, title) {
  const barLength = total;
  const filledLength = Math.min(current, total);
  const bar = `${"\u25A0".repeat(filledLength)}${"\u25A1".repeat(barLength - filledLength)}`;
  return `\u6B65\u9AA4 ${current}/${total} [${bar}] ${title}`;
}
function printBanner() {
  printLogo();
  console.log(
    chalk47.cyanBright(
      [
        "  \u2588\u2588\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2557   \u2588\u2588\u2557",
        " \u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D  \u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2557  \u2588\u2588\u2551",
        " \u2588\u2588\u2551  \u2588\u2588\u2588\u2557 \u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557 \u2588\u2588\u2551",
        " \u2588\u2588\u2551   \u2588\u2588\u2551 \u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2588\u2588\u2551",
        " \u255A\u2588\u2588\u2588\u2588\u2588\u2588\u2554\u255D \u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2588\u2588\u2588\u2588\u2551",
        "  \u255A\u2550\u2550\u2550\u2550\u2550\u255D  \u255A\u2550\u255D     \u255A\u2550\u255D\u255A\u2550\u255D  \u255A\u2550\u2550\u2550\u255D",
        "  CCMAN  GMN \u4E00\u952E\u914D\u7F6E\u5411\u5BFC"
      ].join("\n")
    )
  );
  console.log(chalk47.gray("\u81EA\u52A8\u5199\u5165\u9009\u4E2D\u5DE5\u5177\u914D\u7F6E\uFF0C\u652F\u6301\u591A\u9009\u4E0E\u7AEF\u70B9\u9009\u62E9\u3002\n"));
}
function printKeyNotice() {
  console.log(
    chalk47.yellow(
      [
        "\u63D0\u793A\uFF1ACodex \u4E0E OpenCode \u5171\u4EAB OpenAI \u5957\u9910/\u7AEF\u70B9\uFF1BGemini \u4E0E Claude \u9700\u5355\u72EC\u8BA2\u9605\u3002",
        "\u4F8B\u5982\uFF1AGemini \u5957\u9910\u4E0D\u80FD\u7528\u4E8E Codex/OpenCode\uFF0CClaude \u5957\u9910\u4E5F\u4E0D\u80FD\u901A\u7528\u3002",
        "VS Code \u7684 Codex \u63D2\u4EF6\u82E5\u4F7F\u7528\u672C\u673A\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u4E5F\u4F1A\u8DDF\u968F\u672C\u6B21\u5199\u5165\u751F\u6548\u3002"
      ].join("\n")
    )
  );
}
function parsePlatforms(platformArg) {
  if (platformArg === "all") {
    return [...VALID_PLATFORMS];
  }
  const platforms = platformArg.split(",").map((p) => p.trim().toLowerCase());
  for (const platform of platforms) {
    if (!VALID_PLATFORMS.includes(platform)) {
      throw new Error(`\u65E0\u6548\u7684\u5E73\u53F0: ${platform}\u3002\u6709\u6548\u503C: ${VALID_PLATFORMS.join(", ")}, all`);
    }
  }
  return platforms;
}
async function promptApiKey() {
  const answers = await inquirer33.prompt([
    {
      type: "password",
      name: "apiKey",
      message: "\u8BF7\u8F93\u5165 GMN API Key:",
      mask: "*",
      validate: (value) => {
        if (!value) return "API Key \u4E0D\u80FD\u4E3A\u7A7A";
        return true;
      }
    }
  ]);
  return answers.apiKey;
}
async function promptPlatforms() {
  const answers = await inquirer33.prompt([
    {
      type: "checkbox",
      name: "platforms",
      message: "\u9009\u62E9\u8981\u914D\u7F6E\u7684\u5DE5\u5177\uFF08\u53EF\u591A\u9009\uFF0C\u7A7A\u683C\u9009\u62E9 / a\u5168\u9009 / i\u53CD\u9009 / \u56DE\u8F66\u786E\u8BA4\uFF09:",
      dontShowHints: true,
      choices: [
        { name: "Claude Code\uFF08\u9700\u5355\u72EC\u8BA2\u9605 Claude \u5957\u9910\uFF09", value: "claude" },
        { name: "Codex\uFF08\u9700\u5355\u72EC\u8BA2\u9605 OpenAI \u5957\u9910\uFF09", value: "codex" },
        { name: "Gemini CLI\uFF08\u9700\u5355\u72EC\u8BA2\u9605 Gemini \u5957\u9910\uFF09", value: "gemini" },
        { name: "OpenCode\uFF08\u4E0E Codex \u5171\u4EAB OpenAI \u5957\u9910\uFF09", value: "opencode" },
        { name: "OpenClaw\uFF08\u4E0E Codex \u5171\u4EAB OpenAI \u5957\u9910\uFF09", value: "openclaw" },
        { name: "\u5168\u90E8\uFF08\u5C06\u4F9D\u6B21\u914D\u7F6E\u6240\u6709\u5DE5\u5177\uFF09", value: "all" }
      ],
      default: DEFAULT_PLATFORMS,
      validate: (value) => {
        if (!value || value.length === 0) return "\u81F3\u5C11\u9009\u62E9\u4E00\u4E2A\u5E73\u53F0";
        return true;
      }
    }
  ]);
  const selected = answers.platforms;
  if (selected.includes("all")) {
    return [...VALID_PLATFORMS];
  }
  return selected;
}
async function resolvePlatforms(platformArg) {
  if (platformArg && platformArg.trim().length > 0) {
    return parsePlatforms(platformArg);
  }
  return promptPlatforms();
}
async function resolveOpenAIDomain(domainArg, platforms) {
  const needsOpenAI = platforms.includes("codex") || platforms.includes("opencode") || platforms.includes("openclaw");
  if (!needsOpenAI) {
    return "cn";
  }
  if (domainArg && domainArg.trim().length > 0) {
    const normalized = domainArg.trim().toLowerCase();
    if (normalized === "cn" || normalized === "com") {
      return normalized;
    }
    throw new Error(`\u65E0\u6548\u7684 domain: ${domainArg} (\u53EF\u9009: cn, com)`);
  }
  const answers = await inquirer33.prompt([
    {
      type: "list",
      name: "domain",
      message: "\u9009\u62E9 Codex/OpenCode \u7684 OpenAI Base URL\uFF08\u53EA\u5F71\u54CD\u8FD9\u4E24\u4E2A\u5DE5\u5177\uFF09:",
      choices: [
        { name: `CN\uFF08\u56FD\u5185\uFF09  ${GMN_OPENAI_BASE_URLS.cn}`, value: "cn" },
        { name: `COM\uFF08\u56FD\u9645\uFF09 ${GMN_OPENAI_BASE_URLS.com}`, value: "com" }
      ],
      default: "cn"
    }
  ]);
  return answers.domain;
}
async function gmnCommand(apiKey, platformArg, domainArg) {
  printBanner();
  let platforms;
  try {
    console.log(chalk47.cyan(`
${renderStep(1, TOTAL_STEPS, "\u9009\u62E9\u8981\u914D\u7F6E\u7684\u5DE5\u5177")}`));
    platforms = await resolvePlatforms(platformArg);
  } catch (error) {
    console.error(chalk47.red(`\u274C ${error.message}`));
    process.exit(1);
  }
  console.log(chalk47.gray(`\u5DF2\u9009\u62E9: ${platforms.join(", ")}`));
  printKeyNotice();
  let openaiDomain;
  try {
    if (platforms.includes("codex") || platforms.includes("opencode")) {
      console.log(
        chalk47.cyan(`
${renderStep(2, TOTAL_STEPS, "\u9009\u62E9 OpenAI \u7AEF\u70B9 (\u4EC5 Codex/OpenCode)")}`)
      );
    } else {
      console.log(chalk47.cyan(`
${renderStep(2, TOTAL_STEPS, "\u9009\u62E9 OpenAI \u7AEF\u70B9 (\u5DF2\u8DF3\u8FC7)")}`));
      console.log(chalk47.gray("\u672A\u9009\u62E9 Codex/OpenCode\uFF0C\u5C06\u8DF3\u8FC7\u6B64\u6B65\u9AA4\u3002"));
    }
    openaiDomain = await resolveOpenAIDomain(domainArg, platforms);
  } catch (error) {
    console.error(chalk47.red(`\u274C ${error.message}`));
    process.exit(1);
  }
  let resolvedApiKey = apiKey?.trim();
  console.log(chalk47.cyan(`
${renderStep(3, TOTAL_STEPS, "\u8F93\u5165 API Key")}`));
  if (!resolvedApiKey) {
    resolvedApiKey = await promptApiKey();
  } else {
    console.log(chalk47.gray("\u5DF2\u901A\u8FC7\u53C2\u6570\u63D0\u4F9B API Key\uFF08\u5DF2\u9690\u85CF\uFF09"));
  }
  if (!resolvedApiKey?.trim()) {
    console.error(chalk47.red("\u274C \u9519\u8BEF: API Key \u4E0D\u80FD\u4E3A\u7A7A"));
    process.exit(1);
  }
  const openaiBaseUrl = GMN_OPENAI_BASE_URLS[openaiDomain];
  const platformBaseUrls = {
    claude: GMN_BASE_URLS.claude,
    codex: openaiBaseUrl,
    gemini: GMN_BASE_URLS.gemini,
    opencode: openaiBaseUrl,
    openclaw: openaiBaseUrl
  };
  console.log(chalk47.cyan(`
${renderStep(4, TOTAL_STEPS, "\u5F00\u59CB\u5199\u5165\u914D\u7F6E")}`));
  console.log(chalk47.gray(`\u5DF2\u9009\u62E9\u5E73\u53F0: ${platforms.join(", ")}`));
  if (platforms.includes("codex") || platforms.includes("opencode") || platforms.includes("openclaw")) {
    console.log(chalk47.gray(`OpenAI \u7AEF\u70B9: ${openaiBaseUrl}`));
  }
  console.log();
  const ALL_TOOLS = {
    claude: { name: "Claude Code", manager: createClaudeManager() },
    codex: { name: "Codex", manager: createCodexManager() },
    gemini: { name: "Gemini CLI", manager: createGeminiManager() },
    opencode: { name: "OpenCode", manager: createOpenCodeManager() },
    openclaw: { name: "OpenClaw", manager: createOpenClawManager() }
  };
  const tools = platforms.map((platform) => ({
    platform,
    ...ALL_TOOLS[platform]
  }));
  let completed = 0;
  for (const { platform, name, manager } of tools) {
    try {
      console.log(chalk47.gray(`\u2192 \u914D\u7F6E ${name}...`));
      const baseUrl = platformBaseUrls[platform];
      const existing = manager.findByName(PROVIDER_NAME);
      const provider = existing ? manager.edit(existing.id, { baseUrl, apiKey: resolvedApiKey }) : manager.add({ name: PROVIDER_NAME, baseUrl, apiKey: resolvedApiKey });
      manager.switch(provider.id);
      completed += 1;
      console.log(chalk47.green(`\u2705 ${name}`));
    } catch (error) {
      console.error(chalk47.red(`\u274C ${name}: ${error.message}`));
    }
  }
  console.log(chalk47.green(`
\u{1F389} GMN \u914D\u7F6E\u5B8C\u6210\uFF01(${completed}/${tools.length})`));
  console.log(chalk47.gray("\u63D0\u793A\uFF1A\u8BF7\u91CD\u542F\u5BF9\u5E94\u5DE5\u5177/\u63D2\u4EF6\u4EE5\u4F7F\u914D\u7F6E\u751F\u6548\u3002"));
}

// src/index.ts
init_dist2();
if (process.env.NODE_ENV === "development") {
  console.log(chalk48.gray("\n[\u5F00\u53D1\u6A21\u5F0F] \u914D\u7F6E\u76EE\u5F55:"));
  console.log(chalk48.gray(`  ccman: ${getCcmanDir()}`));
  console.log(chalk48.gray(`  codex:  ${getCodexDir()}`));
  console.log(chalk48.gray(`  claude: ${getClaudeDir()}`));
  console.log(chalk48.gray(`  opencode: ${getOpenCodeDir()}`));
  console.log();
}
var program = new Command3();
program.name("ccman").description("Codex/Claude Code/Gemini/OpenCode API \u670D\u52A1\u5546\u914D\u7F6E\u7BA1\u7406\u5DE5\u5177").version(VERSION).showHelpAfterError(false).exitOverride((err) => {
  if (err.code === "commander.helpDisplayed" || err.code === "commander.version") {
    process.exit(0);
  }
  throw err;
});
program.on("command:*", (operands) => {
  const unknownCommand = operands[0];
  console.error(chalk48.red(`
\u274C \u672A\u77E5\u547D\u4EE4: ${unknownCommand}
`));
  const availableCommands = ["cx", "cc", "gm", "oc", "claw", "mcp", "sync", "export", "import", "gmn"];
  const suggestions = availableCommands.filter(
    (cmd) => cmd.includes(unknownCommand) || unknownCommand.includes(cmd)
  );
  if (suggestions.length > 0) {
    console.log(chalk48.yellow("\u{1F4A1} \u4F60\u662F\u4E0D\u662F\u60F3\u8F93\u5165:"));
    suggestions.forEach((cmd) => {
      console.log(chalk48.cyan(`   ccman ${cmd}`));
    });
    console.log();
  }
  console.log(chalk48.gray("\u67E5\u770B\u6240\u6709\u53EF\u7528\u547D\u4EE4: ") + chalk48.cyan("ccman --help"));
  console.log();
  process.exit(1);
});
var cx = program.command("cx").description("\u7BA1\u7406 Codex \u670D\u52A1\u5546");
createCodexCommands(cx);
cx.action(async () => {
  printLogo();
  await startCodexMenu();
});
var cc = program.command("cc").description("\u7BA1\u7406 Claude \u670D\u52A1\u5546");
createClaudeCommands(cc);
cc.action(async () => {
  printLogo();
  await startClaudeMenu();
});
var gm = program.command("gm").description("\u7BA1\u7406 Gemini CLI \u670D\u52A1\u5546");
createGeminiCommands(gm);
gm.action(async () => {
  printLogo();
  await startGeminiMenu();
});
var oc = program.command("oc").description("\u7BA1\u7406 OpenCode \u670D\u52A1\u5546");
createOpenCodeCommands(oc);
oc.action(async () => {
  printLogo();
  await startOpenCodeMenu();
});
var claw = program.command("claw").description("\u7BA1\u7406 OpenClaw \u670D\u52A1\u5546");
createOpenClawCommands(claw);
claw.action(async () => {
  printLogo();
  claw.help();
});
var mcp = program.command("mcp").description("\u7BA1\u7406 MCP \u670D\u52A1\u5668");
createMCPCommands(mcp);
mcp.action(() => {
  mcp.help();
});
var sync = program.command("sync").description("WebDAV \u540C\u6B65\u914D\u7F6E");
createSyncCommands(sync);
sync.action(async () => {
  printLogo();
  await startSyncMenu();
});
exportCommand(program);
importCommand(program);
program.command("gmn [apiKey]").description("\u914D\u7F6E GMN \u5230\u6240\u6709\u5DE5\u5177").option("-p, --platform <platforms>", "\u6307\u5B9A\u5E73\u53F0 (claude,codex,gemini,opencode,all)").option("-d, --domain <domain>", "\u9009\u62E9 OpenAI \u7AEF\u70B9 (cn|com)").action(async (apiKey, options) => {
  await gmnCommand(apiKey, options.platform, options.domain);
});
(async () => {
  if (!process.argv.slice(2).length) {
    printLogo();
    await startMainMenu();
  } else {
    program.parse(process.argv);
  }
})();
