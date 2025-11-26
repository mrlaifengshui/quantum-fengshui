# 量子風水 Quantum Fengshui

> 結合量子科學與易經智慧，透過身心靈共振重塑豐盛磁場

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://github.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 專案簡介

量子風水是一個現代化的風水咨詢網站，融合了：
- ⚛️ **量子科學** - 運用量子力學原理理解能量場
- ☯️ **易經智慧** - 結合數千年的易經智慧
- 🧘 **整合身心靈** - 全方位提升生命能量
- 💎 **專業咨詢** - 提供個人化風水咨詢服務

---

## 📱 功能特點

### ✅ 完全響應式設計
- 桌面、平板、手機完美適配
- 4 個響應式斷點（768px, 480px, 375px）
- 手機優先設計理念

### ✅ 現代化 UI/UX
- 深色紫藍漸變主題 (#9333ea, #6366f1)
- 量子太極圖標動畫
- 平滑滾動動畫
- 懸停互動效果
- WhatsApp 浮動聯絡按鈕

### ✅ 內容管理
- **2 篇完整專業文章已上線** ⭐⭐
  - 📝 《量子糾纏與風水能量場的科學解讀》- 3,500+ 字 + 8 張圖
  - 📝 《易經八卦與現代空間規劃》- 4,200+ 字 + 2 張圖（全英文）
  - 包含 SEO 優化 + 結構化數據
  - AI 搜尋引擎友好
  - 可點擊閱讀完整版
- 4 篇文章規劃中
- 動態 JavaScript 渲染
- 易於添加新內容

### ✅ SEO 優化
- 語義化 HTML5 結構
- Meta 標籤優化
- Alt 文本完善
- 快速載入速度

---

## 📁 專案結構

```
quantum-fengshui/
├── index.html                                    # 主頁面（含量子太極圖標）
├── css/
│   └── style_taichi.css                         # 外部樣式表（含太極動畫）
├── js/
│   └── main_taichi.js                           # 外部 JavaScript
├── articles/
│   └── article-1-quantum-fengshui.html          # 第一篇完整文章 ⭐
├── images/
│   ├── quantum-entanglement-hero.jpg            # 量子糾纏首圖
│   ├── quantum-entanglement-principle.jpg       # 量子原理示意圖
│   ├── fengshui-energy-flow.jpg                 # 風水能量流動圖
│   ├── human-energy-field.jpg                   # 人體能量場
│   ├── home-improvement-case.jpg                # 居家改善案例
│   ├── mirror-placement-fengshui.jpg            # 鏡子擺放示範
│   ├── plants-energy-purification.jpg           # 植物能量淨化
│   └── color-frequency-spectrum.jpg             # 色彩頻率光譜
├── README.md                                     # 專案說明（本文件）
├── 文章規劃-六篇完整大綱.md                        # 6 篇文章完整規劃
├── 文章1-量子糾纏與風水-完整版.md                   # 第一篇文章 Markdown 原始檔
└── 下一步行動計劃.md                              # 開發路線圖
```

---

## 🚀 快速開始

### **方法 1: 直接訪問**
如果已部署到 GitHub Pages：
```
https://您的用戶名.github.io/quantum-fengshui/
```

### **方法 2: 本地運行**
1. 下載或克隆此倉庫
2. 用瀏覽器打開 `index.html`
3. 無需任何伺服器或建置工具

### **方法 3: Live Server（推薦開發使用）**
如果使用 VS Code：
1. 安裝 "Live Server" 擴展
2. 右鍵 `index.html` > "Open with Live Server"
3. 自動在瀏覽器打開並支持熱重載

---

## 🎨 自定義配置

### **修改顏色主題**
編輯 `css/style.css` 中的 CSS 變數：

```css
:root {
    --primary-color: #9333ea;      /* 主色調（紫色）*/
    --secondary-color: #6366f1;    /* 次要色調（藍色）*/
    --accent-color: #8b5cf6;       /* 強調色 */
    --dark-bg: #0f0f1e;           /* 背景色 */
    --card-bg: #1a1a2e;           /* 卡片背景 */
    --text-light: #e2e8f0;        /* 淺色文字 */
    --text-gray: #94a3b8;         /* 灰色文字 */
    --border-color: #2d2d44;      /* 邊框顏色 */
}
```

### **添加新文章**
編輯 `js/main.js`，在 `articles` 陣列中添加：

```javascript
{
    id: 7,
    title: "您的文章標題",
    category: "類別名稱",
    excerpt: "文章摘要描述...",
    date: "2025-01-20"
}
```

### **修改聯絡資訊**
編輯 `index.html` 中的 Contact Section：

```html
<div class="contact-value">
    <a href="https://您的網站.com">您的網站.com</a>
</div>
```

---

## 📱 響應式斷點

| 螢幕尺寸 | 解析度 | 標題字體 | 高亮字體 | Hero Padding |
|---------|--------|---------|---------|--------------|
| 🖥️ 桌面 | >768px | 3rem | 3.5rem | 8rem |
| 📱 平板 | ≤768px | 1.5rem | 1.75rem | 9rem |
| 📱 手機 | ≤480px | 1.25rem | 1.45rem | 8rem |
| 📱 小手機 | ≤375px | 1.15rem | 1.35rem | 7rem |

---

## 🛠️ 技術棧

- **HTML5** - 語義化結構
- **CSS3** - 現代樣式、Grid、Flexbox、動畫
- **JavaScript (ES6+)** - 動態內容、DOM 操作
- **Google Fonts** - Noto Sans TC 中文字體
- **GitHub Pages** - 免費靜態網站托管

---

## 🌐 部署到 GitHub Pages

詳細步驟請查看：[GITHUB-PAGES-教學.md](./GITHUB-PAGES-教學.md)

**快速步驟：**
1. 創建 GitHub 倉庫
2. 上傳所有文件
3. Settings > Pages > 選擇 main 分支
4. 完成！

---

## ✏️ 如何編輯

### **在 GitHub 網頁直接編輯：**
1. 點擊要編輯的文件
2. 點擊 ✏️ 鉛筆圖標
3. 進行修改
4. 提交更改
5. 等待 1-2 分鐘自動部署

### **使用 GitHub.dev：**
1. 在倉庫頁面按 `.` 鍵
2. 打開線上 VS Code
3. 編輯文件
4. Commit & Push

---

## 📊 瀏覽器支持

| 瀏覽器 | 版本 | 支持狀態 |
|-------|------|---------|
| Chrome | 90+ | ✅ 完全支持 |
| Firefox | 88+ | ✅ 完全支持 |
| Safari | 14+ | ✅ 完全支持 |
| Edge | 90+ | ✅ 完全支持 |
| Mobile Safari | iOS 13+ | ✅ 完全支持 |
| Chrome Mobile | Android 8+ | ✅ 完全支持 |

---

## 🎯 路線圖

### ✅ 已完成
- [x] 響應式設計（桌面/平板/手機）
- [x] 量子太極圖標動畫
- [x] WhatsApp 浮動聯絡按鈕
- [x] 動態文章載入
- [x] 平滑滾動導航
- [x] 手機字體優化
- [x] GitHub Pages 部署
- [x] **第一篇完整專業文章上線** ⭐
  - 包含 8 張高質量配圖
  - 3,500+ 字深度內容
  - 完整 HTML 頁面
  - 響應式設計

### 🔜 近期計劃（優先級排序）
#### **階段 1：內容完善（最高優先）**
- [ ] 生成第 2-6 篇文章 HTML 頁面
- [ ] 為每篇文章生成配圖（共約 40 張）
- [ ] 更新首頁所有文章連結

#### **階段 2：視覺優化**
- [ ] 添加真實案例照片
- [ ] 添加個人/辦公室照片
- [ ] 優化圖片載入速度

#### **階段 3：功能擴展**
- [ ] 聯絡表單（Google Forms 或 Formspree）
- [ ] 線上預約系統
- [ ] 客戶見證區塊

#### **階段 4：整合與分析**
- [ ] Google Analytics 追蹤
- [ ] Facebook Pixel
- [ ] 社群媒體分享按鈕
- [ ] 電子報訂閱功能
- [ ] 多語言支持（英文版）

---

## 📞 聯絡方式

- **官方網站**: [mrlaifengshui.com](https://mrlaifengshui.com)
- **電子郵件**: [mrlaifengshui@gmail.com](mailto:mrlaifengshui@gmail.com)
- **WhatsApp**: [+852 9882 1298](https://wa.me/85298821298)
- **服務時間**: 週一至週五 09:00 - 18:00

---

## 📄 授權

此專案採用 MIT 授權 - 查看 [LICENSE](LICENSE) 文件了解詳情

---

## 🙏 致謝

- Google Fonts - Noto Sans TC 字體
- GitHub Pages - 免費托管服務
- 所有貢獻者和支持者

---

## 📝 更新日誌

### v1.3.0 (2025-01-25) ⭐ NEW - 第二篇文章上線
- ✨ **第二篇完整專業文章上線**
  - 《易經八卦與現代空間規劃：古老智慧的現代應用》
  - 4,200+ 字深度內容（超出預期）
  - 2 張全英文專業配圖
  - 完整 SEO 優化（Meta 標籤 + 結構化數據）
  - AI 搜尋引擎友好（適合 ChatGPT, Perplexity 引用）
  - 3 個專業對照表 + 2 個實際案例
  - 5 步驟實戰指南 + 完整檢查清單
- ✅ 首頁第二篇文章可點擊
- ✅ 圖片全英文標註（國際化）

### v1.2.2 (2025-01-25) 🖼️ 圖片優化
- 🖼️ **更新部分圖片文字為英文**
  - quantum-entanglement-principle.jpg → 英文版
  - color-frequency-spectrum.jpg → 英文版
- 🖼️ **優化部分圖片添加繁體中文標註**
  - fengshui-energy-flow.jpg
  - home-improvement-case.jpg
  - mirror-placement-fengshui.jpg

### v1.2.1 (2025-01-25) 🐛 BUG FIX
- 🐛 **修復手機版文章點擊問題**
  - 添加手機觸控專用 CSS 樣式
  - 優化 JavaScript 連結生成邏輯
  - 添加 `-webkit-tap-highlight-color` 點擊反饋
  - 添加 `touch-action: manipulation` 觸控優化
  - 添加 `onclick` 事件作為備用方案
  - 現在手機版可以正常點擊文章跳轉 ✅

### v1.2.0 (2025-01-25) ⭐ NEW
- ✨ **第一篇完整專業文章上線**
  - 《量子糾纏與風水能量場的科學解讀》
  - 包含 8 張高質量 AI 生成配圖
  - 3,500+ 字深度內容
  - 完整響應式 HTML 頁面
  - 可從首頁直接點擊閱讀
- ✅ 創建 `articles/` 和 `images/` 資料夾結構
- ✅ 更新首頁文章連結功能

### v1.1.0 (2025-01-24)
- ✨ 量子太極圖標動畫
- ✅ WhatsApp 浮動聯絡按鈕（+852 9882 1298）
- ✅ 手機字體大小優化
- ✅ 外部 CSS/JS 檔案整合
- ✅ 聯絡資訊更新（mrlaifengshui@gmail.com, mrlaifengshui.com）

### v1.0.0 (2025-01-23)
- ✨ 初始版本發布
- ✅ 完整響應式設計
- ✅ 6 篇文章規劃與摘要
- ✅ GitHub Pages 部署就緒

---

**© 2025 Quantum Fengshui. All rights reserved.**

*以科學與智慧，共創豐盛人生* ✨
