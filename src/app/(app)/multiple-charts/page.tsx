"use client"
import dynamic from "next/dynamic";

const MultiChart = dynamic(() => import("@/components/MultiChart"), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <MultiChart />
    </>
  );
}
