const url_regex = /^(ftp|http|https):\/\/[^ "]+$/;

interface Options {
  regex?: RegExp;
}

export function isValidUrl(url: string, options?: Options): boolean {
  if (!url) {
    return false;
  } else {
    if (options && options.regex) {
      return options.regex.test(url);
    } else {
      return url_regex.test(url);
    }
  }
}
