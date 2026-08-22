@echo off
set "WORKSPACE_ROOT=%~dp0"
set "NODE_BIN=C:\Users\MSi A520M-A PRO\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
set "PNPM=C:\Users\MSi A520M-A PRO\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd"

set "PATH=%NODE_BIN%;%PATH%"
cd /d "%WORKSPACE_ROOT%"
call "%PNPM%" dev --host 127.0.0.1
