export default function PageSections({ page }) {
  return page.sections.map((section) => (
    <div className="card-shell p-6" key={section.heading}>
      <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{section.heading}</h2>
      <p className="mt-3 text-slate-300">{section.body}</p>
      <ul className="mt-4 list-disc space-y-1.5 pl-4 text-slate-300">
        {section.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  ));
}
