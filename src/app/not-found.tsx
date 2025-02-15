export default function NotFound() {
  return (
    <div className="container flex h-[calc(100vh-200px)] max-w-3xl flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-xl text-muted-foreground">
        The page you are looking for does not exist.
      </p>
    </div>
  );
} 