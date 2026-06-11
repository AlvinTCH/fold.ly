import ShortenUrlClient from "@/src/clients/shortener";
import useSWRMutation from "swr/mutation";

import type { ShortenUrlResponse, UrlShortenerRequest } from "@/src/entities";

export const useShortener = () => {
  const shortenUrlClient = new ShortenUrlClient();

  function shortenUrl({
    successCallback,
    errorCallback,
  }: {
    successCallback: (success: ShortenUrlResponse) => void;
    errorCallback: (error: Error) => void;
  }) {
    const { trigger, isMutating } = useSWRMutation(
      "shorten_url",
      async (key, { arg }: { arg: UrlShortenerRequest }) => {
        return await shortenUrlClient.shortenUrl(arg);
      },
      {
        onSuccess: successCallback,
        onError: errorCallback,
      },
    );

    return { trigger, isMutating };
  }

  return {
    shortenUrl,
  };
};
