$workspaceRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$nodeBin = "C:\Users\MSi A520M-A PRO\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin"
$pnpm = "C:\Users\MSi A520M-A PRO\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd"

$env:Path = "$nodeBin;$env:Path"
Set-Location $workspaceRoot
& $pnpm dev --host 127.0.0.1
