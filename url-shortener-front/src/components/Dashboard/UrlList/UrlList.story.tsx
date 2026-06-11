import { useState } from "react";
import { UrlResponse } from "@/src/entities";
import { UrlList } from "./UrlList";

export default {
  title: "Dashboard/UrlList",
};

const mockUrls: UrlResponse[] = [
  {
    id: 1,
    mapped_url_id: "a1b2c3",
    original_url: "https://www.example.com/products/long-page-name",
  },
  {
    id: 2,
    mapped_url_id: "x9y8z7",
    original_url: "https://www.another-example.com/blog/2026/06/article",
  },
  {
    id: 3,
    mapped_url_id: "qwe123",
    original_url: "https://docs.example.com/guides/getting-started",
  },
];

export const Usage = () => {
  const [selectedUrlId, setSelectedUrlId] = useState<number | null>(
    mockUrls[0].id,
  );

  return (
    <UrlList
      urls={mockUrls}
      isLoading={false}
      selectedUrlId={selectedUrlId}
      onSelect={setSelectedUrlId}
    />
  );
};

export const Empty = () => (
  <UrlList
    urls={[]}
    isLoading={false}
    selectedUrlId={null}
    onSelect={() => {}}
  />
);

export const Loading = () => (
  <UrlList urls={[]} isLoading selectedUrlId={null} onSelect={() => {}} />
);

export const Error = () => (
  <UrlList
    urls={[]}
    isLoading={false}
    selectedUrlId={null}
    onSelect={() => {}}
  />
);
