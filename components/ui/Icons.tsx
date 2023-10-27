import Link from "next/link";
import React from "react";

type iconProps = {
  icon: string;
  link: string;
  size: string;
};

function Icons({ icon, link, size }: iconProps) {
  return (
    <div>
      <Link href={link}>
        <img className={`object-contain ${size}`} src={icon} alt="" />
      </Link>
    </div>
  );
}

export default Icons;
