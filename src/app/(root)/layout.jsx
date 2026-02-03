import { onBoardUser } from "@/modules/auth/actions";
import React from "react";

const layout = async ({ children }) => {
  await onBoardUser();

  return (
    <main className="flex flex-col main-h-screen relative overflow-x-hidden">
      {/* {navbar} */}
      <div className="fixed inset-0 -z-10 h-full w-full bg-background dark:bg-[radial-gradient(#393e4a_1px,transparent_1px)] bg-[radial-gradient(#dadde2_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="flex-1 w-full mt-20">{children}</div>
    </main>
  );
};

export default layout;
