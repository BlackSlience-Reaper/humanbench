"""列出 app.js 当前有、但某语言 ui.json 里没有的界面片段"""
import json, os, sys
sys.path.insert(0, os.path.dirname(__file__)); import ui_tool
src = open(os.path.join(ui_tool.ROOT, 'app.js'), encoding='utf-8').read()
segs = []
for line in src.split('\n'):
    for s in ui_tool.segments_of(ui_tool.code_part(line)):
        if s not in segs: segs.append(s)
skip = {"豆包", "GPT-5 系"}
for l in sys.argv[1:] or ['en', 'ja', 'es', 'ko', 'fr']:
    t = json.load(open(os.path.join(ui_tool.ROOT, 'i18n', l, 'ui.json'), encoding='utf-8'))
    ex = os.path.join(ui_tool.ROOT, 'i18n', l, 'ui_extra.json')
    if os.path.exists(ex): t.update(json.load(open(ex, encoding='utf-8')))
    print(l, len(t), 'missing:', [s for s in segs if s not in t and s not in skip])
