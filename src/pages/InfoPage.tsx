import { Copy, ExternalLink } from "lucide-react";
import { officialSources, travelInfoSections } from "../data/trip";

export function InfoPage() {
  return (
    <div className="page info-page">
      <div className="page-heading"><div><span className="eyebrow">离线可用</span><h1>旅行资料</h1><p>地址、电话、常用日语与重要规则集中在一处。</p></div></div>
      <div className="info-layout">
        <div className="info-sections">
          {travelInfoSections.map((section) => (
            <section className="info-section" key={section.id}>
              <h2>{section.title}</h2>
              <div>{section.items.map((item) => (
                <article key={`${section.id}-${item.label}`}>
                  <span>{item.label}</span><div><strong>{item.value}</strong>{item.note && <p>{item.note}</p>}</div>
                  <button className="icon-button" onClick={() => navigator.clipboard?.writeText(item.value)} title="复制"><Copy size={16} /></button>
                  {item.url && <a className="icon-button" href={item.url} target="_blank" rel="noreferrer"><ExternalLink size={16} /></a>}
                </article>
              ))}</div>
            </section>
          ))}
        </div>
        <aside className="sources-panel"><span className="eyebrow">官方入口</span><h2>临行复核</h2><p>船班、营业时间与交通运行可能变化，优先使用以下来源。</p>{officialSources.map((source) => <a key={source.label} href={source.url} target="_blank" rel="noreferrer"><span>{source.label}</span><ExternalLink size={16} /></a>)}</aside>
      </div>
    </div>
  );
}
