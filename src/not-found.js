import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find the requested resource</p>
      <p>
        Go back to the <Link href="/">homepage</Link>
      </p>
    </div>
  );
}