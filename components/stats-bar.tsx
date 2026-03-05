import { BookOpen, Users, MapPin, Calendar } from "lucide-react";

const stats = [
  { label: "Іс-шаралар", value: "18", icon: BookOpen },
  { label: "Оқытушылар", value: "12+", icon: Users },
  { label: "Аудиториялар", value: "4", icon: MapPin },
  { label: "Күндер", value: "6", icon: Calendar },
];

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
            <stat.icon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-mono text-2xl font-bold text-foreground">
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
