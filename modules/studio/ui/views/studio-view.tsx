"use client";

import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";

const StudioView = () => {
  const data = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: DEFAULT_LIMIT,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
  return (
    <div>
      <div className="flex flex-col gap-y-6 pt-2.5">
        <div className="px-4">
          <h1 className="text-2xl font-bold">Channel content</h1>
          <p className="text-xs text-muted-foreground">
            Manage your channel content and videos
          </p>
        </div>
        {JSON.stringify(data)}
      </div>
    </div>
  );
};
export default StudioView;
