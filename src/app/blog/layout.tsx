export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>Blog Header</header>
      <main>
        <section>{children}</section>
        <aside className="w-80">
          <form action="" className="space-y-3 p-4 items-end">
            <input type="search" name="" id="" placeholder="search here" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            <input type="submit" value="search" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" />
          </form>
        </aside>
      </main>
      <footer>Blog Footer</footer>
    </>
  );
}
