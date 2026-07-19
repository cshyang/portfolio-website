import Reveal from "./Reveal";

/** Drawn top rule + CAPS display title + Caveat orange margin note. */
export default function SectionHead({
  id,
  title,
  note,
  small,
}: {
  id: string;
  title: string;
  note: string;
  small?: boolean;
}) {
  return (
    <Reveal className="sk-head">
      <span aria-hidden="true" className="sk-head-rule" />
      <div className="sk-head-row">
        <h2 id={id} className={`sk-head-title${small ? " sk-head-title--sm" : ""}`}>
          {title}
        </h2>
        <span className="sk-head-note">{note}</span>
      </div>
    </Reveal>
  );
}
