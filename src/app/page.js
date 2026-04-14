export default function Home() {
  return (
    <main className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">My Notes</h1>
      <p className="mt-2">Welcome to my personal knowledge space.</p>

      <ul className="mt-4 space-y-2">
        <li><a className="text-blue-500" href="/notes/coding">Coding</a></li>
      </ul>
    </main>
  );
}
