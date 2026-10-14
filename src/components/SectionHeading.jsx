import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, description, align = 'left', icon: Icon }) {
  const centered = align === 'center';

  return (
    <Reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="eyebrow">
          {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
          {eyebrow}
        </p>
      )}
      <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">{description}</p>}
      <div className={`mt-7 h-px w-24 bg-gradient-to-r from-sf-400 to-transparent ${centered ? 'mx-auto' : ''}`} />
    </Reveal>
  );
}
