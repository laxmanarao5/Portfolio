import clsx from 'clsx';

export function Badge({ className, ...props }) {
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors',
        'bg-secondary text-secondary-foreground',
        className
      )}
      {...props}
    />
  );
}