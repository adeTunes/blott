import { NewsList } from "@/components/home/news-list";
import { Logo } from "@/components/icons";

export default function Home() {
  return (
    <main className="flex flex-col sm:gap-4 min-h-screen">
      <nav className="sm:pt-6 sticky top-0 z-10 bg-background w-full flex justify-center max-sm:pt-[21px] max-sm:pb-[22px] nav-border">
        <Logo className="sm:w-[200px] w-[121px]" />
      </nav>
      <div className="flex flex-col sm:gap-4 gap-[10px]">
        <header className="sm:py-10 mx-auto w-full max-w-[1344px] px-4 pt-4">
          <h1 className="md:text-5xl uppercase text-2xl font-medium">News</h1>
        </header>
        <NewsList />
      </div>
    </main>
  );
}
