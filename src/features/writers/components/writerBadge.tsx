import { FC } from "react";
import Link from "next/link";

import { Writer } from "@/features/writers/types";
import { cn } from "@/lib/utils";

const WriterBadge: FC<{ writer: Writer }> = ({ writer }) => {
  return (
    <Link href={"/users/" + writer.id}>
      <p className={cn("px-2", "py-1", "text-sm", "text-gray-600")}>
        {writer.name}
      </p>
    </Link>
  );
};

export { WriterBadge };
