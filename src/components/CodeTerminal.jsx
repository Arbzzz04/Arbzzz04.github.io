import { useEffect, useRef, useState } from 'react';

/* A faux editor/terminal that types out rotating real snippets from the
   stack, with lightweight syntax highlighting and a blinking cursor.
   Respects prefers-reduced-motion (shows the snippet without typing). */

const SNIPPETS = [
  {
    file: 'spark_wordcount.py',
    code: `# Distributed word count with PySpark
df = spark.read.text("hdfs://logs/*.txt")
counts = (df.rdd
    .flatMap(lambda l: l.value.split())
    .map(lambda w: (w, 1))
    .reduceByKey(lambda a, b: a + b))
counts.sortBy(lambda x: -x[1]).take(10)`,
  },
  {
    file: 'analysis.py',
    code: `# Exploratory analysis with pandas
import pandas as pd
df = pd.read_csv("sales.csv")
top = (df.groupby("region")["revenue"]
         .sum()
         .sort_values(ascending=False))
print(top.head())`,
  },
  {
    file: 'top_customers.sql',
    code: `-- Highest-spending customers
SELECT customer_id, SUM(amount) AS total
FROM orders
WHERE status = 'paid'
GROUP BY customer_id
ORDER BY total DESC
LIMIT 10;`,
  },
];

const KEYWORDS = new Set([
  'def', 'return', 'import', 'from', 'as', 'lambda', 'for', 'in', 'if', 'else',
  'and', 'or', 'not', 'with', 'class', 'print', 'true', 'false', 'none',
  'select', 'sum', 'count', 'avg', 'where', 'group', 'by', 'order', 'desc',
  'asc', 'limit', 'as',
]);

const TOKEN_RE =
  /(#[^\n]*|--[^\n]*)|("(?:[^"\\]|\\.)*"?|'(?:[^'\\]|\\.)*'?)|(\d+(?:\.\d+)?)|([A-Za-z_]\w*)(?=\()|([A-Za-z_]\w*)|(\s+)|(.)/g;

function highlight(text) {
  const out = [];
  let m;
  let key = 0;
  TOKEN_RE.lastIndex = 0;
  while ((m = TOKEN_RE.exec(text)) !== null) {
    if (m[1] !== undefined) out.push(<span key={key++} className="tok-com">{m[1]}</span>);
    else if (m[2] !== undefined) out.push(<span key={key++} className="tok-str">{m[2]}</span>);
    else if (m[3] !== undefined) out.push(<span key={key++} className="tok-num">{m[3]}</span>);
    else if (m[4] !== undefined) out.push(<span key={key++} className="tok-fn">{m[4]}</span>);
    else if (m[5] !== undefined) {
      const cls = KEYWORDS.has(m[5].toLowerCase()) ? 'tok-kw' : 'tok-id';
      out.push(<span key={key++} className={cls}>{m[5]}</span>);
    } else if (m[6] !== undefined) out.push(m[6]);
    else out.push(<span key={key++} className="tok-punct">{m[7]}</span>);
    if (m.index === TOKEN_RE.lastIndex) TOKEN_RE.lastIndex++;
  }
  return out;
}

export default function CodeTerminal() {
  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const [snippet, setSnippet] = useState(0);
  const [shown, setShown] = useState(reduce ? SNIPPETS[0].code : '');
  const timer = useRef(null);

  useEffect(() => {
    if (reduce) return undefined;
    const full = SNIPPETS[snippet].code;
    let i = 0;

    const type = () => {
      i += 1;
      setShown(full.slice(0, i));
      if (i < full.length) {
        timer.current = setTimeout(type, 26);
      } else {
        // hold the finished snippet, then move to the next one
        timer.current = setTimeout(() => {
          setShown('');
          setSnippet((s) => (s + 1) % SNIPPETS.length);
        }, 2200);
      }
    };

    timer.current = setTimeout(type, 350);
    return () => clearTimeout(timer.current);
  }, [snippet, reduce]);

  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal__bar">
        <span className="terminal__dots">
          <i style={{ background: '#ff5f57' }} />
          <i style={{ background: '#febc2e' }} />
          <i style={{ background: '#28c840' }} />
        </span>
        <span className="terminal__file">{SNIPPETS[snippet].file}</span>
      </div>
      <pre className="terminal__body">
        <code>
          {highlight(shown)}
          {!reduce && <span className="terminal__cursor" />}
        </code>
      </pre>
    </div>
  );
}
