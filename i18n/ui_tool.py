"""界面文字的抽取和替换。
extract：把 app.js 里给玩家看的中文片段（可含 ${...}）抽成 i18n/ui_segments.json
apply(src, table)：按同样的切分规则，把片段替换成某种语言的译文
"""
import re, json, sys, os
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CJK = re.compile(r'[一-鿿　-〿＀-￯]')
# 片段：不跨越引号、反引号、尖括号、换行；允许包含不带引号的简单 ${...}
SEG = re.compile(r'(?:[^"`<>\n$]|\$(?!\{)|\$\{[^{}`"\n]*\})+')

def code_part(line):
    s = line.strip()
    if s.startswith('//') or s.startswith('/*') or s.startswith('*'):
        return ''
    # 去掉行尾注释（前面至少两个空格的 //）
    m = re.search(r'\s{2,}//\s', line)
    return line[:m.start()] if m else line

def segments_of(text):
    out = []
    for m in SEG.finditer(text):
        seg = m.group(0).strip()
        if seg and CJK.search(seg):
            out.append(seg)
    return out

def extract():
    src = open(os.path.join(ROOT, 'app.js'), encoding='utf-8').read()
    segs = []
    for line in src.split('\n'):
        for seg in segments_of(code_part(line)):
            if seg not in segs: segs.append(seg)
    json.dump(segs, open(os.path.join(ROOT, 'i18n', 'ui_segments.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print(len(segs), 'segments')

def apply(src, table):
    out = []
    for line in src.split('\n'):
        code = code_part(line); rest = line[len(code):]
        def sub(m):
            raw = m.group(0); seg = raw.strip()
            if seg in table:
                lead = raw[:len(raw) - len(raw.lstrip())]; trail = raw[len(raw.rstrip()):]
                return lead + table[seg] + trail
            return raw
        out.append(SEG.sub(sub, code) + rest)
    return '\n'.join(out)

if __name__ == '__main__' and sys.argv[1:] == ['extract']:
    extract()
