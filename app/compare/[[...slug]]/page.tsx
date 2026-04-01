import { notFound } from "next/navigation";

/** Legacy /compare/* URLs are not offered; return 404. */
export default function CompareLegacyNotFound() {
  notFound();
}
