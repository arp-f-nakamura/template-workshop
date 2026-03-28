// ★ ポートフォリオの内容をここに編集してください

export const profile = {
  name: "ふうこさん",
  role: "FEエンジニア",
  bio: "FEエンジニアのふうこさんです🤗/n実装より設計周りの方が得意だったりする👀",
  avatarUrl: "/images/avatar.jpg", // public/images/ に画像を置いてパスを指定
};

export const skills = [
  { name: "JavaScript", level: "忘れかけ" },
  { name: "React", level: "実務使用中" },
  { name: "TypeScript", level: "実務使用中" },
  { name: "Next.js", level: "学習中" },
  // 追加・削除してOK
];

export const projects = [
  {
    title: "嘘つき論理パズル",
    description: "論理パズルを自動で生成するWebアプリ",
    techStack: ["React", "TypeScript"],
    url: "https://arp-f-nakamura.github.io/liar-puzzle/",
  },
  {
    title: "席替えくじ",
    description: "くじ引きで座席を決められるWebアプリ",
    techStack: ["React", "TypeScript"],
    url: "https://arp-f-nakamura.github.io/seating-chart-maker/",
  },
  {
    title: "EmoPush（共同開発）",
    description: "チームメンバーの感情を共有するWebアプリ",
    techStack: ["React", "TypeScript"],
    url: "https://emo-push.pages.dev/",
  },
  // 複数追加できます
];

export const contact = {
  github: "https://github.com/arp-f-nakamura",
  email: "f.nakamura.arp@gmail.com",
};
