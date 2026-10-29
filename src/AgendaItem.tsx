type AgendaItemProps = {
  time: string;
  title: string;
  description: string;
};

export function AgendaItem({ time, title, description }: AgendaItemProps) {
  return (
    <li className="relative pb-8 pl-6 last:pb-0">
      <span
        aria-hidden="true"
        className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-green-700"
      />

      <p className="text-sm font-semibold text-green-700">
        {time}
      </p>

      <h3 className="mt-1 text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-1 text-gray-600">
        {description}
      </p>
    </li>
  );
}