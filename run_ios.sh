#!/bin/bash

SCRIPT_DIR=$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &> /dev/null && pwd)

osascript <<EOF
tell application "Terminal"
    activate
    do script "cd $SCRIPT_DIR/url-shortener-back && docker compose up"
end tell
EOF

osascript <<EOF
tell application "Terminal"
    activate
    do script "cd $SCRIPT_DIR/url-shortener-front && bun run dev"
end tell
EOF