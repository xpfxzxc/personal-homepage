#!/usr/bin/env python3
"""
Favicon Fetcher - 批量抓取网站 favicon
用法: python fetch_favicon.py <output_dir> <name1> [name2] ...
      python fetch_favicon.py <output_dir> --url <url1> [url2] ...
"""

import sys
import os
import re
import urllib.request
import urllib.parse
from html.parser import HTMLParser

class FaviconParser(HTMLParser):
    """解析 HTML 提取 favicon 链接"""
    def __init__(self):
        super().__init__()
        self.icons = []

    def handle_starttag(self, tag, attrs):
        if tag != 'link':
            return
        attrs_dict = dict(attrs)
        rel = attrs_dict.get('rel', '').lower()
        href = attrs_dict.get('href', '')
        if href and ('icon' in rel or 'shortcut' in rel):
            self.icons.append(href)

def fetch_url(url, timeout=10):
    """获取 URL 内容"""
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read(), resp.geturl()
    except Exception as e:
        return None, str(e)

def find_favicon_urls(base_url):
    """从网页中查找 favicon URL 列表"""
    urls = []

    # 1. 尝试解析 HTML 中的 link 标签
    html_content, final_url = fetch_url(base_url)
    if html_content:
        try:
            parser = FaviconParser()
            parser.feed(html_content.decode('utf-8', errors='ignore'))
            for icon in parser.icons:
                if icon.startswith('//'):
                    icon = 'https:' + icon
                elif icon.startswith('/'):
                    icon = urllib.parse.urljoin(final_url, icon)
                elif not icon.startswith('http'):
                    icon = urllib.parse.urljoin(final_url, icon)
                urls.append(icon)
        except:
            pass

    # 2. 添加常见 favicon 路径
    parsed = urllib.parse.urlparse(base_url)
    root = f"{parsed.scheme}://{parsed.netloc}"
    common_paths = ['/favicon.ico', '/favicon.png', '/favicon.svg', '/apple-touch-icon.png']
    for path in common_paths:
        urls.append(root + path)

    return urls

def download_favicon(urls, output_path):
    """尝试从 URL 列表下载 favicon"""
    for url in urls:
        content, _ = fetch_url(url)
        if content and len(content) > 100:  # 有效文件至少 100 字节
            # 确定扩展名
            ext = '.ico'
            if '.png' in url.lower():
                ext = '.png'
            elif '.svg' in url.lower():
                ext = '.svg'
            elif content[:4] == b'\x89PNG':
                ext = '.png'
            elif b'<svg' in content[:200]:
                ext = '.svg'

            final_path = output_path + ext
            with open(final_path, 'wb') as f:
                f.write(content)
            return final_path, url
    return None, None

def sanitize_filename(name):
    """清理文件名"""
    return re.sub(r'[<>:"/\\|?*]', '_', name).strip()

def main():
    if len(sys.argv) < 3:
        print("Usage: python fetch_favicon.py <output_dir> <name1> [name2] ...")
        print("       python fetch_favicon.py <output_dir> --url <url1> [url2] ...")
        sys.exit(1)

    output_dir = sys.argv[1]
    os.makedirs(output_dir, exist_ok=True)

    # 解析参数
    if sys.argv[2] == '--url':
        # URL 模式：直接使用提供的 URL
        items = [(urllib.parse.urlparse(url).netloc.replace('www.', ''), url)
                 for url in sys.argv[3:]]
    else:
        # Name mode: Claude needs to provide URL mapping
        print("ERROR: Name mode requires Claude to provide URL mapping")
        print("Please use --url mode with full URLs")
        print("Or let Claude search for official URLs first")
        sys.exit(1)

    results = {'success': [], 'failed': []}

    for name, url in items:
        safe_name = sanitize_filename(name)
        output_path = os.path.join(output_dir, safe_name)

        print(f"Processing: {name} ({url})")
        favicon_urls = find_favicon_urls(url)
        saved_path, source_url = download_favicon(favicon_urls, output_path)

        if saved_path:
            results['success'].append({'name': name, 'url': url, 'file': saved_path, 'source': source_url})
            print(f"  [OK] saved: {saved_path}")
        else:
            results['failed'].append({'name': name, 'url': url})
            print(f"  [FAIL] download failed")

    # 输出摘要
    print(f"\n=== Done ===")
    print(f"Success: {len(results['success'])}")
    print(f"Failed: {len(results['failed'])}")

    if results['failed']:
        print("\nFailed list:")
        for item in results['failed']:
            print(f"  - {item['name']}: {item['url']}")

if __name__ == '__main__':
    main()
