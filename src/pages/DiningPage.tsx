import { ExternalLink, MapPin, Utensils } from "lucide-react";
import { useMemo, useState } from "react";
import { Photo } from "../components/Photo";
import { diningOptions } from "../data/trip";

const filters = ["全部", "10/3", "10/4", "10/5", "10/6", "10/7", "10/8"];

export function DiningPage() {
  const [filter, setFilter] = useState("全部");
  const visible = useMemo(() => filter === "全部" ? diningOptions : diningOptions.filter((item) => item.date === filter), [filter]);

  return (
    <div className="page dining-page">
      <div className="page-heading">
        <div><span className="eyebrow">主选与候补</span><h1>餐饮对比</h1><p>遵循偏好：喜欢烧肉与炸物，减少生食，不安排沾面。</p></div>
        <div className="preference-summary"><Utensils size={20} /><span>无正式早餐<br /><strong>便利店解决</strong></span></div>
      </div>
      <div className="segmented-control" role="tablist">
        {filters.map((value) => <button key={value} className={filter === value ? "active" : ""} onClick={() => setFilter(value)}>{value}</button>)}
      </div>
      <div className="dining-grid">
        {visible.map((item) => (
          <article className="dining-card" key={item.id}>
            <Photo imageKey={item.imageKey} />
            <div className="dining-card-body">
              <div className="card-kicker"><span>{item.date} · {item.meal}</span><span className={`role role-${item.role}`}>{item.role}</span></div>
              <h2>{item.name}</h2><small>{item.japanese}</small>
              <div className="dining-facts"><strong>{item.category}</strong><span>{item.price}</span></div>
              <p>{item.summary}</p>
              <div className="order-list">{item.orders.map((order) => <span key={order}>{order}</span>)}</div>
              {item.caution && <p className="caution">{item.caution}</p>}
              <footer>
                <div className="rating-list"><MapPin size={15} />{item.ratings.map((rating) => rating.url
                  ? <a key={rating.provider} href={rating.url} target="_blank" rel="noreferrer">{rating.provider} {rating.score}</a>
                  : <span key={rating.provider}>{rating.provider} {rating.score}</span>)}</div>
                <a href={item.url} target="_blank" rel="noreferrer" title="打开官方页面"><ExternalLink size={17} /></a>
              </footer>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
