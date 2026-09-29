-- 埋点：一行一个事件。不存 IP、不存名字；sid 是浏览器本地生成的随机匿名编号
CREATE TABLE IF NOT EXISTS events (
  ts INTEGER NOT NULL,        -- 毫秒时间戳
  ev TEXT NOT NULL,           -- visit / start / finish / cards / cards_clean / share / poster / lang
  sid TEXT,                   -- 匿名编号
  lang TEXT,                  -- 页面语言
  country TEXT,               -- Cloudflare 给的国家代码
  src TEXT,                   -- 来源：direct / challenge / 其他
  d TEXT                      -- 附加信息（JSON，比如档位、人格、用时）
);
CREATE INDEX IF NOT EXISTS idx_ev_ts ON events(ev, ts);
CREATE INDEX IF NOT EXISTS idx_sid ON events(sid);
