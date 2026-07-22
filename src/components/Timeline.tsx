import { ReactNode } from 'react';
import './Timeline.css';

export interface TimelineItem {
  status?: string;
  statusTone?: 'completed' | 'ongoing' | 'planned';
  date: string;
  title: string;
  subtitle?: string;
  bullets?: string[];
  tags?: string[];
  extra?: ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="timeline">
      <div className="timeline-track" aria-hidden="true" />
      {items.map((item, i) => (
        <article className="timeline-entry reveal" style={{ transitionDelay: `${i * 0.08}s` }} key={i}>
          <span className="timeline-dot" aria-hidden="true" />
          <div className="timeline-card">
            <div className="timeline-card-top">
              {item.status && (
                <span className={`timeline-pill tone-${item.statusTone ?? 'completed'}`}>
                  {item.status}
                </span>
              )}
              <span className="timeline-date">{item.date}</span>
            </div>
            <h3 className="timeline-title">{item.title}</h3>
            {item.subtitle && <p className="timeline-subtitle">{item.subtitle}</p>}
            {item.bullets && item.bullets.length > 0 && (
              <ul className="timeline-bullets">
                {item.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            )}
            {item.extra}
            {item.tags && item.tags.length > 0 && (
              <div className="timeline-tags">
                {item.tags.map((t) => (
                  <span key={t} className="timeline-tag">{t}</span>
                ))}
              </div>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default Timeline;
