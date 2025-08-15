# mcpmcp-server
[![Trust Score](https://archestra.ai/mcp-catalog/api/badge/quality/glenngillen/mcpmcp-server)](https://archestra.ai/mcp-catalog/glenngillen__mcpmcp-server)

Discover, setup, and integrate MCP servers with your favorite clients. Unlock the full potential of AI in your daily workflow.

## Installation/usage:

Update the configuration of your MCP client to the following: 

```json
{
  "mcpServers": {
    "mcpmcp": {
      "command": "npx",
      "args": ["-y", "mcp-remote@latest", "https://mcpmcp.io/mcp"]
    }
  }
}
```

(**note:** this config definitely works for Claude Desktop on macOS. If you need variations for other apps or platforms check the [homepage](https://mcpmcp.io/#install)
