import Hero from "@/components/Home";
import Project from "@/components/Project";
import Team from "@/components/Team";
import ContactForm from "@/components/Contact";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Team />
      <Project />
      <ContactForm />
    </main>
  );
}
