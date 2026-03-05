import { Badge } from "@/components/ui/badge";

export interface ScheduleEvent {
  id: number;
  instructor: string;
  topic: string;
  date: string;
  time: string;
  location: string;
  participants: string;
}

const events: ScheduleEvent[] = [
  {
    id: 1,
    instructor: "Зинадин А.Д, ПЦК төрайымы, оқытушылар",
    topic: "Апталықтың ашылу рәсімі. ПЦК құрамындағы оқытушыларды таныстыру",
    date: "10.03",
    time: "11:00",
    location: "210 аудитория",
    participants: "ПЦК құрамы",
  },
  {
    id: 2,
    instructor: "Шерхан Ә.Е",
    topic: "«Заманауи білім беруде дидактикалық материалдардың рөлі» тақырыбында ашық сабақ",
    date: "10.03",
    time: "12:15",
    location: "209 аудитория",
    participants: "МТ-241г",
  },
  {
    id: 3,
    instructor: "Зинадин А.Д",
    topic: "«Адам ағзасы – жаратылыстың бір бөлігі» тақырыбында ашық сабақ",
    date: "10.03",
    time: "14:05",
    location: "209 аудитория",
    participants: "ББ-231.2г",
  },
  {
    id: 4,
    instructor: "Ким О.А",
    topic: "Открытый урок: «Психологические особенности 11-14лет, кризисы подросткового возраста»",
    date: "11.03",
    time: "09:00",
    location: "209 аудитория",
    participants: "НО-242г",
  },
  {
    id: 5,
    instructor: "Ахмедова А.А",
    topic: "«Analysing and describing phobias and frightening situations. Grammar in context. Direct speech and reported speech» ашық сабақ",
    date: "11.03",
    time: "10:35",
    location: "310 аудитория",
    participants: "ТМ-251.2г",
  },
  {
    id: 6,
    instructor: "Шерхан Ә.Е, Акатаева С.М, Мырзахметова Ж.М",
    topic: "«Ойын әлеміндегі болашақ тәрбиеші» – «Еркебұлан» балабақшасымен бірлескен тәжірибелік сабақ",
    date: "11.03",
    time: "12:00",
    location: "210 аудитория",
    participants: "МТ-241г, ДВ-242г",
  },
  {
    id: 7,
    instructor: "Елғондиева Қ.Н",
    topic: "«Зейін мен есте сақтау процесстерінің қалыптастуы (6-10 жас)» тақырыбында ашық сабақ",
    date: "11.03",
    time: "14:05",
    location: "209 аудитория",
    participants: "ББ-241г",
  },
  {
    id: 8,
    instructor: "Нурсеитова Д.Б",
    topic: "Открытый урок: «Использование ИКТ во внеклассной деятельности в начальных классах»",
    date: "12.03",
    time: "09:00",
    location: "209 аудитория",
    participants: "НО-242г",
  },
  {
    id: 9,
    instructor: "Кәрімханова Б.Қ, Ахмедова А.А, Спасова С.Н",
    topic: "American Corner Shymkent орталығымен бірлескен іс-шаралар. «Brain Battle» интеллектуалдық сайысы",
    date: "12.03",
    time: "11:00",
    location: "210 аудитория",
    participants: "Колледж студенттері",
  },
  {
    id: 10,
    instructor: "Шерхан Ә.Е, Акатаева С.М, Мырзахметова Ж.М",
    topic: "«Бақытты балалық шақ-саналы ата-ана» тақырыбында сабақтан іс-шара",
    date: "12.03",
    time: "12:30",
    location: "210 аудитория",
    participants: "МТ-241г, МТ-251г",
  },
  {
    id: 11,
    instructor: "Битанатова Н.А",
    topic: "BM Law Group юрист-консультант Альжанов О.О. кездесуі",
    date: "12.03",
    time: "14:00",
    location: "210 аудитория",
    participants: "Колледж студенттері",
  },
  {
    id: 12,
    instructor: "Емешова Г.Қ",
    topic: "«Суд над искусственным интеллектом» тақырыбында сыныптан іс-шара",
    date: "13.03",
    time: "10:30",
    location: "304 аудитория",
    participants: "П-242, П-252-1, П-252",
  },
  {
    id: 13,
    instructor: "Нурсеитова Д.Б, Зинадин А.Д",
    topic: "«Отличник» оқу орталығымен кездесу-семинар: «Путь педагога начального образования до руководителя учебного центра»",
    date: "13.03",
    time: "11:00",
    location: "210 аудитория",
    participants: "НО-242г, ББ-241г",
  },
  {
    id: 14,
    instructor: "Кәрімханова Б.Қ, Ахмедова А.А, Спасова С.Н",
    topic: "«Will AI Replace Human Translators?» атты пікірталас алаңы",
    date: "13.03",
    time: "12:00",
    location: "210 аудитория",
    participants: "Колледж студенттері",
  },
  {
    id: 15,
    instructor: "Кәрімханова Б.Қ, Ахмедова А.А, Спасова С.Н",
    topic: "«English Mastery Challenge» профориентациялық ойын",
    date: "16.03",
    time: "10:00",
    location: "210 аудитория",
    participants: "Колледж студенттері, мектеп оқушылары",
  },
  {
    id: 16,
    instructor: "Акатаева С.М, Ким О.А",
    topic: "«Өзіңе сен» атты оқытушыларға арналған психологиялық тренинг",
    date: "16.03",
    time: "11:00",
    location: "210 аудитория",
    participants: "Оқытушылар",
  },
  {
    id: 17,
    instructor: "Нурсеитова Д.Б, Зинадин А.Д",
    topic: "Бастауыш сынып мамандығы студенттерімен «Quiz» ойыны",
    date: "16.03",
    time: "12:00",
    location: "210 аудитория",
    participants: "НО-242г, НО-232г",
  },
  {
    id: 18,
    instructor: "Зинадин А.Д, ПЦК төрайымы, оқытушылар",
    topic: "Апталықтың жабылу рәсімі",
    date: "17.03",
    time: "11:00",
    location: "210 аудитория",
    participants: "ПЦК құрамы",
  },
];

