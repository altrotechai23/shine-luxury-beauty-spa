export function getStoragePathFromUrl(url: string) {
  try {
    const parsed = new URL(url);

    const marker = "/object/public/";

    const index = parsed.pathname.indexOf(marker);

    if (index === -1) return null;

    return parsed.pathname.substring(
      index + marker.length
    );
  } catch {
    return null;
  }
}