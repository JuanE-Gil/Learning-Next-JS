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
        <aside>
          <form action="">
            <input type="search" name="" id="" placeholder="search here" />
            <input type="submit" value="search" />
          </form>
        </aside>
      </main>
      <footer>Blog Footer</footer>
    </>
  );
}
