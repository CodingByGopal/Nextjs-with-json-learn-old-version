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
    </div>
  );
}
