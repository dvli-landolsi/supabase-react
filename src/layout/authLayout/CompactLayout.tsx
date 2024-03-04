import { ReactNode } from "react";

function CompactLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="bg-gray-300 p-8">{children}</div>
    </div>
  );
}

export default CompactLayout;
