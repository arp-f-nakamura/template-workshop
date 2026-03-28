import { contact } from "../../data/portfolio";

export const Contact = () => {
  return (
    <section className="hover:bg-violet-100 p-4 rounded-lg group">
      <h2 className="mb-6 text-2xl font-bold group-hover:text-3xl group-hover:text-violet-800">
        Contact
      </h2>
      <ul className="space-y-2 text-gray-700">
        {contact.github && (
          <li>
            <span className="font-medium">GitHub: </span>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              {contact.github}
            </a>
          </li>
        )}
        {contact.email && (
          <li>
            <span className="font-medium">Email: </span>
            <a
              href={`mailto:${contact.email}`}
              className="text-blue-600 underline hover:text-blue-800"
            >
              {contact.email}
            </a>
          </li>
        )}
      </ul>
    </section>
  );
};
