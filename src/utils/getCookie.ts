export default function getCookie(name: string) {
  const matches = document.cookie.match(new RegExp(
    /* eslint-disable */
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    /* eslint-enable */
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
