import Image from "next/image";
import { profile } from "../../data/portfolio";

export const Profile = () => {
  const bios = profile.bio.split("/n").map((line, index) => (
    <p key={index} className="mt-3 leading-relaxed text-gray-700">
      {line}
    </p>
  ));
  return (
    <section className="flex flex-col items-center gap-6 sm:flex-row hover:bg-violet-100 p-4 rounded-lg group">
      <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-gray-200">
        <Image
          src={profile.avatarUrl}
          alt={profile.name}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold group-hover:text-3xl group-hover:text-violet-800">
          {profile.name}
        </h2>
        <p className="mt-1 text-lg text-gray-600">{profile.role}</p>
        {bios}
      </div>
    </section>
  );
};