function getDayLabel(date: string): string {
  const map: Record<string, string> = {
    "10.03": "Дүйсенбі",
    "11.03": "Сейсенбі",
    "12.03": "Сәрсенбі",
    "13.03": "Бейсенбі",
    "16.03": "Дүйсенбі",
    "17.03": "Сейсенбі",
  };
  return map[date] || date;
}

function getDayColor(date: string): string {
  const map: Record<string, string> = {
    "10.03": "bg-primary/20 text-primary border-primary/30",
    "11.03": "bg-chart-2/20 text-chart-2 border-chart-2/30",
    "12.03": "bg-chart-4/20 text-chart-4 border-chart-4/30",
    "13.03": "bg-chart-5/20 text-chart-5 border-chart-5/30",
    "16.03": "bg-primary/20 text-primary border-primary/30",
    "17.03": "bg-chart-2/20 text-chart-2 border-chart-2/30",
  };
  return map[date] || "bg-secondary text-secondary-foreground";
}

export function ScheduleTable() {
  const groupedEvents: Record<string, ScheduleEvent[]> = {};
  for (const event of events) {
    if (!groupedEvents[event.date]) {
      groupedEvents[event.date] = [];
    }
    groupedEvents[event.date].push(event);
  }

  const dates = Object.keys(groupedEvents);

  return (
    <div className="space-y-6">
      {dates.map((date) => (
        <div key={date} className="overflow-hidden rounded-xl border border-border bg-card">
          {/* Day header */}
          <div className="flex items-center gap-3 border-b border-border bg-secondary/50 px-6 py-3">
            <Badge
              variant="outline"
              className={`rounded-md px-3 py-1 text-xs font-semibold ${getDayColor(date)}`}
            >
              {getDayLabel(date)}
            </Badge>
            <span className="font-mono text-sm text-muted-foreground">
              {date}.2026
            </span>
          </div>

          {/* Events */}
          <div className="divide-y divide-border">
            {groupedEvents[date].map((event, idx) => (
              <div
                key={event.id}
                className={`grid grid-cols-1 gap-4 px-6 py-4 transition-colors hover:bg-secondary/30 md:grid-cols-[80px_1fr_180px_140px] md:items-start ${
                  idx % 2 === 0 ? "bg-card" : "bg-muted/20"
                }`}
              >
                {/* Time */}
                <div className="flex items-center gap-2 md:block">
                  <span className="font-mono text-lg font-bold text-foreground">
                    {event.time}
                  </span>
                </div>

                {/* Topic & instructor */}
                <div className="space-y-1.5">
                  <p className="text-sm leading-relaxed text-foreground">
                    {event.topic}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {event.instructor}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-start">
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-3 w-3 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.291 5.597a15.591 15.591 0 0 0 2.236 2.235l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {event.location}
                  </span>
                </div>

                {/* Participants */}
                <div className="flex items-start">
                  <span className="text-xs text-muted-foreground">
                    {event.participants}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
