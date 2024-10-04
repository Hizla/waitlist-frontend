import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="backdrop-blur-sm bg-red-white/30 z-10 relative">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <h1 className={`text-3xl font-semibold font-ibm antialiased`}>
            hizla
          </h1>
          <nav className="flex gap-2">
            <Button variant="ghost" size="sm">
              About
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
