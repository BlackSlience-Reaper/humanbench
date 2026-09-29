#!/bin/sh
# 把 _parts 里的法语分段拼回完整文件
cd "$(dirname "$0")"
cat _parts/fr_bank1.js _parts/fr_bank2.js _parts/fr_bank3.js _parts/fr_bank4.js > bank.js
cp _parts/fr_chats.js chats.js; cp _parts/fr_arc.js arc.js; cp _parts/fr_lv4.js lv4.js
