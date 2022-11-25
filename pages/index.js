import Link from "next/link";

export default function Home() {
  return (
    <div>
      home page
      <Link href="/users" passHref>
        <p>Users</p>
      </Link>
      <Link href="/posts" passHref>
        <p>Posts</p>
      </Link>
      <Link href="/news" passHref>
        <p>News</p>
      </Link>
      <Link href="/news/sports" passHref>
        <p>Sports News</p>
      </Link>
      <Link href="/news/politics" passHref>
        <p>Politics News</p>
      </Link>
      <Link href="/dashboard" passHref>
        <p>Dashboard with fetch api</p>
      </Link>
      <Link href="/dashboard-swr" passHref>
        <p>Dashboard with SWR that is React Hooks for Data Fetching</p>
      </Link>
      <Link href="/events" passHref>
        <p>Event list : pre rendering with client side data fetching</p>
      </Link>
    </div>
  );
}
