'use client';
import Link from "next/link";
import { Button } from "./button";

export default function SocialLink({ href, icon }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button variant="ghost" size="icon">
        {icon}
      </Button>
    </Link>
  );
}