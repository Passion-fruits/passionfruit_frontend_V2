import { useRouter } from "next/router";

export default function Linked({ href, content }) {
  const router = useRouter();
  return <span onClick={() => router.push(href)}>{content}</span>;
}
