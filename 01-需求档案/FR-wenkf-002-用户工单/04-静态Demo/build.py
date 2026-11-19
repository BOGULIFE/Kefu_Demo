"""Rebuild the offline HTML from the maintained source files. No dependencies."""
from pathlib import Path
import re

root = Path(__file__).resolve().parent
html = (root / 'index.html').read_text(encoding='utf-8')
html = re.sub(r'<link rel="stylesheet" href="style\.css[^\"]*">',
              lambda _: '<style>' + (root / 'style.css').read_text(encoding='utf-8') + '</style>', html)
html = re.sub(r'<script src="app\.js[^\"]*"></script>',
              lambda _: '<script>' + (root / 'app.js').read_text(encoding='utf-8') + '</script>', html)
output = root / 'FR-wenkf-002-用户工单Demo.html'
output.write_text(html, encoding='utf-8')
print(f'Built: {output.name} ({output.stat().st_size:,} bytes)')
