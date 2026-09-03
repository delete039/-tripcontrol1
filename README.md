# 自用 旅行控制台1

2026-10-03 至 2026-10-08 的纯前端旅行网页。行程编辑、预约状态、准备清单和天气日交换都保存在浏览器 `localStorage`；也可导出 JSON 在其他设备导入。

## 本地运行

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

- `dist/`：PWA / GitHub Pages 版本，首次联网打开后可缓存核心行程与图片。
- `dist-single/index.html`：单文件离线版本，直接打开即可使用；在线地图和天气仍需要网络。

PWA 默认部署路径是 `/japan-trip-control/`。GitHub 仓库使用同名时可直接启用 Pages 的 GitHub Actions 来源；若仓库改名，需要同步修改 `vite.config.ts` 中的 `base` 与 `start_url`。

## 数据说明

- 餐厅评分核验日期：2026-08-28。评分会变化，临行前点击评分来源复核。
- 田代岛 2026 年秋季检修期特别船班尚未发布，必须在 9 月底再次核对。
- 新干线、Skyliner 与航空公司柜台信息以临行时官方时刻表为准。
- 所有图片来自 Wikimedia Commons，作者与许可可从图片来源链接查看。
