import { handleCliRequest } from "../src/cli-handler";

export const onRequest: PagesFunction = async (context) => {
  const response = handleCliRequest(context.request);
  if (response) return response;

  return context.next();
};
